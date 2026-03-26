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
};

export function StoreButtons({
  buttons,
  className = "",
  layout = "wrap",
  align = "center",
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
      {buttons.map((button) => (
        <a
          key={button.id}
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={button.ariaLabel}
          className="flex h-[56px] w-[181px] cursor-pointer items-center gap-2.5 rounded-[12px] bg-white px-3.5 text-accent transition hover:opacity-90"
        >
          <img
            src={button.iconSrc}
            alt={button.iconAlt}
            className="h-7 w-7 object-contain"
            loading="lazy"
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
      ))}
    </div>
  );
}
