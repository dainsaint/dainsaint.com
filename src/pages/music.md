---
title: music
description: music and sound design for fun and profit
color: "#0F2434"
# hero: /assets/uploads/DSCF4101XL.JPG
---

I'm probably best known for [Auditorium]() and [Splice](https://cipherprime.com/games/splice). Orchestration, piano, jazz, electronic bent. Always down to try new things and expand my musical palette. Also, sound design.
{.lede} 

tktk a bit more text has to go here. Orchestration, piano, jazz, electronic bent. Always down to try new things and expand my musical palette. Also, sound design.

{% hoist "sections" %}

{% section %}
  
  ## orchestration
  TK More words about orchestration here, including the gamut etc. IDK.

  <div class="grid grid-2">

  ::: group
  ### Onward
  {% include audio, audio: "/assets/uploads/onward.mp3" %}
  :::

  ::: group
  ### Exploration 1
  {% include audio, audio: "/assets/uploads/exploration-1.mp3" %}
  :::

  ::: group
  ### starstuff
  {% include audio, audio: "/assets/uploads/starstuff.mp3" %}
  :::

  ::: group
  ### keravnós
  {% include audio, audio: "/assets/uploads/keravnos.mp3" %}
  :::

  </div>

{% endsection %}


{% section %}
  
  ## video game soundtracks
  most of this is through my company [cipher prime studios](https://cipherprime.com)

  all these soundtracks and more are available on our [bandcamp](https://cipherprime.bandcamp.com/).

  {% include bandcamp, albums: bandcamp.cipherprime %}

{% endsection %}

{% section %}
  
  ## solo
  i write way more than i release because i’m bad at things sometimes

  I also had a thing of St. Anytime i guess.

  ### city don't sing
  {% include youtube, video_id: "GjZa6hSSotM" %}

  ### albums/singles
  {% assign personal = bandcamp.dainsaint | concat: bandcamp.saintanytime %}

  {% include bandcamp, albums: personal %}

{% endsection %}


{% section %}

  ## press and interviews

  * Making the Splice OST, with [Pixelated Audio](https://pixelatedaudio.com/splice)
  * "City Don't Sing" featured in [Dosage Magazine](https://www.dosagemagazine.com/dain-saint-makes-a-beautiful-noise-and-vision-with-city-dont-sing/)
  * "One More" featured by [WXPN](https://xpn.org/2017/07/17/items-tagged-philadelphia-back-life-back-reality/)

{% endsection %}

{% section %}

{% include quote, quote: "let's make something<br>**musical :fa-music:**<br>together" %}

basic collab copy TK.
{.align-center}

* [:fa-paper-plane: contact me](/collab)
{.buttons .align-center}


{% endsection %}

{% endhoist %}