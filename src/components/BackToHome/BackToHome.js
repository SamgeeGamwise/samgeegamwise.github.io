
import React from "react";
import * as styles from "./BackToHome.module.scss";
import { Link } from "gatsby";

const BackToHome = () => {
  return (
    <div className={styles.backToHome}>
      <Link to="/">← Back to Home</Link>
    </div>
  );
};

export default BackToHome;



