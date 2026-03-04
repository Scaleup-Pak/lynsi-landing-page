import heroImage from "../assets/images/hero/hero.png";

export type StoreButtonContent = {
  eyebrow: string;
  label: string;
  ariaLabel: string;
  href: string;
};

export type HeroContent = {
  headline: {
    accent: string;
    lineOne: string;
    lineTwo: string;
  };
  description: string;
  storeButtons: {
    googlePlay: StoreButtonContent;
    appStore: StoreButtonContent;
  };
  imageSrc: string;
  previewImageLink: string;
  imageAlt: string;
};

export const heroContent: HeroContent = {
  headline: {
    accent: "Organize Your Life",
    lineOne: "Balance Work, Home",
    lineTwo: "& Everything That Matters",
  },
  description:
    "PersonAI is your personal AI assistant that helps you manage tasks across all 7 life areas. Get AI-powered suggestions, weekly planning, and insights to reduce mental load and stay balanced.",
  storeButtons: {
    googlePlay: {
      eyebrow: "GET IT ON",
      label: "Google Play",
      ariaLabel: "Download PersonAI on Google Play",
      href: "#",
    },
    appStore: {
      eyebrow: "Download On the",
      label: "App Store",
      ariaLabel: "Download PersonAI on the App Store",
      href: "#",
    },
  },
  imageSrc: heroImage,
  previewImageLink: "#",
  imageAlt: "PersonAI mobile app interface preview",
};
