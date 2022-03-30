import React from "react";
import NavBar from "../navbar/navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
