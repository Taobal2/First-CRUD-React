import React from "react";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main className={classes.main}> {children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
