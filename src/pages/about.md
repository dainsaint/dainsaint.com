---
title: 'about'
color: "#FEDB8A"
eleventyExcludeFromCollections: false
date: ''
tags: []
status: ''
settings:
  constrain: wide
  info: false
---

{% render hero,
  url: "/assets/uploads/flowers-pic.jpg"
  class: "content-wide"
  focus: "0% 40%"
%}


<div class="stack text-lede">

**dain saint** (he/they) is a Philly-based storyteller, designer, and creative director making beautiful immersive experiences. They run [Reckless Magic](/reckless-magic), an interactive storytelling label, and curate [Futurefull](https://futurefull.org), an interfuturist storytelling collective.
{.content-default}

In the past, they have produced over a dozen commercially-released games as co-founder of [Cipher Prime Studios](https://cipherprime.com), written [soundtracks](/composing) for the same, and directed [Emmy-award winning editorial series](https://inquirer.com/wildestdreams) as journalist at the Philadelphia Inquirer. 
{.content-default}

They've created [art exhibitions](https://wevetraveledsofar.com) and [museum installations](https://www.phillyseaport.org/exhibits/river-alive/), and they're always looking for meaningful ways to connect people with the world around them.
{.content-default}


As a writer, they released a book of poetry called “[Freedom Is Non-Negotiable”](/freedom-is-non-negotiable), and performed and released music as a [solo artist](/city-dont-sing). 
{.content-default}

They are a [massive nerd](https://open.spotify.com/episode/6hQ97u9zBcIeSTl6EOGuY4?si=qeF6CsxpRI-jK2EaLv851Q).
{.content-default}


![emmy](/assets/uploads/IMG_8373.jpg){.columns-three .rows-two}
![gming space opera](/assets/uploads/6210c93a0861519ea1b72a42b807.JPG){.columns-two .rows-two}
![weve traveled premier](/assets/uploads/will_and_dain.png){.columns-two}
![space opera playtest](/assets/uploads/gming.jpg){.columns-four .rows-two}
![light selfie booth](/assets/uploads/light_selfie_booth-2.jpg){.columns-one}
![game forge five year](/assets/uploads/showcase.jpg){.columns-two}
![worldtown shirt](/assets/uploads/0F1CE2AA-22F3-4DCC-B61D-53F30A076E74.JPG)
![time philadelphia](/assets/uploads/DSCF1338LG.jpg){.columns-three .rows-two}
![late night snacks](/assets/uploads/211001_Beardmobile_039.jpg){.columns-three .rows-two}
{.tiles .all-rounded .gap-tight .stack-isolate}


</div>

{% hoist "sections" %}

{% section %}
# press

{% assign articles = press | tagged: "-podcast" | sort: "date" | reverse %}

{% assign podcasts = press | tagged: "podcast" | sort: "date" | reverse %}

<div class="stack-loose">

<div>

### articles
{% include press, articles: articles %}

</div>

<div>

### podcast interviews{.push-loose}
{% include press, articles: podcasts %}

</div>


</div>
{% endsection %}


{% endhoist %}





{% comment %}
# about this site

i've never been a huge fan of social media. it is powerful, and an incredible force for good, but _man_ things with infinite scroll aren't great for my brain.

and my art follows my stream of consciousness. sometimes that takes the form of poetry. or song. or spoken word, or rhetoric, the odd book or video.

the way we're taught to market runs against the way i create. i often have no idea where particular pieces are leading me until i've arrived; and if i wait until i know where i've gotten to start giving you directions, i'll never release anything (which has been my curse for years).

so instead, this website is my garden. as i create new pieces, they'll be published here immediately. once i figure out where it's going, i create a [project](/projects) to start harvesting the work. once it's ready to release, it's released — no muss, no fuss.

{% endcomment %}
