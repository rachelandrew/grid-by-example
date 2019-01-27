---
layout: examples
active: examples
title: Grid by Example - Usage examples of CSS Grid Layout
---
# The examples

<div class="content">
  <p>The following examples include an image of how the example should look in a supporting browser, they each link to a page with more information about the technique being shown, code and a CodePen of the example. Unless otherwise noted these examples work in any browser supporting the up to date Grid Specification. <em>They will not work in IE10 or 11.</em></p>

  <p>For page layout examples see a collection of <a href="/examples/page-layout">page layouts here</a>.</p>
  
</div>



{% assign examples = site.examples | sort: 'order' %}
<ul class="examples-detail-list">
  {% for example in examples %}
  <li class="example" id="example{{ example.number }}">
    <header><h3><a href="{{example.url}}">{{example.title}}</a></h3></header>
    
      <figure class="imagefig">
        <a href="{{example.url}}"><img src="/examples/images/{{ example.image }}" alt="Screenshot of {{example.title}}"></a>
      </figure>
      <div class="description">
      {{example.desc}}
      </div>
      <footer><a href="{{example.url}}">View example</a> | <a href="{{example.spec}}">Read specification</a></footer>
  </li>
 {% endfor %}
</ul>
