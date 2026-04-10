import logo from "../assets/images/common/logo.webp";
import playstoreIcon from "../assets/images/common/playstore.webp";
import appleIcon from "../assets/images/common/applelogo.webp";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterStoreButton = {
  id: string;
  href: string;
  iconSrc: string;
  iconAlt: string;
  eyebrow: string;
  label: string;
  ariaLabel: string;
};

export type FooterSocialLink = {
  id: "youtube" | "tiktok" | "linkedin" | "instagram" | "facebook";
  href: string;
  ariaLabel: string;
};

export type FooterContent = {
  brand: {
    logoSrc: string;
    logoAlt: string;
    description: string;
  };
  download: {
    heading: string;
    storeButtons: FooterStoreButton[];
  };
  company: {
    heading: string;
    links: FooterLink[];
  };
  importantLinks: {
    heading: string;
    links: FooterLink[];
  };
};

export const footerContent: FooterContent = {
  brand: {
    logoSrc: logo,
    logoAlt: "Lynsi logo",
    description:
      "Lynsi helps you understand your life patterns across mood, habits, health, and spending. By combining daily check-ins, voice notes, and wearable data, Lynsi turns everyday signals into meaningful insights—so you can make better decisions, consistently.",
  },
  download: {
    heading: "Download App",
    storeButtons: [
      {
        id: "google-play",
        href: "#",
        iconSrc: playstoreIcon,
        iconAlt: "Google Play",
        eyebrow: "GET IT ON",
        label: "Google Play",
        ariaLabel: "Download Lynsi on Google Play",
      },
      {
        id: "app-store",
        href: "#",
        iconSrc: appleIcon,
        iconAlt: "App Store",
        eyebrow: "Download On the",
        label: "App Store",
        ariaLabel: "Download Lynsi on the App Store",
      },
    ],
  },
  company: {
    heading: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Features", href: "#features" },
      { label: "Why Lynsi Exists", href: "#why-lynsi" },
      { label: "Who Lynsi Is For", href: "#who-lynsi-is-for" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  importantLinks: {
    heading: "Important Links",
    links: [
      { label: "Terms of Use & Privacy Policy", href: "/terms" },
      { label: "Contact Us", href: "#contact" },
      { label: "FAQ's", href: "#faqs" },
      { label: "Terms of Content", href: "/content-terms" },
    ],
  },
};
