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
  funFact: string;
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
      <p>As a co-founder of VNR, Jannie brings a genuine passion for helping South African businesses thrive. He's not just about numbers. He's about people. Jannie believes that when local businesses succeed, our communities flourish. That's why he takes the time to understand not just your tax situation, but your dreams and goals too.</p>
      <p>With years of experience in Centurion, Pretoria, and across Gauteng, Jannie has helped countless entrepreneurs navigate the complexities of tax while keeping their focus on what matters most: growing their business and supporting their families.</p>
      <h3>Areas of Expertise</h3>
      <ul>
        <li>Corporate & Personal Tax Planning</li>
        <li>SARS Dispute Resolution</li>
        <li>VAT & Indirect Taxes</li>
        <li>Advanced Tax Structures</li>
      </ul>
    `,
    funFact: "When he's not helping clients navigate tax season, you'll find Jannie exploring the hiking trails around Pretoria or enjoying a strong cup of local rooibos tea. He's passionate about supporting local businesses and believes that great coffee and great accounting go hand in hand."
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
      <p>As a co-founder of VNR, Charlie believes that every South African entrepreneur deserves a partner who truly understands their journey. He's seen firsthand how the right business structure and financial strategy can transform a small idea into a thriving enterprise. That's what drives him: helping local businesses build something lasting.</p>
      <p>Charlie's approach is personal. He doesn't just look at your numbers; he looks at your vision. Whether you're a startup in Johannesburg or an established business in Cape Town, Charlie takes the time to understand where you want to go and helps you get there.</p>
      <h3>A Foundation of Excellence</h3>
      <p>With a strong academic foundation from North-West University and years of experience, Charlie combines technical expertise with genuine care for his clients' success. He's not just an accountant. He's a partner in your growth.</p>
    `,
    funFact: "Charlie loves exploring South Africa's diverse landscapes, from the Drakensberg mountains to the Karoo. When he's not helping businesses structure for success, you might find him planning his next road trip or sharing stories about local entrepreneurs he's met along the way."
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
      <p>Henry brings a fresh, energetic approach to accounting. He knows that behind every number is a real person with real dreams, and he's passionate about making sure those numbers tell the right story. Whether you're a small business owner in Centurion or a growing company in Durban, Henry makes sure you understand exactly where your business stands.</p>
      <p>His award-winning work ethic isn't just about getting things right. It's about making sure you feel confident and in control of your finances. Henry believes that when you understand your numbers, you make better decisions. And better decisions mean a brighter future for your business.</p>
      <h3>Areas of Expertise</h3>
      <ul>
        <li>Financial Statement Preparation</li>
        <li>Management Accounting</li>
        <li>Payroll Administration</li>
        <li>CIPC and Secretarial Duties</li>
      </ul>
    `,
    funFact: "Henry is a coffee enthusiast who loves discovering new local roasteries across South Africa. When he's not crunching numbers, he's often exploring the vibrant coffee scene in Pretoria and sharing his latest finds with the team. He believes that great accounting, like great coffee, should be accessible to everyone."
  }
];