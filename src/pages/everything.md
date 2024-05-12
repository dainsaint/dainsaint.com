---
title: everything
description: every dang post on the site
color: "#343a40"
---

### Pages

{% for post in collections.pages %}[{{ post.data.title }}]( {{ post.url }} ){% unless forloop.last %}&nbsp;•{% endunless %} {% endfor %}

---
### Projects


{% assign year = 0 %}
{% for post in collections.projects %}
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
{% for post in collections.posts %}
{% assign y = post.data.date | date: "%Y" %}
{% if y > year %}
  {% assign year = y %}
  
### {{ year }}
{% endif %}
* [{{ post.data.title }}]({{ post.url }})
{% endfor %}