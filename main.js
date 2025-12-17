/* ========================================
   RADIANCE MEDICAL SPA - MAIN JAVASCRIPT
   ======================================== */

// Utility Functions
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ========================================
// NAVIGATION
// ========================================
class Navigation {
    constructor() {
        this.navbar = $('#navbar');
        this.mobileToggle = $('#mobileMenuToggle');
        this.navLinks = $('#navLinks');
        this.init();
    }

    init() {
        this.handleScroll();
        this.handleMobileMenu();
        this.handleSmoothScroll();
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    handleMobileMenu() {
        if (this.mobileToggle) {
            this.mobileToggle.addEventListener('click', () => {
                this.navLinks.classList.toggle('active');
                const icon = this.mobileToggle.querySelector('i');
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        }
    }

    handleSmoothScroll() {
        $$('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = $(href);
                    if (target) {
                        const offset = 80; // navbar height
                        const targetPosition = target.offsetTop - offset;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        // Close mobile menu if open
                        if (this.navLinks.classList.contains('active')) {
                            this.navLinks.classList.remove('active');
                            const icon = this.mobileToggle.querySelector('i');
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                }
            });
        });
    }
}

// ========================================
// RESULTS FILTER
// ========================================
class ResultsFilter {
    constructor() {
        this.filterBtns = $$('.filter-btn');
        this.resultCards = $$('.result-card');
        this.init();
    }

    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => this.filter(btn));
        });
    }

    filter(btn) {
        // Update active button
        this.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        // Filter cards
        this.resultCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.classList.add('fadeIn');
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// ========================================
// BEFORE/AFTER SLIDER
// ========================================
class BeforeAfterSlider {
    constructor() {
        this.sliders = $$('.before-after-slider');
        this.init();
    }

    init() {
        this.sliders.forEach(slider => {
            const handle = slider.querySelector('.slider-handle');
            const afterImage = slider.querySelector('.after-image');
            let isDragging = false;

            if (handle && afterImage) {
                handle.addEventListener('mousedown', () => isDragging = true);
                handle.addEventListener('touchstart', () => isDragging = true);

                document.addEventListener('mouseup', () => isDragging = false);
                document.addEventListener('touchend', () => isDragging = false);

                slider.addEventListener('mousemove', (e) => {
                    if (isDragging) this.updateSlider(e, slider, afterImage, handle);
                });

                slider.addEventListener('touchmove', (e) => {
                    if (isDragging) this.updateSlider(e.touches[0], slider, afterImage, handle);
                });

                // Click to position
                slider.addEventListener('click', (e) => {
                    this.updateSlider(e, slider, afterImage, handle);
                });
            }
        });
    }

    updateSlider(e, slider, afterImage, handle) {
        const rect = slider.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        const clampedPercentage = Math.max(0, Math.min(100, percentage));

        afterImage.style.clipPath = `inset(0 ${100 - clampedPercentage}% 0 0)`;
        handle.style.left = `${clampedPercentage}%`;
    }
}

// ========================================
// BOOKING FORM
// ========================================
class BookingForm {
    constructor() {
        this.form = $('#bookingForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    async handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());

        // Form validation
        if (!this.validateForm(data)) {
            return;
        }

        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;

        try {
            // Simulate API call (replace with actual endpoint)
            await this.submitForm(data);
            
            // Success
            this.showSuccess();
            this.form.reset();
        } catch (error) {
            this.showError(error.message);
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    validateForm(data) {
        const required = ['fullName', 'email', 'phone'];
        for (let field of required) {
            if (!data[field] || data[field].trim() === '') {
                this.showError(`Please fill in all required fields.`);
                return false;
            }
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            this.showError('Please enter a valid email address.');
            return false;
        }

        // Phone validation (basic)
        const phoneRegex = /^[\d\s\-\(\)]+$/;
        if (!phoneRegex.test(data.phone)) {
            this.showError('Please enter a valid phone number.');
            return false;
        }

        return true;
    }

    async submitForm(data) {
        // Replace with actual API endpoint
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Form submitted:', data);
                resolve();
            }, 1500);
        });
    }

    showSuccess() {
        const message = document.createElement('div');
        message.className = 'alert alert-success';
        message.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <strong>Success!</strong> Your consultation request has been received. 
            We'll contact you within 24 hours.
        `;
        message.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1.5rem;
            background: linear-gradient(135deg, #7ba377 0%, #8b9d83 100%);
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(message);
        setTimeout(() => {
            message.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => message.remove(), 300);
        }, 5000);
    }

    showError(errorMessage) {
        const message = document.createElement('div');
        message.className = 'alert alert-error';
        message.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <strong>Error:</strong> ${errorMessage}
        `;
        message.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1.5rem;
            background: linear-gradient(135deg, #c77c78 0%, #d4a59a 100%);
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(message);
        setTimeout(() => {
            message.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => message.remove(), 300);
        }, 5000);
    }
}

// ========================================
// FAQ ACCORDION
// ========================================
class FAQAccordion {
    constructor() {
        this.faqItems = $$('.faq-item');
        this.init();
    }

    init() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => this.toggle(item));
        });
    }

    toggle(item) {
        const isActive = item.classList.contains('active');
        
        // Close all items
        this.faqItems.forEach(i => i.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    }
}

