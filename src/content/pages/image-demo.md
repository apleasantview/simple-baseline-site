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
