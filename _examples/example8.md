---
title: "Line-based placement named lines with spans"
image: example8.png
image_alt: Image of display after placing items
desc: You can give lines the same name and then use the span keyword to target lines of a certain name.
layout: example
active: examples
group: child
order: 8
number: 8
code: example8.html 
spec: https://drafts.csswg.org/css-grid/#common-uses-named-lines
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="oXKgeQ" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/oXKgeQ/">Grid by Example 8: Line-based placement named lines with span</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

You can give lines the same name and then use the span keyword to target lines of a certain name. This is really useful if you want to create a complex grid with multiple content tracks and gutters.

I have made a slightly larger grid here and have named all of the Grid Lines before the content tracks with `col` and all of the lines before the row tracks with `row`. I can then start at a certain column line by using `col <line number>` and span by saying `span <number of lines>`.
