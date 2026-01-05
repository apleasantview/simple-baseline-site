---
title: "Debug Playground"
description: "Inspect data with Baseline debug helpers."
permalink: "/debug-playground/"
layout: "layouts/base.njk"
---

## Collections (first 3)
<pre>
{% for item in collections.all.slice(0, 3) %}
- {{ item.url }}
{% endfor %}
</pre>

## Page keys
<pre>{{ page | _keys }}</pre>

## Page data (inspect)
<pre>{{ page | _inspect({ getters: true, depth: 2 }) }}</pre>

## Page data (json)
<pre>{{ page | _json(2) }}</pre>
