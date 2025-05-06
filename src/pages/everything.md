---
layout: index
title: everything
description: every dang post on the site
color: "#343a40"
eleventyExcludeFromCollections: true
---



### Pages

{% for post in collections.pages %}[{{ post.data.title }}]( {{ post.url }} ){% unless forloop.last %}&nbsp;•{% endunless %} {% endfor %}

---


### Recent Newsletters

{% for newsletter in newsletters.items %}
* <time>{{newsletter.published | slice: 0, 10 | date: "%b %d, %Y"}}</time> [{{ newsletter.title }}]({{ newsletter.link }})
{% endfor %}

---

### Projects
{% assign year = 0 %}
{% assign posts = collections.projects | reverse %}
{% for post in posts %}
{% assign y = post.data.date | date: "%Y" %}

{% if y != year %}
{% assign year = y %}  
### {{ year }}
{% endif %}

* [{{ post.data.title }}]({{ post.url }})
{% endfor %}

---

### Posts

{% assign year = 0 %}
{% assign posts = collections.posts | reverse %}
{% for post in posts %}
{% assign y = post.data.date | date: "%Y" %}
{% if y != year %}
  {% assign year = y %}
  
### {{ year }}
{% endif %}
* [{{ post.data.title }}]({{ post.url }})
{% endfor %}