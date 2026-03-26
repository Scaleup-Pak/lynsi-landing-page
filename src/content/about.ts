import heroImage from "../assets/images/hero/hero.png";

import aboutHero1 from "../assets/images/hero/hero_alt.png";

import iconMood from "../assets/images/features/Smiley.png";
import iconWearable from "../assets/images/features/Heartbeat.png";
import iconMedicine from "../assets/images/features/Pill.png";
import iconScreentime from "../assets/images/features/Hourglass.png";
import iconMoney from "../assets/images/features/CurrencyCircleDollar.png";

export type AboutFeatureItem = {
  id: string;
  title: string;
  iconSrc: string;
};

export type AboutContent = {
  main: {
    headline: string;
    description: string;
    stats: { value: string; label: string }[];
  };
  previewImage: {
    src: string;
    alt: string;
  };
  bottom: {
    heading: string;
    description: string;
    features: AboutFeatureItem[];
    ctaText: string;
    ctaHref: string;
    images: {
      src: string;
      alt: string;
    }[];
  };
};

export const aboutContent: AboutContent = {
  main: {
    headline: "See How Your Mood, Health, and Money Connect",
    description:
      "Understand how you feel, live, and spend with Lynsi as it connects your check-ins, voice notes, and health data to reveal hidden patterns that shape your routines and long-term well-being.",
    stats: [
      { value: "10k+", label: "Downloads" },
      { value: "50k+", label: "Users" },
      { value: "⭐ 4.8", label: "Ratings" },
    ],
  },
  previewImage: {
    src: heroImage,
    alt: "Lynsi app on smartphone",
  },
  bottom: {
    heading: "Lynsi — Your All-in-One Daily Assistant",
    description:
      "Lynsi helps you stay in control of your life by combining mood check-ins, medicine reminders, smart money management, and health tracking—including steps, heart rate (BPM), and daily spendings—all in one simple, intuitive app designed for everyday balance and well-being.",
    features: [
      {
        id: "mood-tracking",
        title: "Daily Mood Tracking",
        iconSrc: iconMood,
      },
      {
        id: "sleep-tracking",
        title: "Sleep & Recovery",
        iconSrc: iconScreentime,
      },
      {
        id: "health-integration",
        title: "Health & Wearable Integration",
        iconSrc: iconWearable,
      },
      {
        id: "money-management",
        title: "Money Management",
        iconSrc: iconMoney,
      },
      {
        id: "medicine-reminder",
        title: "Medicine Reminder",
        iconSrc: iconMedicine,
      },
    ],
    ctaText: "Explore Lynsi App",
    ctaHref: "#download",
    images: [
      {
        src: aboutHero1,
        alt: "Lynsi App Interface 1",
      }
    ],
  },
};
