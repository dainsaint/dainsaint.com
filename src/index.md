---
eleventyExcludeFromCollections: true
layout: index
style: page
description: "storyteller, interactive designer, creative director"

color: "#573E79"
settings:
  info: false
  constrain: wide
  cta: true

permalink: "/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber }}/{% endif %}index.html"

---


{% render hero,
  url: "/assets/uploads/wisteria-pic.jpg"
  class: "content-wide"
  focus: "50% 25%"
%}


### Hi, I'm Dain Saint
{.text-overline}
# I turn stories into experiences. {.text-display}

<div class="switch gap-loose">

<div class="stack text-lede" style="flex-grow: 2">

I'm a storyteller creating interactive worlds, immersive events, and collaborative stories. Whether it's through [games](/games), [music](/music), [writing](/writing), or [design](/reckless-magic), I create artistic experiences about better futures and the roads we take to get there.

I run 
[Reckless Magic](/reckless-magic), 
an interactive storytelling label, and I'm cultivating 
[Futurefull](/futurefull), 
an interfuturist storytelling community.


</div>

::: stack
### Wanna make something cool? {.text-overline}
* [let's work together :fa-angle-right:](/services)
{.buttons .highlight}
:::

</div>

***

## upcoming events {.text-overline}

<div class="switch gap-tight">

{% for event in events %}
{% render blocks/event, block: event %}
{% endfor %}

</div>

***

{% hoist "sections" %}

{% assign content = collections.content | reverse | slice: 0, 3 %}

{% section "#222" %}

<div class="content-wide stack">

## Recent Posts{.text-display}

<div class="all-rounded switch gap-tight">

{% for recent in content %}
{% render previews/preview-split, post: recent %}
{% endfor %}

</div>


</div>

{% endsection %}

{% endhoist %}


{% hoist "head" %}

<style type="text/css">
  #main {
    padding-block-end: 2rem;
  }
</style>

{% endhoist %}