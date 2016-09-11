---
title: "Source Independence"
image: example14.png
image_alt: Image of display after placing items
desc: Placement of items on the grid can be separate to their order in the source
layout: example
active: examples
group: child
order: 14
number: 14
code: example14.html
spec: https://drafts.csswg.org/css-grid/#order-accessibility
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="WvVbMG" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/WvVbMG/">Grid by Example 14: Source independence</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

A key thing in Grid is that the order of items in the source does not matter, as long as they are children of the element that has been declared as a grid. In this example I have some content and then some ads which I have placed right at the bottom of the source. I can use Grid to visually display these in between sections of content.

I could then use Media Queries to display them elsewhere in a wider layout.

**Important! For accessibility purposes the logical order should be set in the source. Do not use Grid properties to adjust the logical order of your document.**
