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
  lastUpdated: "Last Updated on: April 21, 2026",
  intro:
    "This Privacy Policy explains how LimbyAI LLC (\"Lynsi,\" \"we,\" \"us,\" or \"our\") collects, uses, stores, and protects your information when you use the Lynsi mobile application and related services.",
  sections: [
    {
      title: "1. Information We Collect",
      bullets: [
        "Account Information: Name, email, and profile details.",
        "App Usage Data: Mood logs, check-ins, reminders, and other in-app entries.",
        "Health Data: Optional connected data, such as wearable or health integration data you authorize (e.g., via Spike API).",
        "Trusted Contact Information: If you opt-in to our safety alert feature, we collect the phone numbers of contacts you designate.",
        "Technical Information: OS version, app version, and diagnostic events.",
      ],
    },
    {
      title: "2. How We Use Information",
      bullets: [
        "To operate core app functionality and provide personalized wellness insights.",
        "To deliver user-triggered SMS alerts and surveys to designated Trusted Contacts.",
        "To maintain security, prevent abuse, and improve app performance.",
      ],
    },
    {
      title: "3. Data Storage and Security",
      paragraphs: [
        "Encryption: We prioritize your privacy. All sensitive identifiers, including phone numbers for SMS alerts, are stored using AES-256 encryption.",
        "Safeguards: We use industry-standard technical and organizational safeguards to protect data. While no security method is perfect, we implement rigorous backend protocols to ensure your data remains secure.",
      ],
    },
    {
      title: "4. SMS Privacy & Non-Disclosure (Mandatory Disclosure)",
      paragraphs: [
        "We maintain strict standards regarding the privacy of your mobile information:",
      ],
      bullets: [
        "No Sharing for Marketing: Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes.",
        "Exclusion: All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.",
        "Strict Usage: Phone numbers provided for the \"Trusted Contacts\" feature are used exclusively for sending user-initiated alerts and surveys.",
      ],
    },
    {
      title: "5. Sharing and Disclosure",
      bullets: [
        "We do not sell your personal information.",
        "We may share data with service providers (such as SMS gateways) solely to facilitate the delivery of the service under strict confidentiality obligations.",
        "We may disclose information where required by law or to protect user safety and legal rights.",
      ],
    },
    {
      title: "6. Your Choices and Rights",
      bullets: [
        "SMS Opt-Out: You or your contacts can opt-out of SMS communications at any time by replying STOP.",
        "Data Deletion: You may request account and data deletion via app settings or by contacting our support team.",
        "Permissions: You can manage wearable data permissions and contact list access directly through your device settings.",
      ],
    },
    {
      title: "7. Children's Privacy",
      paragraphs: [
        "Lynsi is not directed to children under 13. We do not knowingly collect personal data from children.",
      ],
    },
    {
      title: "8. Policy Updates",
      paragraphs: [
        "We may update this Privacy Policy from time to time. Material updates will be communicated in-app or by other appropriate notice.",
      ],
    },
    {
      title: "9. Contact",
      paragraphs: [
        "For privacy questions or deletion requests, contact: lynsiaiapp@gmail.com",
      ],
    },
  ],
  contact: {
    title: "Contact",
    email: "lynsiaiapp@gmail.com",
  },
};
