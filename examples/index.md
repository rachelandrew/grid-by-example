---
layout: default
title: Grid by Example - Usage examples of CSS Grid Layout
---
# Grid by Example

The following examples include a screenshot (taken in Chrome), code sample and link to the worked example. You will need a supporting browser to view these examples. Current supporting browsers and how to enable support in those browsers can be found on the [Igalia site](http://igalia.github.io/css-grid-layout/enable.html).

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
17. [Grid Auto Flow](#example17)
18. [Grid Auto Flow Column](#example18)
19. [Grid Auto Flow with a positioned element](#example19)

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
~~~
// HTML
<div class="wrapper">
  <div class="box a">A</div>
  <div class="box b">B</div>
  <div class="box c">C</div>
  <div class="box d">D</div>
  <div class="box e">E</div>
  <div class="box f">F</div>
</div>

// CSS
.wrapper {
  display: grid;
  grid-template-columns: 100px 10px 100px 10px 100px;
  grid-template-rows: auto 10px auto;
}
~~~
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
~~~
.a { 
  grid-column-start: 1;
  grid-column-end: 2; 
  grid-row-start: 1;
  grid-row-end: 2;
}
.b {
  grid-column-start: 3;
  grid-column-end: 4; 
  grid-row-start: 1;
  grid-row-end: 2; 
}
.c { 
  grid-column-start: 5;
  grid-column-end: 6; 
  grid-row-start: 1;
  grid-row-end: 2;
}
.d { 
  grid-column-start: 1;
  grid-column-end: 2; 
  grid-row-start: 3;
  grid-row-end: 4;
}
.e { 
  grid-column-start: 3;
  grid-column-end: 4; 
  grid-row-start: 3;
  grid-row-end: 4;
}
.f { 
  grid-column-start: 5;
  grid-column-end: 6; 
  grid-row-start: 3;
  grid-row-end: 4;
}
~~~
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
~~~
.a { 
  grid-column: 1 / 2; 
  grid-row: 1 / 2;
}
.b { 
  grid-column: 3 / 4; 
  grid-row: 1 / 2;
}
.c { 
  grid-column: 5 / 6; 
  grid-row: 1 / 2;
}
.d { 
  grid-column: 1 / 2; 
  grid-row: 3 / 4;
}
.e { 
  grid-column: 3 / 4; 
  grid-row: 3 / 4;
}
.f { 
  grid-column: 5 / 6; 
  grid-row: 3 / 4;
}
~~~
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
~~~
.a { 
  grid-area: 1 / 1 / 2 / 2;
}
.b { 
  grid-area: 1 / 3 / 2 / 4;
}
.c { 
  grid-area: 1 / 5 / 2 / 6;
}
.d { 
  grid-area: 3 / 1 / 4 / 2;
}
.e { 
  grid-area: 3 / 3 / 4 / 4;
}
.f { 
  grid-area: 3 / 5 / 4 / 6;
}
~~~

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

<p>In this example I have set box `.b` to span all three rows of the grid however visually this is not the case. From <a href="http://lists.w3.org/Archives/Public/www-style/2014Aug/0364.html">discussion on the www-style list</a> I understand that by default the box should stretch to the full height even if the content does not force it to.</p>


</div>
</div>
~~~
.a { 
  grid-column: 1 / 4; 
  grid-row: 1 / 2;
}
.b { 
  grid-column: 5 / 6; 
  grid-row: 1 / 4;
}
.c { 
  grid-column: 1 / 2; 
  grid-row: 3 / 4;
}
.d { 
  grid-column: 3 / 4; 
  grid-row: 3 / 4;
}
~~~
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
~~~
.a { 
  grid-column: 1 / span 3; 
  grid-row: 1 ;
}
.b { 
  grid-column: 5 ; 
  grid-row: 1 / span 3;
}
.c { 
  grid-column: 1 ; 
  grid-row: 3 ;
}
.d { 
  grid-column: 3 ; 
  grid-row: 3 ;
}
~~~
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


</div>
</div>
~~~
.wrapper {
  display: grid;
  grid-template-columns: (col1-start) 100px (col1-end) 10px (col2-start) 100px (col2-end) 10px (col3-start) 100px (col3-end);
  grid-template-rows: (row1-start) auto (row1-end) 10px (row2-start) auto (row2-end);
}

.a { 
  grid-column: col1-start / col2-end; 
  grid-row: row1-start ;
}
.b { 
  grid-column: col3-start ; 
  grid-row: row1-start / row2-end;
}
.c { 
  grid-column: col1-start; 
  grid-row: row2-start ;
}
.d { 
  grid-column: col2-start ; 
  grid-row: row2-start ;
}
~~~
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


</div>
</div>
~~~
.wrapper {
  display: grid;
  grid-template-columns: (col) 100px (gutter) 10px (col) 100px (gutter) 10px (col) 100px (gutter) 10px (col) 100px (gutter) 10px ;
  grid-template-rows: (row) auto (gutter) 10px (row) auto (gutter) 10px  (row) auto (gutter) 10px ;
}

.a { 
  grid-column: col / span gutter 2; 
  grid-row: row ;
}
.b { 
  grid-column: col 3 / span gutter 2 ; 
  grid-row: row ;
}
.c { 
  grid-column: col ; 
  grid-row: row 2 ;
}
.d { 
  grid-column: col 2 / span gutter 3 ; 
  grid-row: row 2 ;
}
.e {
  grid-column: col / span gutter 4;
  grid-row: row 3;
}
~~~
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




</div>
</div>
~~~
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, (col) 100px (gutter) 10px) ;
  grid-template-rows: repeat(3, (row) auto (gutter) 10px );
}
~~~
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
~~~
.wrapper {
  display: grid;
  grid-template-columns: 100px 10px 100px 10px 100px;
  grid-template-rows: auto 10px auto;
}
.a { 
  grid-column: 1 / 4; 
  grid-row: 1 / 2;
}
.b { 
  grid-column: 5 / 6; 
  grid-row: 1 / 4;
}
.c { 
  grid-column: 1 / 2; 
  grid-row: 3 / 4;
}
.d { 
  grid-column: 3 / 4; 
  grid-row: 3 / 4;
}
.e {
  grid-column: 1 / 4;
  grid-row: 4 / 5;
}
~~~
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



</div>
</div>
~~~
// HTML
<div class="wrapper">
  <div class="box header">Header</div>
  <div class="box sidebar">Sidebar</div>
  <div class="box content">Content</div>
</div>

// CSS

.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
.header {
  grid-area: header;
}
.wrapper {
  display: grid;
  grid-template-columns: 100px 10px 100px 10px 100px;
  grid-template-rows: auto;
  grid-template-areas: "header header header header header" 
	"sidebar . content content content";
}
~~~
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
~~~
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
.header {
  grid-area: header;
}
.footer {
  grid-area: footer;
}
.wrapper {
  display: grid;
  grid-template-columns: 100px 10px 100px 10px 100px;
  grid-template-rows: auto;
  grid-template-areas: "header header header header header" 
    "sidebar . content content content"
    "footer footer footer footer footer";
}
~~~
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
~~~
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
.header {
  grid-area: header;
}
.footer {
  grid-area: footer;
}
@media only screen and (min-width: 400px) and (max-width: 540px)  {
  .wrapper {
    display: grid;
	grid-template-columns: 20% 5% auto;
	grid-template-rows: auto;
	grid-template-areas: "header header header" 
		"sidebar . content"
		"sidebar2 sidebar2 sidebar2"
		"footer footer footer";
  }
}
@media only screen and (min-width: 540px)   {
  .wrapper {
    display: grid;
    grid-template-columns: 100px 20px auto 20px 100px;
    grid-template-rows: auto;
    grid-template-areas: "header header header header header" 
      "sidebar . content . sidebar2"
      "footer footer footer footer footer";
  }
}
~~~
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
~~~
// HTML
<div class="wrapper">
  <div class="section1"> ... </div>
  <div class="section2"> ... </div>	
  <div class="section3"> ... </div>
  <div class="box ad1">Advert!</div>
  <div class="box ad2">Another lovely advert!</div>
</div>

// CSS
.wrapper {
  width: 400px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto ;
}
.section1 {
  grid-row: 1 / 2;
}
.section2 {
  grid-row: 3 / 4;
}
.section3 {
  grid-row: 5 / 6;
}
.ad1 {
  grid-row: 2 / 3;
}
.ad2 {
  grid-row: 4 / 5;
}
~~~
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
~~~
// HTML
<div class="wrapper">
  <div class="box a">A</div>
  <div class="box b">B</div>
  <div class="box c">C</div>
  <div class="box d">D</div>
  <div class="box e">E</div>
  <div class="box f">F</div>
</div>

// CSS
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, (col) 100px (gutter) 10px) ;
  grid-template-rows: repeat(3, (row) auto (gutter) 10px );
}
.box {
    background-color: #444;
    z-index:10;
}
.a { 
  grid-column: col / span gutter 2; 
  grid-row: row ;
}
.b { 
  grid-column: col 3 / span gutter 3 ; 
  grid-row: row ;
}
.c { 
  grid-column: col ; 
  grid-row: row 2 ;
}
.d { 
  grid-column: col 2 / span gutter 3 ; 
  grid-row: row 2 ;
}
.e {
  grid-column: col / span gutter 5;
  grid-row: row 3;
}
.f {
  grid-column: col 3 / span gutter 3;
  grid-row: row 2  ;
  background-color: rgba(49,121,207, 0.5);
  z-index: 20;
}
~~~
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
~~~
// HTML
<div class="wrapper">
  <div class="box header">Header</div>
  <div class="box sidebar">Sidebar</div>
  <div class="box content">Content
    <br /> The four arrows are inline images inside the content area.
    <img src="arrow-top-left.png" alt="top left" class="topleft" />
    <img src="arrow-top-right.png" alt="top right" class="topright" />
    <img src="arrow-bottom-left.png" alt="bottom left" class="bottomleft" />
    <img src="arrow-bottom-right.png" alt="bottom right" class="bottomright" /></div>
  <div class="box footer">Footer</div>
