// Utility Functions

/**
 * Utility function to format price
 * @param {number} price - Price to format
 * @returns {string} Formatted price with currency
 */
function formatPrice(price) {
    return `${price.toFixed(2)} ₪`;
}

/**
 * Get current time in 24-hour format (HH:MM)
 * @returns {string} Current time in HH:MM format
 */
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

/**
 * Check if restaurant is open based on current time
 * @param {string} openTime - Opening time in 24-hour format (HH:MM)
 * @param {string} closeTime - Closing time in 24-hour format (HH:MM)
 * @returns {boolean} True if restaurant is open, false otherwise
 */
function isRestaurantOpen(openTime, closeTime) {
    const currentTime = getCurrentTime();
    return currentTime >= openTime && currentTime < closeTime;
}

/**
 * Generate a unique ID
 * @returns {string} Unique ID
 */
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

/**
 * Create element with attributes and children
 * @param {string} tag - HTML tag name
 * @param {Object} attributes - Element attributes
 * @param {Array|string} children - Child elements or text content
 * @returns {HTMLElement} Created element
 */
function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    
    // Set attributes
    Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'dataset') {
            Object.entries(value).forEach(([dataKey, dataValue]) => {
                element.dataset[dataKey] = dataValue;
            });
        } else if (key.startsWith('on') && typeof value === 'function') {
            element.addEventListener(key.substring(2).toLowerCase(), value);
        } else {
            element.setAttribute(key, value);
        }
    });
    
    // Add children
    if (Array.isArray(children)) {
        children.forEach(child => {
            if (child instanceof HTMLElement) {
                element.appendChild(child);
            } else if (child !== null && child !== undefined) {
                element.appendChild(document.createTextNode(child.toString()));
            }
        });
    } else if (children !== null && children !== undefined) {
        element.textContent = children.toString();
    }
    
    return element;
}

/**
 * Show an element by removing 'hidden' class
 * @param {HTMLElement} element - Element to show
 */
function showElement(element) {
    element.classList.remove('hidden');
}

/**
 * Hide an element by adding 'hidden' class
 * @param {HTMLElement} element - Element to hide
 */
function hideElement(element) {
    element.classList.add('hidden');
}

/**
 * Show a modal by adding 'active' class to overlay
 * @param {HTMLElement} modalOverlay - Modal overlay element
 */
function showModal(modalOverlay) {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

/**
 * Hide a modal by removing 'active' class from overlay
 * @param {HTMLElement} modalOverlay - Modal overlay element
 */
function hideModal(modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

/**
 * Validate required fields in a form
 * @param {Array} fields - Array of input elements to validate
 * @returns {boolean} True if all fields are valid, false otherwise
 */
function validateFields(fields) {
    let isValid = true;
    
    fields.forEach(field => {
        if (field.required && !field.value.trim()) {
            field.classList.add('invalid');
            isValid = false;
        } else {
            field.classList.remove('invalid');
        }
    });
    
    return isValid;
}

/**
 * Encode text for WhatsApp URL
 * @param {string} text - Text to encode
 * @returns {string} Encoded text
 */
function encodeWhatsAppText(text) {
    return encodeURIComponent(text);
}

/**
 * Create WhatsApp URL with phone number and text
 * @param {string} phoneNumber - Phone number without country code
 * @param {string} text - Message text
 * @returns {string} WhatsApp URL
 */
function createWhatsAppUrl(phoneNumber, text) {
    // Remove any non-digit characters from phone number
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
    return `https://wa.me/${cleanPhoneNumber}?text=${encodeWhatsAppText(text)}`;
}

/**
 * Generate order number
 * @returns {string} Order number in format #YYYYMMDD-XXXX
 */
function generateOrderNumber() {
    const now = new Date();
    const datePart = now.getFullYear().toString() +
                    (now.getMonth() + 1).toString().padStart(2, '0') +
                    now.getDate().toString().padStart(2, '0');
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    
    return `#${datePart}-${randomPart}`;
}

/**
 * Format date and time
 * @returns {string} Formatted date and time
 */
function formatDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    return now.toLocaleDateString('ar-SA', options);
}

/**
 * Add animation class to element and remove it after animation ends
 * @param {HTMLElement} element - Element to animate
 * @param {string} animationClass - CSS animation class
 */
function animateElement(element, animationClass) {
    element.classList.add(animationClass);
    
    element.addEventListener('animationend', function handler() {
        element.classList.remove(animationClass);
        element.removeEventListener('animationend', handler);
    });
}

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

/**
 * Save data to localStorage
 * @param {string} key - Storage key
 * @param {*} data - Data to store
 */
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

/**
 * Load data from localStorage
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if key doesn't exist
 * @returns {*} Stored data or default value
 */
function loadFromLocalStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return defaultValue;
    }
}

/**
 * Clear specific data from localStorage
 * @param {string} key - Storage key to clear
 */
function clearFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('Error clearing localStorage:', error);
    }
}

/**
 * Check if device is mobile
 * @returns {boolean} True if device is mobile, false otherwise
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Add ripple effect to button
 * @param {HTMLElement} button - Button element
 */
function addRippleEffect(button) {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Export utilities for use in other modules
window.utils = {
    formatPrice,
    getCurrentTime,
    isRestaurantOpen,
    generateId,
    createElement,
    showElement,
    hideElement,
    showModal,
    hideModal,
    validateFields,
    encodeWhatsAppText,
    createWhatsAppUrl,
    generateOrderNumber,
    formatDateTime,
    animateElement,
    debounce,
    saveToLocalStorage,
    loadFromLocalStorage,
    clearFromLocalStorage,
    isMobileDevice,
    addRippleEffect
};
