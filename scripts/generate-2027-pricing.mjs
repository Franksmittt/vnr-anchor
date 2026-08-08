import fs from 'node:fs';

const categories = [
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
];

/** @type {Array<[string, string, string, string|number, string|number]>} */
const rows = [
  // Personal Tax Services
  ['Personal Tax Services', '', 'IRP6I-001', 'IRP 6 (Individual with no trading income)', 550, 633],
  ['Personal Tax Services', '', 'IRP6I-002', 'IRP 6 (Individual with trading income)', 785, 903],
  ['Personal Tax Services', '', 'IT12I-001', 'IT12 Basic Salary Earner - IRP5 with Medical expenses, PF and-/or RAF contributions', 1250, 1438],
  ['Personal Tax Services', '', 'IT12I-002', 'IT12 Tax Return with Travel Allowance / Company Car (Valid log book required)', 1750, 2013],
  ['Personal Tax Services', 'Additional Add-on Services', 'IT12I-003', 'Rental income (up to 3 units)', 1250, 1438],
  ['Personal Tax Services', 'Additional Add-on Services', 'IT12I-004', "Investment Income (Up to 3 IT3'b)", 365, 420],
  ['Personal Tax Services', 'Additional Add-on Services', 'IT12I-005', 'Trade Income', 'POR', 'POR'],
  ['Personal Tax Services', 'Additional Add-on Services', 'IT12I-006', 'Capital Gains Calculation', 'POR', 'POR'],
  ['Personal Tax Services', 'Additional Add-on Services', 'IT12I-007', "Statement of Assets & Liabilities. SARS requires the following persons to submit a detailed statement of assets and liabilities on an annual basis: Directors of Companies, Members of CC's, Persons earning Business Income", 550, 633],
  ['Personal Tax Services', '', 'IT12EX-001', 'Various Income earners and expats', 'POR', 'POR'],
  ['Personal Tax Services', '', 'IRP3-001', 'IRP3 (a)/(d) - Request for tax deduction directive (commision and independent contractors - fixed %)', 2895, 3329],
  ['Personal Tax Services', '', 'SUB-001', 'Submission of Supporting Documentation to SARS for review (1st basic submission)', 495, 569],
  ['Personal Tax Services', '', 'AUDIT-001', 'Assisting with SARS review/audit', '950 per hour', '1093 per hour'],
  ['Personal Tax Services', '', 'SARSMI-001', 'SARS Tax Migration Application', 3795, 4364],
  ['Personal Tax Services', '', 'INC-001', 'Income Confirmation (for existing VNR client)', 1250, 1438],
  ['Personal Tax Services', '', 'INC-002', 'Income Confirmation (for new and non VNR clients)', 'POR', 'POR'],

  // Domestic Registrations and Returns
  ['Domestic Registrations and Returns', '', 'UIF-001', 'UIF Registration', 1550, 1783],
  ['Domestic Registrations and Returns', '', 'COID-001', 'Workmans Compensation Registration (Includes 1st provisional return submission & LOGS)', 1250, 1438],
  ['Domestic Registrations and Returns', '', 'PAYROL-DOM', 'Payroll administration - Domestic / Gardener (Includes payslip, reports, U-filings submission & request/debit push payment). Note: Signing a 12-month debit order includes the COIDA annual return submission and LOGS, but excludes the COIDA fee itself.', 350, 403],
  ['Domestic Registrations and Returns', '', 'WAS8-DOM', "WAS 8 - Annual Workman's Compensation Return Submission", 'Included if VNR administers payroll', 'Included if VNR administers payroll'],
  ['Domestic Registrations and Returns', '', 'COIDLG-DOM', 'COID - Letter of Good Standing', 'Included if VNR administers payroll', 'Included if VNR administers payroll'],
  ['Domestic Registrations and Returns', '', 'UI19-DOM', 'UI19 - Termination. Return on written request of client/employer, per employee, where VNR is responsible for monthly payroll, including Salary Schedule', 'Included if VNR administers payroll', 'Included if VNR administers payroll'],

  // VAT Administration
  ['VAT Administration', '', 'VATREG-001', 'VAT Registration', 4295, 4939],
  ['VAT Administration', '', 'VATDER-001', 'VAT Deregistration', 2550, 2933],
  ['VAT Administration', '', 'CUSTOMS-001', 'SARS Import / Export Licence (Customs Registration)', 1995, 2294],
  ['VAT Administration', '', 'APN-001', 'SARS Customs - APN Request', 450, 518],
  ['VAT Administration', '', 'SARSVAT-001', 'VAT 201 - Submission and payment of VAT return', 895, 1029],
  ['VAT Administration', '', 'SARSVAT-002', 'VAT201 - Submission (Dormant Company/CC/Trust/Individual)', 250, 288],
  ['VAT Administration', '', 'SARSVAT-003', 'SARS VAT Audit / Review Query', '950 per hour', '1093 per hour'],

  // Payroll Administration
  ['Payroll Administration', '', 'PAYEREG-001', 'PAYE Registration', 950, 1093],
  ['Payroll Administration', '', 'PAYEDER-001', 'PAYE Deregistration', 2550, 2933],
  ['Payroll Administration', '', 'SDL-001', 'SDL Registration / Activation (With SARS)', 450, 518],
  ['Payroll Administration', '', 'UIF-002', 'UIF Registration (Labour Department) - U-filing', 2500, 2875],
  ['Payroll Administration', '', 'PAYROL-001', 'Payroll administration per month (1 – 3 employees)', 520, 598],
  ['Payroll Administration', '', 'PAYROL-002', 'Payroll administration per employee per month (4 – 10 employees)', 130, 150],
  ['Payroll Administration', '', 'PAYROL-003', 'Payroll administration per employee per month (> 10 employees)', 99, 114],
  ['Payroll Administration', '', 'PAYROL-005', 'Payslip Charge - (per payslip) where client administers own payroll', 'POR', 'POR'],
  ['Payroll Administration', '', 'UI19-002', 'Submission of U-filing declaration per month (where VNR administers payroll. Price bracket of 1-10 Employees)', 245, 282],
  ['Payroll Administration', '', 'UI19-003', 'Submission of U-filing declaration per month (where VNR does not administer payroll. Price bracket 1-20 employees). Full payroll information to be provided by client', 1950, 2243],
  ['Payroll Administration', '', 'UI19-001', 'UI19 - Termination of employment - Return on written request of client/employer, per employee, where VNR is responsible for monthly payroll, including Salary Schedule', 195, 224],
  ['Payroll Administration', '', 'EMP201-001', 'EMP201 Submission (PAYE Return submission and payment), where VNR is not responsible for monthly payroll', 435, 500],
  ['Payroll Administration', '', 'EMP201-002', 'EMP201 Submission (PAYE Return submission and payment), where VNR is not responsible for monthly payroll (Dormant Company/CC/Trust/Individual)', 250, 288],
  ['Payroll Administration', '', 'EMP501-001', 'EMP501 Submission (bi-annual submissions). Included in monthly payroll fee if payroll administration is done for director only', 1195, 1374],
  ['Payroll Administration', '', 'EMP501-002', 'EMP501 Submission (bi-annual submissions) (Dormant Company/CC/Trust/Individual)', 425, 489],
  ['Payroll Administration', '', 'EMP501-003', 'Issue of IT3 & IRP5 per employee, where VNR is not responsible for monthly payroll', 295, 339],
  ['Payroll Administration', '', 'EMPTAX-001', 'Employee Income Tax Registration', 300, 345],
  ['Payroll Administration', '', 'EMPAUD-001', 'Review/Audit of EMP201 or EMP501', '950 per hour', '1093 per hour'],
  ['Payroll Administration', '', 'IRP3-002', 'IRP3 (e) - Request for tax deduction directive (severance / notice pay)', 420, 483],
  ['Payroll Administration', '', 'COIDRE-001', "Workman's Compensation Registration (Includes 1st provisional return submission & LOGS)", 2995, 3444],
  ['Payroll Administration', '', 'COIDSU-001', "Workman's Compensation Annual Return Submission - WAS 8", 1650, 1898],
  ['Payroll Administration', '', 'COIDLG-001', "Workman's Compensation Letter of Good Standing", 350, 403],
  ['Payroll Administration', '', 'COIDPA-001', "Workman's Compensation Request for payment allocation (in the event where incorrect reference number was used)", 2500, 2875],
  ['Payroll Administration', '', 'COIDTE-001', "Workman's Compensation Return Payment Terms Request", 2145, 2467],

  // Yearly Statutory Compliance Services
  ['Yearly Statutory Compliance Services', '', 'EFILE-001', 'SARS E-filing profile request, review and report on compliance status with a recommendation report to mitigate non compliance', 750, 863],
  ['Yearly Statutory Compliance Services', '', 'IRP6D-001', 'IRP 6 (Dormant)', 425, 489],
  ['Yearly Statutory Compliance Services', '', 'IRP6C-001', 'IRP 6 (Pty/CC/Trust < R1 mil. taxable income)', 1095, 1259],
  ['Yearly Statutory Compliance Services', '', 'IRP6C-002', 'IRP 6 (Pty/CC/Trust > R1 mil. taxable income) - Standard', 3050, 3508],
  ['Yearly Statutory Compliance Services', '', 'IRP6C-003', 'IRP 6 (Pty/CC/Trust > R20 mil. taxable income) - Large', 5350, 6153],
  ['Yearly Statutory Compliance Services', '', 'IT14-002', 'IT 14 - Income Tax Return (Dormant Company/ CC)', 750, 863],
  ['Yearly Statutory Compliance Services', '', 'IT14-001', 'IT 14 - Income Tax Return (Active Company/ CC), turnover < R2.3 mil.', 1350, 1553],
  ['Yearly Statutory Compliance Services', '', 'IT14-003', 'IT 14 - Income Tax Return (Active Company/ CC), turnover or nett asset value > R2.3 mil.', 2550, 2933],
  ['Yearly Statutory Compliance Services', '', 'IT14-004', 'IT 14 - Income Tax Return (Active Company/ CC), turnover or nett asset value >R15 mil / <R20 mil.', 4150, 4773],
  ['Yearly Statutory Compliance Services', '', 'IT14-005', 'IT 14 - Income Tax Return (Active Company/ CC), turnover or nett asset value > R20 mil.', 8425, 9689],
  ['Yearly Statutory Compliance Services', '', 'SUB-002', 'Submission of Supporting Documentation to SARS for review', 695, 799],
  ['Yearly Statutory Compliance Services', '', 'AUDIT-002', 'Assisting with SARS audit (detailed)', '1250 per hour', '1438 per hour'],
  ['Yearly Statutory Compliance Services', '', 'DTR-001', 'Dividend Tax Declaration (1-3 Beneficiary stakeholders)', 2450, 2818],
  ['Yearly Statutory Compliance Services', '', 'DTR-002', 'Dividend Tax Declaration - per extra Beneficiary', 450, 518],
  ['Yearly Statutory Compliance Services', '', 'AFS-GEN2027', "Annual Financial Statements : In compliance with IFRS for SME's (Base: General Small Entity) where VNR is responsible for monthly bookkeeping - not vat registered", 9995, 11494],
  ['Yearly Statutory Compliance Services', '', 'AFS-EXT', "Annual Financial Statements : In compliance with IFRS for SME's where VNR is not responsible for monthly bookkeeping", 'POR', 'POR'],
  ['Yearly Statutory Compliance Services', '', 'TAXCAL-001', 'Tax Calculation : Excel Balance Sheet, Income Statement and Tax Computation. Note: In the event where SARS requires financial statements, a new fee estimate will be provided', 4500, 5175],
  ['Yearly Statutory Compliance Services', '', 'AFS-MAN001', 'Management Statements (Standard - Minimum Charge Company/CC)', 4950, 5693],
  ['Yearly Statutory Compliance Services', '', 'TAXCLE-001', 'Tax Clearance Certificate (application and PIN only)', 295, 339],
  ['Yearly Statutory Compliance Services', '', 'ITDER-001', 'SARS Income Tax Deregistration', 1850, 2128],

  // CIPC Compliance
  ['CIPC Compliance', '', 'CIPCREG-001', 'Private Companies (Standard Short form MOI - COR15.1A) including first minutes and up to 3 share certificates, and 3 directors (Including request for SARS profile & appointment of SARS representative Taxpayer)', 2850, 3278],
  ['CIPC Compliance', '', 'CIPCNAM-001', 'Unsuccessful name reservation', 265, 305],
  ['CIPC Compliance', '', 'CIPCMOI-001', 'MOI amendment (to Standard Short form)', 3350, 3853],
  ['CIPC Compliance', '', 'CIPCSHA-001', 'Issue of Share certificates, per certificate (Including minutes)', 325, 374],
  ['CIPC Compliance', '', 'CIPCSHA-002', 'Share Confirmation Letter', 875, 1006],
  ['CIPC Compliance', '', 'CIPCNAM-002', 'CIPC Name Change (Pty/CC) Application and Submission', 1850, 2128],
  ['CIPC Compliance', '', 'CIPCAM-001', 'CIPC Amendments (Change of Directors or Year end)', 1375, 1581],
  ['CIPC Compliance', '', 'CIPCAM-002', 'CIPC Amendments (Change of Registered Particulars)', 450, 518],
  ['CIPC Compliance', '', 'CIPCDIS-001', 'CIPC Company Disclosure', 195, 224],
  ['CIPC Compliance', '', 'CIPCDER-001', 'CIPC - Deregistration of Company', 2450, 2818],
  ['CIPC Compliance', '', 'CIPCRES-001', 'CIPC Restoration of CC/Company (Excluding outstanding annual returns and CIPC Fees)', 2995, 3444],
  ['CIPC Compliance', '', 'CIPCCON-001', 'CIPC - CC to PTY Conversion', 3350, 3853],
  ['CIPC Compliance', '', 'CIPCAN-001', 'Annual VNR Company Administration Fee. VNR Responsible for submission of Annual Return and basic Beneficial Ownership (where no changes must be made) - excluding CIPC fee', 1800, 2070],
  ['CIPC Compliance', '', 'BOS-001', 'Beneficial Ownership Submission, VNR responsible for secretarial, all shareholders natural persons', 1450, 1668],
  ['CIPC Compliance', '', 'BOS-002', 'Beneficial Ownership Submission, VNR not responsible secretarial work, shareholders natural persons (up to 3)', 1750, 2013],
  ['CIPC Compliance', '', 'BOS-003', 'Beneficial Ownership Submission - Per additional shareholder, VNR not responsible for shareholders BOS', 375, 431],
  ['CIPC Compliance', '', 'CIPCDOC-001', 'Request for Registration Documents - Cor14.3 Document', 450, 518],

  // SARS and Secretarial Assistance
  ['SARS and Secretarial Assistance', '', 'NAMECH-001', 'SARS Name change (Company/CC)', 850, 978],
  ['SARS and Secretarial Assistance', '', 'SARSREP-001', 'Appointment or change of existing Representative Taxpayer/Public Officer with SARS - (through E-filing/online query system)', 1250, 1438],
  ['SARS and Secretarial Assistance', '', 'SARSREP-002', 'Appointment or change of existing Representative Taxpayer/Public Officer with SARS - (by appointment)', '600 per hour', '690 per hour'],
  ['SARS and Secretarial Assistance', '', 'SARSCER-001', 'Printing of SARS Registration Certificates (per certificate)', 150, 173],
  ['SARS and Secretarial Assistance', '', 'SARSBD-001', 'Change of Bank Details (Virtual appointment with SARS)', 1350, 1553],
  ['SARS and Secretarial Assistance', '', 'SARSBD-002', 'Change of Bank Details (Through E-filing)', 250, 288],
  ['SARS and Secretarial Assistance', '', 'LET-001', 'Minimum Charge for VNR Letter', 345, 397],
  ['SARS and Secretarial Assistance', '', 'SARS-STT-001', 'SARS Share Transfer Tax Appl & Sub (VNR is not responsible for negotiations & transactions)', 2350, 2703],
  ['SARS and Secretarial Assistance', '', 'SARS-STT-002', 'SARS Share Transfer Tax App & Sub - where VNR is responsible for complete transaction', 1125, 1294],
  ['SARS and Secretarial Assistance', '', 'CREDIT-001', 'Credit Check', 520, 598],
  ['SARS and Secretarial Assistance', '', 'STAT-001', 'Completion of STATS SA documentation - client to provide accurate information where applicable', 950, 1093],
  ['SARS and Secretarial Assistance', '', 'BBBEEE-001', "BBBEE Declaration, for EME's, confirmation (VNR / Standard Form)", 625, 719],
  ['SARS and Secretarial Assistance', '', 'AUDITPROP-001', 'Audit report for property purchase (min charge)', 2145, 2467],

  // Trusts & Last Will & Testament
  ['Trusts & Last Will & Testament', '', 'TRUSTREG-001', 'Inter-Vivos Trust Registration', 13650, 15698],
  ['Trusts & Last Will & Testament', '', 'INCOMEREG-001', 'SARS Income Tax Registration - Trust', 1895, 2179],
  ['Trusts & Last Will & Testament', '', 'IT12TR-001', 'IT 12 TR - Income Tax Return (Active Trust)', 2950, 3393],
  ['Trusts & Last Will & Testament', '', 'IT12TR-002', 'IT 12 TR - Income Tax Return (Dormant Trust) - Includes submission of supporting docs', 1150, 1323],
  ['Trusts & Last Will & Testament', '', 'TESTDRAFT-001', 'Drafting of Last Will & Testament (VNR Executor of Will)', 'FREE', 'FREE'],
  ['Trusts & Last Will & Testament', '', 'TESTDRAFT-002', 'Drafting of Last Will & Testament (Own Executor)', 2295, 2639],
  ['Trusts & Last Will & Testament', '', 'DEC-001', 'Deceased Estate - Submission and Request for Post Death Registration and DEC Certificate', 2695, 3099],
  ['Trusts & Last Will & Testament', '', 'DEC-002', 'Deceased Estate SARS Coding - Compile post death documentation, review and submit to SARS for coding', 4950, 5693],

  // Non-Profit Organisations
  ['Non-Profit Organisations', '', 'CIPCNPC-001', 'CIPC - Non-Profit Company registration Standard MOI, without members', 2850, 3278],
  ['Non-Profit Organisations', '', 'IT12EI-001', 'IT 12 EI - Income Tax Return (Non Profit Organisation)', 1295, 1489],
  ['Non-Profit Organisations', '', 'SEC18A-001', 'Section 18A Reconcilliation', '450 per hour', '517.50 per hour'],
  ['Non-Profit Organisations', '', 'PBOREG-001', 'SARS PBO Registration (tax exemption application)', 5525, 6354],
  ['Non-Profit Organisations', '', 'ART18A-001', 'Application for Art18A aproval', 2450, 2818],
  ['Non-Profit Organisations', '', 'NPOREG-001', 'NPO Registration with the Department of Social Development (Includes submission and 1 x visit - allow sufficient time for registration, up to 6 months)', 2750, 3163],

  // Hourly Tariffs
  ['Hourly Tariffs', '', 'SEC-001', 'General Secretarial and Administration', 330, 380],
  ['Hourly Tariffs', '', 'JUN-001', 'Junior Accountant / Bookkeeper', 350, 403],
  ['Hourly Tariffs', '', 'ACC-001', 'Accountant / Bookkeeper', 575, 661],
  ['Hourly Tariffs', '', 'QUA-001', 'Qualified Accountant & Tax Consultant', 735, 845],
  ['Hourly Tariffs', '', 'ACC-002', 'Accounting & Tax Manager', 1250, 1438],
  ['Hourly Tariffs', '', 'DIR-001', 'Director', 2250, 2588],

  // Subscription Fees & Disbursements
  ['Subscription Fees & Disbursements', '', 'DEXT-001', 'DEXT (per user)', 265, 305],
  ['Subscription Fees & Disbursements', '', 'SAGE-001', 'Sage One Subscription (Company and 1 x User)', 378, 435],
  ['Subscription Fees & Disbursements', '', 'SAGE-002', 'Sage One Subscription (Additional Company)', 357, 410],
  ['Subscription Fees & Disbursements', '', 'SAGE-003', 'Sage One Subscription (Additional User)', 65, 75],
  ['Subscription Fees & Disbursements', '', 'SAGE-004', 'Sage One Subscription (Multi-Currency Module)', 143, 165],
  ['Subscription Fees & Disbursements', '', 'SAGE-005', 'Sage One Subscription (Time Tracking Module)', 143, 165],
  ['Subscription Fees & Disbursements', '', 'SAGE-006', 'Sage One Subscription (Inventory)', 361, 415],
  ['Subscription Fees & Disbursements', '', 'SAGE-007', 'Sage One Subscription (Journal Processing and 1 x User)', 109, 125],
  ['Subscription Fees & Disbursements', '', 'XERO-001', 'XERO - Standard', 691, 795],
  ['Subscription Fees & Disbursements', '', 'SOFT-001', 'Software installation and training', 695, 799],
  ['Subscription Fees & Disbursements', '', 'TRA-001', 'Travel cost per km', 12, 13],
];

