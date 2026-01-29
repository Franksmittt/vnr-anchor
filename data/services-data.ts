// data/services-data.ts
import { teamData } from './team-data';

export interface FAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  icon: string;
  details: string[];
  leadExpert: (typeof teamData)[0];
  content: string;
  faqs: FAQ[];
}

export const servicesData: Service[] = [
  {
    slug: 'secretarial-services',
    title: 'Secretarial Services: Keep Your Business Compliant',
    subtitle: 'We understand that CIPC paperwork can feel like a maze. Let us handle the administrative burden so you can focus on what you do best: running your business.',
    imageUrl: '/images/services/company-secretarial.jpg',
    icon: 'FileText',
    details: ['CIPC Amendments & Annual Returns', 'Director & Member Changes', 'Registered Office Maintenance', 'Statutory Record Keeping'],
    leadExpert: teamData.find(m => m.slug === 'charlie-naude')!,
    content: `
      <p class="text-lg text-slate-600 mb-6">We understand that keeping up with CIPC requirements can feel overwhelming. You\'re busy building your business, and the last thing you need is paperwork piling up. That\'s where we step in. We handle all the administrative tasks like filing annual returns, updating director information, and maintaining your records, so you can sleep soundly knowing your business stays compliant. We serve clients <strong>across South Africa</strong>.</p>
      
      <h2 class="text-3xl font-bold text-slate-900 tracking-tight mt-12 mb-6">How We Keep Your Business Compliant</h2>
      <p class="mb-8 text-slate-600">Think of us as your compliance partner. We stay on top of deadlines, handle the paperwork, and make sure everything is filed correctly and on time.</p>
      
      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">CIPC Annual Returns & Compliance</h3>
      <p class="mb-4 text-slate-600">Every company registered in South Africa must file annual returns with the CIPC. Failure to do so can result in late-filing penalties, and if a company fails to file for two or more consecutive years, the CIPC can begin deregistration proceedings. We ensure your returns are filed accurately and on time.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Timely submission of <strong>CIPC annual returns</strong> to avoid penalties and deregistration risks.</li>
          <li>Preparation and filing of all required CIPC documentation.</li>
          <li>Monitoring of filing deadlines and proactive reminders.</li>
          <li>Resolution of any compliance issues or penalties.</li>
      </ul>

      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Director & Member Amendments</h3>
      <p class="mb-4 text-slate-600">Changes to your company's directors, members, or shareholders must be properly recorded with the CIPC. We handle all amendments efficiently, ensuring your company records remain accurate and up-to-date.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Processing director appointments and resignations.</li>
          <li>Member and shareholder changes.</li>
          <li>Updating company information and registered details.</li>
          <li>Filing all necessary CIPC forms and documentation.</li>
      </ul>

      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Registered Office & Statutory Records</h3>
      <p class="mb-4 text-slate-600">Every company must maintain a registered office address and keep proper statutory records. We help you maintain compliance with all statutory requirements.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Registered office address changes and maintenance.</li>
          <li>Maintenance of statutory records and registers.</li>
          <li>Guidance on corporate governance best practices for SMEs in South Africa.</li>
          <li>Preparation of minutes and resolutions for company meetings.</li>
      </ul>
    `,
    faqs: [
        { q: 'What happens if I forget to file my annual return?', a: 'Don\'t panic. We\'ve helped many businesses get back on track. If you miss a filing, there are penalties, but we\'ll work with you to resolve it quickly. If it\'s been a while, we can help with reinstatement too. You\'re not alone in this.' },
        { q: 'How often do I need to file?', a: 'Once a year, around the anniversary of when your company was registered. But here\'s the thing: you don\'t have to remember. We\'ll remind you well in advance and handle everything for you.' },
        { q: 'What do you need from me for director changes?', a: 'Just the basics: name, ID number, address, and when they started. We\'ll take care of all the forms and filing. Simple as that.' },
        { q: 'My company was deregistered. Can you help?', a: 'Absolutely. We\'ve helped many businesses get reinstated. It involves catching up on missed filings and paying any penalties, but we\'ll guide you through every step. Let\'s get your business back on track.' },
    ],
  },
  {
    slug: 'tax-advisory',
    title: 'Tax Advisory: Your Peace of Mind',
    subtitle: 'We know tax season can be stressful. Let\'s simplify your compliance together so you can focus on what you love: growing your business.',
    imageUrl: '/images/services/tax-advisory-hero.jpg',
    icon: 'Scale',
    details: ['Individual & Corporate Tax Returns', 'Provisional Tax Submissions', 'VAT, PAYE, SDL, UIF Compliance', 'SARS Dispute Resolution'],
    leadExpert: teamData.find(m => m.slug === 'jannie-venter')!,
    content: `
      <p class="text-lg text-slate-600 mb-6">We understand that tax season can feel overwhelming. You\'re juggling deadlines, paperwork, and the constant worry of making a mistake. That\'s where we come in. At VNR, we don\'t just file your returns. We become your trusted partner, taking the stress off your shoulders so you can focus on what matters most: your business and your family. Whether you\'re in Cape Town, Durban, or anywhere in between, we\'re here to help. We serve clients across South Africa.</p>
      
      <h2 class="text-3xl font-bold text-slate-900 tracking-tight mt-12 mb-6">How We Help You Navigate Tax Season</h2>
      <p class="mb-8 text-slate-600">Our SAIPA-accredited team takes a personal approach to your tax needs. We sit down with you (virtually or in person), understand your unique situation, and create a strategy that works for you. Not just a one-size-fits-all solution.</p>
      
      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Corporate & Personal Income Tax</h3>
      <p class="mb-4 text-slate-600">We ensure meticulous accuracy and strategic planning for both your business and personal tax returns (ITR14 and ITR12). Our approach focuses on maximizing legitimate deductions and structuring director remuneration tax-efficiently to support long-term wealth creation.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Annual Income Tax Return (ITR14) submission for companies.</li>
          <li>Personal Income Tax returns for directors, shareholders, and individuals.</li>
          <li>Strategic tax planning to optimize Capital Gains Tax (CGT) and Dividends Tax.</li>
          <li>Ensuring full compliance with the latest legislative changes from SARS.</li>
      </ul>

      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Provisional Tax Management</h3>
      <p class="mb-4 text-slate-600">For companies and individuals, provisional tax is a critical component of cash flow management. Underestimating can lead to severe penalties, while overestimating ties up vital capital. We provide precise calculation and timely submission of your IRP6 returns, ensuring you meet your obligations without compromising your financial agility.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Accurate forecasting of annual income to avoid understatement penalties.</li>
          <li>Timely bi-annual submission of first and second provisional tax payments.</li>
          <li>Strategic advice on voluntary third payments to minimize interest.</li>
      </ul>

      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">VAT & Indirect Taxes</h3>
      <p class="mb-4 text-slate-600">Value-Added Tax (VAT) is one of the most complex areas of South African tax law. Our team provides end-to-end VAT services, from assessing registration requirements to managing submissions and advising on complex transactions, including import/export VAT implications for businesses across South Africa.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>VAT registration and deregistration services.</li>
          <li>Preparation and submission of bi-monthly VAT201 returns.</li>
          <li>Meticulous record-keeping to ensure all input tax credits are legitimately claimed.</li>
          <li>Guidance on zero-rated vs. exempt supplies to ensure correct treatment.</li>
      </ul>

      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">SARS Dispute Resolution</h3>
      <p class="mb-4 text-slate-600">Receiving a query or audit finding from SARS can be a daunting experience. Our seasoned experts manage the entire dispute resolution process on your behalf. We act as your intermediary with SARS, building a robust, evidence-based case to defend your position and achieve a fair outcome.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Responding to SARS queries and requests for information.</li>
          <li>Drafting and lodging formal Notices of Objection (NOO).</li>
          <li>Managing the appeal process, including Alternative Dispute Resolution (ADR).</li>
          <li>Lodging requests for suspension of payment to protect cash flow during a dispute.</li>
      </ul>
    `,
    faqs: [
        { q: 'Will I be just another number?', a: 'Absolutely not. You\'ll have a direct line to your advisor. We take the time to understand your business, your goals, and your concerns. When you call, you\'ll speak to someone who knows your story, not a call center.' },
        { q: 'Who needs to file a tax return in South Africa?', a: 'If you earn above the annual tax threshold or run a registered company, you\'ll need to file. Don\'t worry, we\'ll guide you through every step. We serve clients across South Africa.' },
        { q: 'What\'s the difference between tax avoidance and tax evasion?', a: 'Tax avoidance is perfectly legal. It\'s about using the tax laws smartly to reduce what you owe. Tax evasion is illegal. We help you do things the right way, legally and ethically.' },
        { q: 'When is provisional tax due?', a: 'Typically, the first payment is due by August 31st, and the second by February 28th. But don\'t stress. We\'ll remind you well in advance and help you calculate exactly what you need to pay.' },
        { q: 'What if I miss a deadline?', a: 'We\'ve all been there. The good news is, we can help you get back on track. SARS does charge penalties, but we\'ll work with you to minimize them and get you compliant again. You\'re not alone in this.' },
        { q: 'What happens if SARS audits me?', a: 'Take a deep breath. We\'ve got your back. We\'ll handle all the communication, gather the documents, and build a strong case for you. You won\'t have to face SARS alone. We\'ll be right there with you every step of the way.' },
    ],
  },
  {
    slug: 'business-structuring',
    title: 'Business Structuring: Build on Solid Ground',
    subtitle: 'We understand that starting a business is exciting but also overwhelming. Let\'s set you up with the right structure from day one, so you can focus on growing, not worrying.',
    imageUrl: '/images/services/registrations.jpg',
    icon: 'Building2',
    details: ['New Company Registrations (Pty, NPC)', 'Trust Formation & Administration'],
    leadExpert: teamData.find(m => m.slug === 'charlie-naude')!,
    content: `
      <p class="text-lg text-slate-600 mb-6">We understand that choosing the right business structure can feel confusing. Should you go with a Pty Ltd? What about a trust? Don\'t worry, we\'ll sit down with you and explain everything in plain language. We\'ll help you choose the structure that protects your personal assets, saves you tax, and sets you up for long-term success. We\'re your partners in <strong>company registration and business structuring across South Africa</strong>, serving clients nationwide.</p>
      
      <h2 class="text-3xl font-bold text-slate-900 tracking-tight mt-12 mb-6">How We Help You Get Started Right</h2>
      <p class="mb-8 text-slate-600">From registering your company to setting up trusts, we\'re here to guide you through every step. Think of us as your business setup partners.</p>
      
      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">New Company & NPO Registrations</h3>
      <p class="mb-4 text-slate-600">Choosing the correct entity is the first critical step. We guide you through the complexities of each option, managing the entire CIPC registration process to ensure your business is established correctly from day one.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li><strong>Private Company (Pty) Ltd Registration:</strong> The most common structure for for-profit enterprises, offering limited liability protection for shareholders.</li>
          <li><strong>Non-Profit Company (NPC) Registration:</strong> Expert assistance in registering NPCs for public benefit, a critical step before applying for PBO status with SARS.</li>
          <li>Guidance on drafting your Memorandum of Incorporation (MOI) to align with your long-term goals.</li>
          <li>Includes Name Reservation, Director Registration, and Issuing of Share Certificates.</li>
      </ul>

      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Trust Formation & Administration</h3>
      <p class="mb-4 text-slate-600">A trust is one of the most powerful tools for asset protection and legacy planning. We specialize in the formation of Inter-Vivos (living) trusts, designed to build a firewall between your business risks and personal assets, ensuring your wealth is protected for future generations.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Strategic advice on the benefits of a <strong>family trust setup in South Africa</strong>.</li>
          <li>Professional drafting of the Trust Deed.</li>
          <li>Registration of the trust with the Master of the High Court.</li>
          <li>Ongoing administrative services to ensure the trust remains compliant.</li>
      </ul>
      
      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Strategic Business Valuations</h3>
      <p class="mb-4 text-slate-600">Understanding the true value of your business is critical for strategic planning, securing funding, BEE transactions, or preparing for an exit. Our valuation experts use industry-accepted methodologies to provide a defensible and realistic valuation of your enterprise.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Valuations for mergers, acquisitions, and disposals.</li>
          <li>Determining value for shareholder agreements and estate planning purposes.</li>
          <li>Independent valuations for potential investors or financial institutions.</li>
      </ul>
    `,
    faqs: [
        { q: 'What is the best legal structure for my new business?', a: 'The optimal structure, such as a Sole Proprietorship vs. a Pty Ltd, depends on your personal liability tolerance, tax implications, and growth plans. A Pty Ltd is generally recommended as it creates a separate legal entity, protecting your personal assets. We provide tailored advice to help you choose correctly.' },
        { q: 'How long does it take to register a company in South Africa?', a: 'With all documentation correctly submitted, a new company registration with the CIPC typically takes a few business days. We manage the entire process to ensure it is as swift and seamless as possible.' },
        { q: 'What happens if I don\'t file my CIPC annual return?', a: 'Failure to file annual returns can lead to late-filing penalties. If a company fails to file for two or more consecutive years, the CIPC can assume the company is inactive and begin the deregistration process, which can result in its bank accounts being frozen.' },
        { q: 'Why should I consider a trust for my assets?', a: 'A trust is a powerful asset protection tool. It separates your personal assets from your business risks. This means that if your business encounters financial difficulty, the assets held within the trust (like your family home) are generally protected from business creditors.' },
    ],
  },
  {
    slug: 'legacy-planning',
    title: 'Estate & Legacy Planning: Protect What Matters',
    subtitle: 'We understand that thinking about the future can be difficult. Let\'s make sure your family is taken care of and your legacy lives on, exactly as you envision it.',
    imageUrl: '/images/services/estate-legacy-planning.jpg',
    icon: 'GitBranchPlus',
    details: ['Drafting of Last Will & Testament', 'Intergenerational Wealth Transfer', 'Executor Services', 'Trust & Estate Administration'],
    leadExpert: teamData.find(m => m.slug === 'charlie-naude')!,
    content: `
      <p class="text-lg text-slate-600 mb-6">We understand that planning for the future isn\'t easy. It means thinking about difficult things. But here\'s what we know: when you take care of it now, you give your family peace of mind later. We\'ll help you create a plan that protects what you\'ve built, takes care of the people you love, and ensures your values live on. Our legacy planning services <strong>across South Africa</strong> are designed to give you confidence that everything will be handled exactly as you want. We work with clients nationwide.</p>
      
      <h2 class="text-3xl font-bold text-slate-900 tracking-tight mt-12 mb-6">How We Help You Protect Your Legacy</h2>
      <p class="mb-8 text-slate-600">A good estate plan isn\'t just about documents. It\'s about peace of mind. We\'ll work with you to create a plan that reflects your values and protects your family\'s future.</p>
      
      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Drafting of Last Will & Testament</h3>
      <p class="mb-4 text-slate-600">For a business owner, an off-the-shelf will is insufficient and dangerous. Your will is your final business continuity plan. We specialize in <strong>drafting wills for business owners across South Africa</strong>, ensuring it addresses the complex interplay between your personal estate and company shares, and aligns perfectly with your shareholder agreements to prevent legal disputes.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Customised will drafting tailored to high-net-worth estates.</li>
          <li>Integration of business succession clauses and testamentary trusts.</li>
          <li>Regular reviews to ensure your will remains current with legislation and life changes.</li>
      </ul>

      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Intergenerational Wealth Transfer</h3>
      <p class="mb-4 text-slate-600">Transferring wealth to the next generation requires careful planning to be effective and tax-efficient. We utilize a range of strategic tools, including trusts and planned donations, to ensure your assets are passed on smoothly, minimizing exposure to Estate Duty and Donations Tax.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Strategic use of family trusts for asset protection and seamless transfer.</li>
          <li>Advice on minimizing <strong>Estate Duty in South Africa</strong>.</li>
          <li>Planning for liquidity to cover estate costs without forcing the sale of assets.</li>
      </ul>

      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Professional Executor & Administration Services</h3>
      <p class="mb-4 text-slate-600">Appointing an independent, professional executor is one of the wisest decisions you can make to protect your family from administrative burdens and potential conflict. As your executor, we manage the entire process of <strong>winding up deceased estates across South Africa</strong> with impartiality, expertise, and efficiency.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Acting as independent, professional Executors of your estate.</li>
          <li>Reporting the estate to the Master of the High Court.</li>
          <li>Managing estate assets, settling liabilities, and distributing inheritances.</li>
          <li>Ensuring all legal and tax compliance throughout the administration process.</li>
      </ul>
    `,
    faqs: [
        { q: 'What is Estate Duty and how is it calculated in South Africa?', a: 'Estate Duty is a tax of 20% levied on the dutiable amount of a deceased estate up to R30 million, and 25% on the value above R30 million. The first R3.5 million of the estate\'s net value is exempt. Strategic planning can legally minimize this liability.' },
        { q: 'Why is a professional executor important for a business owner?', a: 'A professional executor brings impartiality and expertise to complex estates involving business assets. This prevents family conflicts of interest, ensures the business is managed or sold correctly, and navigates the intricate legal and tax requirements efficiently, which a family member may not be equipped to handle.' },
        { q: 'What happens if I die without a valid will?', a: 'Dying "intestate" means your assets will be distributed according to a fixed legal formula (the Law of Intestate Succession), which may not align with your wishes. It can lead to significant delays, increased costs, and potential hardship for your loved ones.' },
        { q: 'How can a trust help reduce estate costs?', a: 'Assets held within a properly structured trust do not form part of your personal estate upon death. This means they are not subject to executor\'s fees (typically 3.5% + VAT) or Estate Duty, resulting in significant cost savings and a much faster transfer of wealth to your beneficiaries.' },
    ],
  },
  {
    slug: 'financial-reporting',
    title: 'Financial Reporting: See Your Business Clearly',
    subtitle: 'We understand that numbers can feel overwhelming. Let\'s turn your financial data into clear insights you can actually use to grow your business.',
    imageUrl: '/images/services/financial-reporting-hero.jpg',
    icon: 'FileText',
    details: ['Annual Financial Statements (AFS)', 'Management Statements', 'Independent Reviews'],
    leadExpert: teamData.find(m => m.slug === 'henry-landsberg')!,
    content: `
      <p class="text-lg text-slate-600 mb-6">We understand that financial statements can look like a foreign language. But here\'s the thing: they don\'t have to be. We\'ll prepare your reports in a way that makes sense, showing you exactly where your business stands and where it\'s heading. Whether you need annual statements for SARS or monthly reports to guide your decisions, we\'ve got you covered. Our services cover every aspect of <strong>financial reporting for SMEs across South Africa</strong>, serving clients nationwide.</p>
      
      <h2 class="text-3xl font-bold text-slate-900 tracking-tight mt-12 mb-6">Reports That Actually Help You</h2>
      <p class="mb-8 text-slate-600">We create reports that do more than just check a compliance box. They give you real insights into your business so you can make smart decisions.</p>
      
      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Annual Financial Statements (AFS)</h3>
      <p class="mb-4 text-slate-600">For most companies in South Africa, the preparation of Annual Financial Statements is a legal requirement. These formal reports are essential for SARS, CIPC, financial institutions, and investors. Our team meticulously compiles your AFS in accordance with the latest <strong>International Financial Reporting Standards (IFRS) for SMEs</strong>, ensuring your business is fully compliant and professionally presented.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Compilation of the Statement of Financial Position and Statement of Comprehensive Income.</li>
          <li>Preparation of Cash Flow Statements and Statements of Changes in Equity.</li>
          <li>Comprehensive notes and disclosures to ensure full transparency and compliance.</li>
          <li>Submission to CIPC along with your annual returns.</li>
      </ul>

      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Management Accounts</h3>
      <p class="mb-4 text-slate-600">While AFS look backward at a completed year, management accounts provide the real-time intelligence needed to steer your business forward. We work with you to develop customized monthly or quarterly reports that go beyond raw numbers, providing actionable insights into your operational performance.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Customized dashboards tracking Key Performance Indicators (KPIs).</li>
          <li>Detailed income statements with budget vs. actual analysis.</li>
          <li>Cash flow forecasting to proactively manage liquidity.</li>
          <li>Debtor and creditor age analysis to optimize your working capital cycle.</li>
      </ul>

      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Independent Reviews</h3>
      <p class="mb-4 text-slate-600">As per the Companies Act of South Africa, certain companies that are not required to have a full audit must undergo an Independent Review. This provides a limited level of assurance to stakeholders that your financial statements are free from material misstatement. Our certified independent reviewers provide a cost-effective solution to meet these statutory requirements.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Assessment of your company's Public Interest Score (PIS) to determine review requirements.</li>
          <li>Conducting review engagements in line with International Standards on Review Engagements (ISRE 2400).</li>
          <li>Providing a formal Independent Reviewer's Report to accompany your AFS.</li>
      </ul>
    `,
    faqs: [
        { q: 'What is the difference between an audit and an Independent Review?', a: 'An audit provides the highest level of assurance and is a detailed examination of financial records. An Independent Review provides limited assurance and is less extensive and therefore more cost-effective. The requirement for either depends on your company\'s Public Interest Score (PIS) as defined by the Companies Act.' },
        { q: 'How often should I look at management accounts?', a: 'For most active businesses, reviewing management accounts on a monthly basis is crucial. This frequency allows you to identify trends, address issues, and make informed strategic decisions quickly, rather than waiting until the end of the year.' },
        { q: 'What are IFRS for SMEs?', a: 'IFRS for SMEs is a specific set of International Financial Reporting Standards that is simplified for Small and Medium-sized Entities. It is the required accounting framework for most private companies in South Africa, and our team are experts in its application.' },
        { q: 'Can you prepare financial statements even if you don\'t do our monthly bookkeeping?', a: 'Yes. We can compile your Annual Financial Statements from your existing trial balance and bookkeeping records, whether they are maintained on Sage, Xero, or another system. We will work with your data to ensure a compliant and professional final product.' },
    ],
  },
  {
    slug: 'payroll-administration',
    title: 'Payroll Administration: Your Team Deserves Better',
    subtitle: 'We understand that payroll mistakes can hurt your team and your business. Let us handle it perfectly, every time, so you can focus on leading, not calculating.',
    imageUrl: '/images/services/payroll.jpg',
    icon: 'UserCheck',
    details: ['Monthly Payroll Processing', 'Payslip Generation', 'EMP201 & EMP501 Submissions', 'UIF & COID Compliance'],
    leadExpert: teamData.find(m => m.slug === 'henry-landsberg')!,
    content: `
      <p class="text-lg text-slate-600 mb-6">We understand that payroll is stressful. One mistake can mean unhappy employees, SARS penalties, and sleepless nights. That's why we take it off your plate completely. We handle every calculation, every submission, every payslip. Perfectly, every time. Your team gets paid accurately, and you get peace of mind. Our <strong>payroll services across South Africa</strong> ensure your business stays compliant while you focus on what matters most. We work with clients nationwide.</p>
      
      <h2 class="text-3xl font-bold text-slate-900 tracking-tight mt-12 mb-6">How We Take Payroll Off Your Shoulders</h2>
      <p class="mb-8 text-slate-600">We handle everything from monthly payslips to annual reconciliations. You just focus on your team. We\'ll make sure they\'re paid right, every time.</p>
      
      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Monthly Payroll Processing & SARS Submissions</h3>
      <p class="mb-4 text-slate-600">Our core service ensures your monthly payroll is executed flawlessly. We handle all calculations, generate professional payslips, and manage your statutory submissions to SARS, keeping you compliant month after month.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Accurate calculation of salaries, wages, overtime, and commissions.</li>
          <li>Processing of all deductions including PAYE, UIF, SDL, and employee benefits.</li>
          <li>Generation and secure distribution of electronic payslips.</li>
          <li>Timely preparation and submission of the monthly <strong>EMP201 return to SARS</strong> before the 7th.</li>
      </ul>

      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Bi-Annual & Annual SARS Reconciliations</h3>
      <p class="mb-4 text-slate-600">SARS requires employers to reconcile their payroll data twice a year. This is a critical control to ensure that the taxes paid over match the values declared on employee tax certificates. We manage this entire complex process to ensure a smooth and successful submission.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Interim (August) and Final (May) <strong>EMP501 reconciliation</strong> and submission.</li>
          <li>Generation and distribution of annual IRP5 and IT3(a) tax certificates to all employees.</li>
          <li>Ensuring perfect alignment between monthly EMP201 payments and the final EMP501 declaration.</li>
      </ul>

      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Department of Labour & COID Compliance</h3>
      <p class="mb-4 text-slate-600">Payroll compliance extends beyond SARS. We ensure you meet your obligations to the Department of Labour, protecting your business and supporting your employees.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>New employee registration with the Unemployment Insurance Fund (UIF).</li>
          <li>Submission of monthly UI-19 declarations to the Department of Labour.</li>
          <li>Annual submission of the Return of Earnings (W.As.8) to the Compensation Fund (COID).</li>
          <li>Assistance in obtaining a <strong>Letter of Good Standing</strong> from the Compensation Fund, often required for tenders.</li>
      </ul>
    `,
    faqs: [
        { q: 'What is an EMP201 and when is it due?', a: 'The EMP201 is the monthly declaration submitted to SARS that details the total Pay-As-You-Earn (PAYE), Skills Development Levy (SDL), and Unemployment Insurance Fund (UIF) deducted from your employees. The payment and submission are due by the 7th day of the month following the one in which the deductions were made.' },
        { q: 'What is the purpose of the EMP501 reconciliation?', a: 'The EMP501 is a bi-annual reconciliation that summarizes all the monthly EMP201 submissions for a six-month period. It is used to generate the employees\' IRP5/IT3(a) tax certificates and ensures that what the company has paid to SARS matches the tax deducted from its employees for that period.' },
        { q: 'What is COID and why do I need a Letter of Good Standing?', a: 'COID stands for Compensation for Occupational Injuries and Diseases. Businesses must submit a Return of Earnings annually and pay an assessment fee. A Letter of Good Standing from the Compensation Fund proves you are compliant and is often a mandatory requirement to be awarded contracts or tenders.' },
        { q: 'Can you manage payroll for a business with only a few employees?', a: 'Absolutely. Our outsourced payroll services are scalable and cost-effective for businesses of all sizes, from a single employee to large teams. Outsourcing ensures compliance from day one and saves valuable founder time, regardless of company size.' },
    ],
  },
  {
    slug: 'cloud-accounting',
    title: 'Cloud Accounting: Work Smarter, Not Harder',
    subtitle: 'We understand that manual bookkeeping eats up your time. Let\'s move you to the cloud so you can access your numbers anytime, anywhere, and make better decisions faster.',
    imageUrl: '/images/services/cloud-accounting.jpg',
    icon: 'Cloud',
    details: ['Sage Platinum Partner Services', 'XERO & DEXT Integration', 'Software Setup & Training', 'Workflow Automation'],
    leadExpert: teamData.find(m => m.slug === 'charlie-naude')!,
    content: `
      <p class="text-lg text-slate-600 mb-6">We understand that you\'re tired of being tied to your desk, digging through spreadsheets, and wondering if your numbers are up to date. Moving to cloud accounting changes everything. You can check your finances from your phone, your team can collaborate in real-time, and you\'ll always know exactly where your business stands. As expert <strong>cloud accounting specialists across South Africa</strong>, we\'ll help you choose the right system and get you set up smoothly. We serve clients nationwide.</p>
      
      <h2 class="text-3xl font-bold text-slate-900 tracking-tight mt-12 mb-6">Why Cloud Accounting Makes Life Easier</h2>
      <p class="mb-8 text-slate-600">When your accounting is in the cloud, you get real-time insights, automatic backups, and the freedom to work from anywhere. It\'s not just convenient. It\'s a game-changer for your business.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li><strong>Real-Time Data:</strong> Make critical decisions based on up-to-the-minute financial information, not outdated reports.</li>
          <li><strong>Workflow Automation:</strong> Automate invoicing, payment reminders, and bank reconciliations to free up valuable time.</li>
          <li><strong>Enhanced Collaboration:</strong> Grant secure, role-based access to your team and advisors from anywhere, at any time.</li>
          <li><strong>Scalability & Security:</strong> Benefit from enterprise-grade security and a system that grows with your business.</li>
      </ul>

      <h2 class="text-3xl font-bold text-slate-900 tracking-tight mt-12 mb-6">Our Certified Expertise on Leading Platforms</h2>
      <p class="mb-8 text-slate-600">Choosing the right software is only half the battle. As certified partners, we ensure your chosen platform is implemented correctly and optimized for your specific business needs.</p>

      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Sage Business Cloud - Platinum Partner</h3>
      <p class="mb-4 text-slate-600">As a <strong>Sage Platinum Partner</strong>, we hold the highest level of accreditation, signifying deep expertise in their ecosystem. Sage is a powerhouse for South African businesses, offering robust, scalable solutions with deeply integrated local payroll and compliance features.</p>

      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Xero Certified Advisors</h3>
      <p class="mb-4 text-slate-600">Xero is renowned for its beautiful, user-friendly interface and a vast ecosystem of integrated third-party apps. As <strong>Xero certified advisors across South Africa</strong>, we recommend it for service-based businesses and startups looking for an intuitive platform that simplifies daily financial management.</p>
      
      <h3 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">Dext Integration for Ultimate Efficiency</h3>
      <p class="mb-4 text-slate-600">Eliminate manual data entry forever. We are expert implementers of <strong>Dext (formerly Receipt Bank)</strong>, a tool that uses AI to automatically capture data from invoices and receipts, publishing it directly to Sage or Xero with perfect accuracy.</p>
      
      <h2 class="text-3xl font-bold text-slate-900 tracking-tight mt-12 mb-6">Our Implementation & Support Services</h2>
      <p class="mb-8 text-slate-600">We provide a full-service offering to ensure a seamless transition to the cloud.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li><strong>System Consultation:</strong> Analyzing your needs to recommend the perfect software stack (Sage vs. Xero).</li>
          <li><strong>Data Migration:</strong> Securely migrating your historical data from legacy systems.</li>
          <li><strong>Setup & Customisation:</strong> Configuring the chart of accounts, invoice templates, and user permissions.</li>
          <li><strong>Team Training & Ongoing Support:</strong> Empowering your team to use the new system effectively.</li>
      </ul>
    `,
    faqs: [
      { q: 'What is the main difference between Sage and Xero for a South African business?', a: 'The primary difference often comes down to payroll and complexity. Sage offers a more robust and deeply integrated South African payroll system, making it a strong choice for businesses with employees. Xero is often praised for its superior user-friendliness and vast international app ecosystem, making it excellent for service-based businesses.' },
      { q: 'Is my financial data safe in the cloud?', a: 'Yes. Platforms like Sage and Xero use enterprise-grade security, including data encryption and multi-factor authentication, that is often more secure than a local server or desktop computer. They invest heavily in protecting your data.' },
      { q: 'What is Dext and how does it work?', a: 'Dext is an application that automates data entry. You simply take a photo of an invoice or receipt with your phone, and Dext uses AI to extract the key information (supplier, date, amount, VAT) and push it directly into your accounting software. It dramatically reduces manual bookkeeping time.' },
      { q: 'Can you help us move from our old desktop accounting software?', a: 'Absolutely. We specialize in migrating businesses from traditional desktop systems (like Pastel Partner) to modern cloud platforms. We manage the entire process, including exporting your historical data and ensuring a smooth transition with minimal disruption.' },
    ],
  }
];