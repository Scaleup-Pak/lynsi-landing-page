import avatar1 from "../assets/images/testimonials/image1.webp";
import avatar2 from "../assets/images/testimonials/image2.webp";
import avatar3 from "../assets/images/testimonials/image3.webp";
import avatar4 from "../assets/images/testimonials/image4.webp";
import avatar5 from "../assets/images/testimonials/image5.webp";
import avatar6 from "../assets/images/testimonials/image6.webp";

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
    "Real stories from real users—discover how Lynsi helps people improve their daily habits, manage health and finances, and stay consistent with what matters most, all from one easy-to-use app.",
  items: [
    {
      id: "sarah-johnson",
      quote:
        "Lynsi helped me see how small changes in my mood and habits were affecting my days, and now I feel more in control and aware of myself.",
      name: "David Elson",
      role: "Professor",
      avatarSrc: avatar1,
    },
    {
      id: "michael-chen",
      quote:
        "Using Lynsi made it easy to track my energy and focus patterns. I started noticing trends I had completely missed before.",
      name: "Lorri Warf",
      role: "Student",
      avatarSrc: avatar2,
    },
    {
      id: "jerry-helfer",
      quote:
        "I didn’t realize how my daily routines were influencing my mindset until Lynsi showed me the patterns, and now I can adjust them thoughtfully.",
      name: "Jerry Helfer",
      role: "Psychiatrist",
      avatarSrc: avatar3,
    },
    {
      id: "paula-mora",
      quote:
        "Lynsi gave me a simple way to understand my emotional ups and downs, helping me make better choices throughout the day.",
      name: "Paula Mora",
      role: "Software Engineer",
      avatarSrc: avatar4,
    },
    {
      id: "iva-ryan",
      quote:
        "By reflecting on my check-ins with Lynsi, I can see what triggers stress or low energy, and it’s made managing my routine much easier.",
      name: "Iva Ryan",
      role: "Civil Engineer",
      avatarSrc: avatar5,
    },
    {
      id: "mary-freund",
      quote:
        "Lynsi helped me connect the dots between my habits and my mood, giving me insights that actually made a difference in how I plan my day.",
      name: "Mary Freund",
      role: "Architectural Engineer",
      avatarSrc: avatar6,
    },
  ],
};
