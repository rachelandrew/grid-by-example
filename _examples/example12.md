---
title: "No clearing required"
image: example12.png
image_alt: Image of display after placing items
desc: Items sit in their own rows on the grid therefore we do not need to clear them as with floats.
layout: example
active: examples
group: child
order: 12
number: 12
code: example12.html 
spec: https://drafts.csswg.org/css-grid/#placement
example-codepen-embed: '<p data-height="351" data-theme-id="0" data-slug-hash="GJVgOV" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/GJVgOV/">Grid by Example 12: No clearing required</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

If I add a footer to my markup and define a `grid-area` and place it on the grid using `grid-template-areas` you can see that it sits below the content column. There is no clearing required as this footer has a track on the grid, it can't hop up into another track.

This example also shows the issue described in example 5, by default the background on the sidebar should stretch to full height, in a similar way to the defaults for Flexbox.
