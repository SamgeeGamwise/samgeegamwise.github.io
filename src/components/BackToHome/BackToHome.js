
import React from "react";
import * as styles from "./BackToHome.module.scss";

const BackToHome = () => {
  return (
    <div className={styles.backToHome}>
    <Link to="/">← Back to Home</Link>
    </div>
  );
};

export default BackToHome;



