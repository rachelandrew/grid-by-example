---
layout: examples
active: patterns
title: Common UI Patterns
---

# Grab &amp; Go Patterns

<div class="content">
  <p>A collection of built patterns to use as starting points, complete with fallbacks. Remember that you do not need to use these for full page layout, they could as easily be a small component in a design.</p>
</div>

{% assign patterns = site.patterns | sort: 'order' %}
<ul class="examples-detail-list">
  {% for pattern in patterns %}
  <li class="example">
    <header><h3><a href="{{pattern.url}}">{{pattern.pattern-name}}</a></h3></header>
   
      <figure class="imagefig">
        <a href="{{pattern.url}}"><img src="/img/{{pattern.main-image}}" alt="Screenshot of {{pattern.pattern-name}}"></a>
      </figure>

      <div class="description">
        {{pattern.pattern-desc}}
      </div>
     
   
  </li>
 {% endfor %}
</ul>
