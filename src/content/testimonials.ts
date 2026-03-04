import avatar1 from "../assets/images/testimonials/image1.png";
import avatar2 from "../assets/images/testimonials/image2.png";
import avatar3 from "../assets/images/testimonials/image3.png";
import avatar4 from "../assets/images/testimonials/image4.png";
import avatar5 from "../assets/images/testimonials/image5.png";
import avatar6 from "../assets/images/testimonials/image6.png";

export type TestimonialItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
};

export type TestimonialsContent = {
  heading: string;
  description: string;
  items: TestimonialItem[];
};

export const testimonialsContent: TestimonialsContent = {
  heading: "Real People, Real Balance",
  description:
    "Discover how busy parents and professionals are using PersonAI to reduce mental load, stay organized, and finally feel in control of their lives.",
  items: [
    {
      id: "sarah-johnson",
      quote:
        "As a working mom of two, PersonAI has been a game-changer. The AI suggestions help me remember the little things that used to slip through the cracks. I finally feel like I'm managing everything without the constant stress.",
      name: "Sarah Johnson",
      role: "Marketing Manager & Mom",
      avatarSrc: avatar1,
    },
    {
      id: "michael-chen",
      quote:
        "I love how PersonAI balances my side hustle with my full-time job and personal life. The life balance score keeps me honest about where I'm spending my time, and the AI nudges are surprisingly helpful.",
      name: "Michael Chen",
      role: "Software Developer & Entrepreneur",
      avatarSrc: avatar2,
    },
    {
      id: "lisa-martinez",
      quote:
        "The weekly planner with drag-and-drop is so intuitive. I can see everything at once and easily adjust when plans change. The AI personality options make the app feel like a supportive friend rather than just another tool.",
      name: "Lisa Martinez",
      role: "Small Business Owner",
      avatarSrc: avatar3,
    },
    {
      id: "james-wilson",
      quote:
        "PersonAI helped me realize I was neglecting my wellness while focusing too much on work. The gentle suggestions to take breaks and exercise have made a real difference in my daily routine.",
      name: "James Wilson",
      role: "Consultant & Father",
      avatarSrc: avatar4,
    },
    {
      id: "amanda-foster",
      quote:
        "I've tried so many productivity apps, but they all felt too rigid. PersonAI understands that life is messy and meets me where I am. The AI learns my patterns and actually helps instead of overwhelming me.",
      name: "Amanda Foster",
      role: "Teacher & Parent",
      avatarSrc: avatar5,
    },
    {
      id: "david-kim",
      quote:
        "The offline functionality is crucial for me when traveling. Everything syncs perfectly when I'm back online, and I never lose my data. Plus, the insights help me see patterns I wouldn't have noticed on my own.",
      name: "David Kim",
      role: "Sales Executive",
      avatarSrc: avatar6,
    },
  ],
};
