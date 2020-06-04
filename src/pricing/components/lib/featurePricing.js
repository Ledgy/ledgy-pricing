const EQUITY_PLANS = 'Pools for equity plans';
const GRANTS = 'Option & phantom grants';
const ANY_VESTING = 'Any vesting schedule';
const EMPLOYEE_DASHBOARD = 'Employee dashboard';
const EMPLOYEE_EXERCISE_REQUESTS = 'Employee exercise requests';
const HR_INTEGRATION = 'HR system integration';

const CAP_TABLE_MANAGEMENT = 'Cap table management';
const SCENARIO_MODELING = 'Funding round modeling';
const EXIT_MODELING = 'Exit break point analysis';
const MULTIPLE_SCENARIOS = 'Multiple scenarios & rounds';
const HOLDING_CONFIRMATIONS = 'Holding confirmations';

const DATA_ROOM = 'Data room';
const SES = 'Standard e-signatures';
const QES = 'Qualified e-signatures';
const TEMPLATING = 'Templating';
const CUSTOM_BRANDING = 'Custom branding';

const KPI_SHARING = 'KPI sharing';
const BASIC_REPORTING = 'Written reports';
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
  GRANTS,
  ANY_VESTING,
  EMPLOYEE_DASHBOARD,
  EMPLOYEE_EXERCISE_REQUESTS,
  HR_INTEGRATION,

  // Cap table
  CAP_TABLE_MANAGEMENT,
  SCENARIO_MODELING,
  EXIT_MODELING,
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
  DEDICATED_ACCOUNT,
});

export const featurePricing = [
  { text: 'Equity plans', featureGroup: true },
  { text: EQUITY_PLANS },
  { text: GRANTS, startup: false },
  { text: ANY_VESTING, startup: false },
  { text: EMPLOYEE_DASHBOARD, startup: false },
  { text: EMPLOYEE_EXERCISE_REQUESTS, startup: false, scaleup: false },
  { text: HR_INTEGRATION, startup: false, scaleup: false },

  { text: 'Cap table', featureGroup: true },
  { text: CAP_TABLE_MANAGEMENT },
  { text: SCENARIO_MODELING },
  { text: EXIT_MODELING, startup: false },
  {
    text: MULTIPLE_SCENARIOS, startup: false, scaleup: '3', enterprise: 'Unlimited',
  },
  {
    text: HOLDING_CONFIRMATIONS, startup: 'Download only', scaleup: 'Share instantly', enterprise: 'Custom branding',
  },

  { text: 'Documents', featureGroup: true },
  {
    text: DATA_ROOM, startup: '50 MB', scaleup: '500 MB', enterprise: 'Unlimited',
  },
  { text: SES, startup: false },
  { text: QES, startup: false, scaleup: false },
  { text: TEMPLATING, startup: false, scaleup: false },
  { text: CUSTOM_BRANDING, startup: false, scaleup: false },

  { text: 'Investor relations', featureGroup: true },
  { text: KPI_SHARING },
  { text: BASIC_REPORTING },
  { text: BRANDED_REPORTING, startup: false, scaleup: false },

  { text: 'Access rights', featureGroup: true },
  { text: INVESTOR_PORTFOLIO },
  {
    text: ADMIN_SEATS, startup: '2', scaleup: '4', enterprise: 'Unlimited',
  },
  { text: VIEW_ONLY_SEATS, startup: false },

  { text: 'Support', featureGroup: true },
  {
    text: SUPPORT, startup: 'Help center', scaleup: 'Chat', enterprise: 'Priority chat & phone',
  },
  { text: ONBOARDING_DATA_AUDIT, startup: false, scaleup: false },
  { text: DEDICATED_ACCOUNT, startup: false, scaleup: false },
];
