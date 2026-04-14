import { useEffect } from "react";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Features } from "../components/Feature";
import { ContactUs } from "../components/ContactUs";
import { DownloadBanner } from "../components/DownloadBanner";
import { Footer } from "../components/Footer";
import { Testimonial } from "../components/Testimonial";
import { Faqs } from "../components/Faqs";
import { WhyLynsiExists } from "../components/WhyLynsiExists";
import { WhoLynsiIsFor } from "../components/WhoLynsiIsFor";
import { AnonymousSurvey } from "../components/AnonymousSurvey";
import { setPageMetadata } from "../utils/seo";

export function HomePage() {
  useEffect(() => {
    setPageMetadata({
      title: "Lynsi | Turn Daily Behavior Into Measurable Insight",
      description:
        "See how your mood, health, habits, and spending connect. Lynsi turns check-ins, voice notes, and wearable data into clear insights you can act on.",
      canonicalUrl: "https://www.lynsi.net/",
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <About />
        {/* <HowItWorks /> */}
        <section>
          <Features />
        </section>
        <section>
          <WhyLynsiExists />
        </section>
        <section>
          <WhoLynsiIsFor />
        </section>
        <section>
          <AnonymousSurvey />
        </section>
        <section>
          <Testimonial />
        </section>
        <section>
          <Faqs />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
        <section id="download">
          <DownloadBanner />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
}
