---
title: games
description: digital, role-playing, and otherwise
tags: showcase
color: "#292B53"
---

<!-- tk -->

When you change what it means to win, you change how you play.

* some quick thoughts on game design — digital and otherwise
* gotta have fun
* great way to learn
* where the beautiful meets the absurd

***

{% include showcase-list, tags: 'featured game', feature: true, label: false %}

{% hoist "sections" %}

{% section %}

# cipher prime studios

![cipher prime logo](/assets/uploads/cp_logo_black.png){.color-match}

I founded **cipher prime** with [will stallwood](https://willstall.com) in 2009. we made ten games in 10 years, including Auditorium and Splice. more info about our games, including our list of awards and ways to buy, are all available at [cipherprime.com](https://cipherprime.com).

much love to aaron chapin, andrei marks, nikkolai davenport, jackie grubner, and the rest of the CP family <3.

::: grid grid-5 gap-tight constrain-wide
{% for game in games.cipherprime %}
[![{{game.name}}]({{game.poster}})]({{game.url}})
{% endfor %}
:::


{% endsection %}
{% section %}

{% include quote, quote: "let's make something **magical :fa-wand-sparkles:** together" %}

I bring diverse creative skills and deep perspective to meaningful projects.
{.align-center}

* [{% include fist-bump.svg %} let's collab](/collab)
{.buttons .align-center}
{% endsection %}

{% endhoist %}