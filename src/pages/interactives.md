---
title: interactives
description: stuff you can touch
tags: showcase
color: "#eeeeee"
---

{% include showcase-list, tags: 'journalism', feature: true, label: false %}


{% hoist "sections" %}

{% section %}

# journalism


### Recent articles

{% for article in inquirer %}
* [{{ article.title }}]({{ article.url }})\
  _{{article.description}}_
{% endfor %}



{% endsection %}


{% section %}

{% include quote, quote: "let's make something **memorable :fa-bookmark:** together" %}

I bring creative direction and perspective to immersive, meaningful experiences.
{.align-center}

* [{% include fist-bump.svg %} let's collab](/collab)
{.buttons .align-center}


{% endsection %}

{% endhoist %}