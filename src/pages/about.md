---
title: 'about'
color: "#FEDB8A"
eleventyExcludeFromCollections: false
date: ''
tags: []
status: ''
---

![dain saint](/assets/uploads/wisteria-pic.jpg)

**dain saint** is a Philly-based storyteller, musician, and designer who makes beautiful immersive experiences. He's produced over a dozen commercially-released games as co-founder of [Cipher Prime Studios](https://cipherprime.com), written [soundtracks](/composing) for the same, and directed [Emmy-award winning editorial series](https://inquirer.com/wildestdreams) for the Philadelphia Inquirer. 

He has created [art exhibitions](https://wevetraveledsofar.com) and [museum installations](https://www.phillyseaport.org/exhibits/river-alive/), and is always looking for meaningful ways to connect people with the world around them.

As a writer, he has released a book of poetry called “[Freedom Is Non-Negotiable”](/freedom-is-non-negotiable), and performed and released music as a [solo artist](/city-dont-sing). 

He is a [massive nerd](https://open.spotify.com/episode/6hQ97u9zBcIeSTl6EOGuY4?si=qeF6CsxpRI-jK2EaLv851Q).



{% hoist "sections" %}

{% section %}
# press


::: stack-loose
{% assign articles = press | where_exp: "item", "item.tags not contains 'podcast'" | sort: "date" | reverse %}

{% assign podcasts = press | where_exp: "item", "item.tags contains 'podcast'" | sort: "date" | reverse %}

### articles
{% include press, articles: articles %}

### podcast interviews
{% include press, articles: podcasts %}

:::



{% endsection %}


{% section %}

<h1 class="quote js-quote" data-quotes="magical |fa-wand-magic-sparkles, musical |fa-music, mythical |fa-book-open, memorable |fa-bookmark, meaningful |fa-hands-clapping">
{{ "Let's make something **magical :fa-wand-magic-sparkles:** together" | markdown }}
</h1>

basic collab copy TK.
{.align-center}

* [{% include fist-bump.svg %} let's collab](/collab)
{.buttons .align-center}

{% endsection %}
{% endhoist %}





{% comment %}
# about this site

i've never been a huge fan of social media. it is powerful, and an incredible force for good, but _man_ things with infinite scroll aren't great for my brain.

and my art follows my stream of consciousness. sometimes that takes the form of poetry. or song. or spoken word, or rhetoric, the odd book or video.

the way we're taught to market runs against the way i create. i often have no idea where particular pieces are leading me until i've arrived; and if i wait until i know where i've gotten to start giving you directions, i'll never release anything (which has been my curse for years).

so instead, this website is my garden. as i create new pieces, they'll be published here immediately. once i figure out where it's going, i create a [project](/projects) to start harvesting the work. once it's ready to release, it's released — no muss, no fuss.

{% endcomment %}
