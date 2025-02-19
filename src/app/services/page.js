import ServiceMain from "@/components/layout/main/ServiceMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Services Traction Building Brands, Driving Data-Driven Results",
  description: "Building Brands, Driving Data-Driven Results",
};
export default function Services() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ServiceMain />
    </PageWrapper>
  );
}
