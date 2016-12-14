---
layout: post
title:  "Day 9: Naming lines"
date:   2016-12-09 12:00:26
categories: learn
---

Yesterday we looked at how to position grid items using line numbers. You always have line numbers to use in this way, additionally when defining your grid you can opt to name some or all of the lines and then use those names when positioning items.

Name your lines in square brackets before and after the track size definition. Below I am naming lines `main-start` and `main-end` both for columns and rows.

~~~
.grid {
  grid-template-columns: 1fr [main-start] 2fr [main-end] 1fr [side-end];
  grid-template-rows: 100px [main-start] auto [main-end] 100px;
}
~~~

I can then use the name instead of the line number to place the item. The following rules would position the item with a class of `item` in the same place on the grid.

With numbers:

~~~
.item {
    grid-column: 2 / 4;
    grid-row: 2;
}
~~~


With names:

~~~
.item {
    grid-column: main-start / side-end;
    grid-row: main-start;
}
~~~

## Examples on this site

- [Positioning using named lines](/examples/example7/)

See me use named lines in this video from my [video tutorial](/video).

<div class="embed-container">
<iframe src="https://www.youtube.com/embed/-r2sNQxBG4A?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>



### What is this?

I'm sharing some tips to help you learn Grid Layout from the 1st of December until Christmas. Edited highlights from the things on this site and that I've posted elsewhere. **Follow along!**

If you find this style of learning useful then you might enjoy my online [CSS Layout Workshop](https://thecssworkshop.com/). I'm also available for in-house training, workshops and consultancy or [conference speaking](https://rachelandrew.co.uk/speaking).