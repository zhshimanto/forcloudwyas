import NavItem from "./NavItem";
import DropdownServices from "./DropdownServices";

const navItems = [
  {
    name: "HOME",
    icon: false,
    path: "/",
    dropdown: null,
  },
  {
    name: "ABOUT",
    icon: false,
    path: "/about",
    dropdown: null,
  },
  {
    name: "SERVICES",
    icon: true,
    path: "/services",
    dropdown: <DropdownServices 
      dropdownItems={[
        {
          name: "Website Design",
          path: "/services/web-design",
          label: null,
          icon: false,
        },
        {
          name: "SEO Optimization",
          path: "/",
          label: null,
          icon: false,
        },
      ]} 
    />,
  },
  {
    name: "BLOGS",
    icon: false,
    path: "/blogs",
    dropdown: null,
  },
  {
    name: "CONTACT",
    icon: false,
    path: "/contact",
    dropdown: null,
  },
];

const Navbar = () => {
  return (
    <div className="headerarea__component">
      <div className="headerarea__main__menu">
        <nav>
          <ul>
            {navItems.map((item, idx) => (
              <NavItem key={idx} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
