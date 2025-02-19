import AboutMain from "@/components/layout/main/AboutMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "About Traction | Building Brands, Driving Data-Driven Results",
  description: "Building Brands, Driving Data-Driven Results",
};
export default function About() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <AboutMain />
    </PageWrapper>
  );
}
