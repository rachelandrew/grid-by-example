---
pattern-name: "As many as fit some tall"
order: 5
title: "As many as will fit with some items spanning two rows."
main-image: pattern5.png
pattern-desc: "This layout has a centre panel into which we want to display as many boxes as will fit before moving to the next row. Some items span two rows."
layout: pattern
pattern-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="RVjLZo" data-default-tab="result" data-user="rachelandrew" data-embed-version="2" data-pen-title="Header, as many as will fit, some tall, footer" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/RVjLZo/">Header, as many as will fit, some tall, footer</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'

---

This is example shows a two column pattern, with header and footer. The centre panel contains a number of boxes. We want to have as many in each row as will fit, with the boxes lining up as rows and columns. 

Some of our items span two rows.

This technique means we don't need to use media queries, as with a flex layout grid does the job for us.

The fallback uses Flexbox, we need to constrain the items in the flex layout in order to get the appearance of two-dimensional alignment. We don't get the tall items in flex layout.

I am using `minmax` in two places in my grid definition. To create the column listing of tracks that are a minimum of 200 pixels and a maximum of 1fr. Also, when defining rows I want my rows to be a minimum of 100 pixels tall but expand to the height of whatever is put into them. So the rows have a max of auto.

## Techniques used to create this layout

- [Minmax](/video/series-minmax/)
- [auto-fill and auto-fit](/video/series-auto-fill-auto-fit/)
- [Feature Queries](/video/feature-queries/)

Tips and techniques for fallback layouts can be found in my [Grid Fallbacks and Overrides Cheatsheet](https://rachelandrew.co.uk/css/cheatsheets/box-alignment).