import logo from "../assets/images/common/logo.png";

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

export type TermsOfUseFooter = {
  logo: string;
  logoAlt: string;
  logoText: string;
  copyright: string;
};

export type TermsOfUseHeader = {
  logoAlt: string;
  logoText: string;
  title: string;
  subtitle: string;
  intro: string;
};

export type TermsOfUseContent = {
  header: TermsOfUseHeader;
  sections: TermsUseSection[];
  footer: TermsOfUseFooter;
  contact: TermsUseContact;
};

export const termsOfUseTitle = "Lynsi - Terms of Use";
export const termsOfUseLastUpdated = "Last Updated: March 24, 2026";

export const termsOfUseContent: TermsOfUseContent = {
  header: {
    logoAlt: "Lynsi Logo",
    logoText: "Lynsi",
    title: "Terms of Use",
    subtitle: "Effective Date: October 24, 2024",
    intro:
      'Welcome to Lynsi! These Terms of Use ("Terms") govern your access to and use of the Lynsi mobile application and related services (collectively, the "Service"). By using the Service, you agree to these Terms. If you do not agree, please do not use the Service.',
  },
  sections: [
    {
      title: "1. The Lynsi Service",
      paragraphs: [
        "Lynsi provides a suite of tools designed to help you track your well-being, health, and lifestyle. Our service includes daily mood tracking, screen time monitoring, medication reminders, and health integration. Our mission is to help users understand the connections between their physical health, mental well-being, and daily habits.",
        "The Service includes:",
      ],
      bullets: [
        "Daily mood check-ins and voice notes to track emotional patterns.",
        "Screen time management to maintain a healthy digital lifestyle.",
        "Integrations with HealthKit/Google Fit to correlate physical activity with mood.",
        "Medicine and pill reminders to ensure health routines are met.",
        "Personalized insights that reveal hidden patterns between mood, productivity, and physical health.",
        "Cross-device sync with automatic backup and full offline functionality.",
      ],
    },
    {
      title: "2. User Accounts",
      bullets: [
        "You will provide accurate and current information (name, email, etc.).",
        "You are responsible for maintaining the security of your account credentials.",
        "You will not share your account with others or allow unauthorized access.",
        "You will notify us immediately of any unauthorized use of your account.",
        "You are responsible for all activity that occurs under your account.",
      ],
    },
    {
      title: "3. User Conduct",
      bullets: [
        "You agree not to use the Service for any unlawful or prohibited purpose.",
        "You will not disrupt or interfere with the security or operation of the Service.",
        "You will not attempt to gain unauthorized access to any part of the Service.",
      ],
    },
    {
      title: "4. User-Generated Content",
      bullets: [
        "You retain ownership of all tasks, notes, and data you create in Lynsi.",
        "You are responsible for the accuracy and legality of your content.",
        "You may not use the Service to store or share illegal, harmful, or infringing content.",
        "We reserve the right to remove content that violates these Terms or applicable laws.",
        "You grant Lynsi a limited license to process your content solely to provide the Service.",
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
        "Lynsi and health data (mood logs, medication logs, spending entries, sleep data).",
        "Device information (operating system, app version, device identifiers).",
        "Onboarding responses to personalize your Lynsi experience.",
        "We use your data to operate, improve, and personalize the Service.",
        "We use your data to provide insights tailored to your physical and mental patterns.",
        "We do not sell your personal information to third parties.",
        "We may share anonymized or aggregated data for analytics and service improvement.",
        "You may request deletion of your account and data at any time via in-app settings or by contacting percy@lymbiapp.com.",
        "We comply with Apple's App Tracking Transparency (ATT) and Google Play data policies.",
      ],
    },
    {
      title: "6. Data Sync & Storage",
      bullets: [
        "Lynsi provides automatic cloud backup and cross-device sync.",
        "Your data is stored securely using industry-standard encryption.",
        "The app works fully offline; changes sync automatically when you reconnect.",
        "We retain backup copies of your data for recovery purposes.",
        "Upon account deletion, we will remove your data within 30 days, except where required by law.",
      ],
    },
    {
      title: "7. Lynsi Insights & Reminders",
      bullets: [
        "Lynsi analyzes your logs to provide personalized lifestyle insights.",
        "Lynsi insights are recommendations only and do not constitute professional medical or financial advice.",
      ],
    },
    {
      title: "8. Pricing",
      bullets: [
        "Lynsi is free to use with core features.",
        "Future premium features (Lynsi Pro) may include advanced analytics, unlimited history, and additional integrations.",
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
        "You retain ownership of content you create in Lynsi.",
        "Lynsi and its design, features, and branding remain the property of Lynsi AI.",
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
        "Your actions create legal risk for Lynsi or its users.",
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
        "To the maximum extent permitted by law, Lynsi is not liable for indirect, incidental, or consequential damages.",
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
    {
      title: "15. Contact Us",
      paragraphs: [
        "If you have any questions about these Terms, please contact us at:",
      ],
    },
  ],
  contact: {
    title: "Contact Us",
    addressLines: [
      "Lynsi Support Team",
      "701 Tillery St unit 12 2364",
      "Austin, TX 78702, United States",
    ],
    email: "percy@lymbiapp.com",
  },
  footer: {
    logo: logo,
    logoAlt: "Lynsi Logo",
    logoText: "Lynsi",
    copyright: "© 2026 Lynsi AI. All rights reserved.",
  },
};

export const termsOfUsePageContent: TermsOfUsePageContent = {
  logoSrc: termsOfUseContent.footer.logo,
  logoAlt: termsOfUseContent.header.logoAlt,
  pageTitle: termsOfUseContent.header.title,
  intro: termsOfUseContent.header.intro,
  sections: termsOfUseContent.sections,
  contact: termsOfUseContent.contact,
};

export const termsOfUseContactInfo = {
  company: "Lynsi Support Team",
  address: "701 Tillery St unit 12 2364, Austin, TX 78702, United States",
  email: "percy@lymbiapp.com",
};
