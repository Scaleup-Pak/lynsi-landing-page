export type WhyLynsiExistsCard = {
  id: string;
  title: string;
  description: string;
};

export type WhyLynsiExistsContent = {
  heading: string;
  quote: string;
  cards: WhyLynsiExistsCard[];
};

export const whyLynsiExistsContent: WhyLynsiExistsContent = {
  heading: "Why Lynsi Exists",
  quote:
    '"By the time it was completely clear, it was already too late to respond-the subtle signs had been there all along, showing that things were changing, but there was no way to track them, understand what they meant, or explain them clearly before the situation got worse."',
  cards: [
    {
      id: "notice-early",
      title: "See What’s Hard to Notice",
      description:
        "Lynsi helps you detect subtle shifts in your mood, habits, and daily patterns that often go unnoticed, giving you the chance to recognize and address changes before they grow overwhelming.",
    },
    {
      id: "clarity-from-patterns",
      title: "Turn Patterns Into Clarity",
      description:
        "Instead of guessing or struggling to explain how you feel, Lynsi connects your check-ins, routines, health signals, and spending behavior to reveal meaningful patterns you can actually understand.",
    },
    {
      id: "act-sooner",
      title: "Act Before It Escalates",
      description:
        "With earlier awareness and clearer insight, you can respond more quickly, adjust your routine with confidence, and make calmer decisions before pressure builds into something harder to manage.",
    },
  ],
};
