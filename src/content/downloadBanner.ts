import playstoreIcon from "../assets/images/common/playstore.png";
import appleIcon from "../assets/images/common/applelogo.png";
import bannerImage from "../assets/images/downloadbanner/banner.png";

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
  previewImageAlt: "PersonAI app download preview",
  heading: "Download PersonAI Today",
  description:
    "Your personal AI assistant for organizing life across work, home, wellness, and more. Start balancing your life today.",
  storeButtons: [
    {
      id: "google-play",
      iconSrc: playstoreIcon,
      iconAlt: "Google Play Store icon",
      eyebrow: "GET IT ON",
      label: "Google Play",
      ariaLabel: "Download PersonAI on Google Play",
      href: "#",
    },
    {
      id: "app-store",
      iconSrc: appleIcon,
      iconAlt: "Apple App Store icon",
      eyebrow: "Download On the",
      label: "App Store",
      ariaLabel: "Download PersonAI on the App Store",
      href: "#",
    },
  ],
};
