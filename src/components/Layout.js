import React from "react";
import Navbar from "./Navbar";
import * as styles from "./layout.module.scss";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <main className={styles.main}>{children}</main>
      <Footer></Footer>    
    </div>
  );
};

export default Layout;
