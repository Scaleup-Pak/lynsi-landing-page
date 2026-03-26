import logo from "../assets/images/common/logo.png";

export type HeaderNavLink = {
  href: string;
  label: string;
};

export type HeaderContent = {
  logoSrc: string;
  logoAlt: string;
  ctaText: string;
  ctaHref: string;
  navLinks: HeaderNavLink[];
  activeSections: string[];
};

export const headerContent: HeaderContent = {
  logoSrc: logo,
  logoAlt: "Lynsi logo",
  ctaText: "Contact Us",
  ctaHref: "#contact",
  navLinks: [
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faqs", label: "FAQs" },
  ],
  activeSections: [
    "#about",
    "#how-it-works",
    "#features",
    "#testimonials",
    "#faqs",
    "#contact",
  ],
};
