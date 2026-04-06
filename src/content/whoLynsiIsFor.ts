import whoLynsiImage from "../assets/images/whoislynsifor/image.png";

export type WhoLynsiAudienceItem = {
  id: string;
  label: string;
  description: string;
};

export type WhoLynsiIsForContent = {
  heading: string;
  description: string;
  audience: WhoLynsiAudienceItem[];
  ctaText: string;
  ctaHref: string;
  image: {
    src: string;
    alt: string;
  };
};

export const whoLynsiIsForContent: WhoLynsiIsForContent = {
  heading: "Who Lynsi Is For",
  description:
    "Built for individuals who want to understand themselves and improve daily habits, Lynsi helps you spot early signs of stress and take control of your mental well-being.",
  audience: [
    {
      id: "self-improvers",
      label: "Self-Improvers",
      description:
        "People who actively track habits and want deeper insights into their behavior.",
    },
    {
      id: "overthinkers-reflective-minds",
      label: "Overthinkers & Reflective Minds",
      description:
        "Users who feel something is off but can't clearly identify patterns on their own.",
    },
    {
      id: "mental-wellness-seekers",
      label: "Mental Wellness Seekers",
      description:
        "Individuals who want to stay emotionally aware and prevent burnout.",
    },
    {
      id: "health-conscious-users",
      label: "Health-Conscious Users",
      description:
        "People already using wearables and wanting to connect physical data with mental health.",
    },
  ],
  ctaText: "Start Understanding Your Patterns Today",
  ctaHref: "#download",
  image: {
    src: whoLynsiImage,
    alt: "Who Lynsi Is For visual",
  },
};
