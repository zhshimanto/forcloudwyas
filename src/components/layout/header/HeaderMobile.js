import Image from "next/image";
import logoImage from "@/assets/img/logo/Logo_1.png";
import Link from "next/link";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const HeaderMobile = () => {
  return (
    <div className="mob_menu_wrapper container-fluid">
      <div className="d-flex justify-content-between align-items-center">
        {/* Mobile Menu Toggle */}
        <div className="offcanvas__header--menu__open ">
          <Link
            className="offcanvas__header--menu__open--btn"
            href="#"
            data-offcanvas
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon offcanvas__header--menu__open--svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M80 160h352M80 256h352M80 352h352"
              />
            </svg>
            <span className="visually-hidden">Menu</span>
          </Link>
        </div>
        {/* Mobile Logo */}
        <div className="mobile__log">
          <div className="mobile__log--title">
            <Link className="mobile__log--link" href="/">
              <Image
                priority
                className="mobile__log--img"
                src={logoImage}
                alt="Site Logo"
              />
            </Link>
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="headerarea__component mobile__component__right">
          <div className="headerarea__right">
            <div className="headerarea__button">
              <ButtonPrimary
                text="GET A QUOTE"
                path="/contact"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
