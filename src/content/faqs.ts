export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqsContent = {
  heading: string;
  description: string;
  items: FaqItem[];
  defaultOpenId: string;
};

export const faqsContent: FaqsContent = {
  heading: "Frequently Asked Questions",
  description:
    "Everything you need to know about PersonAI and how it helps you organize your life.",
  defaultOpenId: "what-is-personai",
  items: [
    {
      id: "what-is-personai",
      question: "What is PersonAI?",
      answer:
        "PersonAI is a mobile-first life organization assistant that helps you balance tasks across 7 core life areas: Work, Home & Family, Personal & Wellness, Learning/Goals, Side Hustle, Events/Social, and Finances. Our AI learns your patterns and gently suggests small, high-impact tasks to keep everything running smoothly.",
    },
    {
      id: "how-ai-works",
      question: "How does the AI personalization work?",
      answer:
        "PersonAI's AI learns from your patterns and preferences through an initial questionnaire and ongoing usage. It provides personalized task suggestions based on your life areas, current workload, and what matters most to you. You can choose your AI's personality—Gentle & Supportive, Efficient & Direct, or Friendly & Conversational—to match your communication style.",
    },
    {
      id: "life-areas",
      question: "What are the 7 Life Areas in the app?",
      answer:
        "The 7 predefined life areas are: Work (career and professional tasks), Home & Family (household and family responsibilities), Personal & Wellness (health, fitness, self-care), Learning/Goals (education and personal development), Side Hustle (side projects and entrepreneurship), Events/Social (social life and relationships), and Finances (money management and planning).",
    },
    {
      id: "free-or-paid",
      question: "Is PersonAI free to use?",
      answer:
        "PersonAI offers a free version with core features including the weekly planner, life area organization, AI suggestions, and insights. Premium features like custom life areas, advanced AI capabilities, calendar sync, and collaboration tools will be available in the PLUS subscription tier.",
    },
    {
      id: "data-sync",
      question: "How does syncing work across devices?",
      answer:
        "PersonAI automatically syncs your tasks and data across all your devices in real-time when you're online. The app also works fully offline—all changes are saved locally and automatically sync when you reconnect to the internet. Your data is backed up automatically with every session.",
    },
    {
      id: "task-management",
      question: "How do tasks work in PersonAI?",
      answer:
        "Tasks in PersonAI are organized by life areas and can include a title, due date, recurrence (daily, weekly, monthly), and notes. You can quickly add tasks using the floating button, view them in your weekly planner or by life area, drag and drop to reschedule, and track your progress with completion statistics.",
    },
    {
      id: "ai-suggestions",
      question: "What are AI-Suggested Tasks?",
      answer:
        "AI-Suggested Tasks are personalized task recommendations based on your life areas, patterns, and preferences. The AI surfaces 3-7 daily suggestions of small, high-impact actions to keep neglected areas balanced. You can like or dislike suggestions to help the AI learn and improve recommendations over time.",
    },
    {
      id: "custom-areas",
      question: "Can I add my own custom life areas?",
      answer:
        "Custom life areas will be available in the PLUS subscription tier (Phase 2). In the current version, you can select from the 7 predefined life areas that cover the most common aspects of modern life.",
    },
  ],
};
