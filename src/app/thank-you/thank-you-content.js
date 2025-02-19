"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import thankYouImage from "@/assets/img/contact/thank-you.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const ThankYouContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 min-h-[60vh] flex items-center justify-center sp_top_140 sp_bottom_80">
      <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
        <div className="mb-8">
          <Image
            src={thankYouImage}
            alt="Thank You"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Thank You!
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Your message has been successfully sent. We appreciate you contacting us and
          will get back to you as soon as possible.
        </p>
        <ButtonPrimary
          text="BACK TO HOME"
          path="/"
          button="black"
        />
      </div>
    </div>
  );
};

export default ThankYouContent;
