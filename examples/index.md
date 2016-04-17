---
layout: default
title: Grid by Example - Usage examples of CSS Grid Layout
---
# Grid by Example

The following examples include an image of how the example should look in a supporting browser, code sample and link to the worked example. I have also embedded a CodePen of each example so you can fork and play with these. You will need a supporting browser to view these examples. Current supporting browsers and how to enable support in those browsers can be found on the [Igalia site](http://igalia.github.io/css-grid-layout/enable.html).

You can also take a look at a page of more complete [layout examples](/examples/page-layout).


## The examples

1. [Defining a Grid](#example1)
2. [Line-based placement](#example2)
3. [Line-based placement shorthand with grid-row and grid-column](#example3)
4. [Line-based placement shorthand with grid-area](#example4)
5. [Line-based placement spanning cells](#example5)
6. [Line-based placement span keyword](#example6)
7. [Line-based placement named lines](#example7)
8. [Line-based placement named lines with span](#example8)
9. [The repeat keyword](#example9)
10. [Explicit and Implicit Grid](#example10)
11. [Defining Grid Areas](#example11)
12. [No Clearing Required](#example12)
13. [Redefining Grid Areas with Media Queries](#example13)
14. [Source independence](#example14)
15. [Layering items](#example15)
16. [Grid area as a new positioning context](#example16)
17. [Grid Auto-placement](#example17)
18. [Grid Auto-placement by Column](#example18)
19. [Grid Auto-placement with a positioned element](#example19)
20. [The auto-fill keyword in repeating track definitions](#example20)
21. [Nested Grid](#example21)
22. [Implicit Named Grid Lines](#example22)
23. [Grid auto-placement and the order property](#example23)
24. [Box alignment align-items](#example24)
25. [Box alignment justify-items](#example25)
26. [Box alignment align-self](#example26)
27. [Box alignment justify-self](#example27)
28. [minmax in auto-fill repeating tracks](#example28)
29. [minmax() and spanning columns and rows](#example29)
30. [The auto-fill keyword with named grid lines](#example30)

{::nomarkdown}
<div class="example" id="example1">
<header><h3>Example 1: Defining a Grid</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example1.png" alt="image of display after defining a grid.">
<figcaption>Defining a grid</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

To define a Grid use `display:grid` or `display:inline-grid` on the parent element. You can then create a grid using the `grid-template-columns` and `grid-template-rows` properties.

I am using the `grid-gap` property to create a gap between my columns and rows of `10px`. This property is a shorthand for `grid-column-gap` and `grid-row-gap` so you can set these values individually.

All direct children of the parent now become grid items and the auto-placement algorithm lays them out, one in each grid cell. Creating extra rows as needed.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="BNXyQa" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/BNXyQa/'>Grid by Example 1: Defining a Grid</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</figure>
</div>

<footer>
<a href="/examples/code/example1.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example2">
<header><h3>Example 2: Line-based placement</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example2.png" alt="image of display after placing items">
<figcaption>Line-based placement</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

Using the Grid I defined above I am positioning the elements in my markup (six divs with a class of box and classes from a to f) using line-based placement properties.
This example is more verbose than it needs to be as a demonstration of the properties. In reality if an item will only span one grid track you may omit the `-end` value.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="RPXNod" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/RPXNod/'>Grid by Example 2: Line-based placement</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example2.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example3">
<header><h3>Example 3: Line-based placement shorthand - grid-row and grid-column</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example3.png" alt="image of display after placing items.">
<figcaption>Placement shorthand</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

We can achieve the same result as above using a shorthand syntax declaring the start and end values at once. Values are separated with a `/` and again it would be valid to omit the `/` and the end value as we are spanning only one track.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="VLoYPV" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/VLoYPV/'>Grid by Example 3: Line-based placement shorthand</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example3.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example4">
<header><h3>Example 4: Line-based placement shorthand - grid-area</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example4.png" alt="image of display after placing items.">
<figcaption>Placement shorthand with grid-area</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

We can achieve the same result as above declaring all for values with the `grid-area` property. Again values are separated with a `/`. The order of the values is row-start/column-start/row-end/column-end.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="pJMveN" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/pJMveN/'>Grid by Example 4: Line-based placement shorthand grid-area</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example4.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example5">
<header><h3>Example 5: Line-based placement spanning cells</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example5.png" alt="image of display spanning cells.">
<figcaption>Spanning cells</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

To create Grid Areas that are larger than individual cells we specify an end line that is more than one cell away.

Here I am using the `grid-column` and `grid-row` shorthand and have omitted the end value for any items that span one row or column track.

{::nomarkdown}
</div>
<figure class="codefig"><p data-height="351" data-theme-id="0" data-slug-hash="XbvJMz" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/XbvJMz/'>Grid by Example 5: Line-based placement spanning cells</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</figure>
</div>

<footer>
<a href="/examples/code/example5.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example6">
<header><h3>Example 6: Line-based placement span keyword</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example6.png" alt="image of display after placing items.">
<figcaption>The span keyword</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

We can also span using the span keyword. The below CSS creates the same layout as the one in example 5. I am using the span keyword rather than targeting the Grid Line by number. I am also using the defaults for row and column end, which is to span 1.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="oXKgwa" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/oXKgwa/'>Grid by Example 6: Line-based placement span keyword</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example6.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example1">
<header><h3>Example 7: Line-based placement named lines</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example7.png" alt="image of display after placing items.">
<figcaption>Named lines</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

We can name lines rather than targeting them by number. Name the line inside brackets. In the code below you can see that I name the very first column line `col1-start` then comes the 100 pixel first column track. Having named the lines you can use the names, rather than numbers.


{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="yNmyoM" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/yNmyoM/'>Grid by Example 7: Line-based placement named lines</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example7.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example8">
<header><h3>Example 8: Line-based placement named lines with span</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example8.png" alt="image of display after placing items.">
<figcaption>Named lines with span</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

You can give lines the same name and then use the span keyword to target lines of a certain name. This is really useful if you want to create a complex grid with multiple content tracks and gutters.

I have made a slightly larger grid here and have named all of the Grid Lines before the content tracks with `col` and all of the lines before the row tracks with `row`. I can then start at a certain column line by using `col <line number>` and span by saying `span <number of lines>`.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="oXKgeQ" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/oXKgeQ/'>Grid by Example 8: Line-based placement named lines with span</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example8.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example9">
<header><h3>Example 9: The repeat keyword</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example9.png" alt="image of display after placing items.">
<figcaption>The repeat keyword</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

In example 8 we repeated the same definitions to create our grid with named lines. We could save some typing by using the `repeat` keyword. The values for the repeat keyword are the number of times you want the expression to repeat and then the expression.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="yNmyPb" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/yNmyPb/'>Grid by Example 9: The repeat keyword</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example9.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example10">
<header><h3>Example 10: Explicit and Implicit Grid</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example10.png" alt="image of display after placing items.">
<figcaption>Explicit and Implicit Grid</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

When we use `grid-template-columns` and `grid-template-rows` we create an <strong>Explicit Grid</strong>. However if we try and place an item outside of that grid the browser will create an <strong>Implicit Grid</strong> line or lines in order to hold that item.

In the code below I have put `e` between grid column lines 4 and 5, these are not described with grid-template-rows, so an implicit grid line 5 is created.

By default the implicit grid tracks created by the implicit lines will be auto sized. However, you can size the tracks with the `grid-auto-columns` and `grid-auto-rows` properties. I have sized my auto tracks as 100px to match the rest of the column tracks in my grid.


{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="JdgoOB" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/JdgoOB/'>Grid by Example 10: Explicit and Implicit Grid</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example10.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example11">
<header><h3>Example 11: Defining Grid Areas</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example11.png" alt="image of display after placing items.">
<figcaption>Defining Grid Areas</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

We can created named areas on the grid to put content into. To do this we first assign elements in our markup to a Grid Area, using the `grid-area` property.

We can then use the `grid-template-areas` property to describe where on the Grid these elements should sit.

Repeating the name of an area indicates that the area spans that grid track. Using a `.` or a sequence like `....` indicates an empty track. Such as the very first cell on this grid.


{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="oXKgoQ" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/oXKgoQ/'>Grid by Example 11: Defining Grid Areas</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example11.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example12">
<header><h3>Example 12: No Clearing Required</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example12.png" alt="image of display after placing items.">
<figcaption>Grid requires no clearing</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

If I add a footer to my markup and define a `grid-area` and place it on the grid using `grid-template-areas` you can see that it sits below the content column. There is no clearing required as this footer has a track on the grid, it can't hop up into another track.

This example also shows the issue described in <a href="#example5">example 5</a>, by default the background on the sidebar should stretch to full height, in a similar way to the defaults for Flexbox.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="GJVgOV" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/GJVgOV/'>Grid by Example 12: No clearing required</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example12.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example13">
<header><h3>Example 13: Redefining Grid Areas with Media Queries</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example13.png" alt="image of display at a narrow breakpoint.">
<img src="/examples/images/example13-2.png" alt="at a wider breakpoint">
<figcaption>Using media queries</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

We can easily redefine the grid and the position of the elements on it using Media Queries. I define the Grid Areas as before outside of the Media Queries and then redefine the Grid Tracks and the position of the elements onto that grid inside my Media Queries.


{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="waVBpK" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/waVBpK/'>Grid by Example 13: Redefining grid areas with media queries</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example13.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example14">
<header><h3>Example 14: Source Independence</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example14.png" alt="image of display after placing items.">
<figcaption>Source independence</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

A key thing in Grid is that the order of items in the source does not matter, as long as they are children of the element that has been declared as a grid. In this example I have some content and then some ads which I have placed right at the bottom of the source. I can use Grid to visually display these in between sections of content.

I could then use Media Queries to display them elsewhere in a wider layout.

**Important! For accessibility purposes the logical order should be set in the source. Do not use Grid properties to adjust the logical order of your document.**

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="WvVbMG" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/WvVbMG/'>Grid by Example 14: Source independence</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example14.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example15">
<header><h3>Example 15: Layering Items</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example15.png" alt="image of display after layering items.">
<figcaption>Layering items</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

You can layer items in the Grid, using z-index to control the order that they stack. In this example I have boxes arranged on a grid, my box `F` is last in the source order and positioned on the Grid so it partly overlaps box `D`.

Without any z-index property it will display on top of box D. However I can add a z-index and control the position which works as you would expect if you have used the z-index property with positioned elements.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="KpOwQW" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/KpOwQW/'>Grid by Example 15: Layering items</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example15.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example16">
<header><h3>Example 16: Grid Area as a new positioning context</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example16.png" alt="image of display after placing items.">
<figcaption>Positioning items inside a grid area</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

You can absolutely position items inside an area of the Grid. In this example I have used `position: relative` on my `.content` Grid Area. I can then position the four arrow images using absolute positioning inside that area, and it works as you would expect.


{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="doxPda" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/doxPda/'>Grid by Example 16: Grid Area as a new positioning context</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example16.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example17">
<header><h3>Example 17: Grid Auto-placement</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example17.png" alt="image of display after placing items.">
<figcaption>Demonstration of auto-placement</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

If you declare a Grid on an element and do not position the child elements then the [auto-placememt algorithm](http://dev.w3.org/csswg/css-grid/#auto-placement) dictates what the browser should do about those unplaced grid items.

In this example I have a set of 12 boxes. I've used nth-child to switch the backgroud color on the even boxes to make this example clear. I have declared a Grid and created rows and columns but not positioned any of the children. As you can see the boxes all lay out on the Grid despite having no placement assigned to them.


{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="PqMwRw" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/PqMwRw/'>Grid by Example 17: Grid Auto-placement</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example17.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example1">
<header><h3>Example 18: Grid Auto Flow - Column</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example18.png" alt="image of display.">
<figcaption>Using auto-flow to add items to columns</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

The default behavior of Grid Auto Flow is to layout the elements by row, working along the row until there are no more slots then moving on to the next row. If a row is not declared then an implicit grid track will be created to hold the items.

You can change this behavior by using the `grid-auto-flow` property. The default value is `row` but you can also specify `column`. The elements will then be laid out column by column, adding new columns if needed.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="QbewmG" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/QbewmG/'>Grid by Example 18: Grid auto-placement column</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example18.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example19">
<header><h3>Example 19: Grid Auto-placement with a positioned element</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example19.png" alt="image of display after placing items.">
<figcaption>Positioned element in an auto-placed grid</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

If a child element has been placed then the auto-placement algorithm will place that first and then work out what to do with any child elements that have not been placed.

In this example I have placed `box2` on the grid and also made it span 3 grid lines. The rest of the boxes continue to lay out as before.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="eNqmKy" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/eNqmKy/'>Grid by Example 19: Auto-placement with a positioned element</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>
<footer>
<a href="/examples/code/example19.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example20">
<header><h3>Example 20: The auto-fill keyword in repeating track definitions</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example20.png" alt="image of display after placing items.">
<figcaption>Using auto-fill</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

In <a href="#example9">example 9</a> we stated that we wanted our row track list to repeat three times. The spec also defines `auto-fill` and `auto-fit` keywords.

In this example I am creating a grid that contains as many 100 pixel column tracks as will fit into the container (in the example this is the viewport).

_This example currently works in Firefox Nightly (12 April 2016)._

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="mJNyjb" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/mJNyjb/'>Grid by Example 20: the auto keyword in repeating track definitions</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example20.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example21">
<header><h3>Example 21: Nested Grid</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example21.png" alt="image of display after placing items.">
<figcaption>Nesting a grid inside a grid area</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

A simple example of nesting one grid inside another. Any Grid Area can become a grid itself, by setting `display:grid` and then defining the rows and columns.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="NqQPBR" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/NqQPBR/'>Grid by Example 21: a nested Grid</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example21.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example22">
<header><h3>Example 22: Implicit Named Grid Lines</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example22.png" alt="image of display after placing items.">
<figcaption>Implicit named lines</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

When using Named Areas implicit named lines are created by appending '-start' and '-end' to the named area you have defined. They can be used in the same way as lines you have explicitly named.


{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="268" data-theme-id="0" data-slug-hash="LVwEBM" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/LVwEBM/'>Grid by Example 22: Implicit named grid lines</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example22.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example23">
<header><h3>Example 23: Auto-placement and the order property</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example23.png" alt="image of display after placing items.">
<figcaption>Using order</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

Grid supports the order property also found in Flexbox. If you are explicitly positioning Grid Items then order will affect painting order, and therefore the order in which items stack up where no z-index has been applied.

If using auto-placement then the order property will affect how items are placed on the grid. In this example all boxes have been give an order of 1, so they continue to be positioned in DOM order. However box1 has an order of 3 and box2 an order of 2. These boxes have a higher order value so are positioned *after* all of the boxes with an order value of 1.


{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="268" data-theme-id="0" data-slug-hash="OVKPoy" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/OVKPoy/'>Grid by Example 23: Auto-placement and the order property</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example23.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example24">
<header><h3>Example 24: Box alignment align-items</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example24.png" alt="image of display after placing items.">
<figcaption>align-items</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

I have used a grid background image to show the grid in this example. I've defined 4 equal sized grid areas on the left which cover a square area inside three row and column lines.

I'm using the align-items property with a value of center. This centres the content of all of the grid items.


{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="268" data-theme-id="0" data-slug-hash="WQNqKy" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/WQNqKy/'>Grid by Example 24: align-items</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example24.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example25">
<header><h3>Example 25: Box alignment justify-items</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example25.png" alt="image of display after placing items.">
<figcaption>justify-items</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

I have used a grid background image to show the grid in this example. I've defined 4 equal sized grid areas on the left which cover a square area inside three row and column lines.

I'm using the justify-items property with a value of center. This centres the content of all of the grid items.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="268" data-theme-id="0" data-slug-hash="NGWZLM" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/NGWZLM/'>Grid by Example 25: justify-items</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example25.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example26">
<header><h3>Example 26: Box alignment align-self</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example26.png" alt="image of display after placing items.">
<figcaption>align-self</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

I have used a grid background image to show the grid in this example. I've defined 4 equal sized grid areas on the left which cover a square area inside three row and column lines.

I'm using the align-self property on individual grid items to demonstrate the different values.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="268" data-theme-id="0" data-slug-hash="KdKLLX" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/KdKLLX/'>Grid by Example 26: align-self</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

</figure>
</div>

<footer>
<a href="/examples/code/example26.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example27">
<header><h3>Example 27: Box alignment justify-self</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example27.png" alt="image of display after placing items.">
<figcaption>justify-self</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

I have used a grid background image to show the grid in this example. I've defined 4 equal sized grid areas on the left which cover a square area inside three row and column lines.

I'm using the justify-self property on individual grid items to demonstrate the different values.

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="268" data-theme-id="0" data-slug-hash="dYyBeM" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/dYyBeM/'>Grid by Example 27: justify-self</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

</figure>
</div>

<footer>
<a href="/examples/code/example27.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example28">
<header><h3>Example 28: minmax() in auto-fill repeating tracks</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example28.png" alt="image of display after placing items.">
<figcaption>Using minmax() with auto-fill</figcaption>
</figure>
<div class="description">
{:/nomarkdown}


In this example I am creating a grid that contains as many 200 pixel column tracks as will fit into the container with the remaining space shared equally between the columns. In the `minmax()` function the first value is the minimum size I want my tracks to be, the second is the maximum. By using `1fr` as the maximum value the space is equally distributed.

_This example currently works in Firefox Nightly (12 April 2016)._

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="GZQYOL" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/GZQYOL/">Grid by Example 28: minmax() in auto-fill repeating tracks</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

</figure>
</div>

<footer>
<a href="/examples/code/example28.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example29">
<header><h3>Example 29: minmax() and spanning columns and rows</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example29.png" alt="image of display after placing items.">
<figcaption>Using minmax and spans</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

In this example I am creating a grid that contains as many 200 pixel column tracks as will fit into the container with the remaining space shared equally between the columns. In the `minmax()` function the first value is the minimum size I want my tracks to be, the second is the maximum. By using `1fr` as the maximum value the space is equally distributed.

I am then spanning columns and rows. As the items are auto-placed on our flexible grid they will move around the grid but maintain their spanned size.

_This example currently works in Firefox Nightly (12 April 2016)._

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="400" data-theme-id="0" data-slug-hash="GZQYQa" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/GZQYQa/">Grid by Example 29: minmax() and spanning columns and rows</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

</figure>
</div>

<footer>
<a href="/examples/code/example29.html">View example</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example" id="example30">
<header><h3>Example 30: The auto-fill keyword with named grid lines</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/example20.png" alt="image of display after placing items.">
<figcaption>Using auto-fill and named lines</figcaption>
</figure>
<div class="description">
{:/nomarkdown}

In this example I am creating a grid that contains as many 100 pixel column tracks as will fit into the container (in the example this is the viewport) and naming them `col`. I can then position the grid items using named lines and spans.

_This example currently works in Firefox Nightly (12 April 2016)._

{::nomarkdown}
</div>
<figure class="codefig">
<p data-height="351" data-theme-id="0" data-slug-hash="XdZydB" data-default-tab="result" data-user="rachelandrew" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/XdZydB/">Grid by Example 30: auto-fill with named lines</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

</figure>
</div>

<footer>
<a href="/examples/code/example30.html">View example</a>
</footer>
</div>
{:/nomarkdown}
