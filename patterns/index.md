---
layout: learn
active: patterns
title: Common UI Patterns
---

# Common UI Patterns

As Grid Layout moves towards shipping I'm creating a number of more complete patterns demonstrating how we might use Grid Layout along with other layout methods, as an enhancement or for small UI elements rather than full designs.

<ul class="examples-detail-list">
  {% for pattern in site.patterns %}
  <li class="example">
    <header><h3><a href="{{pattern.url}}">{{pattern.pattern-name}}</a></h3></header>
    <div class="body">
      <figure class="imagefig">
        <img src="/img/{{pattern.main-image}}" alt="Screenshot of {{pattern.pattern-name}}">
      </figure>

      <div class="description">
        {{pattern.pattern-desc}}
      </div>
      <footer><a href="{{pattern.url}}">View pattern</a> ⇨</footer>
    </div>
  </li>
 {% endfor %}
</ul>
