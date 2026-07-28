import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const SOCIAL_PROFILES = [
  'https://github.com/SamgeeGamwise',
  'https://www.linkedin.com/in/samkrohn',
]

const SEO = ({
  title,
  description,
  pathname = '/',
  image = '/favicon.png',
  type = 'website',
  noIndex = false,
  schema,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
        }
      }
    }
  `)

  const metadata = site.siteMetadata
  const pageTitle = title || metadata.title
  const pageDescription = description || metadata.description
  const canonicalUrl = new URL(pathname, `${metadata.siteUrl}/`).toString()
  const imageUrl = new URL(image, `${metadata.siteUrl}/`).toString()
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'

  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${metadata.siteUrl}/#website`,
      url: `${metadata.siteUrl}/`,
      name: metadata.title,
      description: metadata.description,
      inLanguage: 'en-US',
      publisher: { '@id': `${metadata.siteUrl}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${metadata.siteUrl}/#person`,
      name: metadata.author,
      url: `${metadata.siteUrl}/`,
      jobTitle: 'Software Engineer',
      description: metadata.description,
      sameAs: SOCIAL_PROFILES,
      knowsAbout: [
        'Full-stack web development',
        'Software automation',
        'Web performance',
        'TypeScript',
        'React',
        '.NET',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: pageTitle,
      description: pageDescription,
      isPartOf: { '@id': `${metadata.siteUrl}/#website` },
      about: { '@id': `${metadata.siteUrl}/#person` },
      inLanguage: 'en-US',
    },
    ...(schema ? (Array.isArray(schema) ? schema : [schema]) : []),
  ]

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="author" content={metadata.author} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content="Samuel Krohn portfolio logo" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {!noIndex && (
        <script type="application/ld+json">
          {JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}
        </script>
      )}
    </>
  )
}

export default SEO
