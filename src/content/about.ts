export type AboutStat = {
  value: string;
  label: string;
};

export type AboutContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mission: string;
  stats: AboutStat[];
  values: {
    title: string;
    description: string;
  }[];
};

export const aboutContent: AboutContent = {
  eyebrow: "About PersonAI",
  heading: "Built for the Beautifully Busy",
  description:
    "PersonAI was born from a simple frustration: life has too many moving parts and no single tool keeps them in balance. We're Softaims LLC, a team of parents, professionals, and builders based in Austin, TX—and we built the assistant we always wished we had.",
  mission:
    "Our mission is to reduce mental load for busy people by combining intelligent task management with AI-powered insights across every area of life—not just work.",
  stats: [
    { value: "7", label: "Core Life Areas" },
    { value: "3–7", label: "Daily AI Suggestions" },
    { value: "100%", label: "Offline Support" },
    { value: "27–45", label: "Target Age Range" },
  ],
  values: [
    {
      title: "Human-First AI",
      description:
        "Our AI is a gentle partner, not a demanding manager. It meets you where you are and nudges you forward without adding stress.",
    },
    {
      title: "Whole-Life Balance",
      description:
        "We believe productivity should span your whole life—home, wellness, finances, relationships—not just your inbox.",
    },
    {
      title: "Privacy by Design",
      description:
        "Your tasks and data are yours. We never sell your personal information and give you full control over your account and data at all times.",
    },
  ],
};
