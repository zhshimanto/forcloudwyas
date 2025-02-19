import footerImage1 from "@/assets/img/footer/footer_1.png";
import FooterBadge from "./FooterBadge";
import LogoFooter from "./LogoFooter";
import SupportFooter from "./SupportFooter";
import LinksFooter from "./LinksFooter";
import GalleryFooter from "./GalleryFooter";
import Copyright2 from "./Copyright2";

const Footer = () => {
  return (
    <>
      <div
        className="footer pink__bg__color sp_top_250 position-relative"
        id="footer__area"
        style={{
          backgroundImage: `url('${footerImage1.src}')`,
        }}
      >
        <FooterBadge />

        <div className="container">
          <div className="footer__wrapper sp_bottom_110">
            <div className="row">
              <LogoFooter />
              <SupportFooter />
              <LinksFooter />
              <GalleryFooter />
            </div>
          </div>
        </div>
      </div>
      <Copyright2 />
    </>
  );
};

export default Footer;
