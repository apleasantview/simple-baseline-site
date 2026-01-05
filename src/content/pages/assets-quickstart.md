---
title: "Assets Quickstart"
description: "CSS and JS bundled by Baseline."
permalink: "/assets-quickstart/"
layout: "layouts/base.njk"
---

CSS should style this page, and JS should log to the console. Here’s a small badge:

<span class="pill">Pending</span>

{% set cssPath = _baseline.assets.input ~ "css/inline-example.css" %}
{{ cssPath | inlinePostCSS | safe }}

{% set jsPath  = _baseline.assets.input ~ "js/inline-example.js" %}
{{ jsPath  | inlineESbuild | safe }}

{% set jsPath  = _baseline.assets.input ~ "js/about/index.js" %}
{{ jsPath  | inlineESbuild | safe }}
