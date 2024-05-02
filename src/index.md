---
layout: index
title: "Dain Saint"
description: "I turn stories into experiences."
social: https://dainsaint.netlify.app/assets/uploads/ds-social.png
color: "#6A4C93"
promo: |
  ::: group
  ### playtest space opera
  [sign up for june 2nd!](/)
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


<style>
  .project-info {
    display: none;
  }

  .aside a{
    text-decoration-thickness: 0px;
  }

  .index-top {
    display: grid;
    grid-gap: 20px;
    /* grid-template-columns: 3fr 5fr; */
  }

  .buttons {
    text-align: right;
    width: 100%;
    justify-content: flex-end;
  }

  .buttons li {
    margin: 0px;
  }
</style>

<div class="index-top">


<div>

::: aside
{% include quote, quote: "[Hi, I'm Dain Saint](/about)<br/>**I turn stories into experiences.**" %}
:::


I create stories you can touch, and stories that touch you. Whether it's [composing](/composing), [writing](), [games](), [interactives](), or [performance](), I make artistic experiences about better futures and the roads we take to get there.
{.lede}

* [learn more :fa-arrow-right:](/about)
{.buttons}
</div>

</div>

***

{% include category-list, types: 'frontpage', use-featured: true %}
* [more projects :fa-arrow-right:](/projects)
{.buttons}
</div>

***

### :fa-arrow-down: keep scrolling, there's cool stuff down here :fa-arrow-down:{.align-center}