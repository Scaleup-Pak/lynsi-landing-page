import featureImage1 from "../assets/images/features/image1.webp";
import featureImage2 from "../assets/images/features/image2.webp";
import featureImage3 from "../assets/images/features/image3.webp";
import featureImage4 from "../assets/images/features/image4.webp";
import featureImage5 from "../assets/images/features/image5.webp";
import featureImage6 from "../assets/images/features/image6.webp";
import featureImage7 from "../assets/images/features/image7.webp";
import featureImage8 from "../assets/images/features/image8.webp";
import CheckCircle from "../assets/images/features/Smiley.webp";
import Palette from "../assets/images/features/Pill.webp";
import PieChart from "../assets/images/features/Heartbeat.webp";
import AlarmClock from "../assets/images/features/Hourglass.webp";
import CurrencyCircleDollar from "../assets/images/features/CurrencyCircleDollar.webp";
import Feedback from "../assets/images/features/ph_microscope-fill.webp";
import phone from "../assets/images/features/fluent_call-28-filled.webp";

export type FeatureStep = {
  id: string;
  chip?: string;
  title: string;
  description: string;
  iconSrc: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  mutedCard?: boolean;
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
    {
      id: "clinical-share",
      chip: "Clinical Share",
      title: "Share Your Health Insights Directly with Your Clinicians",
      description:
        "CliniShare bridges the gap between visits by giving clinicians real-time, objective insights. Instead of relying on memory, you can share what's actually happening-helping your care team respond sooner, adjust faster, and support you more effectively.",
      iconSrc: PieChart,
      imageSrc: featureImage8,
      imageAlt: "Clinical Share insights card and health dashboard preview",
      reverse: false,
      mutedCard: true,
    },
  ],
};
