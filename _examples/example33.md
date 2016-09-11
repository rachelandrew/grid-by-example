---
title: "Aligning the grid with space-around and space-between"
image: example33.png
image_alt: Image of display after placing items
desc: Using space-around and space-between may make grid areas and gutters larger than anticipated.
layout: example
active: examples
group: parent
order: 33
number: 33
code: example33.html 
spec: https://drafts.csswg.org/css-grid/#grid-align
example-codepen-embed: '<p data-height="265" data-theme-id="0" data-slug-hash="kXvWVN" data-default-tab="result" data-user="rachelandrew" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/kXvWVN/">Grid by Example 33: fixed sizes can get extra space due to alignment properties</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

In this example I am creating a four column track grid, the tracks have absolute sizes and in total are smaller than the area of the grid container. This time I have used:

- `align-content: space-around`
- `justify-content: space-between`

This means that extra space is distributed around the tracks and our desired 10 pixel gutter gets more space. However so do any areas which span more than one track as where they cross a gutter they gain this extra space too.
