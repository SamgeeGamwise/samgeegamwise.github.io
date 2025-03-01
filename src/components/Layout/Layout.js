import React from "react";
import * as styles from "./layout.module.scss";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>    
    </div>
  );
};

export default Layout;
