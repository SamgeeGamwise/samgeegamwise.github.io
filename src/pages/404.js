import * as React from "react";
import { Link } from "gatsby";
import { headData } from "../head";
import * as styles from "./404.module.scss"; // Import SCSS

const NotFoundPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.text}>Oops! The page you're looking for doesn't exist.</p>
      <p className={styles.subtext}>It might have been removed or moved to a different location.</p>
      <Link to="/" className={styles.button}>Go Back Home</Link>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => (
  <>
    <title>{`Not Found | Samuel Krohn - Portfolio`}</title>
    {headData}
    <meta name="description" content="Page not found on Samuel Krohn's portfolio." />
  </>
);
