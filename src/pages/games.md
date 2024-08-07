---
title: games
description: digital, role-playing, and otherwise
tags: showcase
color: "#292B53"
---

I make pretty, engaging, absurd little games.
{.lede}

Games are how we learn—about ourselves, each other, and the world. Also, they're just *fun*. I love creating beautiful experiences that let people engage with the absurdity of the world around them with a light touch and an open heart. Whether digital or analog, there's a trillion ways to play, and I'd love to find just a few.

***

{% include showcase-list, tags: 'featured game', feature: true, label: false %}

{% hoist "sections" %}

{% section "#222222" %}

# cipher prime studios


::: flex

![cipher prime logo](/assets/uploads/cp_logo_black.png){.color-match .keep-alpha}

::: group
I co-founded **cipher prime** with [will stallwood](https://willstall.com) in 2009. We made **ten games in ten years**, including Auditorium and Splice. More info about our games, including our list of awards and ways to buy, are all available at [cipherprime.com](https://cipherprime.com).

Much love to aaron chapin, andrei marks, nikkolai davenport, jackie grubner, and the rest of the CP family <3.
:::


::: grid-five gap-tight constrain-wide stack-isolate
{% for game in games.cipherprime %}
[![{{game.name}}]({{game.poster}})]({{game.url}})
{% endfor %}
:::


{% endsection %}
{% section %}

{% include quote, quote: "let's make something **magical :fa-wand-sparkles:** together" %}

Whether digital or physical, mechanical or narrative — let's make an incredible experience.
{.align-center}

* [{% include fist-bump.svg %} let's collab](/collab)
{.buttons .align-center}
{% endsection %}

{% endhoist %}