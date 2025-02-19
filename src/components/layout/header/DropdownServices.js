import React from "react";
import DropdownItem from "./DropdownItem";

const DropdownServices = ({ dropdownItems }) => {
  return (
    <ul className="headerarea__submenu headerarea__submenu--five--wrap">
      {dropdownItems?.map((item, idx) => (
        <DropdownItem key={idx} item={item} />
      ))}
    </ul>
  );
};

export default DropdownServices;
