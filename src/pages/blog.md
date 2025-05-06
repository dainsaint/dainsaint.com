---
layout: paginated
style: page
eleventyExcludeFromCollections: true
title: "blog"
description: "my creative feed — poetry, music, and assorted thoughts"
permalink: "blog/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber }}/{% endif %}index.html"
pagination:
  data: collections.content
  size: 5
  reverse: true
  alias: posts
---