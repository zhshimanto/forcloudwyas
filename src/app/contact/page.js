import ContactMain from "@/components/layout/main/ContactMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Contact |  Building Brands, Driving Data-Driven Results",
  description: " Building Brands, Driving Data-Driven Results",
};
export default function Contact() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ContactMain />
    </PageWrapper>
  );
}
