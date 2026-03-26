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
    "Everything you need to know about Lynsi and how it helps you track and organize your life.",
  defaultOpenId: "how-does-lynsi-track",
  items: [
    {
      id: "how-does-lynsi-track",
      question: "How exactly does Lynsi track and analyze my daily mood and habits?",
      answer:
        "Lynsi uses a combination of daily check-ins, voice notes, and connected device data to understand your routine. Our AI analyzes this information to identify patterns linking your mood, sleep, and habits, providing personalized recommendations to help you feel your best.",
    },
    {
      id: "connect-wearables",
      question: "Can I easily connect my wearable devices like Apple Health, Samsung Health, or Google Fit to Lynsi?",
      answer:
        "Yes, Lynsi connects seamlessly with Apple Health, Samsung Health, Google Fit, and other wearables. It syncs your data automatically, giving you clear insights into your habits, mood, and health.",
    },
    {
      id: "data-privacy",
      question: "Are my check-ins, voice notes, and personal data fully secure and private?",
      answer:
        "Absolutely. We take your privacy seriously. All your personal data, check-ins, and voice notes are end-to-end encrypted and stored securely. We never sell your data to third parties, and you have complete control over what information you share with Lynsi.",
    },
    {
      id: "data-processing",
      question: "How often does Lynsi process my data to provide actionable insights?",
      answer:
        "Lynsi analyzes your data continuously to provide real-time, actionable insights. You'll receive daily summaries, weekly trend reports, and instant suggestions based on your most recent check-ins and wearable data syncs.",
    },
    {
      id: "financial-habits",
      question: "Can Lynsi actually help me improve my financial habits along with health and routines?",
      answer:
        "Yes! Lynsi takes a holistic approach to your well-being. By tracking your patterns alongside your daily routines, Lynsi helps you understand how different habits impact your overall stress levels and provides actionable tips for better balance.",
    },
    {
      id: "tech-savvy",
      question: "Is Lynsi suitable for all users, even if I'm not very tech-savvy?",
      answer:
        "Yes, Lynsi is designed to be incredibly user-friendly. You can interact with the app using simple voice notes or quick daily check-ins—no complicated setup required. The AI handles the complex analysis in the background, presenting you with clear, easy-to-understand insights.",
    },
  ],
};
