---
layout: index
title: ""
description: ""
social: https://dainsaint.netlify.app/assets/uploads/ds-social.png
# color: "#6A4C93"
color: "#573E79"
promo: |
  ::: group
  ### space opera
  [playtest june 2nd!](https://docs.google.com/forms/d/e/1FAIpQLScTWqGIiWkqIjhfG04-0h6yTVrQa_kQ-5YX58lQXMU7E_dx4A/viewform?usp=sf_link)
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

::: grid grid-2
{% include showcase, slug: "space-opera", feature: true %}
{% include showcase, slug: "freedom-is-non-negotiable", feature: true %}
:::


* [more projects :fa-angle-right:](/projects)
{.buttons .align-right}



{% hoist "sections" %}

<section id="cta" class="block stack constrain colorize light" style="--primary: #362154;">

::: align-center stack-compact
<h1 class="title js-quote" data-quotes="magical |fa-wand-magic-sparkles, musical |fa-music, mythical |fa-book-open, memorable |fa-bookmark, meaningful |fa-hands-clapping">
{{ "Let's make something **magical :fa-wand-magic-sparkles:** together" | markdown }}
</h1>

i bring creative direction and perspective to immersive, meaningful experiences

[{% include fist-bump.svg %} let's collab](/collab){.button}
:::



***

### :fa-angle-down: keep scrolling, there's cool stuff down here :fa-angle-down:{.align-center}

</section>

{% endhoist %}

<style>
  .page .block:first-child {
    padding-block-end: 1.25rem;
  }

  #cta {
    padding-block: 3rem;
  }

@media( min-width: 650px ) {
  h1.title strong {
    display: inline-block;
    padding-inline-end: .25rem;
  }
}

  h3.align-center {
    color: var(--color-alpha)
  }

</style>
