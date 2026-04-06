import heroImage from "../assets/images/hero/hero.png";

import iconMood from "../assets/images/features/Smiley.png";
import iconWearable from "../assets/images/features/Heartbeat.png";
import iconMedication from "../assets/images/features/Pill.png";
import iconScreentime from "../assets/images/features/Hourglass.png";
import iconMoney from "../assets/images/features/CurrencyCircleDollar.png";

export type AboutFeatureItem = {
  id: string;
  title: string;
  description: string;
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
    secondaryDescription: string;
    features: AboutFeatureItem[];
    ctaText: string;
    ctaHref: string;
  };
};

export const aboutContent: AboutContent = {
  main: {
    headline: "Turn Daily Behavior Into Measurable Insight.",
    description:
      "When Life Starts Shifting, You’ll Be the First to Know. Lynsi gently connects your thoughts, habits, and daily rhythms to uncover the deeper patterns shaping your life, helping you gain clarity and awareness.",
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
    heading: "Lynsi — Where Your Daily Life Turns Into Clear Insight",
    description:
      "Lynsi helps you stay in control of your life by bringing together mood check-ins, medication reminders, smart money management, and health tracking-including steps, heart rate, and daily spending-into one simple, intuitive app designed to fit naturally into your daily routine.",
    secondaryDescription:
      "Built for clarity and ease, Lynsi helps you understand your patterns and make better decisions. So you can feel more balanced, aware, and in control every day.",
    features: [
      {
        id: "daily-mood-tracking",
        title: "Daily Mood Tracking",
        description:
          "Spot emotional patterns early and take control before they impact your day, helping you build a more balanced and stable mindset.",
        iconSrc: iconMood,
      },
      {
        id: "screen-time-tracking",
        title: "Screen Time Tracking",
        description:
          "Understand where your attention goes each day, reduce digital overload, and build healthier routines with practical screen-time insight.",
        iconSrc: iconScreentime,
      },
      {
        id: "health-integration",
        title: "Health & Wearable Integration",
        description:
          "Sync your wearable and health data to reveal clear links between sleep, activity, vital trends, and how you feel throughout the day.",
        iconSrc: iconWearable,
      },
      {
        id: "money-management",
        title: "Money Management",
        description:
          "Track everyday spending patterns alongside lifestyle habits, so you can make steadier financial decisions with less stress.",
        iconSrc: iconMoney,
      },
      {
        id: "medication-reminder",
        title: "Medication Reminder",
        description:
          "Stay consistent with timely reminders and reduce missed doses, helping you maintain better day-to-day health routines.",
        iconSrc: iconMedication,
      },
    ],
    ctaText: "Start Understanding Your Patterns Today",
    ctaHref: "#download",
  },
};
