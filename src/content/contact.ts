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
  heading: "Contact Us",
  subheading:
    "Please send us a note and we’ll get back to you as quickly as possible.",
  fields: {
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email Address",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Tell us what's on your mind",
  },
  submitButtonText: "Send Message",
  sendingButtonText: "Sending...",
};
