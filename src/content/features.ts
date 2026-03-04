import featureImage1 from "../assets/images/features/image1.png";
import featureImage2 from "../assets/images/features/image2.png";
import featureImage3 from "../assets/images/features/image3.png";
import CheckCircle from "../assets/images/features/CheckCircle.png";
import Palette from "../assets/images/features/Palette.png";
import PieChart from "../assets/images/features/PieChart.png";
import AlarmClock from "../assets/images/features/Alarm.png";

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
  heading: "How PersonAI Works for You",
  description:
    "From onboarding to daily organization, PersonAI makes life management simple, intelligent, and personalized. Balance your life across work, home, wellness, and more—all in one intuitive app.",
  steps: [
    {
      id: "tasks-planner",
      title: "Tasks Planner",
      description:
        "Create, organize, and manage all your tasks in one place, making it easy to plan your day and stay focused on what matters most.",
      iconSrc: CheckCircle,
      imageSrc: featureImage1,
      imageAlt: "PersonAI tasks planner interface",
    },
    {
      id: "task-reminders",
      title: "Task Reminders",
      description:
        "Set intelligent reminders for your tasks so you’re notified at the right time and never miss an important deadline or commitment.",
      iconSrc: AlarmClock,
      imageSrc: featureImage2,
      imageAlt: "PersonAI task reminders and scheduling",
      reverse: true,
    },
    {
      id: "personai-insights",
      title: "PersonAI Insights",
      description:
        "View clear insights into how many tasks you’ve completed and how many are still pending, helping you track progress and improve productivity over time.",
      iconSrc: PieChart,
      imageSrc: featureImage3,
      imageAlt: "PersonAI productivity insights dashboard",
    },
    {
      id: "customizable-experience",
      title: "Customizable Experience",
      description:
        "Personalize the app with your preferred color palette and visual style, creating an experience that feels comfortable, familiar, and uniquely yours.",
      iconSrc: Palette,
      imageSrc: featureImage1,
      imageAlt: "PersonAI customizable interface with color palettes",
    },
  ],
};
