import { useState, useEffect } from "react";
import { headerContent, type HeaderNavLink } from "../content/header";

interface HeaderProps {
  navigationLinks?: HeaderNavLink[];
  ctaText?: string;
  ctaHref?: string;
}

export function Header({
  navigationLinks = headerContent.navLinks,
  ctaText = headerContent.ctaText,
  ctaHref = headerContent.ctaHref,
}: HeaderProps = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      let current = "";
      headerContent.activeSections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
    setTimeout(() => setIsMenuOpen(false), 150);
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 z-50 w-full bg-muted-background px-4 py-3 transition-all duration-300 sm:px-6 sm:py-4 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px] ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] cursor-pointer items-center justify-between">
          <div
            className="flex cursor-pointer flex-shrink-0 items-center gap-4"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={headerContent.logoSrc}
              alt={headerContent.logoAlt}
              className="h-6 w-auto object-contain transition-all duration-300 sm:h-8 md:h-10 lg:h-10"
            />
          </div>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navigationLinks.map((link, index) => (
              <span
                key={link.href}
                className={`relative cursor-pointer text-sm transition-all duration-300 hover:scale-105 hover:text-primary xl:text-base ${
                  link.href === activeLink && activeLink
                    ? "text-foreground"
                    : "text-muted-foreground"
                } after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                  link.href === activeLink && activeLink ? "after:w-full" : ""
                }`}
                onClick={() => handleNavClick(link.href)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              className="hidden cursor-pointer whitespace-nowrap rounded-lg bg-primary px-[24px] py-1.5 text-sm text-accent transition-all duration-300 hover:scale-105 hover:bg-primary-hover hover:shadow-lg xl:px-6 xl:py-2 xl:text-base lg:block"
              onClick={() => handleNavClick(ctaHref)}
            >
              {ctaText}
            </button>

            <button
              type="button"
              className={`rounded-lg p-2 text-foreground transition-all duration-300 hover:scale-110 hover:bg-foreground/5 focus:outline-none active:scale-95 lg:hidden ${
                isMenuOpen ? "rotate-90 bg-foreground/5" : ""
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5 transition-transform duration-300 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  className="transition-all duration-300"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
            isMenuOpen ? "mt-4 max-h-96 opacity-100 sm:mt-6" : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-lg border border-primary/30 bg-primary/10 p-4 backdrop-blur-sm sm:p-5">
            <nav className="flex flex-col gap-3 sm:gap-4">
              {navigationLinks.map((link, index) => (
                <span
                  key={link.href}
                  className={`relative cursor-pointer pl-4 text-sm font-medium transition-all duration-300 hover:translate-x-2 hover:scale-105 hover:text-foreground hover:before:scale-125 hover:before:bg-foreground active:scale-95 sm:text-base ${
                    link.href === activeLink && activeLink
                      ? "text-foreground before:scale-125 before:bg-foreground"
                      : "text-muted-foreground"
                  } before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-muted-foreground before:transition-all before:duration-300 ${
                    isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 -z-10"
                  }`}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {link.label}
                </span>
              ))}
              <button
                type="button"
                className={`mt-2 self-start rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary-hover hover:shadow-lg sm:px-5 sm:py-2.5 sm:text-base ${
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 -z-10"
                }`}
                onClick={() => handleNavClick(ctaHref)}
                style={{
                  transitionDelay: `${navigationLinks.length * 50}ms`
                }}
              >
                {ctaText}
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
