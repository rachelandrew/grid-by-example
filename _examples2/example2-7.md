---
title: "Line names on the child are added to those from the parent"
image: example2-7.png
image_alt: image of layout with a subgrid.
desc: If you define line names on the parent, these are passed into the subgrid and can be used to position things.
layout: example
active: examples
group: parent
order: 1
number: 1
code: example2-7.html
spec: https://drafts.csswg.org/css-grid-2/#subgrids
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="MRQMJY" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/MRQMJY">Grid by Example 2.7: lines on child are added to those defined on the parent.</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

If you define line names on the subgrid, these are added to any lines defined on the parent.

Line names are added to a subgrid, by listing the names after the subgrid keyword, for example `grid-template-columns: subgrid [sub-1] [sub-2] [sub-3] [sub-4];`.