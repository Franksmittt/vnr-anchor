/**
 * VNR Price List – synced from Google Sheet "VNR SERVICES REWORKED".
 * Column E = Category. Codes kept for internal reference only (not shown on site).
 */

export interface PricingService {
  category: string;
  subcategory: string;
  code: string;
  description: string;
  priceExcl: string | number;
  priceIncl: string | number;
}

export const pricingCategories = [
  'Tax Advisory & Compliance',
  'Financial Reporting',
  'Payroll Administration',
  'Registrations & Secretarial Services',
  'Estate & Legacy Planning',
  'Confirmations',
  'Business Structuring',
  'Cloud Accounting & Financial Record Keeping Solutions',
] as const;

export type PricingCategory = (typeof pricingCategories)[number];

export const pricingData: PricingService[] = [
  // ========== Tax Advisory & Compliance ==========
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT12I-003', description: 'ITR12 - Basic IRP5 with Medical expenses, PF and-/or RAF contributions (Individuals)', priceExcl: 1050, priceIncl: 1207.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT12I-002', description: 'ITR12 - IRP5 with Travel Allowance or Company Car (Valid log book required) (Individuals)', priceExcl: 1650, priceIncl: 1897.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT12I-001', description: 'ITR12 – Any of the Above with Rental income, up to three units, add (includes statement of assets & liabilities) (Individuals)', priceExcl: 1150, priceIncl: 1322.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT12I-006', description: 'ITR12 - (add) Trade Income (Individuals)', priceExcl: 'POR', priceIncl: 'POR' },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT12I-007', description: 'ITR12 - (add) Investment Income (Up to 3 IT3\'b) (Individuals)', priceExcl: 340, priceIncl: 391 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT12I-005', description: 'ITR12 - (add) Statement of Assets & Liabilities (Individuals) SARS requires the following persons to submit a detailed statement of assets and liabilities on an annual basis: Directors of Companies Persons earning Business Income Members of CC\'s', priceExcl: 520, priceIncl: 598 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT12EX-001', description: 'ITR12 - Various Income earners and expats (Individuals)', priceExcl: 'POR', priceIncl: '' },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT12I-008', description: 'ITR12 - Any of the Above requiring Capital Gains Calculation (Individuals)', priceExcl: 'POR', priceIncl: '' },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT12TR-001', description: 'ITR12T - Income Tax Return (Active Trust)', priceExcl: 2950, priceIncl: 3392.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT12TR-002', description: 'ITR12T - Income Tax Return (Dormant Trust)', priceExcl: 1150, priceIncl: 1322.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT12EI-001', description: 'IT12EI - Income Tax Return (Non Profit Organisation)', priceExcl: 1195, priceIncl: 1374.25 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT14-001', description: 'ITR14 - Income Tax Return (Active Company/ CC), turnover < R1 mil.', priceExcl: 1195, priceIncl: 1374.25 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT14-003', description: 'ITR14 - Income Tax Return (Active Company/ CC), turnover or nett asset value > R1 mil.', priceExcl: 2250, priceIncl: 2587.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT14-004', description: 'ITR14 - Income Tax Return (Active Company/ CC), turnover or nett asset value >R15 mil / <R20 mil.', priceExcl: 3850, priceIncl: 4427.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT14-005', description: 'ITR14 - Income Tax Return (Active Company/ CC), turnover or nett asset value > R20 mil.', priceExcl: 7750, priceIncl: 8912.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IT14-002', description: 'ITR14 - Income Tax Return (Dormant Company/ CC)', priceExcl: 480, priceIncl: 552 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IRP6D-001', description: 'IRP6 - Provisional Tax Return (Dormant)', priceExcl: 395, priceIncl: 454.25 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IRP6I-001', description: 'IRP6 - Provisional Tax Return (Individual with no trading income)', priceExcl: 495, priceIncl: 569.25 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IRP6I-002', description: 'IRP6 - Provisional Tax Return (Individual with trading income)', priceExcl: 725, priceIncl: 833.75 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IRP6C-001', description: 'IRP6 - Provisional Tax Return (Pty/CC/Trust < R1 mil. taxable income)', priceExcl: 1025, priceIncl: 1178.75 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IRP6C-002', description: 'IRP6 - Provisional Tax Return (Pty/CC/Trust > R1 mil. taxable income) - Standard', priceExcl: 2850, priceIncl: 3277.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IRP6C-003', description: 'IRP6 - Provisional Tax Return (Pty/CC/Trust > R20 mil. taxable income) - Large', priceExcl: 4950, priceIncl: 5692.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'IRP3-001', description: 'IRP3 (a)/(d) - Request for tax deduction directive (commision and independent contractors - fixed %)', priceExcl: 2675, priceIncl: 3076.25 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'SARSVAT-001', description: 'VAT201 - Submission and payment of VAT return', priceExcl: 850, priceIncl: 977.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'SARSVAT-002', description: 'VAT201 - Submission (Dormant Company/CC/Trust/Individual)', priceExcl: 395, priceIncl: 454.25 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'SARSVAT-003', description: 'SARS VAT Audit / Review Query', priceExcl: 950, priceIncl: 1092.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'TAXCLE-001', description: 'TCC - Tax Clearance Certificate (application & PIN only)', priceExcl: 295, priceIncl: 339.25 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'APN-001', description: 'SARS Customs - APN Request', priceExcl: 100, priceIncl: 115 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'DISRES-001', description: 'Application for suspension of payment pending dispute resolution (Payment terms <6months)', priceExcl: 850, priceIncl: 977.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'DISRES-002', description: 'Application for suspension of payment pending dispute resolution (Payment terms >6months)', priceExcl: 1700, priceIncl: 1955 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'DTR-001', description: 'Dividend Tax Declaration (1-3 Beneficiary stakeholders)', priceExcl: 2250, priceIncl: 2587.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'DTR-002', description: 'Dividend Tax Declaration - per extra Beneficiary', priceExcl: 300, priceIncl: 345 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'SARSMI-001', description: 'SARS Tax Migration Application', priceExcl: 3450, priceIncl: 3967.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'SUB-001', description: 'Submission of Supporting Documentation to SARS', priceExcl: 450, priceIncl: 517.5 },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'ADR-002', description: 'ADR1/ NOO - Objection against assessment based on administrative grounds', priceExcl: 'POR', priceIncl: '' },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: 'ADR001', description: 'ADR1/ NOO - Objection against assessment based complex legal grounds', priceExcl: 'POR', priceIncl: '' },
  { category: 'Tax Advisory & Compliance', subcategory: '', code: '', description: 'Assisting with SARS audit', priceExcl: 'POR', priceIncl: '' },

  // ========== Financial Reporting ==========
  { category: 'Financial Reporting', subcategory: '', code: 'AFS-GEN2026', description: 'Annual Financial Statements: In compliance with IFRS for SME\'s (Base: General Small Entity) where VNR is responsible for monthly bookkeeping', priceExcl: 9250, priceIncl: 10637.5 },
  { category: 'Financial Reporting', subcategory: '', code: '', description: 'Annual Financial Statements: In compliance with IFRS for SME\'s where VNR is not responsible for monthly bookkeeping', priceExcl: 'POR', priceIncl: '' },
  { category: 'Financial Reporting', subcategory: '', code: 'TAXCAL-001', description: 'Tax Calculation: Excel Balance Sheet, Income Statement and Tax Computation Note: In the event where SARS requires financial statements, a new fee estimate will be done for these services', priceExcl: 4500, priceIncl: 5175 },
  { category: 'Financial Reporting', subcategory: '', code: 'AFS-MAN001', description: 'Management Statements (Standard - Minimum Charge Company/CC)', priceExcl: 4650, priceIncl: 5347.5 },

  // ========== Payroll Administration ==========
  { category: 'Payroll Administration', subcategory: '', code: 'PAYROL-001', description: 'Payroll administration per month (1 – 3 employees)', priceExcl: 490, priceIncl: 563.5 },
  { category: 'Payroll Administration', subcategory: '', code: 'PAYROL-002', description: 'Payroll administration per employee per month (4 – 10 employees)', priceExcl: 125, priceIncl: 143.75 },
  { category: 'Payroll Administration', subcategory: '', code: 'PAYROL-003', description: 'Payroll administration per employee per month (> 10 employees)', priceExcl: 100, priceIncl: 115 },
  { category: 'Payroll Administration', subcategory: '', code: 'PAYROL-004', description: 'Payroll administration - Domestic / Gardener (Includes payslip, reports and UIF submission & request for payment)', priceExcl: 350, priceIncl: 402.5 },
  { category: 'Payroll Administration', subcategory: '', code: 'PAYROL-005', description: 'Payslip Charge - (per payslip) where client administers own payroll', priceExcl: 'POR', priceIncl: '' },
  { category: 'Payroll Administration', subcategory: '', code: 'UI19-002', description: 'Submission of U-filing declaration per month (where VNR administers payroll. Price bracket of 1-10 Employees)', priceExcl: 225, priceIncl: 258.75 },
  { category: 'Payroll Administration', subcategory: '', code: 'UI19-003', description: 'Submission of U-filing declaration per month (where VNR does not administer payroll. Price bracket 1-20 employees) Full payroll information to be provided by client', priceExcl: 1250, priceIncl: 1437.5 },
  { category: 'Payroll Administration', subcategory: '', code: 'UI19-001', description: 'UI19 - Termination of employment - Return on written request of client/employer, per employee, where VNR is responsible for monthly payroll, including Salary Schedule', priceExcl: 185, priceIncl: 212.75 },
  { category: 'Payroll Administration', subcategory: '', code: 'EMP501-001', description: 'EMP501 - Submission (bi-annual submissions)', priceExcl: 1085, priceIncl: 1247.75 },
  { category: 'Payroll Administration', subcategory: '', code: 'EMP501-002', description: 'EMP501 - Submission (bi-annual submissions) (Dormant Company/CC/Trust/Individual)', priceExcl: 395, priceIncl: 454.25 },
  { category: 'Payroll Administration', subcategory: '', code: 'EMP501-003', description: 'Issue of IT3 & IRP5 per employee, where VNR is not responsible for monthly payroll', priceExcl: 295, priceIncl: 339.25 },
  { category: 'Payroll Administration', subcategory: '', code: 'IRP3-002', description: 'IRP3 (e) - Request for tax deduction directive (severance / notice pay)', priceExcl: 385, priceIncl: 442.75 },
  { category: 'Payroll Administration', subcategory: '', code: 'EMP201-001', description: 'EMP201 - Submission (PAYE Return submission and payment), where VNR is not responsible for monthly payroll', priceExcl: 435, priceIncl: 500.25 },
  { category: 'Payroll Administration', subcategory: '', code: 'EMP201-002', description: 'EMP201 - Submission (PAYE Return submission and payment), where VNR is not responsible for monthly payroll (Dormant Company/CC/Trust/Individual)', priceExcl: 230, priceIncl: 264.5 },
  { category: 'Payroll Administration', subcategory: '', code: 'COIDSU-001', description: 'COID - WAS 8 - Annual Workman\'s Compensation Return Submission', priceExcl: 1550, priceIncl: 1782.5 },
  { category: 'Payroll Administration', subcategory: '', code: 'COIDLG-001', description: 'COID - Letter of Good Standing', priceExcl: 335, priceIncl: 385.25 },
  { category: 'Payroll Administration', subcategory: '', code: 'COIDPA-001', description: 'COID - Request for payment allocation (in the event where incorrect reference number was used)', priceExcl: 1500, priceIncl: 1725 },
  { category: 'Payroll Administration', subcategory: '', code: 'COIDTE-001', description: 'COID - Workman\'s Compensation Return Payment Terms Request', priceExcl: 1950, priceIncl: 2242.5 },

  // ========== Registrations & Secretarial Services ==========
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCAN-001', description: 'CIPC - Annual VNR Company Administration Fee (Includes: submission of Annual Return and basic Beneficial Ownership (where no changes must be made)) (Excludes: CIPC fee)', priceExcl: 1750, priceIncl: 2012.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCAM-001', description: 'CIPC - Amendments (Change of Directors or Year end)', priceExcl: 1285, priceIncl: 1477.75 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCAM-002', description: 'CIPC - Amendments (Change of Registered Particulars)', priceExcl: 425, priceIncl: 488.75 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'BOS-002', description: 'CIPC - Beneficial Ownership Submission - Per additional shareholder, VNR not responsible for shareholders\' Beneficial Ownership Submission', priceExcl: 350, priceIncl: 402.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'BOS-003', description: 'CIPC - Beneficial Ownership Submission - VNR not responsible secretarial work, shareholders natural persons (up to 3)', priceExcl: 1650, priceIncl: 1897.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'BOS-001', description: 'CIPC - Beneficial Ownership Submission - VNR responsible for secretarial, all shareholders natural persons', priceExcl: 1350, priceIncl: 1552.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCCON-001', description: 'CIPC - CC to PTY Conversion', priceExcl: 3085, priceIncl: 3547.75 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCCK2-001', description: 'CIPC - CK 2 & CK 2A Submission', priceExcl: 1225, priceIncl: 1408.75 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCDIS-001', description: 'CIPC - Company Disclosure', priceExcl: 185, priceIncl: 212.75 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCDER-001', description: 'CIPC - Deregistration of Company', priceExcl: 2250, priceIncl: 2587.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCMOI-001', description: 'CIPC - MOI amendment (to Standard Short form)', priceExcl: 3095, priceIncl: 3559.25 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCNAM-001', description: 'CIPC - Name Change (Pty/CC) Application and Submission', priceExcl: 1695, priceIncl: 1949.25 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCNPC-001', description: 'CIPC - Non-Profit Company registration Standard MOI, without members', priceExcl: 2485, priceIncl: 2857.75 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCREG-001', description: 'CIPC - Registration of Private Companies (Standard Short form MOI - COR15.1A) (Includes: first minutes and up to 3 share certificates and 3 directors, and appointment of SARS representative)', priceExcl: 2565, priceIncl: 2949.75 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCRES-001', description: 'CIPC - Restoration of CC/Company (Excludes outstanding annual returns and CIPC Fees)', priceExcl: 4250, priceIncl: 4887.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCNAM-002', description: 'CIPC - Unsuccessful name reservation', priceExcl: 245, priceIncl: 281.75 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'COIDRE-001', description: 'COID - Workman\'s\' Compensation Registration', priceExcl: 2850, priceIncl: 3277.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'STAT-001', description: 'Completion of STATS SA documentation', priceExcl: 850, priceIncl: 977.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CC-001', description: 'Credit Check', priceExcl: 485, priceIncl: 557.75 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCSHA-002', description: 'Issue of Share certificates, per certificate (Including minutes)', priceExcl: 300, priceIncl: 345 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'LET-001', description: 'Minimum Charge for VNR Letter', priceExcl: 335, priceIncl: 385.25 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'NPOREG-001', description: 'NPO Registration with the Department of Social Development (Includes: submission and 1 x visit. Please allow sufficient time for registration, up to 6 months)', priceExcl: 2255, priceIncl: 2593.25 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'SARSCER-001', description: 'Printing of SARS Registration Certificates (per certificate)', priceExcl: 325, priceIncl: 373.75 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'SARSTAXEXREG-001', description: 'SARS - Application for tax exemption and Art18A aproval', priceExcl: 3500, priceIncl: 4025 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'SARSREP-001', description: 'SARS - Appointment or change of existing Representative Taxpayer/Public Officer', priceExcl: 2500, priceIncl: 2875 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'SARSBD-001', description: 'SARS - Change of Bank Details (Appointment with SARS)', priceExcl: 2650, priceIncl: 3047.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'SARSBD-002', description: 'SARS - Change of Bank Details (Through E-filing)', priceExcl: 465, priceIncl: 534.75 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'SARSBD-003', description: 'SARS - Change of Bank Details (Virtual appointment with SARS)', priceExcl: 1250, priceIncl: 1437.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'VATREG-002', description: 'SARS - Import Export Licence (Customs Registration)', priceExcl: 3250, priceIncl: 3737.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'INCOMEDER-01', description: 'SARS - Income Tax Deregistration', priceExcl: 1350, priceIncl: 1552.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'SARSNA-001', description: 'SARS - Name change (Company/CC)', priceExcl: 795, priceIncl: 914.25 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'PAYEDER-001', description: 'SARS - PAYE Deregistration', priceExcl: 1195, priceIncl: 1374.25 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'PAYEREG-001', description: 'SARS - PAYE Registration', priceExcl: 1195, priceIncl: 1374.25 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'PBOREG-001', description: 'SARS - PBO Registration', priceExcl: 5145, priceIncl: 5916.75 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'SDLREG-001', description: 'SARS - SDL Registration / Activation', priceExcl: 850, priceIncl: 977.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'SARS-STT', description: 'SARS - Share Transfer Tax Application & Submission (VNR is not responsible for negotiations & transactions)', priceExcl: 2150, priceIncl: 2472.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'SARS-STT1', description: 'SARS - Share Transfer Tax Application & Submission (VNR is responsible for complete transaction)', priceExcl: 1050, priceIncl: 1207.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'VATDER-001', description: 'SARS - VAT Deregistration', priceExcl: 1750, priceIncl: 2012.5 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'VATREG-001', description: 'SARS - VAT Registration', priceExcl: 3995, priceIncl: 4594.25 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'CIPCSHA-001', description: 'Share Confirmation Letter', priceExcl: 820, priceIncl: 943 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'UIFREG-001', description: 'UIF - Registration (Labour Department) - U-filing', priceExcl: 1195, priceIncl: 1374.25 },
  { category: 'Registrations & Secretarial Services', subcategory: '', code: 'NAMECH-001', description: 'Update Name Changes per institution (UIF, COIDA)', priceExcl: 795, priceIncl: 914.25 },

  // ========== Estate & Legacy Planning ==========
  { category: 'Estate & Legacy Planning', subcategory: '', code: 'TRUSTD-002', description: 'Inter-Vivos Trust Registration', priceExcl: 12440, priceIncl: 14306 },
  { category: 'Estate & Legacy Planning', subcategory: '', code: 'INCOMEREG-001', description: 'Income Tax Registration - Trust', priceExcl: 1739, priceIncl: 1999.85 },
  { category: 'Estate & Legacy Planning', subcategory: '', code: 'TRUSTAUD-001', description: 'Trust Account Audit', priceExcl: 550, priceIncl: 632.5 },
  { category: 'Estate & Legacy Planning', subcategory: '', code: 'TRUSTA-001', description: 'Amendment of LOA at Master - Appointment/Removal of Trustees (Administrative)', priceExcl: 3295, priceIncl: 3789.25 },
  { category: 'Estate & Legacy Planning', subcategory: '', code: 'TRUSTA-002', description: 'Amendment of LOA at Master - Appointment/Removal of Trustees (Administrative): Urgent', priceExcl: 6655, priceIncl: 7653.25 },
  { category: 'Estate & Legacy Planning', subcategory: '', code: 'TESTDRAFT-001', description: 'Drafting of Last Will & Testament (VNR Executor of Will)', priceExcl: 'FREE', priceIncl: 'FREE' },
  { category: 'Estate & Legacy Planning', subcategory: '', code: 'TESTDRAFT-002', description: 'Drafting of Last Will & Testament (Own Executor)', priceExcl: 2100, priceIncl: 2415 },
  { category: 'Estate & Legacy Planning', subcategory: '', code: 'DEC-002', description: 'Deceased Estate - Submission and Request for Post Death Registration and DEC Certificate', priceExcl: 2500, priceIncl: 2875 },
  { category: 'Estate & Legacy Planning', subcategory: '', code: 'DEC-001', description: 'Deceased Estate SARS Coding - Compile post death documentation, review and submit to SARS for coding', priceExcl: 4500, priceIncl: 5175 },

  // ========== Confirmations ==========
  { category: 'Confirmations', subcategory: '', code: 'INC-001', description: 'Income Confirmation (for existing VNR client)', priceExcl: 1195, priceIncl: 1374.25 },
  { category: 'Confirmations', subcategory: '', code: 'INC-002', description: 'Income Confirmation (for new and non VNR clients)', priceExcl: 'POR', priceIncl: '' },
  { category: 'Confirmations', subcategory: '', code: 'INC-003', description: 'Audit report for property purchase (min charge)', priceExcl: 1950, priceIncl: '' },
  { category: 'Confirmations', subcategory: '', code: 'BBBEEE-001', description: 'BBBEE Declaration, for EME\'s, confirmation (VNR / Standard Form)', priceExcl: 585, priceIncl: 672.75 },

  // ========== Business Structuring ==========
  { category: 'Business Structuring', subcategory: '', code: 'COMVAL-001', description: 'Company Valuation - Basic Company', priceExcl: 10650, priceIncl: 12247.5 },
  { category: 'Business Structuring', subcategory: '', code: 'COMVAL-002', description: 'Company Valuation - Medium to Large Enterprise Standard', priceExcl: 18450, priceIncl: 21217.5 },
  { category: 'Business Structuring', subcategory: '', code: 'COMVAL-004', description: 'Company Valuation - Medium to Large Enterprise Complex', priceExcl: 28550, priceIncl: 32832.5 },
  { category: 'Business Structuring', subcategory: '', code: 'COMVAL-003', description: 'Company Valuation - More Complex', priceExcl: 46550, priceIncl: 53532.5 },

  // ========== Cloud Accounting & Financial Record Keeping Solutions ==========
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Hourly Tariffs', code: 'SEC-001', description: 'Hourly Rate: General Secretarial and Administration', priceExcl: 330, priceIncl: 379.5 },
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Hourly Tariffs', code: 'JUN-001', description: 'Hourly Rate: Bookkeeper', priceExcl: 550, priceIncl: 632.5 },
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Hourly Tariffs', code: 'QUA-001', description: 'Hourly Rate: Qualified Accountant & Tax Consultant', priceExcl: 690, priceIncl: 793.5 },
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Hourly Tariffs', code: 'ACC-001', description: 'Hourly Rate: Accounting & Tax Manager', priceExcl: 1100, priceIncl: 1265 },
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Hourly Tariffs', code: 'BUS-001', description: 'Hourly Rate: Director', priceExcl: 2100, priceIncl: 2415 },
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Hourly Tariffs', code: 'SOFT-001', description: 'Hourly Rate: Software installation and training', priceExcl: 695, priceIncl: 799.25 },
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Software Subscription Fees', code: '', description: 'DEXT - (per user)', priceExcl: 265, priceIncl: 304.75 },
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Software Subscription Fees', code: '', description: 'Sage One - Subscription (Company and 1 x User)', priceExcl: 378.26, priceIncl: 435 },
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Software Subscription Fees', code: '', description: 'Sage One - Subscription (Additional User)', priceExcl: 65.23, priceIncl: 75.01 },
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Software Subscription Fees', code: '', description: 'Sage One - Subscription (Multi-Currency Module)', priceExcl: 143.48, priceIncl: 165 },
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Software Subscription Fees', code: '', description: 'Sage One - Subscription (Time Tracking Module)', priceExcl: 143.48, priceIncl: 165 },
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Software Subscription Fees', code: '', description: 'Sage One - Subscription (Inventory)', priceExcl: 360.87, priceIncl: 415 },
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Software Subscription Fees', code: '', description: 'Sage One - Subscription (Journal Processing and 1 x User)', priceExcl: 147.84, priceIncl: 170.02 },
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Software Subscription Fees', code: 'XERO-001', description: 'XERO - Standard', priceExcl: 691.3, priceIncl: 795 },
  { category: 'Cloud Accounting & Financial Record Keeping Solutions', subcategory: 'Disbursements', code: 'TRA001', description: 'Travel (R/km) (Travel will not be charged within a 25km radius)', priceExcl: 11, priceIncl: 12.65 },

];
