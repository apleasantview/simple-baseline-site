---
title: "Custom Social Preview"
description: "This page overrides social meta."
permalink: "/social-demo/"
layout: "layouts/base.njk"
head:
  openGraph:
    "og:title": "Custom OG Title"
    "og:description": "Custom OG description for this page."
    "og:image": "https://example.com/assets/social/custom-og.jpg"
  twitter:
    "twitter:card": "summary_large_image"
    "twitter:title": "Custom Twitter Title"
    "twitter:description": "Custom Twitter description."
    "twitter:image": "https://example.com/assets/social/custom-twitter.jpg"
---

This page sets its own OG/Twitter meta instead of using the defaults.
