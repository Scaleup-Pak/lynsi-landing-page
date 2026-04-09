import { testimonialsContent } from "../content/testimonials";

export function Testimonial() {
  return (
    <section
      id="testimonials"
      className="w-full py-16 sm:py-20 lg:py-24 bg-background"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 sm:gap-12">
          <div className="flex flex-col items-center gap-5 text-center">
            <h2 className="max-w-[980px] text-[28px] font-semibold leading-[1.2] text-foreground sm:text-[36px] sm:leading-tight lg:text-[42px] lg:leading-13.5">
              {testimonialsContent.heading}
            </h2>
            <p className="max-w-[1023px] text-base leading-7 tracking-[-0.01em] text-muted-foreground sm:text-lg">
              {testimonialsContent.description}
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:gap-[15px] lg:pb-0">
            {testimonialsContent.items.map((item) => (
              <article
                key={item.id}
                className="flex w-[85vw] shrink-0 snap-center flex-col justify-between rounded-[14px] border border-[rgba(33,37,41,0.1)] bg-[rgba(246,246,246,0.4)] p-[22px] sm:w-[350px] lg:w-auto min-h-[250px]"
              >
                <p className="text-[16px] leading-[25px] tracking-[-0.01em] text-[#212529]">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-[10px]">
                  <img
                    src={item.avatarSrc}
                    alt={item.name}
                    width={97}
                    height={100}
                    className="h-[50px] w-[48px] rounded-[52px] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="text-base font-semibold leading-7 tracking-[-0.01em] text-[#212529] sm:text-[17px]">
                      {item.name}
                    </p>
                    <p className="text-[14px] leading-[21px] text-[rgba(33,37,41,0.5)]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
