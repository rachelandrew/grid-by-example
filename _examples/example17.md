---
title: "Grid auto-placement"
image: example17.png
image_alt: Image of display after placing items
desc: Grid will position grid items automatically on a grid created on the parent.
layout: example
active: examples
group: parent
order: 17
number: 17
code: example17.html 
spec: https://drafts.csswg.org/css-grid/#common-uses-auto-placement
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="PqMwRw" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/PqMwRw/">Grid by Example 17: Grid Auto-placement</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

If you declare a Grid on an element and do not position the child elements then the [auto-placement algorithm](https://drafts.csswg.org/css-grid/#common-uses-auto-placement) dictates what the browser should do about those unplaced grid items.

In this example I have a set of 12 boxes. I've used nth-child to switch the background color on the even boxes to make this example clear. I have declared a Grid and created rows and columns but not positioned any of the children. As you can see the boxes all lay out on the Grid despite having no placement assigned to them.
