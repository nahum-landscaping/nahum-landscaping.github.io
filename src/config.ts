// Site-wide configuration — edit business details here
// TODO: Replace placeholder values with actual business information

export const siteConfig = {
  name: 'Nahum J Landscaping LLC',
  tagline: 'Professional Landscaping Services in Sanford, FL',
  // TODO: Replace with actual phone number
  phone: '(407) 555-0123',
  phoneHref: 'tel:+14075550123',
  // TODO: Replace with actual email
  email: 'info@nahumjlandscaping.com',
  // TODO: Replace with actual address
  address: {
    street: '123 Main Street',
    city: 'Sanford',
    state: 'FL',
    zip: '32771',
  },
  serviceArea: 'Sanford, FL',
  // TODO: Replace with actual Formspree endpoint
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  // TODO: Replace with actual social media URLs
  social: {
    facebook: 'https://facebook.com/nahumjlandscaping',
    instagram: 'https://instagram.com/nahumjlandscaping',
    google: 'https://g.page/nahumjlandscaping',
  },
  // TODO: Replace with actual Google Business Profile URL
  googleBusinessProfile: 'https://g.page/nahumjlandscaping',
  coordinates: {
    latitude: 28.8001,
    longitude: -81.2732,
  },
  // TODO: Replace with actual business hours
  hours: {
    weekdays: 'Mon-Sun: 7:00 AM - 6:00 PM',
    saturday: '',
    sunday: '',
  },
  hoursStructured: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '07:00', closes: '18:00' },
  ],
} as const;
