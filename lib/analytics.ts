/**
 * Analytics Setup Utilities
 * Integration points for Google Analytics, Mixpanel, and other analytics services
 * 
 * Current setup provides hooks for future analytics integration without breaking the site
 */

/**
 * Initialize Google Analytics
 * Add this to your index.tsx when GA_ID is configured
 */
export function initializeGoogleAnalytics(gaId: string): void {
  if (typeof window === 'undefined' || !gaId) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    (window.dataLayer as any).push(arguments);
  }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', gaId);
}

/**
 * Track custom events (works with GA, Mixpanel, etc.)
 */
export function trackEvent(eventName: string, properties?: Record<string, any>): void {
  if (typeof window === 'undefined') return;

  // Google Analytics
  if ((window as any).gtag) {
    (window as any).gtag('event', eventName, properties || {});
  }

  // Mixpanel (if configured)
  if ((window as any).mixpanel) {
    (window as any).mixpanel.track(eventName, properties);
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`📊 Event: ${eventName}`, properties);
  }
}

/**
 * Track signup event
 */
export function trackSignupEvent(email: string, success: boolean): void {
  trackEvent('early_access_signup', {
    email_domain: email.split('@')[1],
    success,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track page view (usually automatic with GA, but useful for manual tracking)
 */
export function trackPageView(pageName: string): void {
  trackEvent('page_view', {
    page_name: pageName,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Initialize analytics based on environment variables
 */
export function initializeAnalytics(): void {
  const gaId = process.env.GOOGLE_ANALYTICS_ID;
  
  if (gaId) {
    initializeGoogleAnalytics(gaId);
  }

  if (process.env.NODE_ENV === 'production') {
    console.log('Analytics initialized');
  }
}

// Export for use in components
export const Analytics = {
  trackEvent,
  trackSignupEvent,
  trackPageView,
  initialize: initializeAnalytics,
};

// Type augmentation for analytics in window
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    mixpanel?: any;
  }
}
