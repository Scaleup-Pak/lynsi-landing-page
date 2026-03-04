import heroImage from "../assets/images/hero/hero.png";
import avatar1 from "../assets/images/testimonials/image1.png";
import avatar2 from "../assets/images/testimonials/image2.png";
import avatar3 from "../assets/images/testimonials/image3.png";
import avatar4 from "../assets/images/testimonials/image4.png";
import avatar5 from "../assets/images/testimonials/image5.png";
import CheckCircle from "../assets/images/features/CheckCircle.png";
import Alarm from "../assets/images/features/Alarm.png";
import PieChart from "../assets/images/features/PieChart.png";

export type AboutFeatureItem = {
  id: string;
  title: string;
  iconSrc: string;
};

export type AboutContent = {
  main: {
    headline: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
  socialProof: {
    userCount: string;
    label: string;
    avatarSrcs: string[];
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
  };
};

export const aboutContent: AboutContent = {
  main: {
    headline: "Organize Your Daily Life with a Smarter Personal AI",
    description:
      "Person AI helps you plan tasks, set timely reminders, and stay organized across work, home, family, and personal goals—so you can manage your day with clarity and confidence.",
    ctaText: "Explore Personal AI App",
    ctaHref: "#download",
  },
  socialProof: {
    userCount: "12000+",
    label: "Valuable Users",
    avatarSrcs: [avatar1, avatar2, avatar3, avatar4, avatar5],
  },
  previewImage: {
    src: heroImage,
    alt: "PersonAI app on smartphone",
  },
  bottom: {
    heading: "Plan, Track, & Achieve with PersonalAI",
    description:
      "Person AI is your smart task manager that organizes all your tasks, reminders, and goals while helping you stay focused, track progress, and boost your productivity every day.",
    features: [
      { id: "task-management", title: "Task Management", iconSrc: CheckCircle },
      { id: "reminders-nudges", title: "Reminders & Nudges", iconSrc: Alarm },
      { id: "ai-suggestions", title: "AI Task Suggestions", iconSrc: PieChart },
    ],
    ctaText: "Explore Personal AI App",
    ctaHref: "#download",
  },
};
