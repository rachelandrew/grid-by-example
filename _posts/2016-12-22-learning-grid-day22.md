---
layout: post
title:  "Day 22: The grid-template shorthand"
date:   2016-12-22 05:30:00
categories: learn
---

The properties used to define the explicit grid are `grid-template-columns`, `grid-template-rows`, and `grid-template-areas`. These can be combined into the `grid-template` shorthand.

You can use this shorthand to define rows and columns. The row track-listing coming before a forward slash, columns afterwards.

~~~
.grid {
  grid-template: auto 300px / 1fr 1fr 1fr 1fr;
}
~~~

You can also use it to define areas, in this case the values before the forward slash detail the areas plus the row track sizing, with the columns coming after the slash.

~~~
.grid {
  grid-template: "head head head head" auto
	"side1 main main side2" 300px / 1fr 1fr 1fr 1fr;
}
~~~

Take a look at this in my video.

<div class="embed-container">
<iframe src="https://www.youtube.com/embed/aqLifuKpfHU?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>

### What is this?

I'm sharing some tips to help you learn Grid Layout from the 1st of December until Christmas. Edited highlights from the things on this site and that I've posted elsewhere. **Follow along!**

If you find this style of learning useful then you might enjoy my online [CSS Layout Workshop](https://thecssworkshop.com/). I'm also available for in-house training, workshops and consultancy or [conference speaking](https://rachelandrew.co.uk/speaking).
