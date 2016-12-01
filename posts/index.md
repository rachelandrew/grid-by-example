---
layout: posts
active: blog
title: News and updates on CSS Grid Layout
---

# Grid by Example News & Blog


<ul class="blog-list">
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
