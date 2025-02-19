import Image from "next/image";
import Link from "next/link";
import logoImag2 from "@/assets/img/logo/Logo_2.png";

const LogoFooter = () => {
  return (
    <div
      className="col-xl-4 col-lg-6 col-md-6"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="footer__widget footer__left position-relative">
        <div className="footer__logo">
          <Image src={logoImag2} alt="Logo" />
        </div>
        <div className="footer__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt labore et dolore magna aliqua
          </p>
        </div>
        <div className="footer__icon">
          <ul>
            <li>
              <Link href="https://www.facebook.com">
                <i className="icofont-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="https://x.com">
                <i className="icofont-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.skype.com">
                <i className="icofont-skype"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com">
                <i className="icofont-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoFooter;
