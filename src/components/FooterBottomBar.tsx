type FooterBottomBarProps = {
  copyright: string;
};

export function FooterBottomBar({ copyright }: FooterBottomBarProps) {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-center py-5 sm:py-[30px]">
        <p className="text-center text-[14px] font-medium leading-[1.3] tracking-[-0.02em] text-foreground/40 sm:text-[20px] sm:leading-[26px]">
          {copyright}
        </p>
      </div>
    </div>
  );
}
