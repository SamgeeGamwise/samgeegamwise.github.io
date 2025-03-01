import React from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import Showcase from "../components/Showcase/Showcase";
import * as styles from "./index.module.scss";

const IndexPage = () => {
  return (
    <>
      <Seo title="My Project" description="Details about this project" />
      <Layout>
        <div className={styles.homepage}>
          <h1 className={styles.title}>Samuel Krohn</h1>
          <p className={styles.subtitle}>Building solutions with precision & creativity</p>
          <div className={styles.showcaseContainer}>
            <Showcase name="About" link="/about"></Showcase>
            <Showcase name="Projects" link="/projects"></Showcase>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
