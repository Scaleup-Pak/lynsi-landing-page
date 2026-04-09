import { Link } from "react-router-dom";
import { FooterBottomBar } from "../components/FooterBottomBar";
import { legalFooterContent } from "../content/footerbottombar";
import { termsOfUsePageContent } from "../content/termsOfUse";

export function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 pt-6 pb-4 sm:px-6 sm:pt-8 sm:pb-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <Link
          to="/"
          className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <img
            src={termsOfUsePageContent.logoSrc}
            alt={termsOfUsePageContent.logoAlt}
            width={264}
            height={80}
            className="mb-6 h-auto w-16 sm:mb-8 sm:w-20 md:mb-10 md:w-24 lg:mb-12 lg:w-28 xl:w-32"
            loading="eager"
            decoding="async"
          />
        </Link>
        <h1 className="text-xl font-bold text-black sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44px]">
          {termsOfUsePageContent.pageTitle}
        </h1>
      </div>

      <div className="px-4 pb-8 sm:px-6 sm:pb-12 md:px-8 md:pb-16 lg:px-16 xl:px-24 2xl:px-32">
        <div>
          <p
            className="mb-8 text-sm text-gray-500 sm:text-base md:text-lg lg:text-xl xl:text-[24px]"
            style={{ fontWeight: 500, lineHeight: "1.447" }}
          >
            {termsOfUsePageContent.intro}
          </p>

          {termsOfUsePageContent.sections.map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="mb-4 text-lg font-bold text-black sm:text-xl md:text-2xl lg:text-[28px]">
                {section.title}
              </h2>

              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-4 text-sm text-gray-500 sm:text-base md:text-lg lg:text-xl xl:text-[24px]"
                  style={{ fontWeight: 500, lineHeight: "1.447" }}
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="space-y-2 pl-6">
                  {section.bullets.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-500 sm:text-base md:text-lg lg:text-xl xl:text-[24px]"
                      style={{ fontWeight: 500, lineHeight: "1.447" }}
                    >
                      •{" "}
                      {item.includes("support@lalalaugh.com") ? (
                        <>
                          {item.split("support@lalalaugh.com")[0]}
                          <a
                            href="mailto:support@lalalaugh.com"
                            className="text-primary hover:underline"
                          >
                            support@lalalaugh.com
                          </a>
                          {item.split("support@lalalaugh.com")[1]}
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mb-12">
            {/* <h2 className="mb-4 text-lg font-bold text-black sm:text-xl md:text-2xl lg:text-[28px]">
              {termsOfUsePageContent.contact.title}
            </h2> */}
            <p
              className="text-sm text-gray-500 sm:text-base md:text-lg lg:text-xl xl:text-[24px]"
              style={{ fontWeight: 500, lineHeight: "1.447" }}
            >
              {/* {termsOfUsePageContent.contact.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <br /> */}
              Email:{" "}
              <a
                href={`mailto:${termsOfUsePageContent.contact.email}`}
                className="text-primary hover:underline"
              >
                {termsOfUsePageContent.contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-[#CCCCCC] bg-white sm:mt-10 md:mt-12">
        <FooterBottomBar copyright={legalFooterContent.copyright} />
      </div>
    </div>
  );
}
