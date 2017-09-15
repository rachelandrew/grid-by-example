---
layout: default
title: What is CSS Grid Layout?
---

# What is CSS Grid Layout?

[CSS Grid Layout](https://www.w3.org/TR/css-grid-1/) is a CSS layout method designed for the two-dimensional layout of items on a webpage or application. I have been working with the specification over the last five years. On this site is a growing collection of example code, video tutorials and other resources to help you learn the specification.

## Status of the spec and browser support

Chrome, Firefox and Safari shipped grid support in March 2017. IE10, 11 and Edge 15 and lower support an older, prefixed spec. In October 2017 Edge will update to the new specification to match other implementations. See [Can I Use](http://caniuse.com/#feat=css-grid), and also the [browsers page](/browsers) on this site which details where to log bugs should you find any.

## Basic Concepts

Grid Layout gives us a method of creating grid structures that are described in CSS and not in HTML. It helps us to create layouts that can be redefined using Media Queries and adapt to different contexts.

Grid Layout lets us properly separate the order of elements in the source from their visual presentation. As a designer this means you are free to change the location of page elements as is best for your layout at different breakpoints and not need to compromise a sensible structured document for your responsive design.

It's very easy to make grid adapt to the available space. With each element having an area on the grid, things are not in risk of overlapping due to text size change, more content than expected or small viewports.

Unlike with an HTML table-based layout, you can layer items on the grid. So one item can overlap another if required.

## Grid or Flexbox?

One of the most common questions I get when talking about Grid is about whether this is a competing specification to Flexbox, and when should you use one or the other (assuming that there was browser support equally for both). I usually defer to this [email from Tab Atkins](http://lists.w3.org/Archives/Public/www-style/2013May/0114.html) on the www-style list.

> Flexbox is for one-dimensional layouts - anything that needs to be
laid out in a straight line (or in a broken line, which would be a
single straight line if they were joined back together).
> Grid is for two-dimensional layouts.  It can be used as a low-powered
flexbox substitute (we're trying to make sure that a single-column/row
grid acts very similar to a flexbox), but that's not using its full
power.

If you only need to define a layout as a row or a column, and you would like the flexibility to respond to the content of that row then you probably want flexbox. If you want to define a grid and fit content into it in two dimensions - you need grid.

## Grid Terminology

There are a few bits of terminology that are introduced by the Grid Layout specification. I've explained them here as they will make the examples easier to follow.

{::nomarkdown}
<h3>Grid Lines</h3>
<figure class="imagefig">
<img src="/examples/images/concepts-lines.png" alt="image of grid lines.">
<figcaption>The highlighted line in this image is column line 2.</figcaption>
</figure>
{:/nomarkdown}

**Grid Lines** are the lines that make up the grid. These can be horizontal or vertical. We can refer to them by number, or by name.

{::nomarkdown}
<h3>Grid Tracks</h3>
<figure class="imagefig">
<img src="/examples/images/concepts-track.png" alt="image of grid tracks.">
<figcaption>The highlighted Grid Track in this image is between row lines 2 and 3.</figcaption>
</figure>
{:/nomarkdown}

A **Grid Track** is the space between two Grid Lines, either horizontal or vertical.


{::nomarkdown}
<h3>Grid Cell</h3>
<figure class="imagefig">
<img src="/examples/images/concepts-cell.png" alt="image of grid cells.">
<figcaption>The highlighted Grid Cell in this image is between row lines 2 and 3 and column lines 2 and 3.</figcaption>
</figure>
{:/nomarkdown}

A **Grid Cell** is the space between 4 Grid Lines. So it is the smallest unit on our grid that is available for us to place an item into. Conceptually it is just like a table cell.

{::nomarkdown}
<h3>Grid Area</h3>
<figure class="imagefig">
<img src="/examples/images/concepts-area.png" alt="image of a grid area">
<figcaption>The highlighted Grid Area in this image is between row lines 1 and 3 and column lines 2 and 4.</figcaption>
</figure>
{:/nomarkdown}

A **Grid Area** is any area on the Grid bound by four grid lines. It may contain a number of Grid Cells.

