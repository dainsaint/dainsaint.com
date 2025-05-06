---
layout: index
style: page
eleventyExcludeFromCollections: true
title: "the garden"
description: "my creative feed"
permalink: "garden/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber }}/{% endif %}index.html"
pagination:
  data: collections.content
  size: 5
  reverse: true
  alias: posts
tags:
  - garden

---

*** 


<style>
  .block-lede {
    padding-bottom: 1rem;
  }

  .page + .block-smart:not(:has(.hero))::before {
    min-height: 1rem;
  }

  .constrain-default > *, .content {
    margin-inline: max( calc( 50% - 600px ), var(--margin) ) auto;
  }
</style>