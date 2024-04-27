---
layout: index
title: the garden
color: "#222222"
description: "thoughts and unfinished bits"
eleventyExcludeFromCollections: false
featured: []
permalink: "garden/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber }}/{% endif %}index.html"
pagination:
  data: collections.posts
  size: 10
  reverse: true
  alias: posts
---

Explanation about what the garden is.