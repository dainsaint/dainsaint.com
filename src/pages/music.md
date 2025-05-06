---
title: music
date: "2024-05-01"
description: composition and sound design for fun and profit
tags:
  - showcase
  - listen
color: "#0F2434"
---

Classically trained. Juliard schooled. (Absolutely not.)
{.text-lede}

But I _am_ the lead composer and sound designer for indie games like [Auditorium](https://cipherprime.com/games/auditorium) and [Splice](https://cipherprime.com/games/splice). Over the years, I've cobbled together a musical practice from spare parts of soundtracks, video games, and free improvisation.

My style mixes cinematic, orchestral, electronic, jazz, blues, and Caribbean diasporic traditions to ground the listener in immersive experiences.

{% include testimonial, 
   body: "Ethereal and driven, this album relentlessly moves forward. The piano trio is brilliantly executed, the essence of beauty in simplicity", 
   author: "Benjamin Burnes" 
   title: "Splice OST"
%}


{% hoist "sections" %}

{% section %}

## compositions

As a composer, I write music for games, film, and stage. I've written everything from minimal piano soundscapes, to sweeping string arrangements, to pulsing electronic soundtracks — all with an eye to creating atmosphere and telling a story without words.

* ### Onward
  /assets/uploads/onward.mp3
* ### Cassiel
  /assets/uploads/cassiel.mp3
* ### Exploration One
  /assets/uploads/exploration-1.mp3
* ### Upside Down
  /assets/uploads/07 Upside Down.mp3
* ### Keravnós
  /assets/uploads/keravnos.mp3
* ### Starstuff
  /assets/uploads/starstuff.mp3
{.list-plain .grid-medium .push-loose }


{% endsection %}

{% section %}

## game soundtracks
all these soundtracks are available on cipher prime studios' [bandcamp](https://cipherprime.bandcamp.com/).

{% include bandcamp, albums: bandcamp.cipherprime %}

{% endsection %}

{% section %}

## sound design
As a sound designer, I know the sound of an experience is what gives it tactility, mass, and presence.

* https://youtu.be/PCh0bK1Zx4c
* https://youtu.be/EpFDAR-mMD0
{.list-plain .constrain-wide .grid-medium}

{% endsection %}

{% section %}

## solo

as a singer-songwriter, my work is heartfelt and eclectic. i've performed everything from stripped-down acoustic sets, to grimy basement chiptune shows, to massive dance parties at venues like world café live and brooklyn bowl.

::: stack-loose

### city don't sing
https://youtu.be/GjZa6hSSotM

### albums/singles
{% assign personal = bandcamp.dainsaint | concat: bandcamp.saintanytime %}
{% include bandcamp, albums: personal %}

::: group

### collaborations

  <iframe style="border-radius:12px; background: var(--color-alpha)" src="https://open.spotify.com/embed/track/558ltuhYDwXj5lHlO6GT4P?theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

  <iframe style="border-radius:12px; background: var(--color-alpha)" src="https://open.spotify.com/embed/album/7F5xABrHeCQlf1FbKDniIZ?theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
:::
  
:::

{% endsection %}

{% section %}

## press and interviews

{% assign articles = press | tagged: "music" | sort: "date" | reverse %}
{% include press, articles: articles %}

{% endsection %}


{% endhoist %}




