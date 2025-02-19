"use client";
import HeroHome from "@/components/sections/hero-banners/HeroHome";
import AboutHome from "@/components/sections/about/AboutHome";
import CounterUp2 from "@/components/sections/counter-up/CounterUp2";
import Projects from "@/components/sections/projects/Projects";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Blogs from "@/components/sections/blogs/Blogs";
import PinkColor from "@/components/shared/others/PinkColor";
import Services3 from "@/components/sections/services/Services3";
import BrandArea from "@/components/sections/BrandHome/brand-area";
import SupportArea from "@/components/sections/SupportArea/support-area";
import ServiceArea from "@/components/sections/ServiceArea/service-area";

const HomeIndex = () => {
  return (
    <main>
      <HeroHome />
      <AboutHome />
      <Services3 />
      <CounterUp2 />
      <PinkColor />
      <Projects />
      <BrandArea />
      <SupportArea />
      <ServiceArea />
      <Testimonials />
      <Blogs />
    </main>
  );
};

export default HomeIndex;
