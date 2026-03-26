 import { ContactForm } from "./ContactForm";
import { contactContent } from "../content/contact";

export function ContactUs() {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto flex w-full max-w-[735px] flex-col items-center gap-10 sm:gap-[60px]">
            <div className="flex w-full flex-col items-center gap-5 text-center">
              <h2 className="w-full text-center text-[34px] font-bold leading-[1.2] text-foreground sm:text-[46px] sm:leading-[55px]">
                {contactContent.heading}
              </h2>
              <p className="w-full max-w-[572px] text-center text-base leading-7 tracking-[-0.01em] text-muted-foreground sm:text-[18px]">
                {contactContent.subheading}
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
