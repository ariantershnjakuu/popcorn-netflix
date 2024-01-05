import React from "react";

interface NavProps {
  children: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({ children }) => {
  return <nav className="nav-bar">{children}</nav>;
};

export default Nav;
