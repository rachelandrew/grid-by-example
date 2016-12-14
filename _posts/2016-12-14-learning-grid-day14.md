---
layout: post
title:  "Day 14: Magic Lines and Areas"
date:   2016-12-14 13:15:00
categories: learn
---

[Yesterday](/learn/2016/12/13/learning-grid-day13/) I shared a video that demonstrated how to use `grid-template-areas` to create a layout and on [Day 9](/learn/2016/12/09/learning-grid-day9/) we took a look at named lines. Today we look at an interesting feature of using either of these methods.

If you create an area on your grid using `grid-template-areas` you get named lines with `-start` and `-end` added to the name of the area. You can then use these lines for positioning.

So create an area called `main`, you get column lines to the start and end of it `main-start` and `main-end`, and also row lines named `main-start` and `main-end`.

This works in reverse too. So if you create row and column named lines that end in `-start` and `-end` you'll get a named area of their main name. Magic!

If that sounds confusing, take a look at this video from my [video tutorial series](/video).

<div class="embed-container">
<iframe src="https://www.youtube.com/embed/HnOnJ4dn6bQ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>



### What is this?

I'm sharing some tips to help you learn Grid Layout from the 1st of December until Christmas. Edited highlights from the things on this site and that I've posted elsewhere. **Follow along!**

If you find this style of learning useful then you might enjoy my online [CSS Layout Workshop](https://thecssworkshop.com/). I'm also available for in-house training, workshops and consultancy or [conference speaking](https://rachelandrew.co.uk/speaking).
