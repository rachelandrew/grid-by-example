---
layout: post
title:  "Day 16: Subgrids and display: contents"
date:   2016-12-16 16:37:00
categories: learn
---

The CSS Grid Layout Level 1 specification contains a value of display, which would enable indirect children to use the grid defined on a parent. This `subgrid` value has not been implemented by any browser as yet.

There is however another way of causing indirect children to participate in a grid (or flex) layout. Using `display: contents` on an element will cause that element to stop generating boxes, meaning the the children can then be flex or grid items. If that sounds strange seeing it in action in a video from my [video tutorial series](/video) may help!

<div class="embed-container">
<iframe src="https://www.youtube.com/embed/xfk6r-jndRI?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>



### What is this?

I'm sharing some tips to help you learn Grid Layout from the 1st of December until Christmas. Edited highlights from the things on this site and that I've posted elsewhere. **Follow along!**

If you find this style of learning useful then you might enjoy my online [CSS Layout Workshop](https://thecssworkshop.com/). I'm also available for in-house training, workshops and consultancy or [conference speaking](https://rachelandrew.co.uk/speaking).
