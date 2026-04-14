import logo from "../assets/images/common/logo.webp";

export type PrivacySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type PrivacyContact = {
  title: string;
  email: string;
};

export type PrivacyPolicyPageContent = {
  logoSrc: string;
  logoAlt: string;
  pageTitle: string;
  lastUpdated: string;
  intro: string;
  sections: PrivacySection[];
  contact: PrivacyContact;
};

export const privacyPolicyPageContent: PrivacyPolicyPageContent = {
  logoSrc: logo,
  logoAlt: "Lynsi Logo",
  pageTitle: "Privacy Policy",
  lastUpdated: "Last Updated on: Apr 10, 2026",
  intro:
    "This Privacy Policy explains how Lynsi collects, uses, stores, and protects your information when you use the app and related services.",
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "This Privacy Policy explains how Lynsi collects, uses, stores, and protects your information when you use the app and related services.",
      ],
    },
    {
      title: "Information We Collect",
      bullets: [
        "Account information such as name, email, and profile details.",
        "App usage data, including mood logs, check-ins, reminders, and other in-app entries.",
        "Optional connected data, such as wearable or health integration data you authorize.",
        "Device and technical information such as OS, app version, and diagnostic events.",
      ],
    },
    {
      title: "How We Use Information",
      bullets: [
        "To operate core app functionality and sync your data across devices.",
        "To provide personalized insights and reminders based on your usage.",
        "To maintain security, prevent abuse, and improve app performance.",
      ],
    },
    {
      title: "Sharing and Disclosure",
      bullets: [
        "We do not sell your personal information.",
        "We may share data with service providers that help us operate the app under confidentiality obligations.",
        "We may use aggregated or de-identified data for analytics and service improvement.",
        "We may disclose information where required by law or to protect user safety and legal rights.",
      ],
    },
    {
      title: "Data Storage and Security",
      bullets: [
        "We use reasonable technical and organizational safeguards to protect data.",
        "No security method is perfect, and we cannot guarantee absolute security.",
        "Backup copies may be retained for limited periods for reliability and recovery.",
      ],
    },
    {
      title: "Your Choices and Rights",
      bullets: [
        "You can update profile details and many permissions in app settings.",
        "You may request account and data deletion via app settings or support email.",
        "Where required by law, you may have rights to access, correct, export, or delete your data.",
      ],
    },
    {
      title: "Children's Privacy",
      paragraphs: [
        "Lynsi is not directed to children under 13 (or higher age where required by local law). We do not knowingly collect personal data from children.",
      ],
    },
    {
      title: "Policy Updates",
      paragraphs: [
        "We may update this Privacy Policy from time to time. Material updates will be communicated in-app or by other appropriate notice.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        "For privacy questions or deletion requests, contact: Lynsiaiapp@gmail.com",
      ],
    },
  ],
  contact: {
    title: "Contact",
    email: "Lynsiaiapp@gmail.com",
  },
};
