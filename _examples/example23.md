---
title: "Using Order"
image: example23.png
image_alt: Image of display after placing items
desc: Grid supports the order property also found in Flexbox.
layout: example
active: examples
group: child
order: 23
number: 23
code: example23.html 
spec: https://drafts.csswg.org/css-grid/#order-property
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="OVKPoy" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/OVKPoy/">Grid by Example 23: Auto-placement and the order property</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

Grid supports the order property also found in Flexbox. If you are explicitly positioning Grid Items then order will affect painting order, and therefore the order in which items stack up where no z-index has been applied.

If using auto-placement then the order property will affect how items are placed on the grid. In this example all boxes have been give an order of 1, so they continue to be positioned in DOM order. However box1 has an order of 3 and box2 an order of 2. These boxes have a higher order value so are positioned *after* all of the boxes with an order value of 1.
