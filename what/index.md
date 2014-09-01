---
layout: default
title: What is CSS Grid Layout?
---

# What is CSS Grid Layout?

Grid gives us some new terminology along with additional CSS Properties and values. In this section I'll explain with some basic examples the terminology of Grid Layout.

## Basic Concepts <small>reasons why I love the Grid</small>

Grid Layout gives us a method of creating structures that are not unlike using "tables for layout". However, being described in CSS and not in HTML they allow us to create layouts that can be redefined using Media Queries and adapt to different contexts.

Grid Layout lets us properly separate the order of elements in the source from their visual presentation. As a designer this means you are free to change the location of page elements as is best for your layout at different breakpoints and not need to compromise a sensible structred document for your responsive design.

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

## Grid Terminology

There are a few bits of terminology that are introduced by the Grid Layout specification. I've explained them here as they will make the examples easier to follow.

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Grid Lines</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
    	<img src="/examples/images/concepts-lines.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
    	<p><strong>Grid Lines</strong> are the lines that make up the grid. These can be horizontal or vertical. We can refer to them by number, or by name.</p>

    	<p>The highlighted line in this image is column line 2.</p>
    </div>
  </div>

</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Grid Track</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
    	<img src="/examples/images/concepts-track.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
    	<p>A <strong>Grid Track</strong> is the space between two Grid Lines, either horizontal or vertical.</p>

    	<p>The highlighted Grid Track in this image is between row lines 2 and 3.</p>
    </div>
  </div>

</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Grid Cell</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
    	<img src="/examples/images/concepts-cell.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
    	<p>A <strong>Grid Cell</strong> is the space between 4 Grid Lines. So it is the smallest unit on our grid that is available for us to place an item into. Conceptually it is just like a table cell.</p>

    	<p>The highlighted Grid Cell in this image is between row lines 2 and 3 and column lines 2 and 3.</p>
    </div>
  </div>

</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Grid Area</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
    	<img src="/examples/images/concepts-area.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
    	<p>A <strong>Grid Area</strong> is any area on the Grid bound by four grid lines. It may contain a number of Grid Cells.</p>

    	<p>The highlighted Grid Area in this image is between row lines 1 and 3 and column lines 2 and 4.</p>
    </div>
  </div>

</div>





		