---
layout: index
title: ""
description: ""
social: https://dainsaint.netlify.app/assets/uploads/ds-social.png
color: "#6A4C93"
promo: |
  ::: group
  ### space opera
  [playtest june 2nd!](/)
  :::

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

# [Hi, I'm Dain Saint](/about) **I turn stories into experiences.** {.title}

I make stories you can touch, and stories that touch you. Whether&nbsp;it's through {{ navigation.portfolios | prose }}, I create artistic experiences about better futures and the roads we take to get there.
{.lede}

* [learn more :fa-angle-right:](/about)
{.buttons .align-right}

***

{% include showcase-list, tags: 'frontpage', feature: true, label: false %}

* [more projects :fa-angle-right:](/projects)
{.buttons .align-right}

***

### :fa-angle-down: keep scrolling, there's cool stuff down here :fa-angle-down:{.isolate .align-center}