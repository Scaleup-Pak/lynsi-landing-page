import { featuresContent } from "../content/features";

export function Features() {
  return (
    <section
      id="features"
      className="w-full py-16 sm:py-20 lg:py-24 bg-background"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 sm:gap-14 lg:gap-16">
          <div className="flex w-full flex-col items-center gap-5 text-center">
            <h2 className="w-full text-[34px] font-semibold leading-[1.2] text-foreground sm:text-[42px] sm:leading-[54px]">
              {featuresContent.heading}
            </h2>
            <p className="max-w-[1016px] text-base leading-7 tracking-[-0.01em] text-muted-foreground sm:text-lg">
              {featuresContent.description}
            </p>
          </div>

          <div className="flex w-full flex-col gap-12 sm:gap-16  lg:gap-[110px]">
            {featuresContent.steps.map((step) => {
              const rowDirection = step.reverse
                ? "lg:flex-row-reverse"
                : "lg:flex-row";

              return (
                <article
                  key={step.id}
                  className={`flex w-full flex-col items-center gap-8 bg-surface-card rounded-[10px] p-6 ${rowDirection} lg:gap-12`}
                >
                  <div className="w-full max-w-[488px]">
                    <div className="flex flex-col items-start gap-8 sm:gap-10">
                      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary/10">
                        <img
                          src={step.iconSrc}
                          alt=""
                          className="h-9 w-9 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <h3 className="text-[30px] font-semibold leading-[1.25] tracking-[-0.02em] text-foreground sm:text-[34px]">
                          {step.title}
                        </h3>
                        <p className="text-base leading-7 tracking-[-0.01em] text-muted-foreground sm:text-lg">
                          {step.description}
                        </p>
                        <button
                          className="
    inline-flex items-center justify-center mt-4
    rounded-[10px]
    bg-primary text-accent
    px-6 sm:px-8
    py-2.5 sm:py-3
    text-sm sm:text-base font-semibold
    shadow-sm
    hover:bg-primary-hover
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-primary-ring
    focus-visible:ring-offset-2
  "
                        >
                          Explore PersonAI App
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-full max-w-[663px] overflow-hidden rounded-[14px] bg-surface-soft">
                    <img
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
