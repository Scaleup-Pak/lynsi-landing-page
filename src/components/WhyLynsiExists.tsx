import { useState } from "react";
import { whyLynsiExistsContent } from "../content/whyLynsiExists";

function CheckBadge({ active }: { active: boolean }) {
  return (
    <span
      className={`inline-flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-300 ${
        active
          ? "bg-white/15"
          : "bg-primary/10 group-hover:bg-white/15 group-focus-visible:bg-white/15"
      }`}
    >
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-xl font-bold leading-none transition-colors duration-300 ${
          active
            ? "bg-white text-primary"
            : "bg-primary text-white group-hover:bg-white group-hover:text-primary group-focus-visible:bg-white group-focus-visible:text-primary"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          aria-hidden="true"
          fill="none"
        >
          <path
            d="M6.5 12.5L10.2 16.2L17.5 8.8"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );
}

export function WhyLynsiExists() {
  const defaultCardId = whyLynsiExistsContent.cards[0]?.id ?? "";
  const [activeCardId, setActiveCardId] = useState<string>(defaultCardId);

  return (
    <section
      id="why-lynsi"
      className="w-full bg-muted-background py-14 sm:py-16 lg:py-14"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-14 sm:gap-16 lg:gap-[92px]">
          <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
            <h2 className="text-[28px] font-bold leading-[1.2] text-foreground sm:text-[36px] lg:text-[42px] lg:leading-[54px]">
              {whyLynsiExistsContent.heading}
            </h2>
            <p className="text-base leading-7 tracking-[-0.01em] text-muted-foreground sm:text-[18px] sm:leading-[28px]">
              {whyLynsiExistsContent.quote}
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
            {whyLynsiExistsContent.cards.map((card) => {
              const isActive = activeCardId === card.id;

              return (
                <article
                  key={card.id}
                  tabIndex={0}
                  onMouseEnter={() => setActiveCardId(card.id)}
                  onFocus={() => setActiveCardId(card.id)}
                  className={`group flex min-h-[350px] flex-col rounded-xl p-6 transition-all duration-500 ease-out focus-visible:outline-none ${
                    isActive ? "bg-primary" : "bg-background"
                  }`}
                >
                  <CheckBadge active={isActive} />

                  <div className="mt-auto flex flex-col gap-3">
                    <h3
                      className={`text-[20px] font-semibold leading-7 tracking-[-0.02em] transition-colors duration-500 sm:text-[22px] sm:leading-8 ${
                        isActive ? "text-white" : "text-foreground"
                      }`}
                    >
                      {card.title}
                    </h3>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-out ${
                        isActive ? "max-h-[168px]" : "max-h-[56px]"
                      }`}
                    >
                      <p
                        className={`text-base leading-7 tracking-[-0.01em] transition-colors duration-500 sm:text-[18px] ${
                          isActive ? "text-white/75" : "text-muted-foreground"
                        }`}
                      >
                        {card.description}
                      </p>
                    </div>
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
