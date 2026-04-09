import { Download, MessageCircleMore } from "lucide-react";
import { howItWorksContent } from "../content/howItWorks";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full pt-16 sm:pt-20 lg:pt-24 bg-background"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 sm:gap-10 lg:gap-12">
          <div className="space-y-4 sm:space-y-5">
            <h2 className="w-full text-[34px] font-bold leading-[1.2] text-foreground sm:text-[42px] sm:leading-[1.25] lg:w-[60%] lg:text-[42px] lg:leading-[66px]">
              {howItWorksContent.heading}
            </h2>
            <p className="max-w-[720px] text-base leading-7 tracking-[-0.01em] text-muted-foreground sm:text-lg">
              {howItWorksContent.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
            <div className="relative overflow-hidden rounded-[14px] bg-surface-soft aspect-square sm:aspect-[4/3] lg:aspect-auto">
              <img
                src={howItWorksContent.leftPanel.imageSrc}
                alt={howItWorksContent.leftPanel.imageAlt}
                width={1100}
                height={1068}
                className="h-full w-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />

              <a
                href={howItWorksContent.leftPanel.primaryActionHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-6 top-6 hidden h-12 items-center gap-2 rounded-[10px] bg-primary px-4 text-sm font-semibold text-white md:flex"
              >
                <Download className="h-4 w-4" />
                {howItWorksContent.leftPanel.primaryAction}
              </a>

              <a
                href={howItWorksContent.leftPanel.secondaryActionHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-1/2 flex h-14 w-[84%] -translate-x-1/2 items-center justify-center gap-2 rounded-[14px] border border-primary bg-background/95 px-4 text-2xl font-semibold text-primary shadow-sm sm:bottom-6 sm:h-16 sm:text-[36px]"
              >
                <MessageCircleMore className="h-6 w-6" />
                {howItWorksContent.leftPanel.secondaryAction}
              </a>
            </div>

            <div className="flex flex-col gap-3.5 sm:gap-[14px]">
              {howItWorksContent.features.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[14px] bg-surface-soft p-4 sm:p-5"
                >
                  <div className="flex items-start gap-4 sm:gap-7">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-primary/20">
                      <img
                        src={item.iconSrc}
                        alt=""
                        width={56}
                        height={56}
                        className="h-7 w-7 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl font-semibold leading-8 tracking-[-0.01em] text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-[16px] leading-[1.56] tracking-[-0.01em] text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
