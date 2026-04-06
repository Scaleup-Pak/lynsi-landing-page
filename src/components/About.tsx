import { useState } from "react";
import { aboutContent } from "../content/about";

function AboutAccordionToggle({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="relative block h-5 w-5 shrink-0" aria-hidden="true">
      <span className="absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
      <span
        className={`absolute left-1/2 top-1/2 h-5 w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 ease-out ${
          isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
        }`}
      />
    </span>
  );
}

export function About() {
  const [openFeatureId, setOpenFeatureId] = useState<string>(
    aboutContent.bottom.features[0]?.id ?? "",
  );

  return (
    <section
      id="about"
      className="w-full bg-background pt-28 sm:pt-32 lg:pt-48"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 sm:gap-14 lg:gap-16">
          {/* Top section: headline + description + CTA + social proof | image */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left gap-8">
              <h2 className="text-[28px] font-bold leading-tight text-foreground sm:text-[34px] lg:text-[50px]">
                {aboutContent.main.headline}
              </h2>
              <p className="max-w-[560px] text-base leading-7 text-muted-foreground sm:text-lg">
                {aboutContent.main.description}
              </p>
              <div className="mt-4 flex w-full flex-wrap justify-center divide-x divide-zinc-200 lg:justify-start">
                {aboutContent.main.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 px-4 sm:px-8 first:pl-0 lg:last:pr-0 items-center"
                  >
                    <span className="text-xl sm:text-2xl font-bold text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground sm:text-base text-center">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-1 justify-center lg:justify-end">
              <img
                src={aboutContent.previewImage.src}
                alt={aboutContent.previewImage.alt}
                className="max-h-[620px] w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bottom section: text + CTA | feature accordion */}
          <div className="mt-10 lg:mt-24 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-[28px] font-bold leading-tight text-foreground sm:text-[34px] lg:text-[40px]">
                  {aboutContent.bottom.heading}
                </h3>
                <p className="max-w-[560px] text-base leading-7 text-muted-foreground sm:text-lg">
                  {aboutContent.bottom.description}
                </p>
                <p className="max-w-[560px] text-base leading-7 text-muted-foreground sm:text-lg">
                  {aboutContent.bottom.secondaryDescription}
                </p>
              </div>

              <div className="mt-2 sm:mt-4">
                <a
                  href={aboutContent.bottom.ctaHref}
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-200"
                >
                  {aboutContent.bottom.ctaText}
                </a>
              </div>
            </div>

            <div className="flex w-full flex-1 justify-center lg:justify-end">
              <div className="w-full max-w-[620px] space-y-3">
                {aboutContent.bottom.features.map((item) => {
                  const isOpen = openFeatureId === item.id;

                  return (
                    <article
                      key={item.id}
                      className={`w-full rounded-[18px] border border-card-border px-5 py-5 sm:px-6 ${
                        isOpen ? "bg-surface-card" : "bg-background"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFeatureId(isOpen ? "" : item.id)}
                        className="flex w-full items-center justify-between gap-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="flex items-center gap-3">
                          <img
                            src={item.iconSrc}
                            alt=""
                            className="h-7 w-7 object-contain"
                            loading="lazy"
                          />
                          <span className="text-[20px] font-semibold leading-tight text-foreground sm:text-[22px]">
                            {item.title}
                          </span>
                        </span>
                        <AboutAccordionToggle isOpen={isOpen} />
                      </button>

                      <div
                        className={`grid overflow-hidden transition-all duration-300 ease-out ${
                          isOpen
                            ? "mt-3 grid-rows-[1fr] opacity-100"
                            : "mt-0 grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
