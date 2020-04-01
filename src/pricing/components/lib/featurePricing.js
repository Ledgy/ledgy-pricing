export const featurePricing = [
  { text: 'Equity plans', featureGroup: true },
  { text: 'Any vesting schedule', startup: false },
  { text: 'Employee dashboard', startup: false },
  { text: 'HR system integration', startup: false, scaleup: false },

  { text: 'Cap table', featureGroup: true },
  { text: 'Scenario modeling' },
  { text: 'Multiple scenarios', startup: false, scaleup: '3', enterprise: 'Unlimited' },
  { text: 'Holding confirmations', startup: 'Download only', scaleup: 'Share instantly', enterprise: 'Custom branding' },

  { text: 'Documents', featureGroup: true },
  { text: 'Data room', startup: '50 MB', scaleup: '500 MB', enterprise: 'Unlimited' },
  { text: 'Standard e-signatures', startup: false },
  { text: 'Qualified e-signatures', startup: false, scaleup: false },
  { text: 'Templating', startup: false, scaleup: false },
  { text: 'Custom branding', startup: false, scaleup: false },

  { text: 'Investor relations', featureGroup: true },
  { text: 'KPI sharing' },
  { text: 'Basic reporting' },
  { text: 'Branded reporting', startup: false },

  { text: 'Access rights', featureGroup: true },
  { text: 'Investor portfolio' },
  { text: 'Admin seats', startup: '2', scaleup: '4', enterprise: 'Unlimited' },
  { text: 'View-only seats', startup: false },

  { text: 'Support', featureGroup: true },
  { text: 'Support', startup: 'Help center', scaleup: 'Chat', enterprise: 'Priority chat & phone' },
  { text: 'Onboarding data audit', startup: false, scaleup: false },
  { text: 'Dedicated account manager', startup: false, scaleup: false },
];
