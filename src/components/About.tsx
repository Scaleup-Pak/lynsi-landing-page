import { aboutContent } from "../content/about";

export function About() {
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
              <div className="flex justify-center lg:justify-start divide-x divide-zinc-200 mt-4">
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
                className="max-h-[620px] w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bottom section: Lynsi Companion + features list + CTA | image */}
          <div className="mt-10 lg:mt-24 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 lg:flex-row-reverse">
            <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-[28px] font-bold leading-tight text-foreground sm:text-[34px] lg:text-[40px]">
                  {aboutContent.bottom.heading}
                </h3>
                <p className="max-w-[560px] text-base leading-7 text-muted-foreground sm:text-lg">
                  {aboutContent.bottom.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full max-w-[560px]">
                {aboutContent.bottom.features.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-row items-center justify-center sm:justify-start text-left gap-3"
                  >
                    <div className="flex shrink-0 items-center justify-center rounded-[10px]">
                      <img
                        src={item.iconSrc}
                        alt=""
                        className="h-6 w-6 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-base font-semibold text-foreground sm:text-lg leading-tight">
                      {item.title}
                    </span>
                  </div>
                ))}
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

            <div className="flex flex-1 justify-center lg:justify-start relative">
              <div className="flex items-center gap-4 sm:gap-6">
                {aboutContent.bottom.images?.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className="max-h-[500px] lg:max-h-[620px] w-auto object-contain rounded-md"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
