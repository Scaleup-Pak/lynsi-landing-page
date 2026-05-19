import playstoreIcon from "../assets/images/common/playstore.webp";
import appleIcon from "../assets/images/common/applelogo.webp";
import bannerImage from "../assets/images/downloadbanner/banner.webp";

export type DownloadStoreButton = {
  id: string;
  iconSrc: string;
  iconAlt: string;
  eyebrow: string;
  label: string;
  href: string;
  ariaLabel: string;
};

export type DownloadBannerContent = {
  previewImageSrc: string;
  previewImageAlt: string;
  heading: string;
  description: string;
  storeButtons: DownloadStoreButton[];
};

export const downloadBannerContent: DownloadBannerContent = {
  previewImageSrc: bannerImage,
  previewImageAlt: "Lynsi app download preview",
  heading: "Download the Lynsi APP",
  description:
    "Download & Discover patterns in your daily life to improve your health, habits, and finances.",
  storeButtons: [
    {
      id: "google-play",
      iconSrc: playstoreIcon,
      iconAlt: "Google Play Store icon",
      eyebrow: "GET IT ON",
      label: "Google Play",
      ariaLabel: "Download Lynsi on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.lynsi.mh&pcampaignid=web_share",
    },
    {
      id: "app-store",
      iconSrc: appleIcon,
      iconAlt: "Apple App Store icon",
      eyebrow: "Download On the",
      label: "App Store",
      ariaLabel: "Download Lynsi on the App Store",
      href: "https://apps.apple.com/us/app/lynsi/id6761358174",
    },
  ],
};
