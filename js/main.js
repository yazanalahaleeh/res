// Main Application
(function() {
    // DOM Elements
    let welcomePage;
    let orderPage;
    let instructionsModal;
    let productModal;
    let instructionsBtn;
    let goToOrderBtn;
    let closeInstructionsBtn;
    let closeProductBtn;
    let closeOrderBtn;
    let decreaseQuantityBtn;
    let increaseQuantityBtn;
    let quantityInput;
    
    // Initialize application
    function init() {
        // Get DOM elements
        welcomePage = document.getElementById('welcomePage');
        orderPage = document.getElementById('orderPage');
        instructionsModal = document.getElementById('instructionsModal');
        productModal = document.getElementById('productModal');
        instructionsBtn = document.getElementById('instructionsBtn');
        goToOrderBtn = document.getElementById('goToOrderBtn');
        closeInstructionsBtn = document.getElementById('closeInstructionsBtn');
        closeProductBtn = document.getElementById('closeProductBtn');
        closeOrderBtn = document.getElementById('closeOrderBtn');
        decreaseQuantityBtn = document.getElementById('decreaseQuantity');
        increaseQuantityBtn = document.getElementById('increaseQuantity');
        quantityInput = document.getElementById('quantityInput');
        
        // Initialize modules
        MenuModule.init();
        CartModule.init();
        OrderModule.init();
        
        // Add event listeners
        addEventListeners();
        
        // Add ripple effect to buttons
        addRippleEffectToButtons();
    }
    
    // Add event listeners
    function addEventListeners() {
        // Welcome page buttons
        instructionsBtn.addEventListener('click', showInstructions);
        goToOrderBtn.addEventListener('click', goToOrderPage);
        
        // Modal close buttons
        closeInstructionsBtn.addEventListener('click', function() {
            utils.hideModal(instructionsModal);
        });
        
        closeProductBtn.addEventListener('click', function() {
            utils.hideModal(productModal);
        });
        
        closeOrderBtn.addEventListener('click', function() {
            utils.hideModal(document.getElementById('orderModal'));
        });
        
        // Quantity buttons
        decreaseQuantityBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value) || 1;
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
                // Trigger input event to update price
                quantityInput.dispatchEvent(new Event('input'));
            }
        });
        
        increaseQuantityBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value) || 1;
            if (currentValue < 10) {
                quantityInput.value = currentValue + 1;
                // Trigger input event to update price
                quantityInput.dispatchEvent(new Event('input'));
            }
        });
        
        // Quantity input validation
        quantityInput.addEventListener('input', function() {
            let value = parseInt(this.value) || 1;
            
            // Ensure value is between 1 and 10
            if (value < 1) value = 1;
            if (value > 10) value = 10;
            
            this.value = value;
            
            // Update total price in product modal
            const event = new Event('input');
            document.querySelectorAll('.extra-checkbox').forEach(checkbox => {
                checkbox.dispatchEvent(event);
            });
        });
        
        // Close modals when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === instructionsModal) {
                utils.hideModal(instructionsModal);
            } else if (event.target === productModal) {
                utils.hideModal(productModal);
            } else if (event.target === document.getElementById('orderModal')) {
                utils.hideModal(document.getElementById('orderModal'));
            }
        });
        
        // Prevent closing modals when clicking inside
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        });
    }
    
    // Show instructions modal
    function showInstructions() {
        utils.showModal(instructionsModal);
    }
    
    // Go to order page
    function goToOrderPage() {
        welcomePage.style.display = 'none';
        orderPage.style.display = 'block';
        
        // Add animation classes
        document.querySelector('.header').classList.add('slide-down');
        document.querySelector('.categories-bar').classList.add('slide-in-left');
        document.querySelector('.products-grid').classList.add('fade-in');
    }
    
    // Add ripple effect to buttons
    function addRippleEffectToButtons() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', createRippleEffect);
        });
        
        document.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', createRippleEffect);
        });
    }
    
    // Create ripple effect
    function createRippleEffect(event) {
        const button = event.currentTarget;
        
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.querySelector('.ripple');
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
    }
    
    // Initialize application when DOM is loaded
    document.addEventListener('DOMContentLoaded', init);
})();
