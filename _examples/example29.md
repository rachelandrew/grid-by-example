---
title: "minmax() and spanning columns and rows"
image: example29.png
image_alt: Image of display after placing items
desc: A grid that contains as many 200 pixel column tracks as will fit into the container with the remaining space shared equally between the columns.
layout: example
active: examples
group: parent
order: 29
number: 29
code: example29.html 
spec: https://drafts.csswg.org/css-grid/#valdef-grid-template-columns-minmax
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="GZQYQa" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/GZQYQa/">Grid by Example 29: minmax() and spanning columns and rows</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

In this example I am creating a grid that contains as many 200 pixel column tracks as will fit into the container with the remaining space shared equally between the columns. In the `minmax()` function the first value is the minimum size I want my tracks to be, the second is the maximum. By using `1fr` as the maximum value the space is equally distributed.

I am then spanning columns and rows. As the items are auto-placed on our flexible grid they will move around the grid but maintain their spanned size.
