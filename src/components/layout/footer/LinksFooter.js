import Link from "next/link";

const LinksFooter = () => {
  const items = [
    {
      name: "Privacy & policy",
      path: "/privacy-policy",
    },
    {
      name: "Terms & conditions",
      path: "/terms-conditions",
    },
    {
      name: "Customer support",
      path: "/contact",
    },
    {
      name: "Contact us",
      path: "/contact",
    },
  ];

  return (
    <div
      className="col-xl-2 col-lg-6 col-md-6 col-sm-6"
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <div className="footer__widget footer__quick">
        <div className="footer__menu__title">
          <h6>QUICK LINKS :</h6>
        </div>
        <div className="footer__menu">
          <ul>
            {items?.map(({ name, path }, idx) => (
              <li key={idx}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinksFooter;
