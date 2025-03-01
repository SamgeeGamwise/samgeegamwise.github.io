import React from "react";
import Layout from "../components/Layout";
import * as styles from "./index.module.scss";

const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.homepage}>
        <h1 className={styles.title}>Samuel Krohn</h1>
        <p className={styles.subtitle}>Web Developer & Designer</p>
        <section className={styles.showcase}>
          <div className={styles.designArea}>
            <p>Minimal HTML. Pure CSS Magic.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
