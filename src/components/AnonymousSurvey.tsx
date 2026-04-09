import { useState } from "react";
import { anonymousSurveyContent } from "../content/anonymousSurvey";

function SurveyToggle({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
      <span className="absolute h-0.5 w-4 rounded-full bg-white" />
      {!isOpen && <span className="absolute h-4 w-0.5 rounded-full bg-white" />}
    </span>
  );
}

export function AnonymousSurvey() {
  const [openId, setOpenId] = useState<string>(
    anonymousSurveyContent.items[0]?.id ?? "",
  );

  return (
    <section
      id="anonymous-survey"
      className="w-full bg-muted-background py-16 sm:py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-10">
          <div className="flex w-full max-w-[795px] flex-col items-start gap-5">
            <h2 className="w-full text-[28px] font-bold leading-[1.2] text-foreground sm:text-[36px] lg:text-[42px] lg:leading-[54px]">
              {anonymousSurveyContent.heading}
            </h2>
            <p className="w-full text-base leading-7 tracking-[-0.01em] text-muted-foreground sm:text-[18px] sm:leading-[28px]">
              {anonymousSurveyContent.description}
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-7">
            <div className="w-full max-w-[594px] space-y-0">
              {anonymousSurveyContent.items.map((item, index) => {
                const isOpen = openId === item.id;

                return (
                  <article key={item.id} className="w-full py-[14px]">
                    {index > 0 && (
                      <div className="mb-[22px] h-px w-full bg-[#E6E6E6]" />
                    )}

                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? "" : item.id)}
                      className="flex w-full items-center gap-2 text-left sm:gap-[5px]"
                      aria-expanded={isOpen}
                    >
                      <SurveyToggle isOpen={isOpen} />
                      <span className="text-[18px] font-semibold leading-7 tracking-[-0.02em] text-foreground sm:text-[22px] sm:leading-8">
                        {item.title}
                      </span>
                    </button>

                    <div
                      className={`grid overflow-hidden transition-all duration-500 ease-out ${
                        isOpen
                          ? "mt-3 grid-rows-[1fr] opacity-100"
                          : "mt-0 grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pr-2 text-base leading-7 tracking-[-0.01em] text-muted-foreground sm:pl-[45px] sm:text-[18px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="w-full max-w-[599px]">
              <img
                src={anonymousSurveyContent.previewImage.src}
                alt={anonymousSurveyContent.previewImage.alt}
                width={1198}
                height={752}
                className="h-auto w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
