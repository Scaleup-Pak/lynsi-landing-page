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
  heading: "What Our Users Say About Lynsi",
  description:
    "Discover how busy parents and professionals are using Lynsi to reduce mental load, stay organized, and finally feel in control of their lives.",
  items: [
    {
      id: "sarah-johnson",
      quote:
        "Lynsi helped me understand my daily routines and spot patterns I never noticed, making it easier to improve my habits and plan my days.",
      name: "David Elson",
      role: "Civil Engineer",
      avatarSrc: avatar1,
    },
    {
      id: "michael-chen",
      quote:
        "A simple, intuitive app that turns my check-ins, voice notes, and wearable data into meaningful insights I can use to improve my daily routines.",
      name: "Lorri Warf",
      role: "Architectural Engineer",
      avatarSrc: avatar2,
    },
    {
      id: "jerry-helfer",
      quote:
        "I've tried so many productivity apps, but they all felt too rigid. Lynsi understands that life is messy and meets me where I am. The AI learns my patterns and actually helps instead of overwhelming me.",
      name: "Jerry Helfer",
      role: "Software Engineer",
      avatarSrc: avatar3,
    },
    {
      id: "paula-mora",
      quote:
        "Tracking my lifestyle feels effortless, and Lynsi gives insights I can act on, improving how I manage my health, habits, and daily routines.",
      name: "Paula Mora",
      role: "Software Engineer",
      avatarSrc: avatar4,
    },
    {
      id: "iva-ryan",
      quote:
        "It's amazing how Lynsi combines insights from my health, habits, and finances to give a clear picture of my life and guide better decisions.",
      name: "Iva Ryan",
      role: "Civil Engineer",
      avatarSrc: avatar5,
    },
    {
      id: "mary-freund",
      quote:
        "A simple, intuitive app that turns my check-ins, voice notes, and wearable data into meaningful insights I can use to improve my daily routines.",
      name: "Mary Freund",
      role: "Architectural Engineer",
      avatarSrc: avatar6,
    },
  ],
};
