---
title: projects
color: "#DFE0DF"
eleventyExcludeFromCollections: false
featured: []
description: games, writing, songs, videos, and the rest.
---
{% include category-list, types: "featured", use-featured: true %}

{% assign types = 'play,listen,read,watch' | split: ',' %}
{% include category-list, types: types %}


{% hoist "head" "projects" %}
<style type="text/css">
  .category-list-projects {
    margin-bottom: 100px;
  }
</style>
{% endhoist %}