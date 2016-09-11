---
title: "Multiple tracks in a track-list with auto-fill and minmax()"
image: example35.png
image_alt: Image of display after placing items
desc: Using minmax() to create tracks that grow proportionally with multiple track listings.
layout: example
active: examples
group: child
order: 35
number: 35
code: example35.html
spec: https://drafts.csswg.org/css-grid/#repeat-syntax
example-codepen-embed: '<p data-height="265" data-theme-id="0" data-slug-hash="QExBRB" data-default-tab="result" data-user="rachelandrew" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/QExBRB/">Grid by Example 35: Repeating multiple track lists with minmax()</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

The repeat syntax can take a track-list rather than a single value, this means you can repeat a more complex track-list. You can use `minmax()` in this track list, here I am making the max of my larger tracks `2fr`, and the smaller ones `1fr`. This means that the larger tracks will have more of any leftover space assigned.

_Currently requires Chrome Canary_
