export const STARTUP = 'Startup';
export const PREMIUM = 'Premium';
export const ENTERPRISE = 'Enterprise';

export const featurePricing = [
  { text: 'Swiss privacy & security' },
  { text: 'Cap table' },
  { text: 'Basic reporting' },
  { text: 'Branded reporting', startup: false, scaleup: false },
  { text: 'Basic modeling' },
  { text: 'Advanced modeling', startup: false },
  { text: 'Holding confirmations', startup: false },
  { text: 'Equity plans', startup: false },
  { text: 'Employee dashboard', startup: false },
  {
    text: 'Data rooms',
    startup: '50 MB',
    scaleup: '500 MB',
    enterprise: 'Unlimited',
  },
  { text: 'Data room sharing', startup: false },
  { text: 'Standard e-signatures', startup: false },
  { text: 'Qualified e-signatures', startup: false, scaleup: false },
  { text: 'Document templating', startup: false, scaleup: false },
  {
    text: 'Admin seats',
    startup: '2',
    scaleup: '4',
    enterprise: 'Unlimited',
  },
  {
    text: 'View-only seats',
    startup: false,
    scaleup: 'Unlimited',
    enterprise: 'Unlimited',
  },
  {
    text: 'Personal support',
    startup: false,
    scaleup: 'Basic',
    enterprise: 'Priority',
  },
  {
    text: 'HR integration', startup: false, scaleup: false, enterprise: 'Coming soon',
  },
  { text: 'Onboarding data audit', startup: false, scaleup: false },
  { text: 'Dedicated account manager', startup: false, scaleup: false },
  { text: 'SLA', startup: false, scaleup: false },
];