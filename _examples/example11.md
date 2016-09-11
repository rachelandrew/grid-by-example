---
title: "Defining Grid Areas"
image: example11.png
image_alt: Image of display after placing items
desc: We can create named areas on the grid to put content into.
layout: example
active: examples
group: parent
order: 11
number: 11
code: example11.html 
spec: https://drafts.csswg.org/css-grid/#grid-template-areas-property
example-codepen-embed: '<p data-height="351" data-theme-id="0" data-slug-hash="oXKgoQ" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/oXKgoQ/">Grid by Example 11: Defining Grid Areas</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

We can create named areas on the grid to put content into. To do this we first assign elements in our markup to a Grid Area, using the `grid-area` property.

We can then use the `grid-template-areas` property to describe where on the Grid these elements should sit.

Repeating the name of an area indicates that the area spans that grid track. Using a `.` or a sequence like `....` indicates an empty track. Such as the very first cell on this grid.
