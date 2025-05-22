// lib/analytics.js - Utility functions for tracking events

// Track page views
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_location: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track product views
export const trackProductView = (productId, productName, category) => {
  event({
    action: 'view_item',
    category: 'ecommerce',
    label: `${category} - ${productName}`,
    value: productId,
  });
};

// Track quote requests
export const trackQuoteRequest = (productName, category) => {
  event({
    action: 'generate_lead',
    category: 'engagement',
    label: `Quote Request - ${category} - ${productName}`,
  });
};

// Track contact form submissions
export const trackContactForm = (formType) => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: `Contact Form - ${formType}`,
  });
};

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
  event({
    action: 'click',
    category: 'engagement',
    label: 'WhatsApp Contact',
  });
};

// Track phone clicks
export const trackPhoneClick = () => {
  event({
    action: 'click',
    category: 'engagement',
    label: 'Phone Contact',
  });
};

// Track email clicks
export const trackEmailClick = () => {
  event({
    action: 'click',
    category: 'engagement',
    label: 'Email Contact',
  });
};