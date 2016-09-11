---
title: "Explicit and Implicit Grid"
image: example10.png
image_alt: Image of display after placing items
desc: The explicit grid is defined by `grid-template-rows` and `grid-template-columns`.
layout: example
active: examples
group: parent
order: 10
number: 10
code: example10.html
spec: https://drafts.csswg.org/css-grid/#explicit-grids
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="yNmyPb" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/yNmyPb/">Grid by Example 9: The repeat keyword</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

When we use `grid-template-columns` and `grid-template-rows` we create an **Explicit Grid**. However if we try and place an item outside of that grid the browser will create an **Implicit Grid** line or lines in order to hold that item.

In the code below I have put `e` between grid column lines 4 and 5, these are not described with `grid-template-rows`, so an implicit grid line 5 is created.

By default the implicit grid tracks created by the implicit lines will be auto sized. However, you can size the tracks with the `grid-auto-columns` and `grid-auto-rows` properties. I have sized my auto tracks as 100px to match the rest of the column tracks in my grid.
