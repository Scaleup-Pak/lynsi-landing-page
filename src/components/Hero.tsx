import playstoreIcon from "../assets/images/common/playstore.webp";
import appleIcon from "../assets/images/common/applelogo.webp";
import { heroContent } from "../content/hero";
import { StoreButtons, type StoreButtonItem } from "./StoreButtons";

const storeButtons: StoreButtonItem[] = [
  {
    id: "google-play",
    iconSrc: playstoreIcon,
    iconAlt: "Google Play Store icon",
    ...heroContent.storeButtons.googlePlay,
  },
  {
    id: "app-store",
    iconSrc: appleIcon,
    iconAlt: "Apple App Store icon",
    ...heroContent.storeButtons.appStore,
  },
];

export function Hero() {
  const [lineOneFirstWord, ...lineOneRestWords] =
    heroContent.headline.lineOne.split(" ");
  const lineOneHighlightedWord = lineOneRestWords.join(" ");

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background pt-28 sm:pt-32 lg:pt-48"
      aria-label="Hero"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">
          <div className="mx-auto flex max-w-[950px] flex-col items-center text-center">
            <h2 className="relative text-[30px] font-bold leading-tight text-foreground sm:text-[38px] sm:leading-tight md:text-[46px] md:leading-tight lg:text-[50px] lg:leading-snug">
              <span className="text-primary">
                {heroContent.headline.accent}
              </span>{" "}
              {lineOneFirstWord}{" "}
              <span className="relative inline-block">
                {lineOneHighlightedWord}
                <svg
                  viewBox="0 0 320 28"
                  className="pointer-events-none absolute left-1/2 top-[88%] h-4 w-[125%] -translate-x-1/2 sm:h-5 lg:h-6"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="hero-curve-fade"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop
                        offset="0%"
                        stopColor="var(--color-primary)"
                        stopOpacity="0.95"
                      />
                      <stop
                        offset="70%"
                        stopColor="var(--color-primary)"
                        stopOpacity="0.65"
                      />
                      <stop
                        offset="100%"
                        stopColor="var(--color-primary)"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M6 20 C 82 6, 238 6, 314 19"
                    stroke="url(#hero-curve-fade)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="mt-2 block">{heroContent.headline.lineTwo}</span>
            </h2>

            <p className="mt-6 max-w-[920px] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {heroContent.description}
            </p>

            <StoreButtons
              buttons={storeButtons}
              className="mt-8"
              iconLoading="eager"
            />
          </div>

          <div className="relative mt-10 w-full max-w-[1230px] sm:mt-14">
            <a
              href={heroContent.previewImageLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open app preview"
              className="block"
            >
              <img
                src={heroContent.imageSrc}
                alt={heroContent.imageAlt}
                width={1185}
                height={960}
                className="relative z-20 w-full object-contain"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
