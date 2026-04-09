import { Link } from "react-router-dom";
import { FooterBottomBar } from "../components/FooterBottomBar";
import { legalFooterContent } from "../content/footerbottombar";
import { termsOfContentPageContent } from "../content/termsOfContent";

export function TermsOfContent() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 pt-6 pb-4 sm:px-6 sm:pt-8 sm:pb-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[110px]">
        <Link
          to="/"
          className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <img
            src={termsOfContentPageContent.logoSrc}
            alt={termsOfContentPageContent.logoAlt}
            width={264}
            height={80}
            className="mb-8 h-auto w-20 sm:mb-12 sm:w-24 md:mb-[70px] md:w-28 lg:w-32"
            loading="eager"
            decoding="async"
          />
        </Link>
        <h1
          className="text-2xl font-bold text-black sm:text-3xl md:text-4xl lg:text-[44px]"
          style={{
            lineHeight: "1.2",
          }}
        >
          {termsOfContentPageContent.pageTitle}
        </h1>
      </div>

      <div className="px-4 pb-12 sm:px-6 sm:pb-16 md:px-8 lg:px-16 xl:px-24 2xl:px-[110px]">
        <div>
          <p
            className="mb-10 text-base text-gray-500 sm:text-lg md:text-xl lg:text-[24px]"
            style={{ fontWeight: 500, lineHeight: "1.447" }}
          >
            {termsOfContentPageContent.intro}
          </p>

          <h2 className="mb-8 flex items-center gap-4 text-2xl font-bold text-black sm:text-3xl lg:text-[36px]">
            {termsOfContentPageContent.notAllowedTitle}
          </h2>

          <div className="space-y-10">
            {termsOfContentPageContent.notAllowedRules.map((rule) => (
              <div key={rule.title}>
                <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-[28px]">
                  {rule.title}
                </h3>
                <ul
                  className="space-y-2 pl-6 text-base text-gray-500 sm:text-lg md:text-xl lg:text-[24px]"
                  style={{ fontWeight: 500, lineHeight: "1.447" }}
                >
                  {rule.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="mt-12 mb-6 flex items-center gap-4 text-2xl font-bold text-black sm:text-3xl lg:text-[36px]">
            {termsOfContentPageContent.enforcement.title}
          </h2>
          <ul
            className="space-y-3 pl-6 text-base text-gray-500 sm:text-lg md:text-xl lg:text-[24px]"
            style={{ fontWeight: 500, lineHeight: "1.447" }}
          >
            {termsOfContentPageContent.enforcement.points.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>

          <h2 className="mt-12 mb-6 flex items-center gap-4 text-2xl font-bold text-black sm:text-3xl lg:text-[36px]">
            {termsOfContentPageContent.remember.title}
          </h2>
          <ul
            className="space-y-3 pl-6 text-base text-gray-500 sm:text-lg md:text-xl lg:text-[24px]"
            style={{ fontWeight: 500, lineHeight: "1.447" }}
          >
            {termsOfContentPageContent.remember.points.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-[#CCCCCC] bg-white sm:mt-10 md:mt-12">
        <FooterBottomBar copyright={legalFooterContent.copyright} />
      </div>
    </div>
  );
}
