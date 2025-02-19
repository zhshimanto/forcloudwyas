import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import Link from "next/link";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import BusinessProcessOptimization from "@/components/sections/project-details/BusinessProcessOptimization";

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
      <HeroInner
        title={"Projects"}
        currentItem={"Business Process Optimization"}
      />
      <BusinessProcessOptimization />
    </PageWrapper>
  );
};

export default WebdesignService;
