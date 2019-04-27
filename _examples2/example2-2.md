---
title: "Subgrid on columns, implicit grid rows"
image: example2-2.png
image_alt: image of layout with subgrid on columns only
desc: The subgrid value is used for grid-template-columns. The rows are created as an implicit grid.
layout: example
active: examples
group: parent
order: 1
number: 1
code: example2-2.html
spec: https://drafts.csswg.org/css-grid-2/#subgrids
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="YMYEVO" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/YMYEVO">Grid by Example 2.2: subgrid columns, implicit grid rows</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

To define a subgrid on columns only use the value `subgrid` on a grid item of the parent as the value of `grid-template-columns`. The rows can now be defined with a track listing as normal of `grid-template-rows` or an implicit grid can be used as usual. Any grid created for rows will be for the subgrid only, and the parent grid row containing the subgrid will grow to be large enough to contain the content (assuming it has an `auto` or other content-based size).