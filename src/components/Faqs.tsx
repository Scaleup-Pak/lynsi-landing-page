import { useState } from "react";
import { faqsContent } from "../content/faqs";

type FaqRowProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function FaqToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      className="relative block h-5 w-5 shrink-0 cursor-pointer"
      aria-hidden="true"
    >
      <span className="absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 ease-out" />
      <span
        className={`absolute left-1/2 top-1/2 h-5 w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 ease-out ${
          isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
        }`}
      />
    </span>
  );
}

function FaqRow({ question, answer, isOpen, onToggle }: FaqRowProps) {
  return (
    <article className="w-full rounded-[14px] border border-card-border bg-background px-5 py-5 sm:px-[25px] sm:py-[22px]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="pr-2 text-[18px] font-semibold leading-7 tracking-[-0.01em] text-foreground">
          {question}
        </h3>
        <FaqToggleIcon isOpen={isOpen} />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          isOpen
            ? "mt-4 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[1067px] text-[18px] leading-7 tracking-[-0.01em] text-muted-foreground">
            {answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Faqs() {
  const [openId, setOpenId] = useState<string | null>(
    faqsContent.defaultOpenId,
  );

  return (
    <section id="faqs" className="w-full py-16 sm:py-20 lg:py-24 bg-background">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="mx-auto flex w-full max-w-[1124px] flex-col items-center gap-10 sm:gap-12 lg:gap-[60px]">
          <div className="flex w-full max-w-[764px] flex-col items-center gap-5 text-center">
            <h2 className="w-full text-[34px] font-semibold leading-[1.2] text-foreground sm:text-[42px] lg:text-[46px] lg:leading-[55px]">
              {faqsContent.heading}
            </h2>
            <p className="max-w-[576px] text-base leading-7 tracking-[-0.01em] text-muted-foreground sm:text-[18px]">
              {faqsContent.description}
            </p>
          </div>

          <div className="flex w-full flex-col gap-[10px]">
            {faqsContent.items.map((item) => {
              const isOpen = openId === item.id;
              return (
                <FaqRow
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={isOpen}
                  onToggle={() => setOpenId(isOpen ? null : item.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
