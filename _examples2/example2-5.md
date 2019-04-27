---
title: "No implicit grid in subgridded dimension"
image: example2-5.png
image_alt: image of layout with grid items filling the subgrid.
desc: Additional items will be forced into the last row of the subgrid
layout: example
active: examples
group: parent
order: 1
number: 1
code: example2-5.html
spec: https://drafts.csswg.org/css-grid-2/#subgrids
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="MRLZZV" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/MRLZZV">Grid by Example 2.5: no implicit tracks in subgridded dimension</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

The subgridded dimension or dimensions have no implicit grid, this means that if you autoplace too many items into this subgrid, or position an item outside of the subgrid it will be dealt with using the same rules as for [clamping overly large grids](https://www.w3.org/TR/css-grid-1/#overlarge-grids). This means that in our example the additional items are forced into the last row of the grid.