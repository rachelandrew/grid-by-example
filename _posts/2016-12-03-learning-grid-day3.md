---
layout: post
title:  "Day 3: Repeat Notation"
date:   2016-12-03 15:20:26
categories: learn
---

When defining your grid, the value of `grid-template-columns` and `grid-template-rows` is a *track listing*. A list of the tracks sizes that make up your grid.

If you are creating a grid with a large number of identical tracks or with a set of track sizes that repeat in a pattern, you can use repeat to save writing them all out longhand.

To create a grid with 12 equal width columns we could write out:

~~~
.grid {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
~~~

Or, we could use repeat notation and express it like so:

~~~
.grid {
    grid-template-columns: repeat(12, 1fr);
}
~~~

You can repeat a pattern, the following would create a grid with 10 tracks, alternating between 100 pixels and 200 pixels wide.

~~~
.grid {
    grid-template-columns: repeat(5, 100px 200px);
}
~~~

You can mix repeat with non-repeating sections. The following would create a grid with a 1fr column track, 4 200 pixel column tracks then a final 1fr column track.

~~~
.grid {
    grid-template-columns: 1fr repeat(4, 200px) 1fr;
}
~~~

In this video from my [video series](/video), see repeat notation in action.

<div class="embed-container">
<iframe src="https://www.youtube.com/embed/XW-l6ysDZyM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>



### What is this?

I'm sharing some tips to help you learn Grid Layout from the 1st of December until Christmas. Edited highlights from the things on this site and that I've posted elsewhere. **Follow along!**

If you find this style of learning useful then you might enjoy my online [CSS Layout Workshop](https://thecssworkshop.com/). I'm also available for in-house training, workshops and consultancy or [conference speaking](https://rachelandrew.co.uk/speaking).