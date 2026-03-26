import featureImage1 from "../assets/images/features/image1.png";
import featureImage2 from "../assets/images/features/image2.png";
import featureImage3 from "../assets/images/features/image3.png";
import featureImage4 from "../assets/images/features/image4.png";
import CheckCircle from "../assets/images/features/Smiley.png";
import Palette from "../assets/images/features/Pill.png";
import PieChart from "../assets/images/features/Heartbeat.png";
import AlarmClock from "../assets/images/features/Hourglass.png";

export type FeatureStep = {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

export type FeaturesContent = {
  heading: string;
  description: string;
  steps: FeatureStep[];
};

export const featuresContent: FeaturesContent = {
  heading: "How Lynsi Works for You",
  description:
    "From onboarding to daily organization, Lynsi makes life management simple, intelligent, and personalized. Balance your life across work, home, and more—all in one intuitive app.",
  steps: [
    {
      id: "tasks-planner",
      title: "Daily Mood Tracking",
      description:
        "Log your mood every day and discover patterns over time. Lynsi helps you understand emotional trends, identify triggers, and improve your overall wellbeing.",
      iconSrc: CheckCircle,
      imageSrc: featureImage1,
      imageAlt: "Lynsi tasks planner interface",
    },
    {
      id: "task-reminders",
      title: " Screen Time Tracking",
      description:
        "Track how much time you spend on your phone and apps daily. See trends, gain insights into your digital habits, and take control of your screen time.",
      iconSrc: AlarmClock,
      imageSrc: featureImage2,
      imageAlt: "Lynsi task reminders and scheduling",
      reverse: true,
    },
    {
      id: "ai-insights",
      title: "Health & Wearable Integration",
      description:
        "Connect your wearables like Apple Health, Samsung Health, and Google Fit to track activity, sleep, and vital stats. Lynsi automatically analyzes your data for better lifestyle insights.",
      iconSrc: PieChart,
      imageSrc: featureImage3,
      imageAlt: "Lynsi productivity insights dashboard",
    },
    {
      id: "medicine-reminder",
      title: "Medicine Reminder",
      description:
        "Add your medicine schedule and pill reminders in advance, and Lynsi will notify you on time to help you stay consistent with your medication routine.",
      iconSrc: Palette,
      imageSrc: featureImage4,
      imageAlt: "Lynsi customizable interface with color palettes",
    },
  ],
};
