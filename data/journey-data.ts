import { Scale, Building2, GitBranchPlus, BarChart3 } from 'lucide-react';

export const journeyData = [
  {
    stage: "Startup & Foundation",
    title: "From Idea to Enterprise",
    description: "Navigating the critical first steps with a solid legal and financial foundation to ensure your vision is built to last.",
    icon: Building2,
    services: [
      { name: "Company Registration", href: "/services/business-structuring" },
      { name: "Initial Tax & VAT Registration", href: "/services/tax-advisory" },
      { name: "Cloud Accounting Setup", href: "/services/cloud-accounting" },
    ]
  },
  {
    stage: "Growth & Scaling",
    title: "Managing Complexity, Maximizing Opportunity",
    description: "As your business gains traction, we introduce robust systems to manage growth, optimize cash flow, and ensure compliance.",
    icon: BarChart3,
    services: [
      { name: "Management Accounts", href: "/services/financial-reporting" },
      { name: "Payroll Administration", href: "/services/payroll-administration" },
      { name: "Advanced Tax Planning", href: "/services/tax-advisory" },
    ]
  },
  {
    stage: "Maturity & Optimization",
    title: "Enhancing Value, Protecting Assets",
    description: "With an established enterprise, the focus shifts to maximizing value, protecting assets, and strategic long-term planning.",
    icon: Scale,
    services: [
      { name: "Business Valuations", href: "/services/business-structuring" },
      { name: "SARS Dispute Resolution", href: "/services/tax-advisory" },
      { name: "Trust Formation & Administration", href: "/services/legacy-planning" },
    ]
  },
  {
    stage: "Legacy & Succession",
    title: "Securing Your Life's Work for Generations",
    description: "Ensuring the seamless and tax-efficient transfer of your wealth and business to the next generation or new ownership.",
    icon: GitBranchPlus,
    services: [
      { name: "Estate & Legacy Planning", href: "/services/legacy-planning" },
      { name: "Intergenerational Wealth Transfer", href: "/services/legacy-planning" },
      { name: "Will Drafting & Executor Services", href: "/services/legacy-planning" },
    ]
  }
];