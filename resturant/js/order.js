// Order Module
const OrderModule = (function() {
    // Private variables
    let selectedOrderType = null;
    let customerInfo = {};
    
    // DOM Elements
    let orderModal;
    let orderItems;
    let orderTotalPrice;
    let orderTypes;
    let customerInfoSection;
    let sendOrderBtn;
    
    // Initialize order
    function init() {
        orderModal = document.getElementById('orderModal');
        orderItems = document.getElementById('orderItems');
        orderTotalPrice = document.getElementById('orderTotalPrice');
        orderTypes = document.querySelectorAll('.order-type');
        customerInfoSection = document.getElementById('customerInfoSection');
        sendOrderBtn = document.getElementById('sendOrderBtn');
        
        // Add event listeners to order types
        orderTypes.forEach(type => {
            type.addEventListener('click', function() {
                selectOrderType(this.dataset.type);
            });
        });
        
        // Add event listener to send order button
        sendOrderBtn.addEventListener('click', sendOrder);
    }
    
    // Open order modal
    function openOrderModal() {
        // Reset order type selection
        resetOrderTypeSelection();
        
        // Render order items
        renderOrderItems();
        
        // Update total price
        updateTotalPrice();
        
        // Show modal
        utils.showModal(orderModal);
    }
    
    // Render order items
    function renderOrderItems() {
        // Clear order items
        orderItems.innerHTML = '';
        
        // Get cart items
        const cartItems = CartModule.getItems();
        
        if (cartItems.length === 0) {
            orderItems.innerHTML = '<p class="text-center">لا توجد منتجات في السلة</p>';
            return;
        }
        
        // Render each item
        cartItems.forEach(item => {
            const orderItem = createOrderItem(item);
            orderItems.appendChild(orderItem);
        });
    }
    
    // Create order item element
    function createOrderItem(item) {
        const orderItem = utils.createElement('div', {
            className: 'order-item',
            dataset: { itemId: item.id }
        });
        
        const orderItemDetails = utils.createElement('div', {
            className: 'order-item-details'
        });
        
        const orderItemName = utils.createElement('div', {
            className: 'order-item-name'
        }, `${item.name} (${item.quantity})`);
        
        // Create options text
        let optionsText = `الحجم: ${item.size.name}`;
        
        if (item.extras.length > 0) {
            optionsText += ` | إضافات: ${item.extras.map(extra => extra.name).join(', ')}`;
        }
        
        const orderItemOptions = utils.createElement('div', {
            className: 'order-item-options'
        }, optionsText);
        
        const orderItemPrice = utils.createElement('div', {
            className: 'order-item-price'
        }, utils.formatPrice(item.totalPrice));
        
        // Append elements to order item details
        orderItemDetails.appendChild(orderItemName);
        orderItemDetails.appendChild(orderItemOptions);
        orderItemDetails.appendChild(orderItemPrice);
        
        const orderItemActions = utils.createElement('div', {
            className: 'order-item-actions'
        });
        
        const editItemBtn = utils.createElement('button', {
            className: 'edit-item-btn',
            onClick: function() {
                editItem(item);
            }
        }, [
            utils.createElement('i', { className: 'fas fa-edit' })
        ]);
        
        const removeItemBtn = utils.createElement('button', {
            className: 'remove-item-btn',
            onClick: function() {
                removeItem(item.id);
            }
        }, [
            utils.createElement('i', { className: 'fas fa-trash' })
        ]);
        
        // Append buttons to order item actions
        orderItemActions.appendChild(editItemBtn);
        orderItemActions.appendChild(removeItemBtn);
        
        // Append elements to order item
        orderItem.appendChild(orderItemDetails);
        orderItem.appendChild(orderItemActions);
        
        return orderItem;
    }
    
    // Edit item
    function editItem(item) {
        // Get product from menu
        const product = MenuModule.getProductById(item.productId);
        
        if (!product) {
            console.error('Product not found:', item.productId);
            return;
        }
        
        // Get modal elements
        const productModal = document.getElementById('productModal');
        const productModalTitle = document.getElementById('productModalTitle');
        const productModalImage = document.getElementById('productModalImage');
        const productModalDescription = document.getElementById('productModalDescription');
        const sizeOptions = document.getElementById('sizeOptions');
        const extrasOptions = document.getElementById('extrasOptions');
        const quantityInput = document.getElementById('quantityInput');
        const totalPrice = document.getElementById('totalPrice');
        const addToCartBtn = document.getElementById('addToCartBtn');
        
        // Set product details
        productModalTitle.textContent = product.name;
        productModalImage.src = product.image;
        productModalImage.alt = product.name;
        productModalDescription.textContent = product.description;
        
        // Set quantity
        quantityInput.value = item.quantity;
        
        // Clear size options
        sizeOptions.innerHTML = '';
        
        // Add size options
        product.sizes.forEach(size => {
            const isSelected = size.name === item.size.name;
            
            const sizeOption = utils.createElement('div', {
                className: isSelected ? 'size-option selected' : 'size-option',
                dataset: { size: size.name, price: size.price },
                onClick: function() {
                    // Remove selected class from all size options
                    sizeOptions.querySelectorAll('.size-option').forEach(option => {
                        option.classList.remove('selected');
                    });
                    
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    
                    // Update total price
                    updateProductTotalPrice();
                }
            }, [
                utils.createElement('div', { className: 'size-name' }, size.name),
                utils.createElement('div', { className: 'size-price' }, utils.formatPrice(size.price))
            ]);
            
            sizeOptions.appendChild(sizeOption);
        });
        
        // Clear extras options
        extrasOptions.innerHTML = '';
        
        // Add extras options
        product.extras.forEach(extra => {
            const isChecked = item.extras.some(itemExtra => itemExtra.name === extra.name);
            
            const extraOption = utils.createElement('div', {
                className: 'extra-option'
            }, [
                utils.createElement('input', {
                    type: 'checkbox',
                    className: 'extra-checkbox',
                    dataset: { extra: extra.name, price: extra.price },
                    checked: isChecked,
                    onChange: updateProductTotalPrice
                }),
                utils.createElement('span', { className: 'extra-name' }, extra.name),
                utils.createElement('span', { className: 'extra-price' }, `+${utils.formatPrice(extra.price)}`)
            ]);
            
            extrasOptions.appendChild(extraOption);
        });
        
        // Update total price initially
        updateProductTotalPrice();
        
        // Change button text to "Update"
        addToCartBtn.innerHTML = '<i class="fas fa-check"></i> تحديث';
        
        // Set up update button
        addToCartBtn.onclick = function() {
            // Remove old item
            CartModule.removeItem(item.id);
            
            // Add updated item
            addToCart(product);
            
            // Hide product modal
            utils.hideModal(productModal);
            
            // Update order modal
            renderOrderItems();
            updateTotalPrice();
        };
        
        // Hide order modal
        utils.hideModal(orderModal);
        
        // Show product modal
        utils.showModal(productModal);
        
        // Function to update product total price
        function updateProductTotalPrice() {
            const selectedSize = sizeOptions.querySelector('.selected');
            const sizePrice = selectedSize ? parseFloat(selectedSize.dataset.price) : product.basePrice;
            
            const quantity = parseInt(quantityInput.value) || 1;
            
            let extrasPrice = 0;
            extrasOptions.querySelectorAll('.extra-checkbox:checked').forEach(checkbox => {
                extrasPrice += parseFloat(checkbox.dataset.price);
            });
            
            const total = (sizePrice + extrasPrice) * quantity;
            totalPrice.textContent = `السعر: ${utils.formatPrice(total)}`;
        }
        
        // Function to add updated product to cart
        function addToCart(product) {
            const selectedSize = sizeOptions.querySelector('.selected');
            const sizeName = selectedSize.dataset.size;
            const sizePrice = parseFloat(selectedSize.dataset.price);
            
            const quantity = parseInt(quantityInput.value) || 1;
            
            const selectedExtras = [];
            extrasOptions.querySelectorAll('.extra-checkbox:checked').forEach(checkbox => {
                selectedExtras.push({
                    name: checkbox.dataset.extra,
                    price: parseFloat(checkbox.dataset.price)
                });
            });
            
            const cartItem = {
                id: utils.generateId(),
                productId: product.id,
                name: product.name,
                image: product.image,
                size: {
                    name: sizeName,
                    price: sizePrice
                },
                extras: selectedExtras,
                quantity: quantity
            };
            
            // Calculate item total price
            cartItem.totalPrice = (sizePrice + selectedExtras.reduce((sum, extra) => sum + extra.price, 0)) * quantity;
            
            // Add to cart using Cart Module
            CartModule.addItem(cartItem);
        }
    }
    
    // Remove item
    function removeItem(itemId) {
        // Remove item from cart
        const remainingItems = CartModule.removeItem(itemId);
        
        // Remove item from order items
        const orderItem = orderItems.querySelector(`[data-item-id="${itemId}"]`);
        if (orderItem) {
            orderItem.remove();
        }
        
        // Update total price
        updateTotalPrice();
        
        // If no items left, close modal
        if (remainingItems === 0) {
            utils.hideModal(orderModal);
        }
    }
    
    // Update total price
    function updateTotalPrice() {
        const totalPrice = CartModule.getTotalPrice();
        orderTotalPrice.textContent = utils.formatPrice(totalPrice);
    }
    
    // Reset order type selection
    function resetOrderTypeSelection() {
        selectedOrderType = null;
        
        // Remove selected class from all order types
        orderTypes.forEach(type => {
            type.classList.remove('selected');
        });
        
        // Clear customer info section
        customerInfoSection.innerHTML = '';
        
        // Disable send order button
        sendOrderBtn.disabled = true;
    }
    
    // Select order type
    function selectOrderType(type) {
        selectedOrderType = type;
        
        // Update UI
        orderTypes.forEach(typeEl => {
            if (typeEl.dataset.type === type) {
                typeEl.classList.add('selected');
            } else {
                typeEl.classList.remove('selected');
            }
        });
        
        // Render customer info fields based on order type
        renderCustomerInfoFields(type);
    }
    
    // Render customer info fields based on order type
    function renderCustomerInfoFields(type) {
        // Clear customer info section
        customerInfoSection.innerHTML = '';
        
        // Create fields based on order type
        let fields = [];
        
        switch (type) {
            case 'table':
                fields = [
                    { id: 'name', label: 'الاسم', type: 'text', required: true },
                    { id: 'notes', label: 'ملاحظات', type: 'textarea', required: false }
                ];
                break;
                
            case 'pickup':
                fields = [
                    { id: 'name', label: 'الاسم', type: 'text', required: true },
                    { id: 'phone', label: 'رقم الهاتف', type: 'tel', required: true }
                ];
                break;
                
            case 'delivery':
                fields = [
                    { id: 'name', label: 'الاسم', type: 'text', required: true },
                    { id: 'phone', label: 'رقم الهاتف', type: 'tel', required: true },
                    { id: 'address', label: 'العنوان', type: 'textarea', required: true }
                ];
                break;
        }
        
        // Create form
        const form = utils.createElement('form', {
            id: 'customerInfoForm',
            onSubmit: function(e) {
                e.preventDefault();
            }
        });
        
        // Add fields to form
        fields.forEach(field => {
            const formGroup = utils.createElement('div', {
                className: 'form-group'
            });
            
            const label = utils.createElement('label', {
                className: 'form-label',
                for: field.id
            }, field.label + (field.required ? ' *' : ''));
            
            let input;
            
            if (field.type === 'textarea') {
                input = utils.createElement('textarea', {
                    className: 'form-input',
                    id: field.id,
                    name: field.id,
                    required: field.required,
                    rows: 3,
                    onInput: validateForm
                });
            } else {
                input = utils.createElement('input', {
                    className: 'form-input',
                    type: field.type,
                    id: field.id,
                    name: field.id,
                    required: field.required,
                    onInput: validateForm
                });
            }
            
            formGroup.appendChild(label);
            formGroup.appendChild(input);
            form.appendChild(formGroup);
        });
        
        // Add form to customer info section
        customerInfoSection.appendChild(form);
        
        // Validate form initially
        validateForm();
    }
    
    // Validate form and enable/disable send order button
    function validateForm() {
        const form = document.getElementById('customerInfoForm');
        
        if (!form) return;
        
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
            }
        });
        
        // Enable/disable send order button
        sendOrderBtn.disabled = !isValid;
    }
    
    // Send order
    function sendOrder() {
        // Get customer info
        const form = document.getElementById('customerInfoForm');
        const formData = new FormData(form);
        
        customerInfo = {};
        for (const [key, value] of formData.entries()) {
            customerInfo[key] = value;
        }
        
        // Get cart items
        const cartItems = CartModule.getItems();
        
        // Generate order message
        const orderMessage = generateOrderMessage(cartItems, customerInfo);
        
        // Get restaurant info
        const restaurantInfo = MenuModule.getRestaurantInfo();
        
        // Create WhatsApp URL
        const whatsappUrl = utils.createWhatsAppUrl(restaurantInfo.phone, orderMessage);
        
        // Open WhatsApp URL
        window.open(whatsappUrl, '_blank');
        
        // Clear cart
        CartModule.clearCart();
        
        // Hide order modal
        utils.hideModal(orderModal);
    }
    
    // Generate order message
    function generateOrderMessage(items, customerInfo) {
        // Generate order number
        const orderNumber = utils.generateOrderNumber();
        
        // Get order type text
        let orderTypeText = '';
        switch (selectedOrderType) {
            case 'table':
                orderTypeText = 'طاولة';
                break;
            case 'pickup':
                orderTypeText = 'استلام';
                break;
            case 'delivery':
                orderTypeText = 'توصيل';
                break;
        }
        
        // Build message
        let message = `*طلب جديد* ${orderNumber}\n`;
        message += `*التاريخ:* ${utils.formatDateTime()}\n\n`;
        
        // Add items
        message += `*الطلبات:*\n`;
        items.forEach((item, index) => {
            message += `${index + 1}. ${item.name} (${item.size.name}) - ${item.quantity} قطعة\n`;
            
            if (item.extras.length > 0) {
                message += `   إضافات: ${item.extras.map(extra => extra.name).join(', ')}\n`;
            }
            
            message += `   السعر: ${utils.formatPrice(item.totalPrice)}\n`;
        });
        
        // Add total price
        message += `\n*المجموع:* ${utils.formatPrice(CartModule.getTotalPrice())}\n\n`;
        
        // Add order type and customer info
        message += `*نوع الطلب:* ${orderTypeText}\n`;
        message += `*بيانات العميل:*\n`;
        
        for (const [key, value] of Object.entries(customerInfo)) {
            let fieldName = '';
            
            switch (key) {
                case 'name':
                    fieldName = 'الاسم';
                    break;
                case 'phone':
                    fieldName = 'رقم الهاتف';
                    break;
                case 'address':
                    fieldName = 'العنوان';
                    break;
                case 'notes':
                    fieldName = 'ملاحظات';
                    break;
            }
            
            message += `*${fieldName}:* ${value}\n`;
        }
        
        return message;
    }
    
    // Public API
    return {
        init,
        openOrderModal
    };
})();

// Export OrderModule to global scope
window.OrderModule = OrderModule;
