---
title: 'press'
description: "at least that's what i heard"
color: "#1A0A0D"
eleventyExcludeFromCollections: false
date: ''
tags: []
status: ''
settings:
  constrain: wide
---

{% assign articles = press | tagged: "-podcast" | sort: "date" | reverse %}
{% assign podcasts = press | tagged: "podcast" | sort: "date" | reverse %}

::: stack-loose
### articles
{% include press, articles: articles %}

### podcast interviews
{% include press, articles: podcasts %}
:::
