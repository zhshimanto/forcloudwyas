import shape1 from "@/assets/img/herobaner/shape-1.png";
import shape2 from "@/assets/img/herobaner/shape-2.png";
import homesliderimage from "@/assets/img/herobaner/home-slider.png";
import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ButtonPopup from "@/components/shared/buttons/ButtonPopup";
const HeroHome = () => {
  return (
    <div
      className="herobanner d-flex align-items-center height__700 position-relative herobanner__margin herobanner__front__img__wrapper"
      style={{ background: "var(--gradientColor)" }}
    >
      <div className="container-fluid full__width__padding">
        <div className="herobanner__wrapper">
          <div className="herobanner__single">
            <div className="row align-items-center">
              <div
                className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="herobanner__content__wrapper herobanner__content__wrapper--2">
                  <div className="herobanner__small__text">
                    <span>Building Brands, Driving Data-Driven Results</span>
                  </div>
                  <div className="herobanner__title ">
                    <h1>Leading Digital Marketing Agency.</h1>
                  </div>
                  <div className="herobanner__text">
                    <p>
                      SEO, website development, performance marketing, and data
                      analytics.
                    </p>
                  </div>
                  <div className="herobanner__button">
                    <ButtonPrimary
                      text={" OUR ALL SERVICES"}
                      path={"/services"}
                      button={"white"}
                    />

                    <div className="video__button video__button--white">
                      <ButtonPopup />

                      <span> </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <div className="herobanner__front__img" data-tilt>
                  <Image src={homesliderimage} alt="seo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="herobanner__icon">
        <Image
          className="herobanner__vector hero__icon__1"
          src={shape1}
          alt="SEO Service"
        />
        <Image
          className="herobanner__vector hero__icon__4"
          src={shape2}
          alt="Vector photo"
        />
      </div>
    </div>
  );
};

export default HeroHome;
