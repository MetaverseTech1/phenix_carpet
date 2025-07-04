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

// NEW: Track WhatsApp clicks with detailed context
export const trackWhatsAppClick = (productName = null, category = null, source = 'general') => {
  const label = productName 
    ? `WhatsApp Click - ${category} - ${productName} - ${source}` 
    : `WhatsApp Click - ${source}`;
    
  event({
    action: 'whatsapp_click',
    category: 'engagement',
    label: label,
    value: 1
  });
  
  // GA4 enhanced event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: 'INR',
      value: 50,
      lead_type: 'whatsapp_inquiry',
      source: source,
      product_category: category || 'general',
      product_name: productName || 'general_inquiry'
    });
  }
};


export const trackWhatsAppInquiry = (productName = null, category = null, inquiryType = 'general') => {
  const label = productName 
    ? `WhatsApp Inquiry - ${category} - ${productName}` 
    : `WhatsApp Inquiry - ${inquiryType}`;
    
  event({
    action: 'generate_lead',
    category: 'engagement',
    label: label,
    value: 1
  });
  
  // GA4 conversion event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: 'INR',
      value: 75, // Higher value for actual inquiries
      lead_type: 'whatsapp_inquiry',
      product_category: category || 'general',
      product_name: productName || 'general_inquiry'
    });
  }
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