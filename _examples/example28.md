---
title: "minmax() in auto-fill repeating tracks"
image: example28.png
image_alt: Image of display after placing items
desc: A grid that contains as many 200 pixel column tracks as will fit into the container with the remaining space shared equally between the columns.
layout: example
active: examples
group: parent
order: 28
number: 28
code: example28.html 
spec: https://drafts.csswg.org/css-grid/#valdef-grid-template-columns-minmax
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="GZQYOL" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/GZQYOL/">Grid by Example 28: minmax() in auto-fill repeating tracks</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

In this example I am creating a grid that contains as many 200 pixel column tracks as will fit into the container with the remaining space shared equally between the columns. In the `minmax()` function the first value is the minimum size I want my tracks to be, the second is the maximum. By using `1fr` as the maximum value the space is equally distributed.
