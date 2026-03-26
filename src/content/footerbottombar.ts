export type LegalFooterSocialLink = {
  id: "youtube" | "tiktok" | "linkedin" | "instagram" | "facebook";
  href: string;
  ariaLabel: string;
};

export type LegalFooterContent = {
  copyright: string;
  socialLinks: LegalFooterSocialLink[];
};

export const legalFooterContent: LegalFooterContent = {
  copyright: "© Lynsi 2026. All rights reserved.",
  socialLinks: [
    {
      id: "linkedin",
      href: "#",
      ariaLabel: "LinkedIn",
    },
    {
      id: "facebook",
      href: "#",
      ariaLabel: "Facebook",
    },
    {
      id: "instagram",
      href: "#",
      ariaLabel: "Instagram",
    },
    {
      id: "youtube",
      href: "#",
      ariaLabel: "YouTube",
    },
  ],
};
