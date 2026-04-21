import logo from "../assets/images/common/logo.webp";

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
  lastUpdated: string;
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
export const termsOfUseLastUpdated = "Last Updated on: April 21, 2026";

export const termsOfUseContent: TermsOfUseContent = {
  header: {
    logoAlt: "Lynsi Logo",
    logoText: "Lynsi",
    title: "Terms of Use",
    subtitle: termsOfUseLastUpdated,
    intro:
      "Welcome to Lynsi. These Terms of Use govern your access to and use of the Lynsi mobile application and related services provided by LimbyAI LLC. By using Lynsi, you agree to these Terms. If you do not agree, please do not use the Service.",
  },
  sections: [
    {
      title: "1. The Lynsi Service",
      bullets: [
        "Daily mood check-ins and optional voice notes.",
        "Screen time and habit tracking features.",
        "Medication reminders and wellness routines.",
        "Optional health integrations where supported.",
        "Insights intended to support self-reflection and healthy habits.",
      ],
    },
    {
      title: "2. Accounts and Security",
      bullets: [
        "You agree to provide accurate, current account information.",
        "You are responsible for safeguarding your account credentials.",
        "You are responsible for activity under your account.",
      ],
    },
    {
      title: "3. Acceptable Use",
      bullets: [
        "Do not use the Service for unlawful, abusive, or harmful activity.",
        "Do not interfere with Service security, availability, or operation.",
        "Do not attempt unauthorized access or reverse engineering.",
      ],
    },
    {
      title: "4. User Content",
      bullets: [
        "You retain ownership of content and data you submit to Lynsi.",
        "You grant Lynsi a limited license to process content only to provide and improve the Service.",
        "We may remove content that violates these Terms or applicable law.",
      ],
    },
    {
      title: "5. Medical and Financial Disclaimer",
      paragraphs: [
        "Lynsi provides informational wellness insights only. Lynsi is not a medical device and does not provide medical diagnosis, treatment, or emergency services. Lynsi also does not provide financial, legal, or professional advice. Always consult qualified professionals for decisions related to your health, medications, or finances.",
      ],
    },
    {
      title: "6. SMS Messaging and Trusted Contacts (Toll-Free SMS)",
      paragraphs: [
        "Optional Service: Lynsi offers an optional SMS feature allowing users to send wellness surveys and safety alerts to designated \"Trusted Contacts.\" Agreement to receive SMS is not a requirement to use the Lynsi application. You may use all core wellness features without opting into the SMS program.",
        "Consent: By adding a Trusted Contact, you represent that you have obtained the recipient's express consent to receive automated messages.",
        "Frequency: Message frequency varies based on user-triggered events and safety check-ins.",
        "Rates: Standard message and data rates may apply.",
      ],
      bullets: [
        "Opt-Out: Recipients can cancel the SMS service at any time by emailing STOP with subject \"STOP - [Phone Number]\" to lynsiaiapp@gmail.com. We will send a one-time confirmation of the unsubscribe.",
        "Help: For assistance, recipients can reply HELP or contact lynsiaiapp@gmail.com.",
      ],
    },
    {
      title: "7. Fees and Subscriptions",
      bullets: [
        "Core features may be offered free.",
        "Optional paid features may be introduced in the future.",
        "Any pricing, billing terms, and renewal details will be clearly disclosed before purchase and are subject to your app store terms.",
      ],
    },
    {
      title: "8. Intellectual Property",
      bullets: [
        "Lynsi branding, design, software, and related materials are owned by LimbyAI LLC or its licensors.",
        "Except where permitted by law, you may not copy, modify, distribute, or create derivative works from the Service without authorization.",
      ],
    },
    {
      title: "9. Termination",
      bullets: [
        "You may stop using the Service at any time and may request account deletion in-app where available.",
        "We may suspend or terminate access if you violate these Terms, applicable law, or create risk to users or the Service.",
      ],
    },
    {
      title: "10. Warranties and Liability",
      paragraphs: [
        "The Service is provided on an \"as is\" and \"as available\" basis.",
        "To the maximum extent permitted by law, Lynsi disclaims warranties and is not liable for indirect, incidental, special, consequential, or punitive damages.",
        "All sensitive contact identifiers and phone numbers are stored using AES-256 encryption for your privacy.",
      ],
    },
    {
      title: "11. Changes to Terms",
      paragraphs: [
        "We may update these Terms from time to time. We will provide notice through the app or other appropriate channels. Continued use after updates means you accept the revised Terms.",
      ],
    },
    {
      title: "12. Contact",
      paragraphs: [
        "For questions about these Terms:",
      ],
    },
  ],
  contact: {
    title: "Contact",
    addressLines: [],
    email: "lynsiaiapp@gmail.com",
  },
  footer: {
    logo: logo,
    logoAlt: "Lynsi Logo",
    logoText: "Lynsi",
    copyright: "© LimbyAI LLC 2026. All rights reserved.",
  },
};

export const termsOfUsePageContent: TermsOfUsePageContent = {
  logoSrc: termsOfUseContent.footer.logo,
  logoAlt: termsOfUseContent.header.logoAlt,
  pageTitle: termsOfUseContent.header.title,
  lastUpdated: termsOfUseContent.header.subtitle,
  intro: termsOfUseContent.header.intro,
  sections: termsOfUseContent.sections,
  contact: termsOfUseContent.contact,
};

export const termsOfUseContactInfo = {
  company: "LimbyAI LLC Support Team",
  address: "701 Tillery St unit 12 2364, Austin, TX 78702, United States",
  email: "lynsiaiapp@gmail.com",
};
