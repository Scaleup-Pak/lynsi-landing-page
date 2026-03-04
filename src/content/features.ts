import featureImage1 from "../assets/images/features/image1.png";
import featureImage2 from "../assets/images/features/image2.png";
import featureImage3 from "../assets/images/features/image3.png";
import cameraIcon from "../assets/images/features/Camera.png";
import fileTextIcon from "../assets/images/features/FileText.png";
import downloadIcon from "../assets/images/features/DownloadSimple.png";

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
      id: "personalized-setup",
      title: "Personalized Setup",
      description:
        "Select 3-7 life areas that matter to you, answer a quick AI questionnaire, and let PersonAI understand your unique situation, workload, and preferences to provide tailored suggestions.",
      iconSrc: cameraIcon,
      imageSrc: featureImage1,
      imageAlt: "PersonAI onboarding and life area selection",
    },
    {
      id: "smart-organization",
      title: "Smart Task Organization",
      description:
        "Organize tasks by life area, use the drag-and-drop weekly planner, and see your progress at a glance. PersonAI keeps everything synced across devices and works fully offline.",
      iconSrc: fileTextIcon,
      imageSrc: featureImage2,
      imageAlt: "PersonAI weekly planner and task organization",
      reverse: true,
    },
    {
      id: "ai-insights",
      title: "AI Insights & Suggestions",
      description:
        "Get personalized task suggestions daily, track your life balance score, and receive gentle nudges to keep neglected areas on track. Like or dislike suggestions to help AI learn your preferences.",
      iconSrc: downloadIcon,
      imageSrc: featureImage3,
      imageAlt: "PersonAI AI suggestions and insights dashboard",
    },
  ],
};
