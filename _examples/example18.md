---
title: "Grid auto-flow column"
image: example18.png
image_alt: Image of display after placing items
desc: Items are placed in rows by default but you can specify to layout by column.
layout: example
active: examples
group: parent
order: 18
number: 18
code: example18.html 
spec: https://drafts.csswg.org/css-grid/#propdef-grid-auto-flow
example-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="QbewmG" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/QbewmG/">Grid by Example 18: Grid auto-placement column</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'
---

The default behavior of Grid Auto Flow is to layout the elements by row, working along the row until there are no more slots then moving on to the next row. If a row is not declared then an implicit grid track will be created to hold the items.

You can change this behavior by using the `grid-auto-flow` property. The default value is `row` but you can also specify `column`. The elements will then be laid out column by column, adding new columns if needed.
