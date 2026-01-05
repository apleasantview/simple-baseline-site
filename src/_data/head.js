export default {
  link: [{ rel: "stylesheet", href: "/assets/css/index.css" }],
  script: [{ src: "/assets/js/index.js", defer: true }],
  openGraph: {
    "og:title": "Baseline Starter",
    "og:description": "An Eleventy site using Baseline",
    "og:type": "website",
    "og:image": "https://example.com/assets/social/default-og.jpg"
  },
  twitter: {
    "twitter:card": "summary_large_image",
    "twitter:title": "Baseline Starter",
    "twitter:description": "An Eleventy site using Baseline",
    "twitter:image": "",
    "twitter:site": "@yoursite",
    "twitter:creator": "@yoursite"
  },
};
