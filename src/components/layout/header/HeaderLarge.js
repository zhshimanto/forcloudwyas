import LogoHeader from "./LogoHeader";
import Navbar from "./Navbar";
import HeaderRight from "./HeaderRight";

const HeaderLarge = () => {
  return (
    <div className="container desktop__menu__wrapper">
      <div className="headerarea__main__wrapper position-relative">
        <div className="headerarea__component__wrap">
          <LogoHeader />
          <Navbar />
          <HeaderRight />
        </div>
      </div>
    </div>
  );
};

export default HeaderLarge;
