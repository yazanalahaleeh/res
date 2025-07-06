// Cart Module
const CartModule = (function() {
    // Private variables
    let cartItems = [];
    let cartVisible = false;
    
    // DOM Elements
    let cartBar;
    let cartCount;
    let cartTotal;
    let viewOrderBtn;
    
    // Initialize cart
    function init() {
        cartBar = document.getElementById('cartBar');
        cartCount = document.getElementById('cartCount');
        cartTotal = document.getElementById('cartTotal');
        viewOrderBtn = document.getElementById('viewOrderBtn');
        
        // Load cart from localStorage if available
        loadCart();
        
        // Update cart UI
        updateCartUI();
        
        // Add event listener to view order button
        viewOrderBtn.addEventListener('click', function() {
            OrderModule.openOrderModal();
        });
    }
    
    // Add item to cart
    function addItem(item) {
        cartItems.push(item);
        
        // Save cart to localStorage
        saveCart();
        
        // Update cart UI
        updateCartUI();
        
        // Show cart bar if not visible
        if (!cartVisible) {
            showCartBar();
        }
    }
    
    // Remove item from cart
    function removeItem(itemId) {
        cartItems = cartItems.filter(item => item.id !== itemId);
        
        // Save cart to localStorage
        saveCart();
        
        // Update cart UI
        updateCartUI();
        
        // Hide cart bar if empty
        if (cartItems.length === 0) {
            hideCartBar();
        }
        
        return cartItems.length;
    }
    
    // Update item quantity
    function updateItemQuantity(itemId, quantity) {
        const item = cartItems.find(item => item.id === itemId);
        
        if (item) {
            item.quantity = quantity;
            item.totalPrice = (item.size.price + item.extras.reduce((sum, extra) => sum + extra.price, 0)) * quantity;
            
            // Save cart to localStorage
            saveCart();
            
            // Update cart UI
            updateCartUI();
        }
    }
    
    // Get all cart items
    function getItems() {
        return [...cartItems];
    }
    
    // Get cart total price
    function getTotalPrice() {
        return cartItems.reduce((total, item) => total + item.totalPrice, 0);
    }
    
    // Get cart item count
    function getItemCount() {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    }
    
    // Clear cart
    function clearCart() {
        cartItems = [];
        
        // Save cart to localStorage
        saveCart();
        
        // Update cart UI
        updateCartUI();
        
        // Hide cart bar
        hideCartBar();
    }
    
    // Update cart UI
    function updateCartUI() {
        const itemCount = getItemCount();
        const totalPrice = getTotalPrice();
        
        cartCount.textContent = itemCount;
        cartTotal.textContent = `المجموع: ${utils.formatPrice(totalPrice)}`;
        
        // Show/hide cart bar based on item count
        if (itemCount > 0) {
            showCartBar();
        } else {
            hideCartBar();
        }
    }
    
    // Show cart bar
    function showCartBar() {
        cartBar.classList.add('active');
        cartVisible = true;
    }
    
    // Hide cart bar
    function hideCartBar() {
        cartBar.classList.remove('active');
        cartVisible = false;
    }
    
    // Save cart to localStorage
    function saveCart() {
        utils.saveToLocalStorage('cart', cartItems);
    }
    
    // Load cart from localStorage
    function loadCart() {
        const savedCart = utils.loadFromLocalStorage('cart', []);
        
        if (savedCart && savedCart.length > 0) {
            cartItems = savedCart;
        }
    }
    
    // Public API
    return {
        init,
        addItem,
        removeItem,
        updateItemQuantity,
        getItems,
        getTotalPrice,
        getItemCount,
        clearCart
    };
})();

// Export CartModule to global scope
window.CartModule = CartModule;
