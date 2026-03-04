import footerLogo from "../assets/images/common/logo.svg";

export type TermsUseSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type TermsUseContact = {
  title: string;
  addressLines: string[];
  email: string;
};

export type TermsOfUsePageContent = {
  logoSrc: string;
  logoAlt: string;
  pageTitle: string;
  intro: string;
  sections: TermsUseSection[];
  contact: TermsUseContact;
};

export const termsOfUsePageContent: TermsOfUsePageContent = {
  logoSrc: footerLogo,
  logoAlt: "PersonAI Logo",
  pageTitle: "Terms of Use & Privacy Policy",
  intro:
    'Welcome to PersonAI! These Terms of Use ("Terms") govern your access to and use of the PersonAI mobile application and related services (the "Service"). By creating an account or using the Service, you agree to these Terms and our Privacy Policy.',
  sections: [
    {
      title: "1. The PersonAI Service",
      paragraphs: [
        "PersonAI is a mobile-first life organization assistant designed to help users balance tasks across multiple life areas using intelligent planning and AI-driven suggestions. Our mission is to reduce mental load and help users feel in control of their lives.",
        "The Service includes:",
      ],
      bullets: [
        "Tools to organize tasks across 7 life areas: Work, Home & Family, Personal & Wellness, Learning/Goals, Side Hustle, Events/Social, and Finances.",
        "A weekly planner with drag-and-drop functionality and monthly views.",
        "AI-powered task suggestions personalized to your patterns and preferences.",
        "Life balance insights, activity tracking, and progress analytics.",
        "Cross-device sync with automatic backup and full offline functionality.",
        "Profile customization including life-area colors, AI personality selection, and smart reminder preferences.",
      ],
    },
    {
      title: "2. Eligibility",
      bullets: [
        "You must be at least 13 years old to use PersonAI.",
        "If you are under 18, you represent that you have parental or guardian consent.",
        "Certain features may not be available in all regions due to local laws.",
      ],
    },
    {
      title: "3. Account & User Data",
      paragraphs: ["When you create an account, you agree that:"],
      bullets: [
        "You will provide accurate and current information (name, email, etc.).",
        "You are responsible for maintaining the security of your account credentials.",
        "You will not share your account with others or allow unauthorized access.",
        "You will notify us immediately of any unauthorized use of your account.",
        "You are responsible for all activity that occurs under your account.",
      ],
    },
    {
      title: "4. User-Generated Content",
      bullets: [
        "You retain ownership of all tasks, notes, and data you create in PersonAI.",
        "You are responsible for the accuracy and legality of your content.",
        "You may not use the Service to store or share illegal, harmful, or infringing content.",
        "We reserve the right to remove content that violates these Terms or applicable laws.",
        "You grant PersonAI a limited license to process your content solely to provide the Service.",
      ],
    },
    {
      title: "5. Privacy Policy",
      paragraphs: [
        "Providing our Service requires collecting and processing some of your information.",
        "We collect:",
      ],
      bullets: [
        "Account information (name, email, profile details).",
        "Usage data (tasks created, life areas selected, app activity).",
        "Device information (operating system, app version, device identifiers).",
        "AI questionnaire responses (to personalize suggestions).",
        "We use your data to operate, improve, and personalize the Service.",
        "We use your data to provide AI suggestions and insights tailored to your patterns.",
        "We do not sell your personal information to third parties.",
        "We may share anonymized or aggregated data for analytics and service improvement.",
        "You may request deletion of your account and data at any time via in-app settings or by contacting support@softaims.com.",
        "We comply with Apple's App Tracking Transparency (ATT) and Google Play data policies.",
      ],
    },
    {
      title: "6. Data Sync & Storage",
      bullets: [
        "PersonAI provides automatic cloud backup and cross-device sync.",
        "Your data is stored securely using industry-standard encryption.",
        "The app works fully offline; changes sync automatically when you reconnect.",
        "We retain backup copies of your data for recovery purposes.",
        "Upon account deletion, we will remove your data within 30 days, except where required by law.",
      ],
    },
    {
      title: "7. AI Features & Suggestions",
      bullets: [
        "PersonAI uses artificial intelligence to provide personalized task suggestions.",
        "AI suggestions are based on your selected life areas, patterns, and questionnaire responses.",
        "You can like or dislike suggestions to help the AI learn your preferences.",
        "AI suggestions are recommendations only and do not constitute professional advice.",
        "We continuously improve AI accuracy, but suggestions may not always be relevant or appropriate.",
      ],
    },
    {
      title: "8. Free & Premium Features",
      bullets: [
        "PersonAI is free to use with core features.",
        "Future premium features (PLUS subscription) may include custom life areas, advanced AI, calendar sync, and collaboration tools.",
        "Premium pricing and features will be clearly disclosed before purchase.",
        "Subscriptions are subject to your app store's terms and billing practices.",
      ],
    },
    {
      title: "9. Restrictions",
      paragraphs: ["You agree not to:"],
      bullets: [
        "Use the Service for unlawful purposes.",
        "Reverse engineer, decompile, or attempt to extract source code.",
        "Use bots, scrapers, or unauthorized automation.",
        "Sell, rent, or trade accounts or access credentials.",
        "Attempt to circumvent security or access restrictions.",
        "Harass, harm, or exploit others through the Service.",
      ],
    },
    {
      title: "10. Intellectual Property",
      bullets: [
        "You retain ownership of content you create in PersonAI.",
        "PersonAI and its design, features, and branding remain the property of Softaims LLC.",
        "Our logos, trademarks, and app elements may not be used without permission.",
        "You may not copy, modify, or distribute any part of the Service without authorization.",
      ],
    },
    {
      title: "11. Account Termination",
      paragraphs: [
        "We may suspend or terminate your account, or restrict access if:",
      ],
      bullets: [
        "You violate these Terms or applicable laws.",
        "Your actions create legal risk for PersonAI or its users.",
        "You repeatedly ignore warnings or community guidelines.",
        "You may terminate your account at any time through in-app settings.",
      ],
    },
    {
      title: "12. Disclaimer of Warranties",
      bullets: [
        'The Service is provided "as is" without warranties of any kind.',
        "We do not guarantee uninterrupted, error-free, or secure operation.",
        "AI suggestions are provided for informational purposes only.",
        "We are not responsible for data loss, though we provide automatic backups.",
        "To the maximum extent permitted by law, PersonAI is not liable for indirect, incidental, or consequential damages.",
      ],
    },
    {
      title: "13. Limitation of Liability",
      bullets: [
        "Our total liability for any claims related to the Service is limited to the amount you paid (if any) in the 12 months prior to the claim.",
        "We are not liable for lost profits, data, or business opportunities.",
        "Some jurisdictions do not allow certain liability limitations, so these may not apply to you.",
      ],
    },
    {
      title: "14. Updates to Terms",
      paragraphs: [
        "We may update these Terms and Privacy Policy from time to time. Users will be notified in-app or via email, and continued use of the Service constitutes acceptance of the updated Terms.",
      ],
    },
  ],
  contact: {
    title: "Contact Us",
    addressLines: [
      "Softaims LLC",
      "701 Tillery St unit 12 2364",
      "Austin, TX 78702, United States",
    ],
    email: "support@softaims.com",
  },
};
