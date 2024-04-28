---
layout: index
title: the garden
color: "#222222"
description: |
  [details what is this?

  i've never been a huge fan of social media. it is powerful, and an incredible force for good, but _man_ things with infinite scroll aren't great for my brain.

  and my art follows my stream of consciousness. sometimes that takes the form of poetry. or song. or spoken word, or rhetoric, the odd book or video.

  the way we're taught to market runs against the way i create. i often have no idea where particular pieces are leading me until i've arrived; and if i wait until i know where i've gotten to start giving you directions, i'll never release anything (which has been my curse for years).

  so instead, this website is my garden. as i create new pieces, they'll be published here immediately. once i figure out where it's going, i create a [project](/projects) to start harvesting the work. once it's ready to release, it's released — no muss, no fuss.
  ]
eleventyExcludeFromCollections: false
featured: []
permalink: "garden/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber }}/{% endif %}index.html"
pagination:
  data: collections.posts
  size: 10
  reverse: true
  alias: posts
---
