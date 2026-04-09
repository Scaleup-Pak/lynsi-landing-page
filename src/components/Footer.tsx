import { useLocation, useNavigate } from "react-router-dom";
import { footerContent } from "../content/footer";
import { legalFooterContent } from "../content/footerbottombar";
import { FooterBottomBar } from "./FooterBottomBar";
import { StoreButtons } from "./StoreButtons";

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="w-full bg-muted-background">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col border-b border-card-border pb-8 pt-10 sm:pb-10 sm:pt-12 lg:min-h-[618px] lg:flex-row lg:justify-between lg:pb-0 lg:pt-[86px]">
          <div className="w-full max-w-[451px]">
            <img
              src={footerContent.brand.logoSrc}
              alt={footerContent.brand.logoAlt}
              width={264}
              height={80}
              className="h-[58px] w-auto"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-7 max-w-[451px] text-base leading-7 tracking-[-0.01em] text-muted-foreground sm:text-[17px]">
              {footerContent.brand.description}
            </p>

            <div className="mt-10 w-full max-w-[390px]">
              <h3 className="text-[20px] font-semibold leading-8 tracking-[-0.02em] text-foreground sm:text-[22px] lg:text-[24px] lg:leading-8.5">
                {footerContent.download.heading}
              </h3>

              <div className="mt-5">
                <StoreButtons
                  buttons={footerContent.download.storeButtons}
                  layout="responsive-row"
                  align="start"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid w-full max-w-[507px] grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-[40px] lg:mt-[108px] lg:gap-[95px]">
            <div className="w-full max-w-[175px]">
              <h3 className="text-[20px] font-semibold leading-8 tracking-[-0.02em] text-foreground sm:text-[22px] lg:text-[24px] lg:leading-8.5">
                {footerContent.company.heading}
              </h3>
              <ul className="mt-[30px] space-y-5">
                {footerContent.company.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className="cursor-pointer text-left text-base leading-7 tracking-[-0.01em] text-muted-foreground transition hover:text-primary sm:text-[17px]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full max-w-[237px]">
              <h3 className="text-[20px] font-semibold leading-8 tracking-[-0.02em] text-foreground sm:text-[22px] lg:text-[24px] lg:leading-8.5">
                {footerContent.importantLinks.heading}
              </h3>
              <ul className="mt-[30px] space-y-5">
                {footerContent.importantLinks.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className="cursor-pointer text-left text-base leading-7 tracking-[-0.01em] text-muted-foreground transition hover:text-primary sm:text-[17px]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <FooterBottomBar copyright={legalFooterContent.copyright} />
    </footer>
  );
}
