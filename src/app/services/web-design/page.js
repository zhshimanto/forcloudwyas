import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import Link from "next/link";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import AboutWebdesign from "@/components/sections/about/AboutWebdesign";
import WebdesignDetails from "@/components/sections/service-details/web-design";

export const metadata = {
  title: " Web Design Service Traction",
  description: "Building Brands, Driving Data-Driven Results",
};
const WebdesignService = () => {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <HeroInner title={"Web Design"} currentItem={"Details"} />
      <AboutWebdesign />
      <WebdesignDetails />
    </PageWrapper>
  );
};

export default WebdesignService;