</div>

// CSS
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
  position: relative;
}
.header {
  grid-area: header;
}
.footer {
  grid-area: footer;
}
.wrapper {
  display: grid;
  grid-template-columns: 200px 10px 200px 10px 200px;
  grid-template-rows: auto;
  grid-template-areas: "header header header header header" 
    "sidebar . content content content"
    "footer footer footer footer footer";
}
.topleft {
  position: absolute;
  top: 0;
  left: 0;
}
.topright {
  position: absolute;
  top: 0;
  right: 0;
}
.bottomleft {
  position: absolute;
  bottom: 0;
  left: 0;
}
.bottomright {
  position: absolute;
  bottom: 0;
  right: 0;
}
~~~
<div class="panel-footer">
<a href="/examples/code/example16.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example17">
<div class="panel-heading">
<h3 class="panel-title">Example 17: Grid Auto Flow</h3>
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
~~~
// HTML
<div class="wrapper">
  <div class="box box1">1</div>
  <div class="box box2">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
  <div class="box">7</div>
  <div class="box">8</div>
  <div class="box">9</div>
  <div class="box">10</div>
  <div class="box">11</div>
  <div class="box">12</div>
</div>

// CSS
.box {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
}
.box:nth-child(even){
  background-color: #ccc;
  color: #000;
}
.wrapper {
  width: 600px;
  display: grid;
  grid-template-columns: repeat(6, 100px);
  grid-template-rows: auto ;
}
~~~
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
~~~
.wrapper {
  width: 600px;
  display: grid;
  grid-template-columns: repeat(6, 100px);
  grid-template-rows: 100px 100px 100px ;
  grid-auto-flow: column;
}
~~~
<div class="panel-footer">
<a href="/examples/code/example18.html">View example</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="panel panel-default" id="example19">
<div class="panel-heading">
<h3 class="panel-title">Example 19: Grid Auto Flow with a positioned element</h3>
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
~~~
.wrapper {
  width: 600px;
  display: grid;
  grid-template-columns: repeat(6, 100px);
  grid-template-rows: auto ;
}
.box2 {
  grid-column: 3 / 6;
  grid-row: 2 / 3;
  outline: 2px solid red;
}
~~~
<div class="panel-footer">
<a href="/examples/code/example19.html">View example</a>
</div>
</div>