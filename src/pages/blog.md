---
layout: index
title: blog
color: "#222222"
description: "updated infrequently, but hopefully useful and/or interesting."
eleventyExcludeFromCollections: true
featured: []
permalink: "blog/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber }}/{% endif %}index.html"
pagination:
  data: collections.blogs
  size: 10
  reverse: true
  alias: posts
---