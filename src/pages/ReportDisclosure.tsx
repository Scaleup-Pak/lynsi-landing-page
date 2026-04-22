import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FooterBottomBar } from "../components/FooterBottomBar";
import { legalFooterContent } from "../content/footerbottombar";
import { reportDisclosurePageContent, REPORT_DISCLOSURE_HTML } from "../content/reportDisclosure";
import { setPageMetadata } from "../utils/seo";

export function ReportDisclosure() {
  useEffect(() => {
    setPageMetadata({
      title: "Report Access Disclosure | Lynsi",
      description:
        "Read Lynsi Report Access Disclosure & Terms to understand authorized access, intended use, and data limitations.",
      canonicalUrl: "https://www.lynsi.net/report-disclosure",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 pt-6 pb-4 sm:px-6 sm:pt-8 sm:pb-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <Link
          to="/"
          className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <img
            src={reportDisclosurePageContent.logoSrc}
            alt={reportDisclosurePageContent.logoAlt}
            width={264}
            height={80}
            className="mb-6 h-auto w-16 sm:mb-8 sm:w-20 md:mb-10 md:w-24 lg:mb-12 lg:w-28 xl:w-32"
            loading="eager"
            decoding="async"
          />
        </Link>
        <h1 className="text-xl font-bold text-black sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44px]">
          {reportDisclosurePageContent.pageTitle}
        </h1>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-gray-500 sm:text-sm">
          {reportDisclosurePageContent.lastUpdated}
        </p>
      </div>

      <div className="px-4 pb-8 sm:px-6 sm:pb-12 md:px-8 md:pb-16 lg:px-16 xl:px-24 2xl:px-32">
        <div 
          className="report-disclosure-content"
          dangerouslySetInnerHTML={{ __html: REPORT_DISCLOSURE_HTML }}
        />
      </div>

      <div className="mt-8 border-t border-[#CCCCCC] bg-white sm:mt-10 md:mt-12">
        <FooterBottomBar copyright={legalFooterContent.copyright} />
      </div>

      <style>{`
        .report-disclosure-content h2 {
          font-size: 1.125rem;
          font-weight: 700;
          color: black;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        @media (min-width: 640px) { .report-disclosure-content h2 { font-size: 1.25rem; } }
        @media (min-width: 768px) { .report-disclosure-content h2 { font-size: 1.5rem; } }
        @media (min-width: 1024px) { .report-disclosure-content h2 { font-size: 1.75rem; } }

        .report-disclosure-content p {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 1rem;
          font-weight: 500;
          line-height: 1.447;
        }
        @media (min-width: 640px) { .report-disclosure-content p { font-size: 1rem; } }
        @media (min-width: 768px) { .report-disclosure-content p { font-size: 1.125rem; } }
        @media (min-width: 1024px) { .report-disclosure-content p { font-size: 1.25rem; } }
        @media (min-width: 1280px) { .report-disclosure-content p { font-size: 1.5rem; } }

        .report-disclosure-content ul {
          list-style-type: none;
          padding-left: 1.5rem;
          margin-bottom: 2rem;
        }

        .report-disclosure-content li {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
          font-weight: 500;
          line-height: 1.447;
          position: relative;
        }
        .report-disclosure-content li::before {
          content: "•";
          position: absolute;
          left: -1.5rem;
        }
        @media (min-width: 640px) { .report-disclosure-content li { font-size: 1rem; } }
        @media (min-width: 768px) { .report-disclosure-content li { font-size: 1.125rem; } }
        @media (min-width: 1024px) { .report-disclosure-content li { font-size: 1.25rem; } }
        @media (min-width: 1280px) { .report-disclosure-content li { font-size: 1.5rem; } }
      `}</style>
    </div>
  );
}
