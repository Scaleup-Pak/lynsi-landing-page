import { downloadBannerContent } from "../content/downloadBanner";
import { StoreButtons } from "./StoreButtons";

export function DownloadBanner() {
  return (
    <section className="w-full bg-primary py-16 sm:py-20 lg:py-[105px]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-8 md:gap-[60px]">
            <div className="flex flex-col gap-[6px]">
              <div className="relative mx-auto mb-4 w-full max-w-xs overflow-hidden sm:max-w-md md:max-w-[780px]">
                <img
                  src={downloadBannerContent.previewImageSrc}
                  alt={downloadBannerContent.previewImageAlt}
                  width={1577}
                  height={830}
                  className="block h-auto w-full"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute -bottom-px left-1/2 h-[3px] w-[110%] -translate-x-1/2 transform bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)] md:w-[105%] lg:w-[115%]"></div>
              </div>
              <h4
                style={{ fontWeight: "700" }}
                className="text-center text-[24px] leading-tight text-accent sm:text-[30px] md:text-[40px] md:leading-[57px]"
              >
                {downloadBannerContent.heading}
              </h4>
              <p className="text-center text-base leading-7 text-accent/50 sm:text-[17px] md:text-[19px] md:leading-8">
                {downloadBannerContent.description}
              </p>
            </div>

            <StoreButtons buttons={downloadBannerContent.storeButtons} />
          </div>
        </div>
      </div>
    </section>
  );
}
