import heroImage from "../assets/images/hero/hero.webp";

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
    accent: "See How Your Mood,",
    lineOne: "Health, and Spending",
    lineTwo: "Connect",
  },
  description:
    "Understand how you feel, live, and spend with Lynsi as it connects your check-ins, voice notes, and health data to reveal hidden patterns that shape your routines and long-term well-being.",
  storeButtons: {
    googlePlay: {
      eyebrow: "GET IT ON",
      label: "Google Play",
      ariaLabel: "Download Lynsi on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.lynsi.mh&pcampaignid=web_share",
    },
    appStore: {
      eyebrow: "Download On the",
      label: "App Store",
      ariaLabel: "Download Lynsi on the App Store",
      href: "https://apps.apple.com/us/app/lynsi/id6761358174",
    },
  },
  imageSrc: heroImage,
  previewImageLink: "#",
  imageAlt: "Lynsi mobile app interface preview",
};
