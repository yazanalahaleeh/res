// Menu Data
const menuData = {
    categories: [
        { id: 'pizza', name: 'بيتزا' },
        { id: 'salads', name: 'سلطات' },
        { id: 'sandwiches', name: 'ساندويتشات' },
        { id: 'main', name: 'مقبلات' },
        { id: 'drinks', name: 'مشروبات' }
    ],
    products: [
                {
            id: 'pizza0',
            name: 'بيتزا هيفين',
            category: 'pizza',
            basePrice: 30,
            description: ' بيتزا مع صلصة الطماطم وجبنة الموزاريلا الطازجة والخضراوات وشرائح السلامي المقطعه',
            ingredients: 'عجينة طازجة، صلصة طماطم، جبنة موزاريلا , زيتون اخضر , زيتون اسود , درة , فطر , فلفل حلو , شرائح سلامي مدخن ',
            allergens: 'القمح، منتجات الألبان',
            image: 'images/products/salame.jpg',
            sizes: [
                { name: 'صغير', price: 30 },
                { name: 'وسط', price: 40 },
                { name: 'كبير', price: 50 }
            ],
            extras: [
                { name: 'جبنة إضافية', price: 10 },
            ]
        },
        {
            id: 'pizza1',
            name: 'بيتزا مارجريتا',
            category: 'pizza',
            basePrice: 30,
            description: 'بيتزا كلاسيكية مع صلصة الطماطم وجبنة الموزاريلا الطازجة',
            ingredients: 'عجينة طازجة، صلصة طماطم، جبنة موزاريلا ',
            allergens: 'القمح، منتجات الألبان',
            image: 'images/products/margherita.jpg',
            sizes: [
                { name: 'صغير', price: 30 },
                { name: 'وسط', price: 40 },
                { name: 'كبير', price: 50 }
            ],
            extras: [
                { name: 'جبنة إضافية', price: 10 },
            ]
        },
        {
            id: 'pizza2',
            name: 'بيتزا خضروات مشكلة',
            category: 'pizza',
            basePrice: 30,
            description: 'بيتزا نباتية مع تشكيلة من الخضروات الطازجة والجبنة',
            ingredients: 'عجينة طازجة، صلصة طماطم، جبنة موزاريلا , زيتون اخضر , زيتون اسود , درة , فطر , فلفل حلو ',
            allergens: 'القمح، منتجات الألبان',
            image: 'images/products/veggie-pizza.jpg',
            sizes: [
                { name: 'صغير', price: 30 },
                { name: 'وسط', price: 40 },
                { name: 'كبير', price: 50 }
            ],
            extras: [
                { name: 'جبنة إضافية', price: 10 },
                { name: 'أفوكادو', price: 12 },
                { name: 'هليون', price: 10 },
                { name: 'باذنجان مشوي', price: 8 }
            ]
        },
          {
    id: 'pizza3',
    name: 'بيتزا ستيك اللحم',
    category: 'pizza',
    basePrice: 40,
    description: 'بيتزا غنية بقطع ستيك اللحم المتبلة مع الخضار والجبنة المذابة',
    ingredients: 'عجينة طازجة، صلصة طماطم، جبنة موزاريلا، شرائح ستيك لحم، فلفل، بصل، مشروم',
    allergens: 'القمح، منتجات الألبان، اللحم الأحمر',
    image: 'images/products/beef-steak.jpg',
    sizes: [
        { name: 'صغير', price: 40 },
        { name: 'وسط', price: 50 },
        { name: 'كبير', price: 60 }
    ],
    extras: [
        { name: 'جبنة إضافية', price: 10 },
    ]
},
{
    id: 'pizza4',
    name: 'بيتزا اللحمة المفرومة',
    category: 'pizza',
    basePrice: 40,
    description: 'بيتزا باللحم المفروم المتبل مع صلصة الطماطم والجبنة',
    ingredients: 'عجينة طازجة، صلصة طماطم، جبنة موزاريلا، لحم مفروم',
    allergens: 'القمح، منتجات الألبان، اللحم الأحمر',
    image: 'images/products/ground-beef.jpg',
    sizes: [
        { name: 'صغير', price: 40 },
        { name: 'وسط', price: 50 },
        { name: 'كبير', price: 60 }
    ],
    extras: [
        { name: 'جبنة إضافية', price: 10 }
    ]
},
{
    id: 'pizza5',
    name: 'بيتزا تونة',
    category: 'pizza',
    basePrice: 40,
    description: 'بيتزا بحرية مع التونة والجبنة',
    ingredients: 'عجينة طازجة، صلصة طماطم، جبنة موزاريلا، تونة ',
    allergens: 'القمح، منتجات الألبان، السمك',
    image: 'images/products/tuna.jpg',
    sizes: [
        { name: 'صغير', price: 40 },
        { name: 'وسط', price: 50 },
        { name: 'كبير', price: 60 }
    ],
    extras: [
        { name: 'جبنة إضافية', price: 10 },
    ]
},
{
    id: 'pizza6',
    name: 'بيتزا دجاج',
    category: 'pizza',
    basePrice: 40,
    description: 'بيتزا لذيذة بقطع الدجاج المشوي مع الجبنة ',
    ingredients: 'عجينة طازجة، صلصة طماطم، جبنة موزاريلا، دجاج مشوي',
    allergens: 'القمح، منتجات الألبان، الدجاج',
    image: 'images/products/chicken.jpg',
    sizes: [
        { name: 'صغير', price: 40 },
        { name: 'وسط', price: 50 },
        { name: 'كبير', price: 60 }
    ],
    extras: [
        { name: 'جبنة إضافية', price: 10 },
    ]
},
{
    id: 'pizza7',
    name: 'بيتزا دجاج بالباربكيو',
    category: 'pizza',
    basePrice: 40,
    description: 'بيتزا شهية بقطع دجاج وصوص باربكيو مع جبنة موزاريلا',
    ingredients: 'عجينة طازجة، صوص باربكيو، جبنة موزاريلا، دجاج مشوي',
    allergens: 'القمح، منتجات الألبان، الدجاج',
    image: 'images/products/bbq-chicken.jpg',
    sizes: [
        { name: 'صغير', price: 40 },
        { name: 'وسط', price: 50 },
        { name: 'كبير', price: 60 }
    ],
    extras: [
        { name: 'جبنة إضافية', price: 10 },
    ]
},
{
    id: 'pizza8',
    name: 'بيتزا دجاج بشاميل',
    category: 'pizza',
    basePrice: 45,
    description: 'بيتزا بكريمة البشاميل مع الدجاج وجبنة الموزاريلا',
    ingredients: 'عجينة طازجة، صوص بشاميل، جبنة موزاريلا، دجاج',
    allergens: 'القمح، منتجات الألبان، الدجاج',
    image: 'images/products/chicken-bechamel.jpg',
    sizes: [
        { name: 'صغير', price: 45 },
        { name: 'وسط', price: 55 },
        { name: 'كبير', price: 65 }
    ],
    extras: [
        { name: 'جبنة إضافية', price: 10 },
    ]
},
{
    id: 'pizza9',
    name: 'بيتزا جمبري بالبشاميل',
    category: 'pizza',
    basePrice: 45,
    description: 'بيتزا راقية بصوص البشاميل والجمبري والجبنة',
    ingredients: 'عجينة طازجة، صوص بشاميل، جبنة موزاريلا، جمبري ',
    allergens: 'القمح، منتجات الألبان، المحار',
    image: 'images/products/shrimp-bechamel.jpg',
    sizes: [
        { name: 'صغير', price: 45 },
        { name: 'وسط', price: 55 },
        { name: 'كبير', price: 65 }
    ],
    extras: [
        { name: 'جبنة إضافية', price: 10 },
    ]
},
{
    id: 'pizza10',
    name: 'بيتزا جمبري بالصوص العادي',
    category: 'pizza',
    basePrice: 40,
    description: 'بيتزا بحرية بصوص الطماطم وجمبري متبل',
    ingredients: 'عجينة طازجة، صوص طماطم، جمبري، جبنة موزاريلا ',
    allergens: 'القمح، منتجات الألبان، المحار',
    image: 'images/products/shrimp.jpg',
    sizes: [
        { name: 'صغير', price: 40 },
        { name: 'وسط', price: 50 },
        { name: 'كبير', price: 60 }
    ],
    extras: [
        { name: 'جبنة إضافية', price: 10 },
    ]
        },

        {
            id: 'salad1',
            name: 'سلطة سيزر',
            category: 'salads',
            basePrice: 20,
            description: 'خس روماني طازج مع صلصة سيزر الكريمية وقطع الزيتون والطماطم والخيار ',
            ingredients: 'خس روماني، صلصة سيزر، زيتون، خيار , طماطم , صدر دجاج مشوي',
            allergens: ' منتجات الألبان',
            image: 'images/products/sezar.jpg',
            sizes: [
                { name: 'فردي', price: 20 },
            ],
            extras: [
                { name: 'دجاج إضافي', price: 5 },
            ]
        },
                {
            id: 'salad2',
            name: 'سلطة يونانية',
            category: 'salads',
            basePrice: 15,
            description: 'خس روماني طازج مع رشة زعتر الكريمية وقطع الزيتون والطماطم والخيار والجبنة المالحه',
            ingredients: 'خس روماني، رشة زعتر، زيتون، جبنة مالحة , خيار , طماطم ',
            allergens: ' منتجات الألبان',
            image: 'images/products/beyaz.jpg',
            sizes: [
                { name: 'فردي', price: 15 },
            ],
            extras: [
                { name: 'جبن إضافي', price: 5 },
            ]
        },
        {
  id: 'salad3',
  name: 'سلطة مكسيكية',
  category: 'salads',
  basePrice: 15,
  description: 'سلطة مكسيكية مع الجبنة الصفراء والخضروات الطازجة',
  ingredients: 'خس، طماطم، ذرة، جبنة صفراء، خيار ، زيتون',
  allergens: 'منتجات الألبان',
  image: 'images/products/mexican-salad.jpg',
  sizes: [{ name: 'فردي', price: 15 }],
extras: [
                { name: 'جبن إضافي', price: 5 },
            ]
},
{
  id: 'salad4',
  name: 'سلطة تونة',
  category: 'salads',
  basePrice: 20,
  description: 'سلطة تونة مع خضروات مشكلة',
  ingredients: 'تونة، خس، طماطم، خيار، زيتون، ذرة',
  allergens: 'السمك',
  image: 'images/products/tuna-salad.jpg',
  sizes: [{ name: 'فردي', price: 20 }],
              extras: [
                { name: ' ', price: 0 },
            ]
},
{
  id: 'starter1',
  name: 'أجنحة دجاج حارة',
  category: 'main',
  basePrice: 15,
  description: 'أجنحة دجاج متبلة تقدم مع صوص حار',
  ingredients: 'دجاج، صوص حار',
  allergens: 'الدجاج',
  image: 'images/products/spicy-wings.jpg',
  sizes: [{ name: 'حصّة', price: 15 }],
              extras: [
                { name: 'صوص إضافي', price: 1 },
            ]
},
{
  id: 'starter2',
  name: 'خبز بالثوم',
  category: 'main',
  basePrice: 10,
  description: 'خبز محمص بالثوم',
  ingredients: 'خبز، ثوم',
  allergens: 'القمح، منتجات الألبان',
  image: 'images/products/garlic-bread.jpg',
  sizes: [{ name: 'حصّة', price: 10 }],
              extras: [
                { name: 'جبن إضافي', price: 5 },
            ]
},
{
  id: 'starter3',
  name: 'حلقات بصل',
  category: 'main',
  basePrice: 15,
  description: 'حلقات بصل مقلية مقرمشة',
  ingredients: 'بصل، طحين، توابل',
  allergens: 'القمح',
  image: 'images/products/onion-rings.jpg',
  sizes: [{ name: 'حصّة', price: 15 }],
                extras: [
                { name: 'صوص إضافي', price: 1 },
            ]
},
{
  id: 'starter4',
  name: 'بطاطا مقلية',
  category: 'main',
  basePrice: 5,
  description: 'بطاطا مقلية مقرمشة',
  ingredients: 'بطاطا، زيت',
  image: 'images/products/fries.jpg',
  sizes: [
    { name: 'صغير', price: 5 },
    { name: 'وسط', price: 7 },
    { name: 'كبير', price: 15 }
  ],
                extras: [
                { name: 'صوص إضافي', price: 1 },
            ]
},
        {
            id: 'sandwich1',
            name: 'ساندويتش دجاج مشوي',
            category: 'sandwiches',
            basePrice: 40,
            description: 'ساندويتش دجاج مشوي مع الخضروات الطازجة والصلصة الخاصة',
            ingredients: 'خبز طازج، صدر دجاج مشوي، خس، طماطم، خيار، مايونيز، خردل',
            allergens: 'القمح، بيض',
            image: 'images/products/dish-4.jpg',
            sizes: [
                { name: 'عادي', price: 40 },
                { name: 'دبل', price: 60 }
            ],
            extras: [
                { name: 'جبنة شيدر', price: 8 },
                { name: 'بيكون ديك رومي', price: 10 },
                { name: 'أفوكادو', price: 12 },
                { name: 'بطاطس مقلية', price: 15 }
            ]
        },
        {
            id: 'main1',
            name: 'ستيك لحم مشوي',
            category: 'main',
            basePrice: 120,
            description: 'ستيك لحم بقري مشوي مع صلصة الفطر والخضروات الموسمية',
            ingredients: 'لحم بقري، فطر، كريمة، بطاطس، خضروات موسمية، أعشاب',
            allergens: 'منتجات الألبان',
            image: 'images/products/dish-5.jpg',
            sizes: [
                { name: '250 جرام', price: 120 },
                { name: '350 جرام', price: 160 }
            ],
            extras: [
                { name: 'صلصة فلفل', price: 10 },
                { name: 'بطاطس إضافية', price: 15 },
                { name: 'جبنة زرقاء', price: 12 }
            ]
        },
        {
            id: 'dessert1',
            name: 'تشيز كيك',
            category: 'desserts',
            basePrice: 30,
            description: 'كعكة الجبن الكريمية مع صلصة التوت الطازجة',
            ingredients: 'جبنة كريمية، بسكويت، سكر، زبدة، توت طازج',
            allergens: 'القمح، منتجات الألبان، بيض',
            image: 'images/products/dish-6.jpg',
            sizes: [
                { name: 'قطعة', price: 30 },
                { name: 'كيكة كاملة', price: 180 }
            ],
            extras: [
                { name: 'كريمة مخفوقة', price: 5 },
                { name: 'آيس كريم فانيليا', price: 10 },
                { name: 'صلصة شوكولاتة', price: 8 }
            ]
        }
    ]
};

