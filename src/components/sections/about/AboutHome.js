import aboutImage2 from "@/assets/img/about/about__2.png";
import aboutSmallImage2 from "@/assets/img/about/about__small__img__2.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";

const AboutHome = () => {
  return (
    <div
      className="about position-relative sp_bottom_140 sp_top_140"
      //id={id ? id : "about__mission__area"}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div
              className="about__img__wrapper about__img__wrapper--2 position-relative"
              data-tilt
            >
              <Image
                className="about__img__1"
                src={aboutImage2}
                alt=""
                placeholder="blur"
              />
              <div className="about__big__title">
                <h1>Traction</h1>
              </div>

              <div className="section__strock__line__animation">
                <Image
                  className="ssla__animation ssl__img__3"
                  src={aboutSmallImage2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <div className="about__inner about__inner--2">
              <div className="section__title section__title--2  sp_bottom_30">
                <div className="section__title__heading">
                  <h3>
                    QUALITY CONSULATION FOR SECURE BUSINESS. WE 10 YEAR OF
                    EXPRIENCE.
                  </h3>
                </div>
              </div>

              <div className="about__vision__wrapper">
                <div className="about__text">
                  <div className="about__misson">
                    <h6> Mission</h6>
                  </div>
                  <div className="about__text__2">
                    <p>
                      To empower businesses with comprehensive digital marketing
                      services—including SEO, website development, performance
                      marketing, and data analytics—that optimize strategies and
                      achieve measurable growth.
                    </p>
                  </div>
                  <div className="about__misson">
                    <h6> Vision</h6>
                  </div>
                  <div className="about__text__2">
                    <p>
                      To be the leading digital marketing agency known for
                      leveraging data-driven insights to deliver impactful,
                      customized solutions that help businesses succeed online.
                    </p>
                  </div>
                  <div className="about__button">
                    <ButtonPrimary
                      text="LEARN MORE ABOUT"
                      path="/about"
                      button="black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
