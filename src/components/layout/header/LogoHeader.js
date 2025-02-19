import Image from "next/image";
import logoImage from "@/assets/img/logo/Logo_1.png";
import Link from "next/link";

const LogoHeader = () => {
  return (
    <div className="headerarea__component">
      <div className="headerarea__logo">
        <Link href="/">
          <Image
            priority
            src={logoImage}
            alt="Site Logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default LogoHeader;