function formatValue(value) {
  if (typeof value === 'number') return String(value);
  return `'${String(value).replace(/'/g, "\\'")}'`;
}

function formatRow([category, subcategory, code, description, priceExcl, priceIncl]) {
  const safeDescription = description.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return `  { category: '${category.replace(/'/g, "\\'")}', subcategory: '${subcategory.replace(/'/g, "\\'")}', code: '${code}', description: '${safeDescription}', priceExcl: ${formatValue(priceExcl)}, priceIncl: ${formatValue(priceIncl)} },`;
}

const lines = [];
lines.push('/**');
lines.push(' * VNR Price List – 1 Aug 2026 to 31 Jul 2027.');
lines.push(' * Source: VNR Price List 2027 PDF.');
lines.push(' */');
lines.push('');
lines.push('export interface PricingService {');
lines.push('  category: string;');
lines.push('  subcategory: string;');
lines.push('  code: string;');
lines.push('  description: string;');
lines.push('  priceExcl: string | number;');
lines.push('  priceIncl: string | number;');
lines.push('}');
lines.push('');
lines.push('export interface PricingCatalog {');
lines.push('  version: 1;');
lines.push('  effectiveLabel: string;');
lines.push('  categories: string[];');
lines.push('  services: PricingService[];');
lines.push('}');
lines.push('');
lines.push('export const pricingEffectiveLabel = \'1 Aug 2026 – 31 Jul 2027\';');
lines.push('');
lines.push('export const pricingCategories = [');
for (const category of categories) {
  lines.push(`  '${category.replace(/'/g, "\\'")}',`);
}
lines.push('] as const;');
lines.push('');
lines.push('export type PricingCategory = (typeof pricingCategories)[number] | string;');
lines.push('');
lines.push('export const pricingData: PricingService[] = [');

