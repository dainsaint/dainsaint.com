---
title: projects
color: "#DFE0DF"
eleventyExcludeFromCollections: false
featured: []
description: games, writing, songs, videos, and the rest.
---

{% assign types = 'play,listen,read,watch' | split: ',' %}
{% include category-list, types: types %}
