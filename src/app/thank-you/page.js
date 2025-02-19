import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import ThankYouContent from "./thank-you-content";

export const metadata = {
  title: "Thank You | Building Brands, Driving Data-Driven Results",
  description: "Building Brands, Driving Data-Driven Results",
};

export default async function ThankYou() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThankYouContent />
    </PageWrapper>
  );
}
