---
title: projects
color: "#DFE0DF"
eleventyExcludeFromCollections: false
featured: []
description: games, writing, songs, videos, and the rest.
---
<div class="stack airy">
{% include category-list, types: "featured", use-featured: true %}
{% assign types = 'play,listen,read,watch' | split: ',' %}
{% include category-list, types: types %}
</div>