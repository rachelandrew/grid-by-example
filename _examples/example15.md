---
title: "Layering items"
image: example15.png
image_alt: Image of display after stacking items
desc: You can layer items on the Grid, using z-index to control the order that they stack
layout: example
active: examples
group: child
order: 15
number: 15
code: example15.html 
spec: https://drafts.csswg.org/css-grid/#z-order
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="KpOwQW" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/KpOwQW/">Grid by Example 15: Layering items</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

You can layer items in the Grid, using z-index to control the order that they stack. In this example I have boxes arranged on a grid, my box `F` is last in the source order and positioned on the Grid so it partly overlaps box `D`.

Without any z-index property it will display on top of box D. However I can add a z-index and control the position which works as you would expect if you have used the z-index property with positioned elements.
