import { whoLynsiIsForContent } from "../content/whoLynsiIsFor";

export function WhoLynsiIsFor() {
  return (
    <section
      id="who-lynsi-is-for"
      className="w-full bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[101px]">
          <div className="flex w-full max-w-[637px] flex-col items-start gap-10">
            <div className="flex w-full flex-col items-start gap-8">
              <div className="flex w-full flex-col items-start gap-5">
                <h2 className="w-full text-[28px] font-bold leading-[1.2] text-foreground sm:text-[36px] lg:text-[42px] lg:leading-[54px]">
                  {whoLynsiIsForContent.heading}
                </h2>
                <p className="w-full text-base leading-7 tracking-[-0.01em] text-muted-foreground sm:text-[18px] sm:leading-[28px]">
                  {whoLynsiIsForContent.description}
                </p>
              </div>

              <div className="flex w-full flex-col items-start gap-5">
                {whoLynsiIsForContent.audience.map((item) => (
                  <p
                    key={item.id}
                    className="w-full text-[17px] font-medium leading-7 tracking-[-0.01em] text-foreground sm:text-[19px] lg:text-[22px]"
                  >
                    <span className="font-semibold">{item.label}:</span>{" "}
                    <span className="font-normal text-muted-foreground">
                      {item.description}
                    </span>
                  </p>
                ))}
              </div>
            </div>

            <a
              href={whoLynsiIsForContent.ctaHref}
              className="inline-flex min-h-12.5 w-full items-center justify-center whitespace-nowrap rounded-[10px] bg-primary px-3 py-3 text-center text-[13px] font-semibold leading-6 text-white transition-colors duration-200 hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-6 sm:text-base sm:leading-7 md:w-auto md:min-w-[320px] md:px-8 md:text-[18px] md:leading-8"
            >
              {whoLynsiIsForContent.ctaText}
            </a>
          </div>

          <div className="w-full max-w-[462px]">
            <img
              src={whoLynsiIsForContent.image.src}
              alt={whoLynsiIsForContent.image.alt}
              width={925}
              height={1136}
              className="h-auto w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
