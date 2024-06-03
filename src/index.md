---
layout: index
title: ""
description: "storyteller, musician, designer"
color: "#573E79"
promo: |
  ::: group
  ### space opera
  [more playtests soon]()
  :::

  ::: group
  ### free palestine
  [donate to pcrf](https://www.pcrf.net)
  :::
permalink: "/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber }}/{% endif %}index.html"
pagination:
  data: collections.posts
  size: 5
  reverse: true
  alias: posts
---

# [Hi, I'm Dain Saint](/about) **I turn stories into experiences.** {.title}

I make stories you can touch, and stories that touch you. Whether&nbsp;it's through {{ navigation.portfolios | prose }}, I create artistic experiences about better futures and the roads we take to get there.
{.lede}

* [about me :fa-angle-right:](/about)
{.buttons .align-right}

***

::: grid-medium
{% include showcase, slug: "space-opera", feature: true %}
{% include showcase, slug: "freedom-is-non-negotiable", feature: true %}
:::


* [more projects :fa-angle-right:](/projects)
{.buttons .align-right}




{% hoist "sections" %}


<section id="cta" class="block stack constrain colorize light" style="--primary: #362154;">

::: align-center stack-tight
<h1 class="title js-quote" data-quotes="magical |fa-wand-magic-sparkles, musical |fa-music, mythical |fa-book-open, memorable |fa-bookmark, meaningful |fa-hands-clapping">
{{ "Let's make something **magical :fa-wand-magic-sparkles:** together" | markdown }}
</h1>

I bring creative direction and perspective to immersive, meaningful experiences

[{% include fist-bump.svg %} let's collab](/collab){.button}
:::



***

### :fa-angle-down: keep scrolling, there's cool stuff down here :fa-angle-down:{.align-center}

</section>

{% endhoist %}

{% hoist "head" %}
<style>
  .project-info {
    display: none;  
  }

  .page > *:first-child {
    padding-block-end: 1.25rem;
  }

  #cta, #projects {
    padding-block: 3rem;
  }

  section:has( + #cta ) {
    padding-bottom: 3rem;
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
/*
  article.page {
    display: grid;
    min-height: calc(100vh - var(--header-height));
    grid-template-areas: 
      "lede"
      "projects"
      "cta";
    

    @media( min-width: 800px ) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 
        "lede projects"
        "lede cta";
      }
  }

  #projects {
    grid-area: projects;
  }

  #cta {
    grid-area: cta;
  }

  #main {
    grid-area: lede;
  }*/

</style>
{% endhoist %}