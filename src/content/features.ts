import featureImage1 from "../assets/images/features/image1.png";
import featureImage2 from "../assets/images/features/image2.png";
import featureImage3 from "../assets/images/features/image3.png";
import featureImage4 from "../assets/images/features/image4.png";
import featureImage5 from "../assets/images/features/image5.png";
import featureImage6 from "../assets/images/features/image6.png";
import featureImage7 from "../assets/images/features/image7.png";
import CheckCircle from "../assets/images/features/Smiley.png";
import Palette from "../assets/images/features/Pill.png";
import PieChart from "../assets/images/features/Heartbeat.png";
import AlarmClock from "../assets/images/features/Hourglass.png";
import CurrencyCircleDollar from "../assets/images/features/CurrencyCircleDollar.png";
import Feedback from "../assets/images/features/ph_microscope-fill.png";
import phone from "../assets/images/features/fluent_call-28-filled.png";

export type FeatureStep = {
  id: string;
  chip?: string;
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
  heading: "Everything You Need in One Place",
  description:
    "From emotional check-ins to health, habits, and finances, Lynsi’s features are designed to track, analyze, and connect your daily behaviors into clear, actionable insights.",
  steps: [
    {
      id: "mood-tracking",
      chip: "Daily Mood Tracking",
      title: "See mood patterns from overlapping metrics",
      description:
        "Log your mood every day and discover patterns over time. Lynsi helps you understand emotional trends, identify triggers, and improve your overall wellbeing.",
      iconSrc: CheckCircle,
      imageSrc: featureImage1,
      imageAlt: "Lynsi mood tracking dashboard",
    },
    {
      id: "screen-time-tracking",
      chip: "Screen Time Tracking",
      title: "See how your habits are quietly affecting your mental state",
      description:
        "Track how much time you spend on your phone and apps daily. See trends, gain insights into your digital habits, and take control of your screen time.",
      iconSrc: AlarmClock,
      imageSrc: featureImage2,
      imageAlt: "Lynsi screen time tracking dashboard",
      reverse: true,
    },
    {
      id: "health-sleep-integration",
      chip: "Health & Sleep Integration",
      title: "Understand how your body is influencing your mind",
      description:
        "Connect your wearables like Apple Health, Samsung Health, and Google Fit to track activity, sleep, and vital stats. Lynsi automatically analyzes your data for better lifestyle insights.",
      iconSrc: PieChart,
      imageSrc: featureImage3,
      imageAlt: "Lynsi health and sleep integration dashboard",
    },
    {
      id: "money-management",
      chip: "Money Management",
      title: "Make smarter decisions with clearer spending insight",
      description:
        "Track how much time you spend on your phone and apps daily. See trends, gain insights into your digital habits, and take control of your screen time.",
      iconSrc: CurrencyCircleDollar,
      imageSrc: featureImage4,
      imageAlt: "Money Management insights",
    },
    {
      id: "medication-reminder",
      chip: "Medication Reminder",
      title: "Feel more in control of your health, every day",
      description:
        "Add your medication schedule and pill reminders in advance, and Lynsi will notify you on time to help you stay consistent with your medication routine.",
      iconSrc: Palette,
      imageSrc: featureImage5,
      imageAlt: "Lynsi customizable interface with color palettes",
    },

    {
      id: "actionable-feedback",
      chip: "Actionable Feedback",
      title: "See Yourself Through Others",
      description:
        "Get honest, outside perspectives through anonymous feedback, helping you uncover patterns and changes in your behavior that you might not notice on your own.",
      iconSrc: Feedback,
      imageSrc: featureImage6,
      imageAlt: "Actionable Feedback dashboard",
      reverse: true,
    },
    {
      id: "support",
      chip: "Support",
      title: "Need Help, Right Now?",
      description:
        "If something doesn’t feel right, you don’t have to handle it alone—support is within reach. Connect instantly with a trusted helpline for professional medical guidance.",
      iconSrc: phone,
      imageSrc: featureImage7,
      imageAlt: "Lynsi support and helpline",
    },
  ],
};
