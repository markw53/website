// Date formatting
export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(date));
  };
  
  // Email validation
  export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  // Phone number validation
  export const validatePhone = (phone) => {
    const re = /^\+?[\d\s-]{10,}$/;
    return re.test(phone);
  };
  
  // Scroll helpers
  export const scrollToTop = (smooth = true) => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };
  
  export const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  
  // String helpers
  export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength)}...`;
  };
  
  export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  // Array helpers
  export const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };
  
  // Object helpers
  export const removeEmptyValues = (obj) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => {
        if (value === null || value === undefined) return false;
        if (typeof value === 'string') return value.trim() !== '';
        return true;
      })
    );
  };
  
  // Form helpers
  export const serializeForm = (formElement) => {
    const formData = new FormData(formElement);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    
    return data;
  };
  
  // Local storage helpers
  export const storage = {
    set: (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    },
    
    get: (key, defaultValue = null) => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (error) {
        console.error('Error reading from localStorage:', error);
        return defaultValue;
      }
    },
    
    remove: (key) => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error('Error removing from localStorage:', error);
      }
    }
  };
  
  // Debounce function
  export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  // Throttle function
  export const throttle = (func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };
  
  // URL helpers
  export const getQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    const paramsObject = {};
    
    for (const [key, value] of params.entries()) {
      paramsObject[key] = value;
    }
    
    return paramsObject;
  };
  
  // Device detection
  export const deviceDetection = {
    isMobile: () => window.innerWidth <= 768,
    isTablet: () => window.innerWidth > 768 && window.innerWidth <= 1024,
    isDesktop: () => window.innerWidth > 1024,
  };
  
  // Error handling
  export const handleApiError = (error) => {
    if (error.response) {
      // Server responded with error
      return {
        message: error.response.data.message || 'An error occurred',
        status: error.response.status,
      };
    } else if (error.request) {
      // Request made but no response
      return {
        message: 'No response from server',
        status: 503,
      };
    } else {
      // Error in request setup
      return {
        message: 'Error setting up request',
        status: 500,
      };
    }
  };