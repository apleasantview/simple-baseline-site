---
title: "Hello Baseline"
description: "A minimal Eleventy page powered by eleventy-plugin-baseline."
permalink: "/"
layout: "layouts/base.njk"
head:
  script:
    - src: "/assets/js/home/index.js"
      defer: true
---

You’re looking at a page rendered with Eleventy and the Baseline plugin defaults.

## Index
<ul class="index-links">
{% for item in collections.all %}
<li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>
