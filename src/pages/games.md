---
title: games
description: digital, role-playing, and otherwise
tags: 
  - showcase
  - play
color: "#292B53"
---

I make pretty, engaging, absurd little games.
{.text-lede}

Games are how we learn—about ourselves, each other, and the world. Also, they're just *fun*. I love creating beautiful experiences that let people engage with the absurdity of the world around them with a light touch and an open heart. Whether digital or analog, there's a trillion ways to play, and I'd love to find just a few.

{% include testimonial, 
   body: "For me, what was most enjoyable about Intake was seeing just how lean and small a game can be while still being exciting. It's a master class in audio-visual feedback.", 
   author: "Andrew Groen" 
   title: "Game Reviewer"
%}



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


::: grid-five gap-tight content-wide stack-isolate
{% for game in games.cipherprime %}
[![{{game.name}}]({{game.poster}})]({{game.url}})
{% endfor %}
:::


{% endsection %}


{% endhoist %}