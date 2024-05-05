---
layout: index
title: ""
description: ""
social: https://dainsaint.netlify.app/assets/uploads/ds-social.png
color: "#6A4C93"
promo: |
  ::: group
  ### free palestine
  [donate to pcrf](https://www.pcrf.net)
  :::
permalink: "/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber }}/{% endif %}index.html"
pagination:
  data: collections.posts
  size: 10
  reverse: true
  alias: posts
---

::: aside
{% include quote, quote: "[Hi, I'm Dain Saint](/about)<br/>**I turn stories into experiences.**" %}
:::

I make stories you can touch, and stories that touch you. Whether&nbsp;it's through [games](/games), [composing](/composing), [writing](/writing), [interactives](/interactives), or [performance](/performance), I create artistic experiences about better futures and the roads we take to get there.
{.lede}

* [learn more :fa-arrow-right:](/about)
{.buttons .align-right}

***

{% include category-list, types: 'frontpage', use-featured: true, label: false %}
* [more projects :fa-arrow-right:](/projects)
{.buttons .align-right}

***

### :fa-arrow-down: keep scrolling, there's cool stuff down here :fa-arrow-down:{.align-center}