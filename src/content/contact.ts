export type ContactContent = {
  heading: string;
  subheading: string;
  fields: {
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
  };
  submitButtonText: string;
  sendingButtonText: string;
};

export const contactContent: ContactContent = {
  heading: "Get in Touch",
  subheading: "Have questions about PersonAI? We're here to help you take control of your life.",
  fields: {
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email Address",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Tell us what's on your mind",
  },
  submitButtonText: "Send Message",
  sendingButtonText: "Sending...",
};
