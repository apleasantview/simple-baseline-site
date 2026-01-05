---
title: "Image Shortcode Demo"
description: "Responsive image via Baseline shortcode"
permalink: "/image-demo/"
layout: "layouts/base.njk"
---

This page displays an image using the {% raw %}`{% image {} %}`{% endraw %} shortcode.

{% image {
  src: "/media/example.jpg",
  alt: "A descriptive alt text for accessibility",
  caption: "Example image rendered responsively with the image shortcode."
} %}

## Image Transform Plugin
<figure>
  <img src="/media/mountains.jpg" alt="Mountains at sunset" loading="lazy">
  <figcaption>
    Example image rendered responsively with the Eleventy Image Transform plugin.
  </figcaption>
</figure>
