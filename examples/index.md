---
layout: learn
active: examples
title: Grid by Example - Usage examples of CSS Grid Layout
---
# The examples

The following examples include an image of how the example should look in a supporting browser, they each link to a page with more information about the technique being shown, code and a CodePen of the example. You will need a [supporting browser](/browsers) to see these examples working.


{% assign examples = site.examples | sort: 'order' %}
<ul class="examples-detail-list">
  {% for example in examples %}
  <li class="example" id="example{{ example.number }}">
    <header><h3><a href="{{example.url}}">{{example.title}}</a></h3></header>
    <div class="body">
      <figure class="imagefig">
        <img src="/examples/images/{{ example.image }}" alt="Screenshot of {{example.title}}">
      </figure>
      <div class="description">
      {{example.desc}}
      </div>
      <footer><a href="{{example.url}}">View example</a> | <a href="{{example.spec}}">Read specification</a></footer>
    </div>
  </li>
 {% endfor %}
</ul>