// Menu Module
const MenuModule = (function() {
    // Private variables
    let currentCategory = 'all';
    const restaurantInfo = {
        name: 'هيفين',
        address: 'العيزرية الشارع الرئيسي بجانب مسجد خليفه',
        hours: {
            open: '12:00',
            close: '03:00'
        },
        phone: '972598531267' // بدون + للاستخدام في واتساب
    };
    
    // DOM Elements
    let productsGrid;
    let categoriesContainer;
    let statusIndicator;
    let statusText;
    
    // Initialize menu
    function init() {
        productsGrid = document.getElementById('productsGrid');
        categoriesContainer = document.getElementById('categoriesContainer');
        statusIndicator = document.getElementById('statusIndicator');
        statusText = document.getElementById('statusText');
        
        // Initialize categories
        initCategories();
        
        // Initialize products
        renderProducts();
        
        // Update restaurant status
        updateRestaurantStatus();
        
        // Set interval to update restaurant status every minute
        setInterval(updateRestaurantStatus, 60000);
    }
    
    // Initialize categories
    function initCategories() {
        // Clear existing categories except "All"
        const allCategoryBtn = categoriesContainer.querySelector('[data-category="all"]');
        categoriesContainer.innerHTML = '';
        categoriesContainer.appendChild(allCategoryBtn);
        
        // Add event listener to "All" button
        allCategoryBtn.addEventListener('click', function() {
            setCurrentCategory('all');
        });
        
        // Add categories from data
        menuData.categories.forEach(category => {
            const categoryBtn = utils.createElement('button', {
                className: 'category-btn',
                dataset: { category: category.id },
                onClick: function() {
                    setCurrentCategory(category.id);
                }
            }, category.name);
            
            categoriesContainer.appendChild(categoryBtn);
        });
    }
    
    // Set current category and update UI
    function setCurrentCategory(categoryId) {
        currentCategory = categoryId;
        
        // Update active class
        const categoryBtns = categoriesContainer.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => {
            if (btn.dataset.category === categoryId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Render products for selected category
        renderProducts();
    }
    
    // Render products based on current category
    function renderProducts() {
        // Clear products grid
        productsGrid.innerHTML = '';
        
        // Filter products by category
        const filteredProducts = currentCategory === 'all' 
            ? menuData.products 
            : menuData.products.filter(product => product.category === currentCategory);
        
        // Render each product
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
            
            // Add animation
            setTimeout(() => {
                productCard.classList.add('fade-in');
            }, 100);
        });
    }
    
    // Create product card element
    function createProductCard(product) {
        const productCard = utils.createElement('div', {
            className: 'product-card',
            dataset: { productId: product.id }
        });
        
        const productImage = utils.createElement('img', {
            className: 'product-image',
            src: product.image,
            alt: product.name
        });
        
        const productDetails = utils.createElement('div', {
            className: 'product-details'
        });
        
        const productNamePrice = utils.createElement('div', {
            className: 'product-name-price'
        }, [
            utils.createElement('h3', { className: 'product-name' }, product.name),
            utils.createElement('div', { className: 'product-price' }, utils.formatPrice(product.basePrice))
        ]);
        
        const productDescription = utils.createElement('p', {
            className: 'product-description'
        }, product.description);
        
        const productIngredients = utils.createElement('p', {
            className: 'product-ingredients'
        }, `المكونات: ${product.ingredients}`);
        
        const productAllergens = utils.createElement('p', {
            className: 'product-allergens'
        }, `تحذير: يحتوي على ${product.allergens}`);
        
        const addButton = utils.createElement('button', {
            className: 'btn btn-accent product-add-btn',
            onClick: function() {
                openProductModal(product);
            }
        }, [
            utils.createElement('i', { className: 'fas fa-plus' }),
            ' إضافة'
        ]);
        
        // Append elements to product details
        productDetails.appendChild(productNamePrice);
        productDetails.appendChild(productDescription);
        productDetails.appendChild(productIngredients);
        productDetails.appendChild(productAllergens);
        productDetails.appendChild(addButton);
        
        // Append elements to product card
        productCard.appendChild(productImage);
        productCard.appendChild(productDetails);
        
        return productCard;
    }
    
    // Open product modal
    function openProductModal(product) {
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
        
        // Reset quantity
        quantityInput.value = 1;
        
        // Clear size options
        sizeOptions.innerHTML = '';
        
        // Add size options
        product.sizes.forEach((size, index) => {
            const sizeOption = utils.createElement('div', {
                className: index === 0 ? 'size-option selected' : 'size-option',
                dataset: { size: size.name, price: size.price },
                onClick: function() {
                    // Remove selected class from all size options
                    sizeOptions.querySelectorAll('.size-option').forEach(option => {
                        option.classList.remove('selected');
                    });
                    
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    
                    // Update total price
                    updateTotalPrice();
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
            const extraOption = utils.createElement('div', {
                className: 'extra-option'
            }, [
                utils.createElement('input', {
                    type: 'checkbox',
                    className: 'extra-checkbox',
                    dataset: { extra: extra.name, price: extra.price },
                    onChange: updateTotalPrice
                }),
                utils.createElement('span', { className: 'extra-name' }, extra.name),
                utils.createElement('span', { className: 'extra-price' }, `+${utils.formatPrice(extra.price)}`)
            ]);
            
            extrasOptions.appendChild(extraOption);
        });
        
        // Update total price initially
        updateTotalPrice();
        
        // Set up add to cart button
        addToCartBtn.onclick = function() {
            addToCart(product);
            utils.hideModal(productModal);
        };
        
        // Show modal
        utils.showModal(productModal);
        
        // Function to update total price
        function updateTotalPrice() {
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
        
        // Function to add product to cart
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
            
            // Show success animation
            utils.animateElement(addToCartBtn, 'add-to-cart-success');
        }
    }
    
    // Update restaurant status based on opening hours
    function updateRestaurantStatus() {
        const isOpen = utils.isRestaurantOpen(restaurantInfo.hours.open, restaurantInfo.hours.close);
        
        if (isOpen) {
            statusIndicator.classList.add('status-open');
            statusIndicator.classList.remove('status-closed');
            statusText.textContent = 'مفتوح الآن';
        } else {
            statusIndicator.classList.add('status-closed');
            statusIndicator.classList.remove('status-open');
            statusText.textContent = 'مغلق الآن';
        }
    }
    
    // Get restaurant info
    function getRestaurantInfo() {
        return restaurantInfo;
    }
    
    // Get product by ID
    function getProductById(productId) {
        return menuData.products.find(product => product.id === productId);
    }
    
    // Public API
    return {
        init,
        getRestaurantInfo,
        getProductById
    };
})();

// Export MenuModule to global scope
window.MenuModule = MenuModule;
