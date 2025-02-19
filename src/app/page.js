import HomeIndex from "@/components/layout/main/HomeIndex";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Traction | Building Brands, Driving Data-Driven Results",
  description: "Building Brands, Driving Data-Driven Results",
};
export default function Home3() {
  return (
    <PageWrapper headerStyle={3} footerStyle={3} bodyBg={""} headerBg={"black"}>
      <HomeIndex />
    </PageWrapper>
  );
}
