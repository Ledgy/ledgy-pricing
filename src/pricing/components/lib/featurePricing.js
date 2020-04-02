const EQUITY_PLANS = 'Any vesting schedule';
const EMPLOYEE_DASHBOARD = 'Employee dashboard';
const HR_INTEGRATION = 'HR system integration';

const SCENARIO_MODELING = 'Scenario modeling';
const ADVANCED_MODELING = 'Advanced modeling';
const MULTIPLE_SCENARIOS = 'Multiple scenarios';
const HOLDING_CONFIRMATIONS = 'Holding confirmations';

const DATA_ROOM = 'Data room';
const SES = 'Standard e-signatures';
const QES = 'Qualified e-signatures';
const TEMPLATING = 'Templating';
const CUSTOM_BRANDING = 'Custom branding';

const KPI_SHARING = 'KPI sharing';
const BASIC_REPORTING = 'Basic reporting';
const BRANDED_REPORTING = 'Branded reporting';

const INVESTOR_PORTFOLIO = 'Investor portfolio';
const ADMIN_SEATS = 'Admin seats';
const VIEW_ONLY_SEATS = 'View-only seats';

const SUPPORT = 'Support';
const ONBOARDING_DATA_AUDIT = 'Onboarding data audit';
const DEDICATED_ACCOUNT = 'Dedicated account manager';

export const FEATURES = Object.freeze({
  // Equity plans
  EQUITY_PLANS,
  EMPLOYEE_DASHBOARD,
  HR_INTEGRATION,

  // Cap table
  SCENARIO_MODELING,
  ADVANCED_MODELING,
  MULTIPLE_SCENARIOS,
  HOLDING_CONFIRMATIONS,

  // Documents
  DATA_ROOM,
  SES,
  QES,
  TEMPLATING,
  CUSTOM_BRANDING,

  // Investor relations
  KPI_SHARING,
  BASIC_REPORTING,
  BRANDED_REPORTING,

  // Access rights
  INVESTOR_PORTFOLIO,
  ADMIN_SEATS,
  VIEW_ONLY_SEATS,

  // Support
  SUPPORT,
  ONBOARDING_DATA_AUDIT,
  DEDICATED_ACCOUNT
});

export const featurePricing = [
  { text: 'Equity plans', featureGroup: true },
  { text: EQUITY_PLANS, startup: false },
  { text: EMPLOYEE_DASHBOARD, startup: false },
  { text: HR_INTEGRATION, startup: false, scaleup: false },

  { text: 'Cap table', featureGroup: true },
  { text: SCENARIO_MODELING },
  { text: ADVANCED_MODELING, startup: false },
  { text: MULTIPLE_SCENARIOS, startup: false, scaleup: '3', enterprise: 'Unlimited' },
  { text: HOLDING_CONFIRMATIONS, startup: 'Download only', scaleup: 'Share instantly', enterprise: 'Custom branding' },

  { text: 'Documents', featureGroup: true },
  { text: DATA_ROOM, startup: '50 MB', scaleup: '500 MB', enterprise: 'Unlimited' },
  { text: SES, startup: false },
  { text: QES, startup: false, scaleup: false },
  { text: TEMPLATING, startup: false, scaleup: false },
  { text: CUSTOM_BRANDING, startup: false, scaleup: false },

  { text: 'Investor relations', featureGroup: true },
  { text: KPI_SHARING },
  { text: BASIC_REPORTING },
  { text: BRANDED_REPORTING, startup: false },

  { text: 'Access rights', featureGroup: true },
  { text: INVESTOR_PORTFOLIO },
  { text: ADMIN_SEATS, startup: '2', scaleup: '4', enterprise: 'Unlimited' },
  { text: VIEW_ONLY_SEATS, startup: false },

  { text: 'Support', featureGroup: true },
  { text: SUPPORT, startup: 'Help center', scaleup: 'Chat', enterprise: 'Priority chat & phone' },
  { text: ONBOARDING_DATA_AUDIT, startup: false, scaleup: false },
  { text: DEDICATED_ACCOUNT, startup: false, scaleup: false },
];
