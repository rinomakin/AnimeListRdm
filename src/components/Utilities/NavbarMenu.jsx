import React from "react";

const NavbarMenu = ({ title }) => {
  return (
    <div className="w-11/12 m-auto text-[black] dark:text-[white] py-3 text-center">
      <div>{title}</div>
    </div>
  );
};

export default NavbarMenu;
