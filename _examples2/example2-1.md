---
title: "Subgrid on columns and rows"
image: example2-1.png
image_alt: image of layout with subgrid on columns and rows
desc: The subgrid value is used for grid-template-columns and grid-template-rows
layout: example
active: examples
group: parent
order: 1
number: 1
code: example2-1.html
spec: https://drafts.csswg.org/css-grid-2/#subgrids
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="axLzYv" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/axLzYv/">Grid by Example 2.1: subgrid columns and rows</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

To define a subgrid in both dimensions - columns and rows - use the value `subgrid` on a grid item of the parent as the value of `grid-template-columns` and `grid-template-rows`. The nested grid is now tied to the number of grid tracks and dimensions of the parent grid.
