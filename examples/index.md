---
layout: default
title: Grid by Example - Usage examples of CSS Grid Layout
---
# Grid by Example

The following examples include an image of how the example should look in a supporting browser, code sample and link to the worked example. I have also linked to a CodePen of each example so you can fork and play with these. You will need a supporting browser to view these examples. Current supporting browsers and how to enable support in those browsers can be found on the [Igalia site](http://igalia.github.io/css-grid-layout/enable.html).

Where I know there are issues in displaying an example I have noted that. This changes quickly so drop me a line if you spot something that looks different to you.

I will add to this list as I create tidy versions of some of the other tests I have.

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
20. [The auto keyword in repeating track definitions](#example20)
21. [Nested Grid](#example21)
22. [Implicit Named Grid Lines](#example22)
23. [Grid auto-placement and the order property](#example23)
24. [Box alignment align-items](#example24)
25. [Box alignment justify-items](#example25)
26. [Box alignment align-self](#example26)
27. [Box alignment justify-self](#example27)

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example1">
<div class="panel-heading">
<h3 class="panel-title">Example 1: Defining a Grid</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example1.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>To define a Grid use `display:grid` or `display:inline-grid` on the parent element. You can then create a grid using the `grid-template-columns` and `grid-template-rows` properties.</p>

<p>Here I am creating a grid with 3 100 pixel columns, separated by 10px gutter columns. I then create three rows, one with auto height, a 10 pixel gutter and another with auto height.</p>

<p>As shown in the screenshot, this will cause the browser to place the children of the grid element using the grid auto placement rules, which places items into the 10 pixel gutter columns.</p>
</div>



</div>
<p data-height="351" data-theme-id="0" data-slug-hash="BNXyQa" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/BNXyQa/'>Grid by Example 1: Defining a Grid</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example1.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example2">
<div class="panel-heading">
<h3 class="panel-title">Example 2: Line-based placement</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example2.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>Using the Grid I defined above I am positioning the elements in my markup (six divs with a class of box and classes from a to f) using line-based placement properties.</p>


</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="RPXNod" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/RPXNod/'>Grid by Example 2: Line-based placement</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example2.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example3">
<div class="panel-heading">
<h3 class="panel-title">Example 3: Line-based placement shorthand - grid-row and grid-column</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example3.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>We can achieve the same result as above using a shorthand syntax declaring the start and end values at once. Values are separated with a `/`.</p>


</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="VLoYPV" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/VLoYPV/'>Grid by Example 3: Line-based placement shorthand</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example3.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example4">
<div class="panel-heading">
<h3 class="panel-title">Example 4: Line-based placement shorthand - grid-area</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example4.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>We can achieve the same result as above declaring all for values with the `grid-area` property. Again values are separated with a `/`. The order of the values is row-start/column-start/row-end/column-end.</p>

</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="pJMveN" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/pJMveN/'>Grid by Example 4: Line-based placement shorthand grid-area</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>


<div class="panel-footer">
<a href="/examples/code/example4.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example5">
<div class="panel-heading">
<h3 class="panel-title">Example 5: Line-based placement spanning cells</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example5.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>To create Grid Areas that are larger than individual cells we specify an end line that is more than one cell away.</p>




</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="XbvJMz" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/XbvJMz/'>Grid by Example 5: Line-based placement spanning cells</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example5.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example6">
<div class="panel-heading">
<h3 class="panel-title">Example 6: Line-based placement span keyword</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example5.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>We can also span using the span keyword. The below CSS creates the same layout as the one in example 5. I am using the span keyword rather than targetting the Grid Line by number. I am also using the defaults for row and column end, which is to span 1.</p>


</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="oXKgwa" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/oXKgwa/'>Grid by Example 6: Line-based placement span keyword</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example6.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example7">
<div class="panel-heading">
<h3 class="panel-title">Example 7: Line-based placement named lines</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example7.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>We can name lines rather than targetting them by number. Name the line inside brackets. In the code below you can see that I name the very first column line `col1-start` then comes the 100 pixel first column track, then I name the line after it as `col1-end` before giving the sizing value for my first gutter track. Having named the lines you can use the names, rather than numbers.</p>

<p><strong><a href="/#news">This example will change based on the 15th May Editor's Draft</a> to use square brackets around the line names.</strong></p>


</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="yNmyoM" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/yNmyoM/'>Grid by Example 7: Line-based placement named lines</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example7.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example8">
<div class="panel-heading">
<h3 class="panel-title">Example 8: Line-based placement named lines with span</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example8.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>You can give lines the same name and then use the span keyword to target lines of a certain name. This is really useful if you want to create a complex grid with multiple content tracks and gutters.</p>

<p>I have made a slightly larger grid here and have named all of the Grid Lines before the content tracks with `col` and all of the lines before the gutter tracks with `gutter`. I can then start at a certain column line by using `col <line number>` and span by saying `span <number of lines of that name>`.</p>

<p><strong><a href="/#news">This example will change based on the 15th May Editor's Draft</a> to use square brackets around the line names.</strong></p>


</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="oXKgeQ" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/oXKgeQ/'>Grid by Example 8: Line-based placement named lines with span</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example8.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example9">
<div class="panel-heading">
<h3 class="panel-title">Example 9: The repeat keyword</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example9.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>In example 8 we repeated the same definitions to create our grid with named lines. We could save some typing by using the `repeat` keyword. The values for the repeat keyword are the number of times you want the expression to repeat and then the expression.</p>

<p><strong><a href="/#news">This example will change based on the 15th May Editor's Draft</a> to use square brackets around the line names.</strong></p>


</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="yNmyPb" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/yNmyPb/'>Grid by Example 9: The repeat keyword</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example9.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example10">
<div class="panel-heading">
<h3 class="panel-title">Example 10: Explicit and Implicit Grid</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example10.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>When we use `grid-template-columns` and `grid-template-rows` we create an <strong>Explicit Grid</strong>. However if we try and place an item outside of that grid the browser will create an <strong>Implicit Grid</strong> line or lines in order to hold that item.</p>

<p>If the browser needs to create several lines - for example because your explicit grid has 6 lines and you place something in line 12 - the empty tracks will collapse to 0.</p>

<p>In the code below I have put `e` between grid row lines 4 and 5, these are not described with grid-template-rows, so an implicit grid line 5 is created.</p>




</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="JdgoOB" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/JdgoOB/'>Grid by Example 10: Explicit and Implicit Grid</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example10.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example11">
<div class="panel-heading">
<h3 class="panel-title">Example 11: Defining Grid Areas</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example11.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>We can created named areas on the grid to put content into. To do this we first assign elements in our merkup to a Grid Area, using the `grid-area` property.</p>

<p>We can then use the `grid-template-areas` property to describe where on the Grid these elements should sit.</p>

<p>Repeating the name of an area indicates that the area spans that grid track. Using a `.` indicates an empty track. Such as the column between my sidebar and content.</p>

<p><strong><a href="/#news">This example will change based on the 15th May Editor's Draft</a> it is now possible to use a sequence of `.` to indicate an empty cell.</strong></p>



</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="oXKgoQ" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/oXKgoQ/'>Grid by Example 11: Defining Grid Areas</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example11.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example12">
<div class="panel-heading">
<h3 class="panel-title">Example 12: No Clearing Required</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example12.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>If I add a footer to my markup and define a `grid-area` and place it on the grid using `grid-template-areas` you can see that it sits below the content column. There is no clearing required as this footer has a track on the grid, it can't hop up into another track.</p>

<p>This example also shows the issue described in <a href="#example5">example 5</a>, by default the background on the sidebar should stretch to full height, in a similar way to the defaults for Flexbox.</p>



</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="GJVgOV" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/GJVgOV/'>Grid by Example 12: No clearing required</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example12.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example13">
<div class="panel-heading">
<h3 class="panel-title">Example 13: Redefining Grid Areas with Media Queries</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example13.png" class="img-rounded" />
<img src="/examples/images/example13-2.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>We can easily redefine the grid and the position of the elements on it using Media Queries. I define the Grid Areas as before outside of the Media Queries and then redefine the Grid Tracks and the position of the elements onto that grid inside my Media Queries. Due to a <a href="https://code.google.com/p/chromium/issues/detail?id=427481">logged bug</a> I needed to declare a min and max width. You should be able to override the Media Query without setting a max-width however.</p>



</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="waVBpK" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/waVBpK/'>Grid by Example 13: Redefining grid areas with media queries</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example13.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example14">
<div class="panel-heading">
<h3 class="panel-title">Example 14: Source Independence</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example14.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>A key thing in Grid is that the order of items in the source does not matter, as long as they are children of the element that has been declared as a grid. In this example I have some content and then some ads which I have placed right at the bottom of the source. I can use Grid to visually display these in between sections of content.</p>
<p>I could then use Media Queries to display them elsewhere in a wider layout.</p>



</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="WvVbMG" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/WvVbMG/'>Grid by Example 14: Source independence</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example14.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example15">
<div class="panel-heading">
<h3 class="panel-title">Example 15: Layering Items</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example15.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>You can layer items in the Grid, using z-index to control the order that they stack. In this example I have boxes arranged on a grid, my box `F` is last in the source order and positioned on the Grid so it partly overlaps box `D`.</p>

<p>Without any z-index property it will display on top of box D. However I can add a z-index and control the position which works as you would expect if you have used the z-index property with positioned elements.</p>


</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="KpOwQW" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/KpOwQW/'>Grid by Example 15: Layering items</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example15.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example16">
<div class="panel-heading">
<h3 class="panel-title">Example 16: Grid Area as a new positioning context</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example16.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>You can absolutely position items inside an area of the Grid. In this example I have used `position: relative` on my `.content` Grid Area. I can then position the four arrow images using absolute positioning inside that area, and it works as you would expect.</p>


</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="doxPda" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/doxPda/'>Grid by Example 16: Grid Area as a new positioning context</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example16.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example17">
<div class="panel-heading">
<h3 class="panel-title">Example 17: Grid Auto-placement</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example17.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>If you declare a Grid on an element and do not position the child elements then the [auto-placememt algorithm](http://dev.w3.org/csswg/css-grid/#auto-placement) dictates what the browser should do about those unplaced grid items.</p>

<p>In this example I have a set of 12 boxes. I've used nth-child to switch the backgroud color on the even boxes to make this example clear. I have declared a Grid and created rows and columns but not positioned any of the children. As you can see the boxes all lay out on the Grid despite having no placement assigned to them.</p>


</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="PqMwRw" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/PqMwRw/'>Grid by Example 17: Grid Auto-placement</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example17.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example18">
<div class="panel-heading">
<h3 class="panel-title">Example 18: Grid Auto Flow - Column</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example18.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>The default behavior of Grid Auto Flow is to layout the elements by row, working along the row until there ar no more slots then moving on to the next row. If a row is not declared then an implicit grid track will be created to hold the items.</p>

<p>You can change this behavior by using the `grid-auto-flow` property. The default value is `row` but you can also specify `column`. The elements will then be laid out column by column, adding new columns if needed.</p>

</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="QbewmG" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/QbewmG/'>Grid by Example 18: Grid auto-placement column</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example18.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example19">
<div class="panel-heading">
<h3 class="panel-title">Example 19: Grid Auto-placement with a positioned element</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example19.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>If a child element has been placed then the auto-placement algorithm will place that first and then work out what to do with any child elements that have not been placed.</p>
<p>In this example I have placed `box2` on the grid and also made it span 3 grid lines. The rest of the boxes continue to lay out as before.</p>

</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="eNqmKy" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/eNqmKy/'>Grid by Example 19: Auto-placement with a positioned element</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example19.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example20">
<div class="panel-heading">
<h3 class="panel-title">Example 20: The auto keyword in repeating track definitions</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example9.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>In <a href="#example9">example 9</a> we stated that we wanted our row track list to repeat three times, giving a content row then a 10 pixel gutter. In the [20th December Editor's Draft](http://dev.w3.org/csswg/css-grid/#repeat-notation) of the spec an `auto` keyword was introduced. Meaning that we can state we want to repeat the track list as many times as is required by the content.</p>
<p>The `auto` keyword is not currently implemented in a browser</p>



</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="mJNyjb" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/mJNyjb/'>Grid by Example 20: the auto keyword in repeating track definitions</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example20.html">View example (currently this is unimplemented in Chrome)</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example21">
<div class="panel-heading">
<h3 class="panel-title">Example 21: Nested Grid</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example21.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>A simple example of nesting one grid inside another. Any Grid Area can become a grid itself, by setting display:grid and then defining the rows and columns.</p>



</div>
</div>
<p data-height="351" data-theme-id="0" data-slug-hash="NqQPBR" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/NqQPBR/'>Grid by Example 21: a nested Grid</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example21.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example22">
<div class="panel-heading">
<h3 class="panel-title">Example 22: Implicit Named Grid Lines</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example22.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>When using Named Areas implicit named lines are created by appending '-start' and '-end' to the named area you have defined. They can be used in the same way as lines you have explicitly named.</p>



</div>
</div>
<p data-height="268" data-theme-id="0" data-slug-hash="LVwEBM" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/LVwEBM/'>Grid by Example 22: Implicit named grid lines</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example22.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example23">
<div class="panel-heading">
<h3 class="panel-title">Example 23: Auto-placement and the order property</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example23.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>Grid supports the order property also found in Flexbox. If you are explicitly positioning Grid Items then order will affect painting order, and therefore the order in which items stack up where no z-index has been applied.</p>

<p>If using auto-placement then the order property will affect how items are placed on the grid. In this example all boxes have been give an order of 1, so they continue to be positioned in DOM order. However box1 has an order of 3 and box2 an order of 2. These boxes have a higher order value so are positioned <em>after</em> all of the boxes with an order value of 1.</p>



</div>
</div>
<p data-height="268" data-theme-id="0" data-slug-hash="OVKPoy" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/OVKPoy/'>Grid by Example 23: Auto-placement and the order property</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example23.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example24">
<div class="panel-heading">
<h3 class="panel-title">Example 24: Box alignment align-items</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example24.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>I have used a grid background image to show the grid in this example. I've defined 4 equal sized grid areas on the left which cover a square area inside three row and column lines.</p>

<p>I'm using the align-items property with a value of center. This centres the content of all of the grid items.</p>



</div>
</div>
<p data-height="268" data-theme-id="0" data-slug-hash="WQNqKy" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/WQNqKy/'>Grid by Example 24: align-items</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example24.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example25">
<div class="panel-heading">
<h3 class="panel-title">Example 25: Box alignment justify-items</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example25.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>I have used a grid background image to show the grid in this example. I've defined 4 equal sized grid areas on the left which cover a square area inside three row and column lines.</p>

<p>I'm using the justify-items property with a value of center. This centres the content of all of the grid items.</p>



</div>
</div>
<p data-height="268" data-theme-id="0" data-slug-hash="NGWZLM" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/NGWZLM/'>Grid by Example 25: justify-items</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example25.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example26">
<div class="panel-heading">
<h3 class="panel-title">Example 26: Box alignment align-self</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example26.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>I have used a grid background image to show the grid in this example. I've defined 4 equal sized grid areas on the left which cover a square area inside three row and column lines.</p>

<p>I'm using the align-self property on individual grid items to demonstrate the different values.</p>



</div>
</div>
<p data-height="268" data-theme-id="0" data-slug-hash="KdKLLX" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/KdKLLX/'>Grid by Example 26: align-self</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<div class="panel-footer">
<a href="/examples/code/example26.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example27">
<div class="panel-heading">
<h3 class="panel-title">Example 27: Box alignment justify-self</h3>
</div>
<div class="panel-body">
<div class="col-sm-6">
<img src="/examples/images/example27.png" class="img-rounded" />
</div>

<div class="col-sm-6">

<p>I have used a grid background image to show the grid in this example. I've defined 4 equal sized grid areas on the left which cover a square area inside three row and column lines.</p>

<p>I'm using the justify-self property on individual grid items to demonstrate the different values.</p>



</div>
</div>
<p data-height="268" data-theme-id="0" data-slug-hash="dYyBeM" data-default-tab="result" data-user="rachelandrew" class='codepen'>See the Pen <a href='http://codepen.io/rachelandrew/pen/dYyBeM/'>Grid by Example 27: justify-self</a> by rachelandrew (<a href='http://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
<div class="panel-footer">
<a href="/examples/code/example27.html">View example</a>
</div>
</div>