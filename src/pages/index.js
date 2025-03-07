import React from "react";
import Layout from "../components/Layout/Layout";
import Showcase from "../components/Showcase/Showcase";
import * as styles from "./index.module.scss";
import { headData } from "../head";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <div className={styles.homepage}>
          <h1 className={styles.title}>Samuel Krohn</h1>
          <p className={styles.subtitle}>Simplifying complexity with pragmatic solutions</p>
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


export const Head = () => (
  <>
    <title>{`Samuel Krohn - Portfolio`}</title>
    { headData }
    <meta name="description" content="Samuel Krohn's portfolio website" />
  </>
)