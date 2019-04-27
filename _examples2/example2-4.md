---
title: "The subgrid can override the gap on the parent"
image: example2-4.png
image_alt: image of layout with parent grid having gaps between areas, subgrid with no row gaps.
desc: The subgrid inherits the gap of the parent but it can be changed in the subgrid.
layout: example
active: examples
group: parent
order: 1
number: 1
code: example2-4.html
spec: https://drafts.csswg.org/css-grid-2/#subgrids
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="jRdXYm" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/jRdXYm">Grid by Example 2.4: row-gap set to 0 on the subgrid</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

The subgrid inherits the gap set on the parent grid by default. You can give a subgridded item different `gap`, `row-gap` or `column-gap` properties however. In this example the parent has a 10px gap set, the subgrid has `row-gap` set to 0.