import { aboutContent } from "../content/about";

export function About() {
  return (
    <section id="about" className="w-full  bg-background pt-28 sm:pt-32 lg:pt-48 ">
      <div className="w-full px-4   sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className=" mx-auto flex w-full  max-w-[1200px] flex-col gap-12 sm:gap-14 lg:gap-16s">

          {/* Top section: headline + description + CTA + social proof | image */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16  ">
            <div className="flex flex-1 flex-col gap-8 x">
              <h2 className="text-[28px] font-bold leading-tight text-foreground sm:text-[34px] lg:text-[40px]">
                {aboutContent.main.headline}
              </h2>
              <p className="max-w-[560px] text-base leading-7 text-muted-foreground sm:text-lg">
                {aboutContent.main.description}
              </p>
              <a
                href={aboutContent.main.ctaHref}
                className="inline-flex w-fit items-center justify-center rounded-[10px] bg-primary px-6 py-3 text-base font-semibold text-accent shadow-sm hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-ring focus-visible:ring-offset-2"
              >
                {aboutContent.main.ctaText}
              </a>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {aboutContent.socialProof.avatarSrcs.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-background object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground sm:text-base">
                  {aboutContent.socialProof.userCount}{" "}
                  {aboutContent.socialProof.label}
                </span>
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

          {/* Bottom section: Plan, Track & Achieve + features + CTA */}
          <div className="mt-10 flex  flex-col items-center gap-8 text-center lg:mt-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-[26px] font-bold leading-tight text-foreground sm:text-[32px] lg:text-[36px]">
                {aboutContent.bottom.heading}
              </h3>
              <p className="mx-auto max-w-[720px] text-base leading-7 text-muted-foreground sm:text-lg">
                {aboutContent.bottom.description}
            </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {aboutContent.bottom.features.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center  gap-1 sm:flex-row sm:gap-2"
                >
                  <div className="flex  shrink-0 items-center justify-center rounded-[10px] ">
                    <img
                      src={item.iconSrc}
                      alt=""
                      className="h-6 w-6 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-base font-normal text-foreground sm:text-lg">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
           <div className="mt-[60px]">
           <a
              href={aboutContent.bottom.ctaHref}
              className="inline-flex items-center justify-center rounded-[10px] bg-primary px-6 py-3 text-base font-semibold text-accent shadow-sm hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-ring focus-visible:ring-offset-2"
            >
              {aboutContent.bottom.ctaText}
            </a>
           </div>
          </div>

        </div>
      </div>
    </section>
  );
}
