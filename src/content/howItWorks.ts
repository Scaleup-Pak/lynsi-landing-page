import howItWorksImage from "../assets/images/howitworks/howitworks.png";
import riskIcon from "../assets/images/howitworks/mage_goals-fill.png";
import reportIcon from "../assets/images/howitworks/Frame.png";
import chatIcon from "../assets/images/howitworks/DiscordLogo.png";
import estimateIcon from "../assets/images/howitworks/Calculator.png";

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
  heading: "Your Personal AI Life Assistant",
  description:
    "PersonAI combines intelligent task management with AI-powered insights to help you balance every area of your life—from work and family to wellness and finances.",
  leftPanel: {
    primaryAction: "Download Now",
    primaryActionHref: "#",
    secondaryAction: "Watch Demo",
    secondaryActionHref: "#features",
    imageSrc: howItWorksImage,
    imageAlt: "PersonAI app dashboard preview",
  },
  features: [
    {
      icon: "risk",
      iconSrc: riskIcon,
      title: "7 Life Areas Organization",
      description:
        "Organize tasks across Work, Home & Family, Personal & Wellness, Learning/Goals, Side Hustle, Events/Social, and Finances. Select what matters and PersonAI keeps it all balanced.",
    },
    {
      icon: "report",
      iconSrc: reportIcon,
      title: "AI-Powered Suggestions",
      description:
        "Get 3-7 personalized task suggestions daily based on your patterns, preferences, and neglected areas. Like or dislike to help AI learn your style.",
    },
    {
      icon: "chat",
      iconSrc: chatIcon,
      title: "Life Balance Insights",
      description:
        "Track your life balance score, see which areas need attention, and get gentle nudges to maintain consistency across all aspects of your life.",
    },
    {
      icon: "estimate",
      iconSrc: estimateIcon,
      title: "Seamless Sync & Offline",
      description:
        "Work anywhere with full offline support. All changes sync automatically across devices when online, with automatic backup on every session.",
    },
  ],
};
