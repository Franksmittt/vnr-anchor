/**
 * VNR Price List – 1 Aug 2026 to 31 Jul 2027.
 * Source: VNR Price List 2027 PDF.
 */

export interface PricingService {
  category: string;
  subcategory: string;
  code: string;
  description: string;
  priceExcl: string | number;
  priceIncl: string | number;
}

export interface PricingCatalog {
  version: 1;
  effectiveLabel: string;
  categories: string[];
  services: PricingService[];
}

export const pricingEffectiveLabel = '1 Aug 2026 – 31 Jul 2027';

export const pricingCategories = [
  'Personal Tax Services',
  'Domestic Registrations and Returns',
  'VAT Administration',
  'Payroll Administration',
  'Yearly Statutory Compliance Services',
  'CIPC Compliance',
  'SARS and Secretarial Assistance',
  'Trusts & Last Will & Testament',
  'Non-Profit Organisations',
  'Hourly Tariffs',
  'Subscription Fees & Disbursements',
] as const;

export type PricingCategory = (typeof pricingCategories)[number] | string;

export const pricingData: PricingService[] = [

  // ========== Personal Tax Services ==========
  { category: 'Personal Tax Services', subcategory: '', code: 'IRP6I-001', description: 'IRP 6 (Individual with no trading income)', priceExcl: 550, priceIncl: 633 },
  { category: 'Personal Tax Services', subcategory: '', code: 'IRP6I-002', description: 'IRP 6 (Individual with trading income)', priceExcl: 785, priceIncl: 903 },
  { category: 'Personal Tax Services', subcategory: '', code: 'IT12I-001', description: 'IT12 Basic Salary Earner - IRP5 with Medical expenses, PF and-/or RAF contributions', priceExcl: 1250, priceIncl: 1438 },
  { category: 'Personal Tax Services', subcategory: '', code: 'IT12I-002', description: 'IT12 Tax Return with Travel Allowance / Company Car (Valid log book required)', priceExcl: 1750, priceIncl: 2013 },
  { category: 'Personal Tax Services', subcategory: 'Additional Add-on Services', code: 'IT12I-003', description: 'Rental income (up to 3 units)', priceExcl: 1250, priceIncl: 1438 },
  { category: 'Personal Tax Services', subcategory: 'Additional Add-on Services', code: 'IT12I-004', description: 'Investment Income (Up to 3 IT3\'b)', priceExcl: 365, priceIncl: 420 },
  { category: 'Personal Tax Services', subcategory: 'Additional Add-on Services', code: 'IT12I-005', description: 'Trade Income', priceExcl: 'POR', priceIncl: 'POR' },
  { category: 'Personal Tax Services', subcategory: 'Additional Add-on Services', code: 'IT12I-006', description: 'Capital Gains Calculation', priceExcl: 'POR', priceIncl: 'POR' },
  { category: 'Personal Tax Services', subcategory: 'Additional Add-on Services', code: 'IT12I-007', description: 'Statement of Assets & Liabilities. SARS requires the following persons to submit a detailed statement of assets and liabilities on an annual basis: Directors of Companies, Members of CC\'s, Persons earning Business Income', priceExcl: 550, priceIncl: 633 },
  { category: 'Personal Tax Services', subcategory: '', code: 'IT12EX-001', description: 'Various Income earners and expats', priceExcl: 'POR', priceIncl: 'POR' },
  { category: 'Personal Tax Services', subcategory: '', code: 'IRP3-001', description: 'IRP3 (a)/(d) - Request for tax deduction directive (commision and independent contractors - fixed %)', priceExcl: 2895, priceIncl: 3329 },
  { category: 'Personal Tax Services', subcategory: '', code: 'SUB-001', description: 'Submission of Supporting Documentation to SARS for review (1st basic submission)', priceExcl: 495, priceIncl: 569 },
  { category: 'Personal Tax Services', subcategory: '', code: 'AUDIT-001', description: 'Assisting with SARS review/audit', priceExcl: '950 per hour', priceIncl: '1093 per hour' },
  { category: 'Personal Tax Services', subcategory: '', code: 'SARSMI-001', description: 'SARS Tax Migration Application', priceExcl: 3795, priceIncl: 4364 },
  { category: 'Personal Tax Services', subcategory: '', code: 'INC-001', description: 'Income Confirmation (for existing VNR client)', priceExcl: 1250, priceIncl: 1438 },
  { category: 'Personal Tax Services', subcategory: '', code: 'INC-002', description: 'Income Confirmation (for new and non VNR clients)', priceExcl: 'POR', priceIncl: 'POR' },

  // ========== Domestic Registrations and Returns ==========
  { category: 'Domestic Registrations and Returns', subcategory: '', code: 'UIF-001', description: 'UIF Registration', priceExcl: 1550, priceIncl: 1783 },
  { category: 'Domestic Registrations and Returns', subcategory: '', code: 'COID-001', description: 'Workmans Compensation Registration (Includes 1st provisional return submission & LOGS)', priceExcl: 1250, priceIncl: 1438 },
  { category: 'Domestic Registrations and Returns', subcategory: '', code: 'PAYROL-DOM', description: 'Payroll administration - Domestic / Gardener (Includes payslip, reports, U-filings submission & request/debit push payment). Note: Signing a 12-month debit order includes the COIDA annual return submission and LOGS, but excludes the COIDA fee itself.', priceExcl: 350, priceIncl: 403 },
  { category: 'Domestic Registrations and Returns', subcategory: '', code: 'WAS8-DOM', description: 'WAS 8 - Annual Workman\'s Compensation Return Submission', priceExcl: 'Included if VNR administers payroll', priceIncl: 'Included if VNR administers payroll' },
  { category: 'Domestic Registrations and Returns', subcategory: '', code: 'COIDLG-DOM', description: 'COID - Letter of Good Standing', priceExcl: 'Included if VNR administers payroll', priceIncl: 'Included if VNR administers payroll' },
  { category: 'Domestic Registrations and Returns', subcategory: '', code: 'UI19-DOM', description: 'UI19 - Termination. Return on written request of client/employer, per employee, where VNR is responsible for monthly payroll, including Salary Schedule', priceExcl: 'Included if VNR administers payroll', priceIncl: 'Included if VNR administers payroll' },

  // ========== VAT Administration ==========
  { category: 'VAT Administration', subcategory: '', code: 'VATREG-001', description: 'VAT Registration', priceExcl: 4295, priceIncl: 4939 },
  { category: 'VAT Administration', subcategory: '', code: 'VATDER-001', description: 'VAT Deregistration', priceExcl: 2550, priceIncl: 2933 },
  { category: 'VAT Administration', subcategory: '', code: 'CUSTOMS-001', description: 'SARS Import / Export Licence (Customs Registration)', priceExcl: 1995, priceIncl: 2294 },
  { category: 'VAT Administration', subcategory: '', code: 'APN-001', description: 'SARS Customs - APN Request', priceExcl: 450, priceIncl: 518 },
  { category: 'VAT Administration', subcategory: '', code: 'SARSVAT-001', description: 'VAT 201 - Submission and payment of VAT return', priceExcl: 895, priceIncl: 1029 },
  { category: 'VAT Administration', subcategory: '', code: 'SARSVAT-002', description: 'VAT201 - Submission (Dormant Company/CC/Trust/Individual)', priceExcl: 250, priceIncl: 288 },
  { category: 'VAT Administration', subcategory: '', code: 'SARSVAT-003', description: 'SARS VAT Audit / Review Query', priceExcl: '950 per hour', priceIncl: '1093 per hour' },

  // ========== Payroll Administration ==========
  { category: 'Payroll Administration', subcategory: '', code: 'PAYEREG-001', description: 'PAYE Registration', priceExcl: 950, priceIncl: 1093 },
  { category: 'Payroll Administration', subcategory: '', code: 'PAYEDER-001', description: 'PAYE Deregistration', priceExcl: 2550, priceIncl: 2933 },
  { category: 'Payroll Administration', subcategory: '', code: 'SDL-001', description: 'SDL Registration / Activation (With SARS)', priceExcl: 450, priceIncl: 518 },
  { category: 'Payroll Administration', subcategory: '', code: 'UIF-002', description: 'UIF Registration (Labour Department) - U-filing', priceExcl: 2500, priceIncl: 2875 },
  { category: 'Payroll Administration', subcategory: '', code: 'PAYROL-001', description: 'Payroll administration per month (1 – 3 employees)', priceExcl: 520, priceIncl: 598 },
  { category: 'Payroll Administration', subcategory: '', code: 'PAYROL-002', description: 'Payroll administration per employee per month (4 – 10 employees)', priceExcl: 130, priceIncl: 150 },
  { category: 'Payroll Administration', subcategory: '', code: 'PAYROL-003', description: 'Payroll administration per employee per month (> 10 employees)', priceExcl: 99, priceIncl: 114 },
  { category: 'Payroll Administration', subcategory: '', code: 'PAYROL-005', description: 'Payslip Charge - (per payslip) where client administers own payroll', priceExcl: 'POR', priceIncl: 'POR' },
  { category: 'Payroll Administration', subcategory: '', code: 'UI19-002', description: 'Submission of U-filing declaration per month (where VNR administers payroll. Price bracket of 1-10 Employees)', priceExcl: 245, priceIncl: 282 },
  { category: 'Payroll Administration', subcategory: '', code: 'UI19-003', description: 'Submission of U-filing declaration per month (where VNR does not administer payroll. Price bracket 1-20 employees). Full payroll information to be provided by client', priceExcl: 1950, priceIncl: 2243 },
  { category: 'Payroll Administration', subcategory: '', code: 'UI19-001', description: 'UI19 - Termination of employment - Return on written request of client/employer, per employee, where VNR is responsible for monthly payroll, including Salary Schedule', priceExcl: 195, priceIncl: 224 },
  { category: 'Payroll Administration', subcategory: '', code: 'EMP201-001', description: 'EMP201 Submission (PAYE Return submission and payment), where VNR is not responsible for monthly payroll', priceExcl: 435, priceIncl: 500 },
  { category: 'Payroll Administration', subcategory: '', code: 'EMP201-002', description: 'EMP201 Submission (PAYE Return submission and payment), where VNR is not responsible for monthly payroll (Dormant Company/CC/Trust/Individual)', priceExcl: 250, priceIncl: 288 },
  { category: 'Payroll Administration', subcategory: '', code: 'EMP501-001', description: 'EMP501 Submission (bi-annual submissions). Included in monthly payroll fee if payroll administration is done for director only', priceExcl: 1195, priceIncl: 1374 },
  { category: 'Payroll Administration', subcategory: '', code: 'EMP501-002', description: 'EMP501 Submission (bi-annual submissions) (Dormant Company/CC/Trust/Individual)', priceExcl: 425, priceIncl: 489 },
  { category: 'Payroll Administration', subcategory: '', code: 'EMP501-003', description: 'Issue of IT3 & IRP5 per employee, where VNR is not responsible for monthly payroll', priceExcl: 295, priceIncl: 339 },
  { category: 'Payroll Administration', subcategory: '', code: 'EMPTAX-001', description: 'Employee Income Tax Registration', priceExcl: 300, priceIncl: 345 },
  { category: 'Payroll Administration', subcategory: '', code: 'EMPAUD-001', description: 'Review/Audit of EMP201 or EMP501', priceExcl: '950 per hour', priceIncl: '1093 per hour' },
  { category: 'Payroll Administration', subcategory: '', code: 'IRP3-002', description: 'IRP3 (e) - Request for tax deduction directive (severance / notice pay)', priceExcl: 420, priceIncl: 483 },
  { category: 'Payroll Administration', subcategory: '', code: 'COIDRE-001', description: 'Workman\'s Compensation Registration (Includes 1st provisional return submission & LOGS)', priceExcl: 2995, priceIncl: 3444 },
  { category: 'Payroll Administration', subcategory: '', code: 'COIDSU-001', description: 'Workman\'s Compensation Annual Return Submission - WAS 8', priceExcl: 1650, priceIncl: 1898 },
  { category: 'Payroll Administration', subcategory: '', code: 'COIDLG-001', description: 'Workman\'s Compensation Letter of Good Standing', priceExcl: 350, priceIncl: 403 },
  { category: 'Payroll Administration', subcategory: '', code: 'COIDPA-001', description: 'Workman\'s Compensation Request for payment allocation (in the event where incorrect reference number was used)', priceExcl: 2500, priceIncl: 2875 },
  { category: 'Payroll Administration', subcategory: '', code: 'COIDTE-001', description: 'Workman\'s Compensation Return Payment Terms Request', priceExcl: 2145, priceIncl: 2467 },

  // ========== Yearly Statutory Compliance Services ==========
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'EFILE-001', description: 'SARS E-filing profile request, review and report on compliance status with a recommendation report to mitigate non compliance', priceExcl: 750, priceIncl: 863 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'IRP6D-001', description: 'IRP 6 (Dormant)', priceExcl: 425, priceIncl: 489 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'IRP6C-001', description: 'IRP 6 (Pty/CC/Trust < R1 mil. taxable income)', priceExcl: 1095, priceIncl: 1259 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'IRP6C-002', description: 'IRP 6 (Pty/CC/Trust > R1 mil. taxable income) - Standard', priceExcl: 3050, priceIncl: 3508 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'IRP6C-003', description: 'IRP 6 (Pty/CC/Trust > R20 mil. taxable income) - Large', priceExcl: 5350, priceIncl: 6153 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'IT14-002', description: 'IT 14 - Income Tax Return (Dormant Company/ CC)', priceExcl: 750, priceIncl: 863 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'IT14-001', description: 'IT 14 - Income Tax Return (Active Company/ CC), turnover < R2.3 mil.', priceExcl: 1350, priceIncl: 1553 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'IT14-003', description: 'IT 14 - Income Tax Return (Active Company/ CC), turnover or nett asset value > R2.3 mil.', priceExcl: 2550, priceIncl: 2933 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'IT14-004', description: 'IT 14 - Income Tax Return (Active Company/ CC), turnover or nett asset value >R15 mil / <R20 mil.', priceExcl: 4150, priceIncl: 4773 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'IT14-005', description: 'IT 14 - Income Tax Return (Active Company/ CC), turnover or nett asset value > R20 mil.', priceExcl: 8425, priceIncl: 9689 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'SUB-002', description: 'Submission of Supporting Documentation to SARS for review', priceExcl: 695, priceIncl: 799 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'AUDIT-002', description: 'Assisting with SARS audit (detailed)', priceExcl: '1250 per hour', priceIncl: '1438 per hour' },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'DTR-001', description: 'Dividend Tax Declaration (1-3 Beneficiary stakeholders)', priceExcl: 2450, priceIncl: 2818 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'DTR-002', description: 'Dividend Tax Declaration - per extra Beneficiary', priceExcl: 450, priceIncl: 518 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'AFS-GEN2027', description: 'Annual Financial Statements : In compliance with IFRS for SME\'s (Base: General Small Entity) where VNR is responsible for monthly bookkeeping - not vat registered', priceExcl: 9995, priceIncl: 11494 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'AFS-EXT', description: 'Annual Financial Statements : In compliance with IFRS for SME\'s where VNR is not responsible for monthly bookkeeping', priceExcl: 'POR', priceIncl: 'POR' },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'TAXCAL-001', description: 'Tax Calculation : Excel Balance Sheet, Income Statement and Tax Computation. Note: In the event where SARS requires financial statements, a new fee estimate will be provided', priceExcl: 4500, priceIncl: 5175 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'AFS-MAN001', description: 'Management Statements (Standard - Minimum Charge Company/CC)', priceExcl: 4950, priceIncl: 5693 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'TAXCLE-001', description: 'Tax Clearance Certificate (application and PIN only)', priceExcl: 295, priceIncl: 339 },
  { category: 'Yearly Statutory Compliance Services', subcategory: '', code: 'ITDER-001', description: 'SARS Income Tax Deregistration', priceExcl: 1850, priceIncl: 2128 },

  // ========== CIPC Compliance ==========
  { category: 'CIPC Compliance', subcategory: '', code: 'CIPCREG-001', description: 'Private Companies (Standard Short form MOI - COR15.1A) including first minutes and up to 3 share certificates, and 3 directors (Including request for SARS profile & appointment of SARS representative Taxpayer)', priceExcl: 2850, priceIncl: 3278 },
  { category: 'CIPC Compliance', subcategory: '', code: 'CIPCNAM-001', description: 'Unsuccessful name reservation', priceExcl: 265, priceIncl: 305 },
  { category: 'CIPC Compliance', subcategory: '', code: 'CIPCMOI-001', description: 'MOI amendment (to Standard Short form)', priceExcl: 3350, priceIncl: 3853 },
  { category: 'CIPC Compliance', subcategory: '', code: 'CIPCSHA-001', description: 'Issue of Share certificates, per certificate (Including minutes)', priceExcl: 325, priceIncl: 374 },
  { category: 'CIPC Compliance', subcategory: '', code: 'CIPCSHA-002', description: 'Share Confirmation Letter', priceExcl: 875, priceIncl: 1006 },
  { category: 'CIPC Compliance', subcategory: '', code: 'CIPCNAM-002', description: 'CIPC Name Change (Pty/CC) Application and Submission', priceExcl: 1850, priceIncl: 2128 },
  { category: 'CIPC Compliance', subcategory: '', code: 'CIPCAM-001', description: 'CIPC Amendments (Change of Directors or Year end)', priceExcl: 1375, priceIncl: 1581 },
  { category: 'CIPC Compliance', subcategory: '', code: 'CIPCAM-002', description: 'CIPC Amendments (Change of Registered Particulars)', priceExcl: 450, priceIncl: 518 },
  { category: 'CIPC Compliance', subcategory: '', code: 'CIPCDIS-001', description: 'CIPC Company Disclosure', priceExcl: 195, priceIncl: 224 },
  { category: 'CIPC Compliance', subcategory: '', code: 'CIPCDER-001', description: 'CIPC - Deregistration of Company', priceExcl: 2450, priceIncl: 2818 },
  { category: 'CIPC Compliance', subcategory: '', code: 'CIPCRES-001', description: 'CIPC Restoration of CC/Company (Excluding outstanding annual returns and CIPC Fees)', priceExcl: 2995, priceIncl: 3444 },
  { category: 'CIPC Compliance', subcategory: '', code: 'CIPCCON-001', description: 'CIPC - CC to PTY Conversion', priceExcl: 3350, priceIncl: 3853 },
  { category: 'CIPC Compliance', subcategory: '', code: 'CIPCAN-001', description: 'Annual VNR Company Administration Fee. VNR Responsible for submission of Annual Return and basic Beneficial Ownership (where no changes must be made) - excluding CIPC fee', priceExcl: 1800, priceIncl: 2070 },
  { category: 'CIPC Compliance', subcategory: '', code: 'BOS-001', description: 'Beneficial Ownership Submission, VNR responsible for secretarial, all shareholders natural persons', priceExcl: 1450, priceIncl: 1668 },
  { category: 'CIPC Compliance', subcategory: '', code: 'BOS-002', description: 'Beneficial Ownership Submission, VNR not responsible secretarial work, shareholders natural persons (up to 3)', priceExcl: 1750, priceIncl: 2013 },
  { category: 'CIPC Compliance', subcategory: '', code: 'BOS-003', description: 'Beneficial Ownership Submission - Per additional shareholder, VNR not responsible for shareholders BOS', priceExcl: 375, priceIncl: 431 },
  { category: 'CIPC Compliance', subcategory: '', code: 'CIPCDOC-001', description: 'Request for Registration Documents - Cor14.3 Document', priceExcl: 450, priceIncl: 518 },

  // ========== SARS and Secretarial Assistance ==========
  { category: 'SARS and Secretarial Assistance', subcategory: '', code: 'NAMECH-001', description: 'SARS Name change (Company/CC)', priceExcl: 850, priceIncl: 978 },
  { category: 'SARS and Secretarial Assistance', subcategory: '', code: 'SARSREP-001', description: 'Appointment or change of existing Representative Taxpayer/Public Officer with SARS - (through E-filing/online query system)', priceExcl: 1250, priceIncl: 1438 },
  { category: 'SARS and Secretarial Assistance', subcategory: '', code: 'SARSREP-002', description: 'Appointment or change of existing Representative Taxpayer/Public Officer with SARS - (by appointment)', priceExcl: '600 per hour', priceIncl: '690 per hour' },
  { category: 'SARS and Secretarial Assistance', subcategory: '', code: 'SARSCER-001', description: 'Printing of SARS Registration Certificates (per certificate)', priceExcl: 150, priceIncl: 173 },
  { category: 'SARS and Secretarial Assistance', subcategory: '', code: 'SARSBD-001', description: 'Change of Bank Details (Virtual appointment with SARS)', priceExcl: 1350, priceIncl: 1553 },
  { category: 'SARS and Secretarial Assistance', subcategory: '', code: 'SARSBD-002', description: 'Change of Bank Details (Through E-filing)', priceExcl: 250, priceIncl: 288 },
  { category: 'SARS and Secretarial Assistance', subcategory: '', code: 'LET-001', description: 'Minimum Charge for VNR Letter', priceExcl: 345, priceIncl: 397 },
  { category: 'SARS and Secretarial Assistance', subcategory: '', code: 'SARS-STT-001', description: 'SARS Share Transfer Tax Appl & Sub (VNR is not responsible for negotiations & transactions)', priceExcl: 2350, priceIncl: 2703 },
  { category: 'SARS and Secretarial Assistance', subcategory: '', code: 'SARS-STT-002', description: 'SARS Share Transfer Tax App & Sub - where VNR is responsible for complete transaction', priceExcl: 1125, priceIncl: 1294 },
  { category: 'SARS and Secretarial Assistance', subcategory: '', code: 'CREDIT-001', description: 'Credit Check', priceExcl: 520, priceIncl: 598 },
  { category: 'SARS and Secretarial Assistance', subcategory: '', code: 'STAT-001', description: 'Completion of STATS SA documentation - client to provide accurate information where applicable', priceExcl: 950, priceIncl: 1093 },
  { category: 'SARS and Secretarial Assistance', subcategory: '', code: 'BBBEEE-001', description: 'BBBEE Declaration, for EME\'s, confirmation (VNR / Standard Form)', priceExcl: 625, priceIncl: 719 },
  { category: 'SARS and Secretarial Assistance', subcategory: '', code: 'AUDITPROP-001', description: 'Audit report for property purchase (min charge)', priceExcl: 2145, priceIncl: 2467 },

  // ========== Trusts & Last Will & Testament ==========
  { category: 'Trusts & Last Will & Testament', subcategory: '', code: 'TRUSTREG-001', description: 'Inter-Vivos Trust Registration', priceExcl: 13650, priceIncl: 15698 },
  { category: 'Trusts & Last Will & Testament', subcategory: '', code: 'INCOMEREG-001', description: 'SARS Income Tax Registration - Trust', priceExcl: 1895, priceIncl: 2179 },
  { category: 'Trusts & Last Will & Testament', subcategory: '', code: 'IT12TR-001', description: 'IT 12 TR - Income Tax Return (Active Trust)', priceExcl: 2950, priceIncl: 3393 },
  { category: 'Trusts & Last Will & Testament', subcategory: '', code: 'IT12TR-002', description: 'IT 12 TR - Income Tax Return (Dormant Trust) - Includes submission of supporting docs', priceExcl: 1150, priceIncl: 1323 },
  { category: 'Trusts & Last Will & Testament', subcategory: '', code: 'TESTDRAFT-001', description: 'Drafting of Last Will & Testament (VNR Executor of Will)', priceExcl: 'FREE', priceIncl: 'FREE' },
  { category: 'Trusts & Last Will & Testament', subcategory: '', code: 'TESTDRAFT-002', description: 'Drafting of Last Will & Testament (Own Executor)', priceExcl: 2295, priceIncl: 2639 },
  { category: 'Trusts & Last Will & Testament', subcategory: '', code: 'DEC-001', description: 'Deceased Estate - Submission and Request for Post Death Registration and DEC Certificate', priceExcl: 2695, priceIncl: 3099 },
  { category: 'Trusts & Last Will & Testament', subcategory: '', code: 'DEC-002', description: 'Deceased Estate SARS Coding - Compile post death documentation, review and submit to SARS for coding', priceExcl: 4950, priceIncl: 5693 },

  // ========== Non-Profit Organisations ==========
  { category: 'Non-Profit Organisations', subcategory: '', code: 'CIPCNPC-001', description: 'CIPC - Non-Profit Company registration Standard MOI, without members', priceExcl: 2850, priceIncl: 3278 },
  { category: 'Non-Profit Organisations', subcategory: '', code: 'IT12EI-001', description: 'IT 12 EI - Income Tax Return (Non Profit Organisation)', priceExcl: 1295, priceIncl: 1489 },
  { category: 'Non-Profit Organisations', subcategory: '', code: 'SEC18A-001', description: 'Section 18A Reconcilliation', priceExcl: '450 per hour', priceIncl: '517.50 per hour' },
  { category: 'Non-Profit Organisations', subcategory: '', code: 'PBOREG-001', description: 'SARS PBO Registration (tax exemption application)', priceExcl: 5525, priceIncl: 6354 },
  { category: 'Non-Profit Organisations', subcategory: '', code: 'ART18A-001', description: 'Application for Art18A aproval', priceExcl: 2450, priceIncl: 2818 },
  { category: 'Non-Profit Organisations', subcategory: '', code: 'NPOREG-001', description: 'NPO Registration with the Department of Social Development (Includes submission and 1 x visit - allow sufficient time for registration, up to 6 months)', priceExcl: 2750, priceIncl: 3163 },

  // ========== Hourly Tariffs ==========
  { category: 'Hourly Tariffs', subcategory: '', code: 'SEC-001', description: 'General Secretarial and Administration', priceExcl: 330, priceIncl: 380 },
  { category: 'Hourly Tariffs', subcategory: '', code: 'JUN-001', description: 'Junior Accountant / Bookkeeper', priceExcl: 350, priceIncl: 403 },
  { category: 'Hourly Tariffs', subcategory: '', code: 'ACC-001', description: 'Accountant / Bookkeeper', priceExcl: 575, priceIncl: 661 },
  { category: 'Hourly Tariffs', subcategory: '', code: 'QUA-001', description: 'Qualified Accountant & Tax Consultant', priceExcl: 735, priceIncl: 845 },
  { category: 'Hourly Tariffs', subcategory: '', code: 'ACC-002', description: 'Accounting & Tax Manager', priceExcl: 1250, priceIncl: 1438 },
  { category: 'Hourly Tariffs', subcategory: '', code: 'DIR-001', description: 'Director', priceExcl: 2250, priceIncl: 2588 },

  // ========== Subscription Fees & Disbursements ==========
  { category: 'Subscription Fees & Disbursements', subcategory: '', code: 'DEXT-001', description: 'DEXT (per user)', priceExcl: 265, priceIncl: 305 },
  { category: 'Subscription Fees & Disbursements', subcategory: '', code: 'SAGE-001', description: 'Sage One Subscription (Company and 1 x User)', priceExcl: 378, priceIncl: 435 },
  { category: 'Subscription Fees & Disbursements', subcategory: '', code: 'SAGE-002', description: 'Sage One Subscription (Additional Company)', priceExcl: 357, priceIncl: 410 },
  { category: 'Subscription Fees & Disbursements', subcategory: '', code: 'SAGE-003', description: 'Sage One Subscription (Additional User)', priceExcl: 65, priceIncl: 75 },
  { category: 'Subscription Fees & Disbursements', subcategory: '', code: 'SAGE-004', description: 'Sage One Subscription (Multi-Currency Module)', priceExcl: 143, priceIncl: 165 },
  { category: 'Subscription Fees & Disbursements', subcategory: '', code: 'SAGE-005', description: 'Sage One Subscription (Time Tracking Module)', priceExcl: 143, priceIncl: 165 },
  { category: 'Subscription Fees & Disbursements', subcategory: '', code: 'SAGE-006', description: 'Sage One Subscription (Inventory)', priceExcl: 361, priceIncl: 415 },
  { category: 'Subscription Fees & Disbursements', subcategory: '', code: 'SAGE-007', description: 'Sage One Subscription (Journal Processing and 1 x User)', priceExcl: 109, priceIncl: 125 },
  { category: 'Subscription Fees & Disbursements', subcategory: '', code: 'XERO-001', description: 'XERO - Standard', priceExcl: 691, priceIncl: 795 },
  { category: 'Subscription Fees & Disbursements', subcategory: '', code: 'SOFT-001', description: 'Software installation and training', priceExcl: 695, priceIncl: 799 },
  { category: 'Subscription Fees & Disbursements', subcategory: '', code: 'TRA-001', description: 'Travel cost per km', priceExcl: 12, priceIncl: 13 },
];

export const defaultPricingCatalog: PricingCatalog = {
  version: 1,
  effectiveLabel: pricingEffectiveLabel,
  categories: [...pricingCategories],
  services: pricingData,
};

export function deriveSubcategories(services: PricingService[], category: string): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const service of services) {
    if (service.category !== category) continue;
    const subcategory = service.subcategory?.trim();
    if (!subcategory || seen.has(subcategory)) continue;
    seen.add(subcategory);
    result.push(subcategory);
  }

  return result;
}

