"use client";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import Services2 from "@/components/sections/services/Services2";
import { useSearchParams } from "next/navigation";

const ServiceMain = () => {
  const currentCategory = useSearchParams().get("category");
  return (
    <main>
      <HeroInner title={"Our Services"} currentItem={"Services"} />
      <Services2
        service={2}
        isBg={true}
        all={true}
        type={2}
        isNotTitle={true}
      />
    </main>
  );
};

export default ServiceMain;
