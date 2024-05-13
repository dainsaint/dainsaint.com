---
title: everything
description: every dang post on the site
color: "#343a40"
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
{% for post in collections.projects | reverse %}
{% assign y = post.data.date | date: "%Y" %}

{% if y > year %}
{% assign year = y %}  
### {{ year }}
{% endif %}

* [{{ post.data.title }}]({{ post.url }})
{% endfor %}

---

### Posts

{% assign year = 0 %}
{% for post in collections.posts | reverse %}
{% assign y = post.data.date | date: "%Y" %}
{% if y > year %}
  {% assign year = y %}
  
### {{ year }}
{% endif %}
* [{{ post.data.title }}]({{ post.url }})
{% endfor %}