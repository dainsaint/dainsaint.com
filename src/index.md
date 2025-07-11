---
eleventyExcludeFromCollections: true
layout: index
style: page
description: "storyteller. creator. accomplice."

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

:::: switch gap-loose
::: stack columns-two text-lede
I'm a storyteller creating interactive worlds, immersive events, and collaborative stories. Whether it's through [games](/games), [music](/music), [writing](/writing), or [design](/reckless-magic), I create artistic experiences about better futures and the roads we take to get there.

I run 
[Reckless Magic](/reckless-magic), 
an interactive storytelling service, and I'm cultivating 
[Futurefull](/futurefull), 
an interfuturist storytelling community.
:::

::: stack
### Wanna make something cool? {.text-overline}
* [let's work together :fa-angle-right:](/services)
{.buttons .highlight}
:::
::::


{% comment %}

***

## upcoming events {.text-overline}

::: switch gap-tight
{% for event in events %}
{% render blocks/event, block: event %}
{% endfor %}
:::

{% endcomment %}

{% hoist "sections" %}

{% assign content = collections.content | reverse | slice: 0, 3 %}

{% section "#222" %}

:::: content-wide stack
## Recent Posts{.text-display}

::: switch gap-tight all-rounded
{% for recent in content %}
{% render previews/preview-split, post: recent %}
{% endfor %}
:::
::::

{% endsection %}

{% endhoist %}


{% hoist "head" %}

<style type="text/css">
  #main {
    padding-block-end: 2rem;
  }
</style>

{% endhoist %}