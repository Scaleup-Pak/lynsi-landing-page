import footerLogo from "../assets/images/common/logo.webp";

export type TermsContentRule = {
  title: string;
  points: string[];
};

export type TermsSimpleSection = {
  title: string;
  points: string[];
};

export type TermsOfContentPageContent = {
  logoSrc: string;
  logoAlt: string;
  pageTitle: string;
  intro: string;
  notAllowedTitle: string;
  notAllowedRules: TermsContentRule[];
  enforcement: TermsSimpleSection;
  remember: TermsSimpleSection;
};

export const termsOfContentPageContent: TermsOfContentPageContent = {
  logoSrc: footerLogo,
  logoAlt: "Lynsi Logo",
  pageTitle: "Acceptable Use Policy",
  intro:
    "Lynsi is designed to help you organize your life effectively and respectfully. By using Lynsi, you agree to use the Service in accordance with these guidelines.",
  notAllowedTitle: "Prohibited Uses",
  notAllowedRules: [
    {
      title: "Illegal Activity",
      points: [
        "Do not use Lynsi to plan, coordinate, or document illegal activities.",
        "Do not store content that violates applicable laws or regulations.",
      ],
    },
    {
      title: "Harmful Content",
      points: [
        "Do not use the Service to store content that promotes violence, harm, or harassment.",
        "Do not use Lynsi to facilitate abuse or exploitation of others.",
      ],
    },
    {
      title: "Security Violations",
      points: [
        "Do not attempt to breach security measures or access unauthorized data.",
        "Do not use the Service to distribute malware or harmful code.",
      ],
    },
    {
      title: "Service Abuse",
      points: [
        "Do not use automated tools to access or manipulate the Service.",
        "Do not attempt to overwhelm or disrupt the Service infrastructure.",
      ],
    },
  ],
  enforcement: {
    title: "Enforcement",
    points: [
      "We reserve the right to review accounts and content if violations are reported or detected.",
      "Accounts found in violation may be suspended or terminated.",
      "We may cooperate with law enforcement when required by law.",
    ],
  },
  remember: {
    title: "Remember",
    points: [
      "Lynsi is your personal organization tool—use it to organize and improve your life.",
      "Respect our Service and other users by following these guidelines.",
      "If you have questions about acceptable use, contact us at Lynsiaiapp@gmail.com.",
    ],
  },
};
