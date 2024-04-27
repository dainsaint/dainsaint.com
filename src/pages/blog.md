---
layout: index
title: blog
color: "#DFE0DF"
eleventyExcludeFromCollections: false
featured: []
permalink: "blog/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber }}/{% endif %}index.html"
pagination:
  data: collections.blogs
  size: 10
  reverse: true
  alias: posts
---