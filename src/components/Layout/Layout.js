import React from "react";
import * as styles from "./Layout.module.scss";
import Footer from "../Footer/Footer";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Layout = ({ children }) => {
  return (
    <>
      <DarkModeToggle />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <Footer></Footer>    
      </div>
    </>
  );
};

export default Layout;
