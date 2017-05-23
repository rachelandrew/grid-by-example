---
layout: examples
active: video
title: Free Learn Grid Layout video series
---

# Learn Grid Layout Video Series

Learn by watching! In addition to all of the example code on this site, I'm creating a series of short video tutorials showing how Grid works and some of the key features.

{% assign videos = site.video | sort: 'order' %}
<ul class="video-list">
  {% for video in videos %}
  <li class="video"><a href="{{video.url}}">
    <h3>{{video.title}}</h3>
    {{video.desc}}
  </a></li>
 {% endfor %}
</ul>
