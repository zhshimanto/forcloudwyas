"use client";
import AOS from "aos";
import Header from "@/components/layout/header/Header";
import { useEffect, useState } from "react";
import bootstrapCustom from "@/libs/bootstrap";
import Footer from "@/components/layout/footer/Footer";
import controllSwiper from "@/libs/controllSwiper";
import popupVideo from "@/libs/popupVideo";
import smoothScroll from "@/libs/smoothScroll";
import counterUP from "@/libs/counterUP";
import typeWriter from "@/libs/typeWriter";

let idx = 0;
const PageWrapper = ({ children }) => {
  const [bootstrap, setBootstrap] = useState(null);

  if (bootstrap && idx === 1) {
    bootstrap?.bootstrapMain();
  }

  useEffect(() => {
    // Initialize animations and effects
    import("vanilla-tilt").then(({ default: VanillaTilt }) => {
      VanillaTilt.init(document.querySelectorAll(".tilt"));
    });

    AOS.init({
      offset: 40,
      duration: 1000,
      once: true,
      easing: "ease",
    });

    // Initialize bootstrap and other utilities
    bootstrapCustom(setBootstrap);
    controllSwiper();
    popupVideo();
    smoothScroll();
    counterUP();
    typeWriter();
  }, []);

  idx = idx + 1;

  return (
    <div className="main_wrapper overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;
