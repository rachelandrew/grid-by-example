---
layout: post
title:  "Day 5: introducing minmax()"
date:   2016-12-05 14:57:26
categories: learn
---

Flexbox works out flexible sizing based on the flex items, with grid we take a different approach and create a grid then place items into it. This doesn't mean that we have to create very rigid grid structures however. The minmax() function is one way that we can create grids that flex according to some parameters.

You can use minmax() when setting up column and rows tracks, the following CSS would create a grid of three column tracks that are a minimum of 200 pixels wide and a maximum of 400 pixels. The grid has two row tracks which are at least 300 pixels tall but have a maximum set of auto so they will expand to fit their content.

~~~
.grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 400px));
    grid-template-rows: repeat(2,minmax(300px, auto));
}
~~~

You can also use minmax() is the value of grid-auto-rows and grid-auto-columns, these properties are used to set the size of tracks created in the implicit grid. The grid outside of the columns and rows you have defined.

New rows created in the below grid will be at least 300 pixels tall but have a maximum size of auto.

~~~
.grid {
    display: grid;
    grid-auto-rows: minmax(300px, auto);
}
~~~

In this video from my [video series](/video), I demonstrate the basics of minmax().

<div class="embed-container">
<iframe src="https://www.youtube.com/embed/boNNYrUd-w0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>



### What is this?

I'm sharing some tips to help you learn Grid Layout from the 1st of December until Christmas. Edited highlights from the things on this site and that I've posted elsewhere. **Follow along!**

If you find this style of learning useful then you might enjoy my online [CSS Layout Workshop](https://thecssworkshop.com/). I'm also available for in-house training, workshops and consultancy or [conference speaking](https://rachelandrew.co.uk/speaking).