// src/utils/facebookPixel.ts
// TypeScript declarations for Facebook Pixel
declare global {
  interface Window {
    fbq: (
      action: string,
      eventName: string,
      parameters?: Record<string, any>
    ) => void;
  }
}

export const FacebookPixel = {
  // Track when user views content
  trackViewContent: (contentName: string, value?: number) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: contentName,
        value: value,
        currency: 'USD',
      });
    }
  },

  // Track when user adds to cart
  trackAddToCart: (quantity: number, value: number) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_name: 'Moonrise Natural Cleaning Concentrate',
        content_type: 'product',
        value: value,
        currency: 'USD',
        quantity: quantity,
      });
    }
  },

  // Track when user initiates checkout
  trackInitiateCheckout: (quantity: number, value: number) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Moonrise Natural Cleaning Concentrate',
        num_items: quantity,
        value: value,
        currency: 'USD',
      });
    }
  },

  // Track when user subscribes/leads
  trackLead: (email?: string) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Email Subscription',
      });
    }
  },

  // Track purchase (for when you add actual payment processing)
  trackPurchase: (quantity: number, value: number) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Purchase', {
        content_name: 'Moonrise Natural Cleaning Concentrate',
        content_type: 'product',
        value: value,
        currency: 'USD',
        num_items: quantity,
      });
    }
  },

  // Track custom events
  trackCustomEvent: (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, parameters);
    }
  },
};