---
title: "Defining a Grid"
image: example1.png
image_alt: image of display after defining a grid
desc: To define a grid use new values of the display property `grid` or `inline-grid`. You can then create column and row tracks.
layout: example
active: examples
group: parent
order: 1
number: 1
code: example1.html
spec: https://drafts.csswg.org/css-grid/#track-sizing
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="BNXyQa" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/BNXyQa/">Grid by Example 1: Defining a Grid</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

To define a Grid use `display:grid` or `display:inline-grid` on the parent element. You can then create a grid using the `grid-template-columns` and `grid-template-rows` properties.

I am using the `grid-gap` property to create a gap between my columns and rows of 10px. This property is a shorthand for `grid-column-gap` and `grid-row-gap` so you can set these values individually.

All direct children of the parent now become grid items and the auto-placement algorithm lays them out, one in each grid cell. Creating extra rows as needed.
