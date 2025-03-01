import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Head = ({ title, description }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return (
    <>
      <title>{title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title}</title>
      <meta name="description" content={description || site.siteMetadata.description} />
      <meta property="og:title" content={title || site.siteMetadata.title} />
      <meta property="og:description" content={description || site.siteMetadata.description} />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
    </>
  );
};

export default Head;
