---
layout: learn
active: video
title: Free Learn Grid Layout video series
---

# Learn Grid Layout Video Series

Learn by watching! In addition to all of the example code on this site, I'm creating a series of short video tutorials showing how Grid works and some of the key features.

<ul class="video-list">
{% assign videos = site.video | sort: 'order' %}
  {% for video in videos %}
  <li class="example">
    <header><h3><a href="{{video.url}}">{{video.title}}</a></h3></header>
    <div class="body">
      <figure class="imagefig">
        <img src="/img/{{video.thumbnail}}" alt="Thumbnail image of {{video.title}}">
      </figure>

      <div class="description">
        {{video.desc}}
      </div>
      <footer><a href="{{video.url}}">Watch video</a> ⇨</footer>
    </div>
  </li>
 {% endfor %}
</ul>