// ========================================
// NEWSLETTER FORM
// ========================================
class NewsletterForm {
    constructor() {
        this.form = $('.newsletter-form');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const email = this.form.querySelector('input[type="email"]').value;
        
        if (!email || !this.validateEmail(email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return;
        }

        const submitBtn = this.form.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;

        try {
            // Simulate API call
            await this.subscribe(email);
            this.showMessage('Successfully subscribed! Check your email for your $50 coupon.', 'success');
            this.form.reset();
        } catch (error) {
            this.showMessage('Subscription failed. Please try again.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    async subscribe(email) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Newsletter subscription:', email);
                resolve();
            }, 1000);
        });
    }

    showMessage(text, type) {
        const message = document.createElement('div');
        message.className = 'newsletter-message';
        message.textContent = text;
        message.style.cssText = `
            margin-top: 1rem;
            padding: 0.75rem;
            background-color: ${type === 'success' ? '#7ba377' : '#c77c78'};
            color: white;
            border-radius: 4px;
            text-align: center;
            animation: slideIn 0.3s ease;
        `;

        const existingMessage = this.form.querySelector('.newsletter-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        this.form.appendChild(message);
        setTimeout(() => message.remove(), 5000);
    }
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
class ScrollAnimations {
    constructor() {
        this.elements = $$('.service-card, .result-card, .testimonial-card');
        this.init();
    }

    init() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fadeIn');
                        this.observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        this.elements.forEach(element => {
            this.observer.observe(element);
        });
    }
}

// ========================================
// CHAT WIDGET
// ========================================
class ChatWidget {
    constructor() {
        this.widget = $('#chatWidget');
        this.init();
    }

    init() {
        if (this.widget) {
            this.widget.addEventListener('click', () => this.openChat());
        }
    }

    openChat() {
        // Integrate with your chat service (e.g., Intercom, Drift, custom)
        console.log('Opening chat...');
        alert('Chat feature would integrate with your preferred live chat service (Intercom, Drift, etc.)');
    }
}

// ========================================
// LAZY LOADING IMAGES
// ========================================
class LazyLoadImages {
    constructor() {
        this.images = $$('img[data-src]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.loadImage(entry.target);
                            this.observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    rootMargin: '50px'
                }
            );

            this.images.forEach(image => {
                this.observer.observe(image);
            });
        } else {
            // Fallback for older browsers
            this.images.forEach(image => this.loadImage(image));
        }
    }

    loadImage(image) {
        const src = image.getAttribute('data-src');
        if (src) {
            image.src = src;
            image.removeAttribute('data-src');
        }
    }
}

// ========================================
// ANALYTICS TRACKING
// ========================================
class Analytics {
    constructor() {
        this.init();
    }

    init() {
        // Track CTA clicks
        $$('.btn-primary, .btn-secondary').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.trackEvent('CTA Click', {
                    buttonText: btn.textContent.trim(),
                    buttonLocation: this.getElementLocation(btn)
                });
            });
        });

        // Track phone clicks
        $$('a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', () => {
                this.trackEvent('Phone Click', {
                    phoneNumber: link.href.replace('tel:', '')
                });
            });
        });

        // Track form submissions
        const forms = $$('form');
        forms.forEach(form => {
            form.addEventListener('submit', () => {
                this.trackEvent('Form Submission', {
                    formId: form.id || 'unknown'
                });
            });
        });
    }

    trackEvent(eventName, eventData) {
        // Integrate with Google Analytics, Facebook Pixel, or your analytics service
        console.log('Analytics Event:', eventName, eventData);
        
        // Example Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventData);
        }

        // Example Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', eventName, eventData);
        }
    }

    getElementLocation(element) {
        let parent = element.closest('section');
        return parent ? parent.id || parent.className : 'unknown';
    }
}

// ========================================
// PERFORMANCE MONITORING
// ========================================
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        if ('PerformanceObserver' in window) {
            // Monitor Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // Monitor First Input Delay
            const fidObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    console.log('FID:', entry.processingStart - entry.startTime);
                });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
        }
    }
}

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================
class AccessibilityEnhancements {
    constructor() {
        this.init();
    }

    init() {
        // Add keyboard navigation for custom elements
        this.enhanceKeyboardNavigation();
        
        // Add ARIA labels where needed
        this.addAriaLabels();
        
        // Ensure focus visibility
        this.enhanceFocusVisibility();
    }

    enhanceKeyboardNavigation() {
        // FAQ items
        $$('.faq-question').forEach(question => {
            question.setAttribute('tabindex', '0');
            question.setAttribute('role', 'button');
            question.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });
        });

        // Filter buttons
        $$('.filter-btn').forEach(btn => {
            btn.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    btn.click();
                }
            });
        });
    }

    addAriaLabels() {
        // Add labels to interactive elements without visible text
        $$('.mobile-menu-toggle').forEach(toggle => {
            toggle.setAttribute('aria-label', 'Toggle navigation menu');
        });

        $$('.instagram-post').forEach(post => {
            post.setAttribute('aria-label', 'View on Instagram');
        });
    }

    enhanceFocusVisibility() {
        // Add visible focus indicator class
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-nav');
        });
    }
}

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new Navigation();
    new ResultsFilter();
    new BeforeAfterSlider();
    new BookingForm();
    new FAQAccordion();
    new NewsletterForm();
    new ScrollAnimations();
    new ChatWidget();
    new LazyLoadImages();
    new Analytics();
    new PerformanceMonitor();
    new AccessibilityEnhancements();

    console.log('Radiance Medical Spa website initialized successfully!');
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    body.keyboard-nav *:focus {
        outline: 3px solid #c9a78e !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(style);