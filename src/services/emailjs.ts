import emailjs from "@emailjs/browser";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL;

export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailJSSendResult {
  success: boolean;
  error?: string;
}

export async function sendContactFormWithEmailJS(
  data: ContactFormPayload,
): Promise<EmailJSSendResult> {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID || !TO_EMAIL) {
    return {
      success: false,
      error: "Email is not configured. Please set VITE_EMAILJS_* in .env.",
    };
  }

  const senderName = data.name.trim();
  const senderEmail = data.email.trim().toLowerCase();
  const recipientEmail = TO_EMAIL.trim().toLowerCase();
  const subject = data.subject.trim();
  const message = data.message.trim();

  const templateParams = {
    from_name: senderName,
    to_name: "Support Team",
    from_email: senderEmail,
    user_name: senderName,
    user_email: senderEmail,
    sender_name: senderName,
    sender_email: senderEmail,
    recipient_email: recipientEmail,
    email: senderEmail,
    user_type: "Website Visitor",
    subject,
    message,
    reply_to: senderEmail,
    to_email: recipientEmail,
    name: senderName,
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
      publicKey: PUBLIC_KEY,
    });
    return { success: true };
  } catch (err) {
    const message =
      err && typeof err === "object" && "text" in err
        ? String((err as { text: string }).text)
        : "Failed to send message. Please try again.";
    return { success: false, error: message };
  }
}
