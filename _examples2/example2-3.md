---
title: "Subgrid on rows, defined column tracks"
image: example2-3.png
image_alt: image of layout with subgrid on rows only
desc: The subgrid value is used for grid-template-rows. The columns are created as a normal track listing.
layout: example
active: examples
group: parent
order: 1
number: 1
code: example2-3.html
spec: https://drafts.csswg.org/css-grid-2/#subgrids
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="mgpqBv" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/mgpqBv">Grid by Example 2.3: subgrid rows, defined column tracks</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

To define a subgrid on rows only use the value `subgrid` on a grid item of the parent as the value of `grid-template-rows`. 

In this example I have then created grid tracks for columns on the subgrid using `grid-template-columns: 1fr 1fr 1fr`. These column tracks will then fit inside the area that the nested grid is placed in, just as with a regular nested grid.