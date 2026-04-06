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
    "Everything you need to know about Lynsi Mobile App.",
  defaultOpenId: "connect-wearables",
  items: [
    {
      id: "mental-health-or-self-understanding",
      question:
        "Is Lynsi considered a mental health app, or something different in how it helps you understand yourself?",
      answer:
        "Lynsi is a self-awareness and personal growth companion. It helps you understand patterns in your routines, mood, and habits so you can make better daily decisions. It is not a replacement for medical diagnosis, therapy, or emergency mental health support.",
    },
    {
      id: "easy-and-intuitive",
      question:
        "Is Lynsi complicated to use, or is it designed to feel simple and intuitive from the start?",
      answer:
        "Lynsi is designed to feel simple from day one. You can start with quick check-ins and voice notes, and the app handles analysis in the background so insights stay clear and easy to follow.",
    },
    {
      id: "privacy-control",
      question:
        "Is my information kept private, and do I have full control over what is shared and when?",
      answer:
        "Yes. Your data is private, and you stay in control. You decide what to connect, what to share, and when to share it. You can also update permissions at any time to match your comfort level.",
    },
    {
      id: "adapt-to-your-pace",
      question:
        "Do I need to use Lynsi every single day for it to be effective, or can it adapt to my pace?",
      answer:
        "Lynsi adapts to your pace. Daily use can improve insight quality, but you do not need perfect consistency for it to be helpful. Even periodic check-ins can reveal meaningful trends over time.",
    },
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
