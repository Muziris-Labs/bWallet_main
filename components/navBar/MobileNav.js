"use client";

import { Collapse } from "@material-tailwind/react";

import NavList from "./NavList";

const MobileNav = ({ openNav, navList, children }) => {
  return (
    <Collapse open={openNav}>
      <NavList list={navList} />

      {children}
    </Collapse>
  );
};
export default MobileNav;
