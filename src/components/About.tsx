import { aboutContent } from "../content/about";

export function About() {
  return (
    <section id="about" className="w-full py-16 sm:py-20 lg:py-24 bg-muted-background">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 sm:gap-14 lg:gap-16">

          {/* Header */}
          <div className="flex flex-col gap-4 lg:max-w-[720px]">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {aboutContent.eyebrow}
            </span>
            <h2 className="text-[34px] font-bold leading-[1.2] text-foreground sm:text-[42px] sm:leading-tight">
              {aboutContent.heading}
            </h2>
            <p className="text-base leading-7 tracking-[-0.01em] text-muted-foreground sm:text-lg">
              {aboutContent.description}
            </p>
            <p className="text-base leading-7 tracking-[-0.01em] text-muted-foreground sm:text-lg">
              {aboutContent.mission}
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {aboutContent.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1.5 rounded-[14px] bg-background px-4 py-6 text-center shadow-sm"
              >
                <span className="text-[32px] font-bold leading-none text-primary sm:text-[40px]">
                  {stat.value}
                </span>
                <span className="text-sm font-medium leading-5 text-muted-foreground sm:text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {aboutContent.values.map((value) => (
              <article
                key={value.title}
                className="flex flex-col gap-3 rounded-[14px] bg-background p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary/10">
                  <span className="text-lg text-primary font-bold">✦</span>
                </div>
                <h3 className="text-xl font-semibold leading-7 tracking-[-0.01em] text-foreground">
                  {value.title}
                </h3>
                <p className="text-base leading-6 tracking-[-0.01em] text-muted-foreground">
                  {value.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
