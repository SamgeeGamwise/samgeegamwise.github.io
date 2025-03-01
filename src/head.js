import * as React from "react"

const title = "Samuel Krohn - Portfolio";
const description = "A portfolio of Samuel Krohn's work"
const url = "https://samgee.gamwise.me/"
const date = "2025-03-01T12:00:00+00:00"

export const headData = [
    <meta property="og:locale" content="en_US" />,
    <meta property="og:type" content="website" />,
    <meta property="og:title" content={title} />,
    <meta property="og:description" content={description} />,
    <meta property="og:url" content={url} />,
    <meta property="og:site_name" content={title} />,
    <meta property="og:updated_time" content={date} />,
    <meta property="og:image" content={url + "images/favicon.png" } />,
    <meta property="og:image:secure_url" content={url + "images/favicon.png" } />,
    <meta property="og:image:width" content="300" />,
    <meta property="og:image:height" content="300" />,
    <meta property="og:image:alt" content={title} />,
    <meta property="og:image:type" content="image/png" />,
    <meta property="article:published_time" content={date} />,
    <meta property="article:modified_time" content={date} />,
    <meta name="twitter:card" content="summary_large_image" />,
    <meta name="twitter:title" content={title} />,
    <meta name="twitter:description" content={description} />,
    <meta name="twitter:image" content={url + "images/favicon.png" } />
]