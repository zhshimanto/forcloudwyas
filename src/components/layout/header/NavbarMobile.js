import ItemMobile from "./ItemMobile";

const mobileItems = [
  {
    name: "HOME",
    icon: false,
    path: "/",
  },
  {
    name: "ABOUT",
    icon: false,
    path: "/about",
  },
  {
    name: "SERVICES",
    icon: true,
    path: "/services",
    dropdownItems: [
      {
        name: "Website Design",
        path: "/services/web-design",
      },
      {
        name: "SEO Optimization",
        path: "/",
      },
    ],
  },
  {
    name: "BLOGS",
    icon: false,
    path: "/blogs",
  },
  {
    name: "CONTACT",
    icon: false,
    path: "/contact",
  },
];

const NavbarMobile = () => {
  return (
    <nav className="offcanvas__menu">
      <ul className="offcanvas__menu_ul">
        {mobileItems.map((item, idx) => (
          <ItemMobile key={idx} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMobile;
