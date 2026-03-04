import logo from "../assets/images/common/logo.svg";
import playstoreIcon from "../assets/images/common/playstore.png";
import appleIcon from "../assets/images/common/applelogo.png";

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
    logoAlt: "PersonAI logo",
    description:
      "PersonAI is your trusted life organization assistant—helping busy parents and professionals balance work, home, wellness, and more through AI-powered task management and personalized insights. Reduce mental load, increase follow-through, and take control of your life.",
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
        ariaLabel: "Download PersonAI on Google Play",
      },
      {
        id: "app-store",
        href: "#",
        iconSrc: appleIcon,
        iconAlt: "App Store",
        eyebrow: "Download On the",
        label: "App Store",
        ariaLabel: "Download PersonAI on the App Store",
      },
    ],
  },
  company: {
    heading: "Product",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Features", href: "#features" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ's", href: "#faqs" },
    ],
  },
  importantLinks: {
    heading: "Legal & Support",
    links: [
      { label: "Terms of Use & Privacy Policy", href: "/terms" },
      { label: "Contact Us", href: "#contact" },
      { label: "Help Center", href: "#faqs" },
    ],
  },
};
