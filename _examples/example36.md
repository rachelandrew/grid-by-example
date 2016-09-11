---
title: "Percentage based grids and gaps"
image: example36.png
image_alt: image of display after defining a grid
desc: You can create grids using percentage values for tracks and gaps.
layout: example
active: examples
group: parent
order: 36
number: 36
code: example36.html
spec: https://drafts.csswg.org/css-grid/#gutters
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="NRGqKb" data-default-tab="result" data-user="rachelandrew" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/NRGqKb/">Grid by Example 36: Percentage grids and gaps</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

A grid with a width of 90%. Six column tracks of 10% each, 5 gutter tracks of 2% each.

The `grid-gap` property controls columns and rows but as the grid has no height, the [row gap](https://github.com/w3c/csswg-drafts/issues/345#issuecomment-240333816) resolves to 0.

If we give the grid a height, there is something for 2% to be a percentage of. So we get a gap.
