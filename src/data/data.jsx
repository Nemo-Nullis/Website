import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ShieldHalf,
  BarChart2,
  Server,
  BrainCircuit,
} from "lucide-react";

import {
  Discord,
  Slack,
  Binance,
  WalletConnect,
  Notion,
  Figma,
} from "../SvgComponents/SvgComponents";

export const NavLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const SocialLinks = [
  {
    icon: <Facebook/>,
    url: "/",
  },
  {
    icon: <Instagram/>,
    url: "/",
  },
  {
    icon: <Twitter/>,
    url: "/",
  },
  {
    icon: <Linkedin/>,
    url: "/",
  },
];

export const ServiceLinks = [
  {
    title: "Explorer",
    url: "https://explorer.nullionchain.com",
  },
  {
    title: "Mining Pool",
    url: "https://pool.nullionchain.com",
  },
];

export const CompanyLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const FeaturesData = [
  {
    name: "Security",
    description: "NULL employs SHA-256d and Proof-of-Work to ensure a secure, attack-resistant network based on Bitcoin codebase",
    icon: <ShieldHalf />,
  },
  {
    name: "Speed",
    description:
      "With a 5-minute block time and a throughput of 26.67 transactions per second (TPS), Nullion ensures fast and efficient transactions",
    icon: <BarChart2 />,
  },
  {
    name: "Decentralized",
    description:
      "Our code is open-source and community-driven, Nullion ensures transparency and distributed control",
    icon: <Server />,
  },
  {
    name: "Community",
    description:
      "Nullion empowers its community to shape the blockchain’s future through inclusive and transparent decision-making.",
    icon: <BrainCircuit />,
  },
];

export const RoadmapData = [
  {
    name: "Phase 1: Genesis (2025)",
    description: "Nullion Mainnet launch, distribute premine, and release essential tools like the wallet, mining pool, and blockchain explorer.",
  },
  {
    name: "Phase 2: Early Adoption (2025-2006)",
    description: "Stabilize the network, attract miners, and foster community participation with educational resources and decentralized mining.",
  },
  {
    name: "Phase 3: Growth and Ecosystem Expansion (2026-2028)",
    description: "Expand the ecosystem through partnerships, developer incentives, and scalability optimizations.",
  },
  {
    name: "Phase 4: Long-Term Decentralization (2028 and Beyond)",
    description: "Empower community governance, enhance scalability with Layer 2 solutions, and ensure long-term network sustainability.",
  },
];

export const FaqData = [
  {
    ques: "What is Nullion Blockchain?",
    ans: "Nullion Blockchain is a decentralized, secure, and scalable network inspired by Bitcoin's design and cryptography, offering faster transactions and a transparent, community-driven ecosystem.",
  },
  {
    ques: "Who founded Nullion Blockchain?",
    ans: "Nullion was founded by Nemo Nullis, a pseudonym chosen to emphasize the blockchain’s philosophy of decentralization and collective innovation. The pseudonym reflects a desire to prioritize the Nullion community and project vision over individual recognition.",
  },
  {
    ques: "Why is it called Nullion?",
    ans: "The name Nullion represents the concept of Null, symbolizing a beginning from nothing that evolves into something transformative, aligning with the blockchain’s ethos of creating endless possibilities.",
  },
    {
    ques: "Is there an ICO for Nullion?",
    ans: "No, Nullion does not have an ICO. The network launched without any pre-sale, following a fair mining model. The 500,000 NULL premine is allocated for development, operations, founder`s allocation and community growth.",
  },
];

export const Missions = [
  {
    title: "Venenatis feugiat",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum porta condimentum pulvinar placerat ex. Risus cursus a habitasse rhoncus venenatis pellentesque suspendisse. Conubia phasellus augue pellentesque vel posuere adipiscing. Tortor sollicitudin id rhoncus tortor pretium diam. Nulla amet eu inceptos elementum mauris sagittis commodo scelerisque vel. Sem non fusce iaculis libero lacinia. Curae malesuada scelerisque vitae ac penatibus magna ullamcorper et imperdiet.",
  },
];

export const IntegrationsApp = [
  {
    name: "Discord",
    icon: <Discord />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "Slack",
    icon: <Slack />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "Binance",
    icon: <Binance />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "WalletConnect",
    icon: <WalletConnect />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "Notion",
    icon: <Notion />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "Figma",
    icon: <Figma />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
];

export const PricingData = [
  {
    label: "Basic",
    priceMonth: 49,
    priceAnnual: 29,
    desc: "Suitable for personal use",
    features: [
      "Realtime trading data",
      "3-months standard support",
      "Trading up to $50k",
      "10GB Disk space",
      "Up to 5 team members",
      "Free Portfolio",
    ],
  },
  {
    label: "Premium",
    priceMonth: 79,
    priceAnnual: 49,
    desc: "Suitable for small business",
    features: [
      "Benefits of Basic tier",
      "6-month standard support",
      "Trading up to $150k",
      "25GB Disk space",
      "Up to 20 team members",
      "Free custom domain",
    ],
  },
  {
    label: "Ultimate",
    priceMonth: 129,
    priceAnnual: 99,
    desc: "Suitable for large business",
    features: [
      "Benefits of Premium tier",
      "1-year premium support",
      "Trading up to $500k",
      "50GB Disk space",
      "Up to 50 team members",
      "No trading fee",
    ],
  },
];
