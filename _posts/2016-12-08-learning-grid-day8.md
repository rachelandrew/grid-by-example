---
layout: post
title:  "Day 8: Line-based positioning"
date:   2016-12-08 13:34:26
categories: learn
---

We have so far been creating grid tracks, and auto-placing items onto those tracks however you are likely to want to set the positions of things around your grid. Grid gives us a few options when doing this. Today we're going to look at positioning using line numbers, as no matter what else you do you will always have numbered lines to use.

The lines on your grid are created by way of defining tracks on the grid. If we create a grid using the following track listings we end up with grid lines 1 through 4 for columns and the same for rows as we are defining three column and three row tracks.

~~~
.grid {
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px auto 100px;
}
~~~

Grid column line 1 is on the left if we are using a ltr language such as English, and on the right if using a rtl language, and you can get the final line of the grid, both for rows and columns by using -1. So in this case grid column line 4 is the same as grid column line -1.

Tracks ceated in the implicit grid, due to content being placed outside of our declared grid will also create lines.

To position items on our grid by line number we can use the long-hand. So the following would positon an item after column line 2, stretching to line 4 and after row line 3. If we only span one track, we don't need to specify the end line as one track is the default.

~~~
.item {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
} 
~~~

We could also use a shorthand, again if we only span one track we can omit the end line after the forward slash.

~~~
.item {
  grid-column: 2 / 4;
  grid-row: 3;
} 
~~~

You can even collapse these down to one line using the `grid-area` property. The order of the values is row-start/column-start/row-end/column-end.

~~~
.item {
    grid-area: 3 / 2 / 4 / 4;
}
~~~

## Examples on this site

- [Longhand positioning](/examples/example2/)
- [Shorthand](/examples/example3/)
- [Using Grid Area](/examples/example4/)

See line-based positioning in this video from my [video tutorial](/video).

<div class="embed-container">
<iframe src="https://www.youtube.com/embed/t8GRS-Z3YVI?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>



### What is this?

I'm sharing some tips to help you learn Grid Layout from the 1st of December until Christmas. Edited highlights from the things on this site and that I've posted elsewhere. **Follow along!**

If you find this style of learning useful then you might enjoy my online [CSS Layout Workshop](https://thecssworkshop.com/). I'm also available for in-house training, workshops and consultancy or [conference speaking](https://rachelandrew.co.uk/speaking).