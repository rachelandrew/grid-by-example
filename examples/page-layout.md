---
layout: default
title: Page Layout Examples
---

## Page Layout Examples

The following examples are some page layout examples and experiments. I have included with them information about the elements of CSS Grid Layout used.

1. [A simple grid](#layout1)
2. [A simple responsive grid](#layout2)
3. [A responsive layout using named Grid Areas](#layout3)
4. [Two column responsive layout with footer](#layout9)
5. [Two column responsive layout with footer using Named Grid Lines](#layout10)
6. [Two column responsive layout with footer using Named Grid Areas](#layout11)
7. [16 column flexible grid](#layout4)
8. [Placing elements into Grid Areas on the 16 column grid](#layout5)
9. [Skeleton Grid experiments](#layout12)
10. [AG Grid Example](#layout6)
11. [Simple Grid + Flexbox example](#layout7)
12. [Auto Placement Example](#layout8)

<div class="panel panel-default" id="layout1">
  <div class="panel-heading">
    <h3 class="panel-title">A simple grid</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
    	<img src="/examples/images/layout1.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
    	<p>This is a simple, non-responsive layout using the line-based placement properties. I have created a layout that is essentially an old school liquid layout with two fixed width columns and an auto stretching content area.</p>

    	<ul class="list-group">
    		<li class="list-group-item"><a href="/examples/#example1">Defining a Grid</a></li>
    		<li class="list-group-item"><a href="/examples/#example2">Line-based placement</a></li>
    	</ul>
    </div>
  </div>
  <div class="panel-footer"><a href="/examples/code/layout1.html">View the layout</a></div>
</div>

<div class="panel panel-default" id="layout2">
  <div class="panel-heading">
    <h3 class="panel-title">A simple responsive layout</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
    	<img src="/examples/images/layout2.png" class="img-rounded" />
    	<img src="/examples/images/layout2-2.png" class="img-rounded" />
    	<img src="/examples/images/layout2-3.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
    	<p>This is a simple, responsive layout using the line-based placement properties and three breakpoints.</p>
    	<p>I am using the shorthand `grid-row` and `grid-column` properties in this example.</p>

    	<ul class="list-group">
    		<li class="list-group-item"><a href="/examples/#example1">Defining a Grid</a></li>
    		<li class="list-group-item"><a href="/examples/#example2">Line-based placement</a></li>
    		<li class="list-group-item"><a href="/examples/#example3">Line-based placement shorthand</a></li>
    	</ul>
    </div>
  </div>
  <div class="panel-footer"><a href="/examples/code/layout2.html">View the layout</a></div>
</div>

<div class="panel panel-default" id="layout3">
  <div class="panel-heading">
    <h3 class="panel-title">A responsive layout using named Grid Areas</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
    	<img src="/examples/images/layout3.png" class="img-rounded" />
    	<img src="/examples/images/layout3-2.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
    	<p>A simple responsive layout with three breakpoints. This time I am using the `grid-area` to define the named areas of the grid and describing the grid with the `grid-template-areas` property within the Media Queries.</p>

    	<ul class="list-group">
    		<li class="list-group-item"><a href="/examples/#example11">Defining Grid Areas</a></li>
    		<li class="list-group-item"><a href="/examples/#example13">Redefining Grid Areas with Media Queries</a></li>
    	</ul>
    </div>
  </div>
  <div class="panel-footer"><a href="/examples/code/layout3.html">View the layout</a></div>
</div>

<div class="panel panel-default" id="layout9">
  <div class="panel-heading">
    <h3 class="panel-title">Two column responsive layout with footer</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
      <img src="/examples/images/layout-twocol.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
     <ul class="list-group">
        <li class="list-group-item"><a href="/examples/#example1">Defining a Grid</a></li>
        <li class="list-group-item"><a href="/examples/#example2">Line-based placement</a></li>
        <li class="list-group-item"><a href="/examples/#example3">Line-based placement shorthand</a></li>
      </ul>
    </div>
  </div>
  <div class="panel-footer"><a href="/examples/code/layout9.html">View the layout</a></div>
</div>

<div class="panel panel-default" id="layout10">
  <div class="panel-heading">
    <h3 class="panel-title">Two column responsive layout with footer using named grid lines</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
      <img src="/examples/images/layout-twocol.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
     <ul class="list-group">
     <li class="list-group-item"><a href="/examples/#example7">Naming Grid Lines</a></li>
      </ul>

     <p><strong><a href="/#news">This example will change based on the 15th May Editor's Draft</a> to use square brackets around the line names.</strong></p>
    </div>
  </div>
  <div class="panel-footer"><a href="/examples/code/layout10.html">View the layout</a></div>
</div>

<div class="panel panel-default" id="layout11">
  <div class="panel-heading">
    <h3 class="panel-title">Two column responsive layout with footer using Named Grid Areas</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
      <img src="/examples/images/layout-twocol.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
      <ul class="list-group">
        <li class="list-group-item"><a href="/examples/#example11">Defining Grid Areas</a></li>
        <li class="list-group-item"><a href="/examples/#example13">Redefining Grid Areas with Media Queries</a></li>
      </ul>
    </div>
  </div>
  <div class="panel-footer"><a href="/examples/code/layout11.html">View the layout</a></div>
</div>

<div class="panel panel-default" id="layout4">
  <div class="panel-heading">
    <h3 class="panel-title">16 column flexible grid</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
    	<img src="/examples/images/layout4.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
    	<p>An example demonstrating how Grid can be used to create a flexible multiple column grid. This example uses the repeat keyword and named grid lines.</p>

    	<ul class="list-group">
    		<li class="list-group-item"><a href="/examples/#example2">Line-based placement</a></li>
    		<li class="list-group-item"><a href="/examples/#example8">Line-based placement named lines with span</a></li>
    		<li class="list-group-item"><a href="/examples/#example9">The Repeat Keyword</a></li>
    	</ul>

      <p><strong><a href="/#news">This example will change based on the 15th May Editor's Draft</a> to use square brackets around the line names.</strong></p>
    </div>
  </div>
  <div class="panel-footer"><a href="/examples/code/layout4.html">View the layout</a></div>
</div>

<div class="panel panel-default" id="layout5">
  <div class="panel-heading">
    <h3 class="panel-title">Placing elements into Grid Areas on the 16 column grid</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
    	<img src="/examples/images/layout5.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
    	<p>Creating a simple three column layout by placing items onto our 16 column grid, as an example of how this could be used in practice.</p>

    	<ul class="list-group">
    		<li class="list-group-item"><a href="/examples/#example2">Line-based placement</a></li>
    		<li class="list-group-item"><a href="/examples/#example8">Line-based placement named lines with span</a></li>
    		<li class="list-group-item"><a href="/examples/#example9">The Repeat Keyword</a></li>
    	</ul>

      <p><strong><a href="/#news">This example will change based on the 15th May Editor's Draft</a> to use square brackets around the line names.</strong></p>
    </div>
  </div>
  <div class="panel-footer"><a href="/examples/code/layout5.html">View the layout</a></div>
</div>

<div class="panel panel-default" id="layout12">
  <div class="panel-heading">
    <h3 class="panel-title">Skeleton Grid Experiments</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
      <img src="/examples/images/layout12.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
      <p>Taking the grid used by the <a href="http://getskeleton.com">Skeleton framework</a> as an example. Demonstrating how CSS Grid Layout removes the need to describe layout in markup.</p>
      <ul class="list-group">
        <li class="list-group-item"><a href="/examples/#example2">Line-based placement</a></li>
        <li class="list-group-item"><a href="/examples/#example8">Line-based placement named lines with span</a></li>
        <li class="list-group-item"><a href="/examples/#example9">The Repeat Keyword</a></li>
      </ul>

      <p><strong><a href="/#news">This example will change based on the 15th May Editor's Draft</a> to use square brackets around the line names.</strong></p>
    </div>
  </div>
  <div class="panel-footer"><a href="/examples/code/layout12.html">View the layout</a></div>
</div>

<div class="panel panel-default" id="layout13">
  <div class="panel-heading">
    <h3 class="panel-title">Skeleton Grid Layout</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
      <img src="/examples/images/layout13.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
      <p>Taking the grid used in my Skeleton experiments and using that for a layout.</p>
      <ul class="list-group">
        <li class="list-group-item"><a href="/examples/#example2">Line-based placement</a></li>
        <li class="list-group-item"><a href="/examples/#example8">Line-based placement named lines with span</a></li>
        <li class="list-group-item"><a href="/examples/#example9">The Repeat Keyword</a></li>
      </ul>

      <p><strong><a href="/#news">This example will change based on the 15th May Editor's Draft</a> to use square brackets around the line names.</strong></p>
    </div>
  </div>
  <div class="panel-footer"><a href="/examples/code/layout13.html">View the layout</a></div>
</div>

<div class="panel panel-default" id="layout6">
  <div class="panel-heading">
    <h3 class="panel-title">AG Grid Example</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
      <img src="/examples/images/layout6.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
      <p>I was interested in whether I could recreate the example used in <a href="http://www.zell-weekeat.com/susy2-tutorial/">this blog post</a> about the <a href="http://susy.oddbird.net/">Susy Grid System</a>. Susy is a very clever semantic Grid system that relies on pre-processing CSS to calculate your grid.</p>

      <ul>
        <li>I have fixed the row heights just to match the Susy example. In Grid Layout you actually have the benefit of being able to easily have full height columns if you want them.</li>
        <li>This is an example where the lack of subgrid became an issue. The layout is absolutley doable but you can see the problem of fraction widths in the gutters. I'd have liked the nested grids to conform to the main grid.</li>
        <li>It works! Other than the subgrid issue I could create this complex nested grid without any need for a preprocessor, complicated math, or clear fixes.</li>
      </ul>

      <p><strong><a href="/#news">This example will change based on the 15th May Editor's Draft</a> to use square brackets around the line names.</strong></p>
    </div>
  </div>
  <div class="panel-footer"><a href="/examples/code/layout6.html">View the layout</a></div>
</div>

<div class="panel panel-default" id="layout7">
  <div class="panel-heading">
    <h3 class="panel-title">Simple Grid + Flexbox example</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
      <img src="/examples/images/layout7.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
      <p>A simple example used in my presentation for the Responsive Web Design Summit, to demonstrate using Grid for the main layout and Flexbox for UI items.</p>
    </div>
  </div>
  <div class="panel-footer"><a href="/examples/code/layout7.html">View the layout</a></div>
</div>

<div class="panel panel-default" id="layout8">
  <div class="panel-heading">
    <h3 class="panel-title">Auto Placement Example</h3>
  </div>
  <div class="panel-body">
    <div class="col-sm-6">
      <img src="/examples/images/layout8.png" class="img-rounded" />
    </div>

    <div class="col-sm-6">
      <p>Playing with the Auto Placement algorithm and dense and sparse grid-auto-flow modes.</p>

      <ul>
        <li>The example is responsive, and I redefine the grid at 2 breakpoints after the initial single column grid.</li>
        <li>The list item containing text is actually positioned upon the grid. All other elements are placed using auto-placement.</li>
        <li>There are no gutter columns, spacing is just margins and padding on the elements.</li>
        <li>Read <a href="http://blogs.igalia.com/mrego/2015/02/25/grid-auto-placement-is-ready/">an in-depth article about how Grid Auto-Placement works</a> from Manuel Rego Casasnovas who is working on the implementation.</li>
      </ul>

      <ul class="list-group">
        <li class="list-group-item"><a href="/examples/#example17">Grid auto-flow</a></li>
        <li class="list-group-item"><a href="/examples/#example19">Grid auto-flow with a positioned element</a></li>
      </ul>
    </div>
  </div>
  <div class="panel-footer"><a href="/examples/code/layout8.html">View the layout</a></div>
</div>