---
title: "Grid auto-placement mixed with placed items"
image: example19.png
image_alt: Image of display after placing items
desc: You can mix auto-placed items with those you give a position to
layout: example
active: examples
group: child
order: 19
number: 19
code: example19.html
spec: https://drafts.csswg.org/css-grid/#propdef-grid-auto-flow
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="eNqmKy" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/eNqmKy/">Grid by Example 19: Auto-placement with a positioned element</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

If a child element has been placed then the auto-placement algorithm will place that first and then work out what to do with any child elements that have not been placed.

In this example I have placed `box2` on the grid and also made it span 3 grid lines. The rest of the boxes continue to lay out as before.
