// data/team-data.ts

export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  intro: string;
  email: string;
  linkedinUrl: string;
  imageUrl: string;
  credentials: string[];
  articles: { title: string; category: string; url: string }[];
  bio: string;
}

export const teamData: TeamMember[] = [
  {
    slug: "jannie-venter",
    name: "Jannie Venter",
    title: "Co-Founder & Director",
    intro: "With a postgraduate certification in Advanced Taxation, Jannie is a leading expert in tax advisory in Centurion and Gauteng, helping clients navigate complex fiscal landscapes with strategic foresight.",
    email: "jannie@vnr.co.za",
    linkedinUrl: "https://www.linkedin.com/in/jannie-venter/",
    imageUrl: "/images/team/jannie-venter.jpg",
    credentials: [
      "B.Com Hons (Taxation)",
      "Professional Accountant (SA)",
      "Registered Tax Practitioner (SARS)",
      "Certified Independent Reviewer"
    ],
    articles: [
       { title: "The 2025 Tax Season: Key Changes", category: "Taxation", url: "/insights/2025-tax-changes" },
       { title: "Maximizing Your Deductible Expenses", category: "Taxation", url: "/insights/deductible-expenses-guide" },
    ],
    bio: `
      <p>As a co-founder of VNR, Jannie Venter is a specialist in the field of taxation, renowned for his ability to translate complex regulations into actionable strategies for high-net-worth individuals and corporations in Centurion, Pretoria, and Gauteng.</p>
      <h3>Areas of Expertise</h3>
      <ul>
        <li>Corporate & Personal Tax Planning</li>
        <li>SARS Dispute Resolution</li>
        <li>VAT & Indirect Taxes</li>
        <li>Advanced Tax Structures</li>
      </ul>
    `
  },
  {
    slug: "charlie-naude",
    name: "Charlie Naudé",
    title: "Co-Founder & Director",
    intro: "A forward-thinking leader dedicated to shaping the future of the accounting profession and empowering businesses through strategic governance and financial expertise. Charlie is a former SAIPA National Board member and expert in business structuring in South Africa.",
    email: "charlie@vnr.co.za",
    linkedinUrl: "https://www.linkedin.com/in/charlie-naude/",
    imageUrl: "/images/team/charlie-naude.jpg",
    credentials: [
      "B.Com Hons (Financial Accounting)",
      "Professional Accountant (SA)",
      "Registered Tax Practitioner (SARS)",
      "Former Vice-Chairman, SAIPA National Board",
    ],
    articles: [
      { title: "Is Your Business Ready for a Digital Transformation?", category: "Technology", url: "/insights/digital-transformation-readiness" },
      { title: "5 Common Mistakes in Estate Planning", category: "Legacy Planning", url: "/insights/estate-planning-mistakes" },
    ],
    bio: `
      <p>As a co-founder of VNR, Charlie Naudé embodies the firm's core philosophy that "ability should be rewarded." His career is a testament to this belief, marked by academic excellence, professional achievement, and a profound commitment to serving both his clients and his profession.</p>
      <h3>A Foundation of Excellence</h3>
      <p>Charlie's journey began with a strong academic foundation, earning both a B.Com in Accounting and a B.Com Hons in Financial Accounting from the prestigious North-West University. This rigorous education provided the bedrock for a career dedicated to financial precision and strategic insight.</p>
    `
  },
  {
    slug: "henry-landsberg",
    name: "Henry Landsberg",
    title: "Accounting & Tax Manager",
    intro: "An award-winning professional, Henry manages our accounting and compliance divisions, ensuring meticulous accuracy and operational efficiency for our clients in Centurion, Gauteng.",
    email: "henry@vnr.co.za",
    linkedinUrl: "https://www.linkedin.com/in/henry-landsberg/",
    imageUrl: "/images/team/henry-landsberg.jpg",
    credentials: [
      "B.Com (Financial Management)",
      "Professional Accountant (SA)",
      "Registered Tax Practitioner (SARS)",
      "SAIPA National Top Achiever 2017"
    ],
    articles: [
      { title: "Understanding Your Management Accounts", category: "Business Growth", url: "/insights/understanding-management-accounts" },
      { title: "CIPC Compliance: Are You at Risk?", category: "Compliance", url: "/insights/cipc-compliance-risk" },
    ],
    bio: `
      <p>Henry Landsberg is a cornerstone of the VNR team, managing the accounting and tax divisions with precision and a client-focused mindset.</p>
      <h3>Areas of Expertise</h3>
      <ul>
        <li>Financial Statement Preparation</li>
        <li>Management Accounting</li>
        <li>Payroll Administration</li>
        <li>CIPC and Secretarial Duties</li>
      </ul>
    `
  }
];