let currentCategory = '';
for (const row of rows) {
  if (row[0] !== currentCategory) {
    currentCategory = row[0];
    lines.push('');
    lines.push(`  // ========== ${currentCategory} ==========`);
  }
  lines.push(formatRow(row));
}

lines.push('];');
lines.push('');
lines.push('export const defaultPricingCatalog: PricingCatalog = {');
lines.push('  version: 1,');
lines.push('  effectiveLabel: pricingEffectiveLabel,');
lines.push('  categories: [...pricingCategories],');
lines.push('  services: pricingData,');
lines.push('};');
lines.push('');
lines.push('export function deriveSubcategories(services: PricingService[], category: string): string[] {');
lines.push('  const seen = new Set<string>();');
lines.push('  const result: string[] = [];');
lines.push('');
lines.push('  for (const service of services) {');
lines.push('    if (service.category !== category) continue;');
lines.push('    const subcategory = service.subcategory?.trim();');
lines.push('    if (!subcategory || seen.has(subcategory)) continue;');
lines.push('    seen.add(subcategory);');
lines.push('    result.push(subcategory);');
lines.push('  }');
lines.push('');
lines.push('  return result;');
lines.push('}');
lines.push('');

fs.writeFileSync('data/pricing-data.ts', `${lines.join('\n')}\n`);
console.log(`Wrote ${rows.length} services across ${categories.length} categories`);
