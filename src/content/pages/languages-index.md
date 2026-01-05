---
title: "Languages Index"
permalink: "/languages-index/"
layout: "layouts/base.njk"
---

{% set t = collections.all | groupby("data.lang") %}
{% for lang, items in t %}
<p><strong>{{ i18n.languages[lang].languageName }}</strong></p>
<ul>
{% for item in items %}
  <li><a href="{{ item.page.url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>
{% endfor %}
