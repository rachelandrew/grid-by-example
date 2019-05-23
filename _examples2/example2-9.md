---
title: "Margin is honored on the subgrid"
image: example2-9.png
image_alt: image of layout with a subgrid with margins making the first and last tracks smaller.
desc: Subgrids can have their own margin which will be deducted from the first and/or last tracks.
layout: example
active: examples
group: parent
order: 1
number: 1
code: example2-9.html
spec: https://drafts.csswg.org/css-grid-2/#subgrids
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="YMBBqq" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/YMBBqq">Grid by Example 2.8: padding is honored on the subgrid.</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

If you add margins to the subgrid then this is honored. In our example I have added 50px of margin to the subgrid. The first and last column tracks therefore each become smaller as they have the margin eating into their space. Everything still lines up with the parent tracks however.