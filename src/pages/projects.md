---
title: projects
color: "#DFE0DF"
eleventyExcludeFromCollections: false
featured: []
description: games, writing, songs, videos, and the rest.
---
{% include category-list, types: 'featured', use-featured: true %}

{% assign types = 'read,listen,watch,play' | split: ',' %}
{% include category-list, types: types %}
