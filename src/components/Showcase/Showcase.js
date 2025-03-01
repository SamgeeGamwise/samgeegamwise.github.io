import React from "react";
import * as styles from "./Showcase.module.scss";
import { Link } from "gatsby";

const Footer = ({ name, link }) => {
  return (
    <Link to={link} className={styles.projectsLink}>
        <section className={styles.showcase}>
            <div className={styles.designArea}>
                <p className={styles.name}>{name}</p>
            </div>
        </section>
    </Link>
  );
};

export default Footer;
