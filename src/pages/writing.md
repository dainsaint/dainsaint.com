---
title: writing
description: assorted thoughts
tags: showcase
color: "#3A3C48"
# hero: /assets/uploads/DSCF4101XL.JPG
---

I write poetry, short stories, essays, and articles.
{.lede} 

I have a few small books, and generally overthink everything.

***

{% include showcase-list, projects: "freedom-is-non-negotiable, just-stop", feature: true, label: false %}

### works in progress{.push-loose}
I use this site as a way to work and publish discreet thoughts that may or may not end up being compiled into a book.

{% include showcase-list, tags: "read wip", label: false %}

{% hoist "sections" %}

{% section %}
## articles

### blog posts
{% assign  blogs = collections.blogs | sort: "date" | reverse | map: "data" %}
{% include press, articles: blogs %}

### for other outlets{.push-loose}
{% assign articles = writing | sort: "date" | reverse %}
{% include press, articles: articles %}

{% endsection %}


{% section %}

{% include quote, quote: "let's make something **mythical :fa-book-open:** together" %}

I bring creative direction and perspective to immersive, meaningful experiences.
{.align-center}

* [{% include fist-bump.svg %} let's collab](/collab)
{.buttons .align-center}

{% endsection %}

{% endhoist %}