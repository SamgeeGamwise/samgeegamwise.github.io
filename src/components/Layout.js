import React from "react";
import Navbar from "./Navbar";
import * as styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>© {new Date().getFullYear()} Samuel Krohn</footer>
    </div>
  );
};

export default Layout;
