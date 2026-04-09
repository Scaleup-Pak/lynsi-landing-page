import howItWorksImage from "../assets/images/howitworks/howitworks.webp";
import riskIcon from "../assets/images/howitworks/mage_goals-fill.webp";
import reportIcon from "../assets/images/howitworks/Frame.webp";
import chatIcon from "../assets/images/howitworks/DiscordLogo.webp";
import estimateIcon from "../assets/images/howitworks/Calculator.webp";

export type HowItWorksFeature = {
  icon: "risk" | "report" | "chat" | "estimate";
  iconSrc: string;
  title: string;
  description: string;
};

export type HowItWorksContent = {
  heading: string;
  description: string;
  leftPanel: {
    primaryAction: string;
    primaryActionHref: string;
    secondaryAction: string;
    secondaryActionHref: string;
    imageSrc: string;
    imageAlt: string;
  };
  features: HowItWorksFeature[];
};

export const howItWorksContent: HowItWorksContent = {
  heading: "Your Comprehensive Lynsi AI",
  description:
    "Lynsi combines voice, data, and daily logs to give you a complete picture of your life.",
  leftPanel: {
    primaryAction: "Download Now",
    primaryActionHref: "#",
    secondaryAction: "Watch Demo",
    secondaryActionHref: "#features",
    imageSrc: howItWorksImage,
    imageAlt: "Lynsi life dashboard preview",
  },
  features: [
    {
      icon: "risk",
      iconSrc: riskIcon,
      title: "Mood & Sleep Mapping",
      description:
        "Log your daily mood and sync sleep data from your wearables. Lynsi identifies how your rest impacts your emotional well-being over time.",
    },
    {
      icon: "report",
      iconSrc: reportIcon,
      title: "Smart Medication Reminders",
      description:
        "Stay on track with your health routine. Get timely, intelligent reminders for medications and supplements tailored to your schedule.",
    },
    {
      icon: "chat",
      iconSrc: chatIcon,
      title: "Holistic Money Insights",
      description:
        "Track your spending habits and see how financial stress relates to your health. Lynsi helps you find balance across your physical and financial life.",
    },
    {
      icon: "estimate",
      iconSrc: estimateIcon,
      title: "AI Coaching",
      description:
        "Receive personalized suggestions to improve your routine based on your unique patterns. From sleep tips to mindfulness nudges, Lynsi is with you.",
    },
  ],
};
