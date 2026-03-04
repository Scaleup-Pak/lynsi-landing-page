import React, { useState } from "react";
import { toast, Toaster } from "sonner";
import { validateContactForm, type ContactFormData } from "../utils/validation";
import { contactContent } from "../content/contact";
import { sendContactFormWithEmailJS } from "../services/emailjs";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const inputBaseClass =
  "w-full rounded-xl border border-card-border bg-surface-soft/40 px-[22px] text-[18px] leading-7 tracking-[-0.01em] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange =
    (field: keyof ContactFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      toast.error("Please fix the errors below and try again.", {
        duration: 4000,
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const result = await sendContactFormWithEmailJS(formData);
      console.log("🚀 ~ handleSubmit ~ result:", result)
      if (!result.success) {
        throw new Error(result.error ?? "Failed to send message");
      }

      toast.success("Message sent successfully! We'll get back to you soon.", {
        duration: 5000,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      const errorMessage =
        error instanceof Error && error.message
          ? error.message
          : "Failed to send message. Please try again or contact us directly.";
      toast.error(errorMessage, {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[684px]">
      <Toaster position="top-center" richColors />
      <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[54px] sm:gap-[74px]"
        >
        <div className="flex flex-col gap-4 sm:gap-5">
          <div>
          <input
            type="text"
            name="user_name"
            value={formData.name}
            onChange={handleInputChange("name")}
            placeholder={contactContent.fields.namePlaceholder}
            maxLength={50}
            className={`${inputBaseClass} h-[56px] sm:h-[60px]`}
            aria-label="Name"
          />
          {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
          <input
            type="email"
            name="user_email"
            value={formData.email}
            onChange={handleInputChange("email")}
            placeholder={contactContent.fields.emailPlaceholder}
            maxLength={254}
            className={`${inputBaseClass} h-[56px] sm:h-[60px]`}
            aria-label="Email Address"
          />
          {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange("subject")}
            placeholder={contactContent.fields.subjectPlaceholder}
            maxLength={100}
            className={`${inputBaseClass} h-[56px] sm:h-[60px]`}
            aria-label="Subject"
          />
          {errors.subject && <p className="mt-2 text-sm text-red-500">{errors.subject}</p>}
          </div>

          <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange("message")}
            placeholder={contactContent.fields.messagePlaceholder}
            maxLength={1000}
            rows={6}
            className={`${inputBaseClass} min-h-[150px] resize-y py-[16px] sm:min-h-[177px] sm:py-[14px]`}
            aria-label="Message"
          />
          {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="h-[50px] w-full rounded-[10px] bg-primary px-6 cursor-pointer text-[18px] font-semibold leading-8 text-accent transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? contactContent.sendingButtonText : contactContent.submitButtonText}
        </button>
      </form>
    </div>
  );
};
