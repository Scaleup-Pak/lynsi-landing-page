export type StoreButtonItem = {
  id: string;
  iconSrc: string;
  iconAlt: string;
  eyebrow: string;
  label: string;
  href: string;
  ariaLabel: string;
};

type StoreButtonsProps = {
  buttons: StoreButtonItem[];
  className?: string;
  layout?: "wrap" | "responsive-row";
  align?: "center" | "start";
  iconLoading?: "lazy" | "eager";
};

export function StoreButtons({
  buttons,
  className = "",
  layout = "wrap",
  align = "center",
  iconLoading = "lazy",
}: StoreButtonsProps) {
  const baseLayoutClass =
    layout === "responsive-row"
      ? "flex flex-col lg:flex-row gap-3 sm:gap-4"
      : "flex flex-wrap gap-3 sm:gap-4";
  const alignClass =
    align === "start"
      ? "items-start justify-start"
      : "items-center justify-center";

  return (
    <div className={`${baseLayoutClass} ${alignClass} ${className}`.trim()}>
      {buttons.map((button) => {
        const iconDimensions =
          button.id === "google-play"
            ? { width: 37, height: 41 }
            : button.id === "app-store"
              ? { width: 84, height: 84 }
              : { width: 56, height: 56 };

        return (
          <a
            key={button.id}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={button.ariaLabel}
            className="flex h-[56px] w-[181px] max-w-[230px] cursor-pointer items-center gap-2.5 rounded-[12px] bg-white px-3.5 text-accent transition hover:opacity-90 sm:w-[181px] sm:max-w-none"
          >
            <img
              src={button.iconSrc}
              alt={button.iconAlt}
              width={iconDimensions.width}
              height={iconDimensions.height}
              className="h-7 w-7 object-contain"
              loading={iconLoading}
              decoding="async"
            />
            <span className="flex flex-col items-start leading-none">
              <span className="whitespace-nowrap text-[11px] text-black font-semibold tracking-[-0.02em]">
                {button.eyebrow}
              </span>
              <span className="mt-1 whitespace-nowrap text-[19px] text-black font-semibold leading-[1.1]">
                {button.label}
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
