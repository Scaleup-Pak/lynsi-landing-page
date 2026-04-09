import anonymousSurveyImage from "../assets/images/anonymoussurvey/image.webp";

export type AnonymousSurveyItem = {
  id: string;
  title: string;
  description: string;
};

export type AnonymousSurveyContent = {
  heading: string;
  description: string;
  items: AnonymousSurveyItem[];
  previewImage: {
    src: string;
    alt: string;
  };
};

export const anonymousSurveyContent: AnonymousSurveyContent = {
  heading: "See yourself more clearly-through the people around you",
  description:
    '"Lynsi lets you safely gather anonymous feedback from people you trust-so you can see yourself the way others already do."',
  items: [
    {
      id: "share-survey",
      title: "Share Your Anonymous Survey",
      description:
        "Send a private survey link to people you trust, allowing them to reflect on your mood and behavior over time through a quick and effortless experience without any friction or setup.",
    },
    {
      id: "honest-feedback",
      title: "Receive Honest, Unfiltered Feedback",
      description:
        "Collect useful, trend-based observations without exposing anyone's identity, so feedback stays honest while helping you discover what may be hard to see on your own.",
    },
    {
      id: "maggie-observer",
      title: "Maggie, The AI Observer",
      description:
        "Maggie summarizes anonymous responses into actionable patterns, helping you understand shifts in behavior with calm, clear, and practical guidance.",
    },
  ],
  previewImage: {
    src: anonymousSurveyImage,
    alt: "Anonymous survey and Maggie observer interface preview",
  },
};
