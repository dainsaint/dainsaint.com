---
title: four notes
description: a weekly musical meditation to help you unlock your stream of consciousness
date: 2009-04-01
eleventyExcludeFromCollections: false
color: "#880044"
tags: play
---

{% hoist "head" %}
<style>
  #notes {
    font-family: var(--font-secondary);
    font-weight: bold;
    font-size: 4rem;

    sup {
      font-size: .5em;
    }
  }
</style>
{% endhoist %}



::: align-center
### week of april 22nd, 2019{.align-center #date}
<div id="week-number">
</div>

<div id="notes" class="distribute align-center between-interpunct">
</div>
:::

::: group
* [:fa-arrow-left:](#){onclick="prevWeek()" .disabled}
* [:fa-refresh:](#){onclick="reset()"}
* [:fa-dice:](#){onclick="randomize()"}
* [:fa-arrow-right:](#){onclick="nextWeek()"}
{.buttons .align-center}
:::

::: group
* [:fa-youtube: watch on youtube](#) {#most-recent}
* [:fa-arrow-up: submit your own!](https://forms.gle/qhcr58PLgYVnqmv19)
{.buttons .align-center}
:::

***

### How to use this site

Each week, this site will generate four random notes for you to play. Your job, as a musician, is to **play these four notes, in this order**, until you can hear what you find beautiful about them. You can change tempo, add harmonies, or add rhythm; you can play on any instrument or even sequence a new production. The only limitation is that these four notes must appear in this order in your improvisation.


If you record your session, feel free to submit it using the button above—or just share it on social media with #fournotes!

And if you're just in the mood for a random prompt, use the Random button—there are **11,8808* combinations, so you'll always have some inspiration!</p>

This project was inspired by Kenny Werner's book <a href="https://kennywerner.com/effortless-mastery">Effortless Mastery</a>, where he teaches you to play every note as if it's the most beautiful sound you've ever heard. This is my way of sharing some of that beauty with the world :)
  </div>


{% hoist "scripts" %}
<script type="text/javascript" src="/assets/js/fournotes/seedrandom.min.js"></script>
<script type="text/javascript" src="/assets/js/fournotes/sugar.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="/assets/js/fournotes/fournotes.js"></script>
{% endhoist %}