---
title: "auto-fill vs. auto-fit"
image: example37.png
image_alt: image of display after defining a grid
desc: An example to demonstrate the difference between the auto-fill and auto-fit keywords in repeat notation
layout: example
active: examples
group: parent
order: 37
number: 37
code: example37.html
spec: https://drafts.csswg.org/css-grid/#auto-repeat
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="dpYzkq" data-default-tab="result" data-user="rachelandrew" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/dpYzkq/">Grid by Example 37: auto-fill vs. auto-fit</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

Demonstrating the difference between the auto-fill and auto-fit keywords.  [Spec here](https://drafts.csswg.org/css-grid/#auto-repeat) and you'll need Chrome 55 or Firefox with Grid enabled to see the difference.

In the first example we use the auto-fill keyword for repeat. We get as many tracks with a minimum of 200 pixels and maximum of 1fr as will fit in the container.

In the second example we use the auto-fit keyword for repeat. We get as many tracks with a minimum of 200 pixels and maximum of 1fr as will fit in the container.

After auto-placement any empty tracks are collapsed to 0. So our items can expand to take up the remaining space.
