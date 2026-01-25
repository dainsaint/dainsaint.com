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


feature:
  type: video
  src: /assets/uploads/wildest.webm

---
### Hi, I'm Dain Saint
{.text-overline}
# I turn stories into experiences. {.text-display}

:::: switch gap-loose
::: stack columns-two text-lede

{% include hero, 
  url: "assets/uploads/wisteria-pic.jpg"
  class: "content-wide"
  focus: "50% 25%"
%}



I'm a storyteller creating interactive worlds, immersive events, and collaborative stories. Whether it's through [games](/games), [music](/music), [writing](/writing), or [design](/reckless-magic), I create artistic experiences about better futures and the roads we take to get there.

I'm building [Futurefull](/futurefull), a multicultural hub for experimental interactive storytelling.


:::

::: stack

{% include subscribe %}

:::

::::


{% hoist "sections" %}


{% section "#FFF" %}


{% assign latest = ghost | first %}

:::: content-wide switch gap-tight

[![]({{latest.feature_image}})]({{ latest.url }})

<div class="stack" style="display: flex; flex-direction: column; justify-content: center">

## [Latest Post]({{ latest.url }}){.text-overline .link-plain}
### [{{ latest.title }}]({{ latest.url }}){.text-display  .link-plain}

[{{latest.excerpt}}]({{latest.url}}){ .link-plain }

{{ latest.published_at | date: "%B %e, %Y" }}{.post-project}

[Keep reading :fa-arrow-right:]({{ latest.url }}){.button}

</div>

::::

{% endsection %}





{% section "rgb(97, 5, 51)" %}




::::: content-wide stack



## work with me{.text-display}


{% include hero, 
  url: "/assets/uploads/empty_space.jpg"
  class: "content-wide"
  focus: "50% 50%"
%}

{% include showcase, feature: feature %}

:::: switch gap-loose

::: stack columns-two text-lede
I help mission-driven cultural organizations tell their stories.  In practice, that often looks like brand identity, interactive design, and immersive experiences.
{.text-lede}
:::

::: stack
[See My Work :fa-arrow-right: ](/reckless-magic){.button .size-full .highlight}
:::

::::






::: grid-medium stack-isolate
{% render testimonial,
   body: "Dain helped me get clarity on an important decision I would have struggled back and forth with for weeks... in 15 minutes.", 
   author: "Nicole Forrester"
   title: "Developer/Entrepreneur"
%}

{% render testimonial, 
   body: "Dain helped me remember why I was doing all this in the first place, creating a mission statement that I couldn't have said better myself.", 
   author: "Kevin Seidman" 
   title: "Comic Creator"
%}
:::

::: block stack constrain-wide stack-isolate
### clients and collaborators{.align-center .stack-default}

![The Philly Download](/assets/uploads/thephillydownload.svg)
![Dream Syndicate](/assets/uploads/dreamsyndicate.svg)
![Game Developers Conference](/assets/uploads/gdc.svg)
![The Philadelphia Inquirer](/assets/uploads/inquirer.svg)
![Glbl Vllg](/assets/uploads/glblvllg.png)
![Indiecade](/assets/uploads/indiecade.webp)
![Indy Hall](/assets/uploads/indyhall.png)
![Bearded Ladies Cabaret](/assets/uploads/beardedladies.png)
![Klip Collective](/assets/uploads/klip.png)
![Bluecadet](/assets/uploads/bluecadet.svg)
![Obvious Agency](/assets/uploads/obviousagency.webp)
![REC Philly](/assets/uploads/recphilly.svg)
![National Air And Space Museum](/assets/uploads/nasm.svg)
![Opera Philadelphia](/assets/uploads/operaphiladelphia.png)
![Ultraleap](/assets/uploads/ultraleap.svg)
![World Cafe Live](/assets/uploads/worldcafelive.png) {.bricks-tiny .list-plain .gap-tight .fit-contain .color-match .light}

:::


:::::


{% endsection %}




















{% endhoist %}


{% hoist "head" %}

<style type="text/css">
  #main {
    padding-block-end: 2rem;
  }
</style>

{% endhoist %}




{% comment %}

***

## upcoming events {.text-overline}

::: switch gap-tight
{% for event in events %}
{% render blocks/event, block: event %}
{% endfor %}
:::

{% endcomment %}