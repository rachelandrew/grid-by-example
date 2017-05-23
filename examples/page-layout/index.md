---
layout: examples
active: layouts
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
13. [Hero Image Panel](/examples/page-layout/hero-image-panel)
14. [Listing with thumbnails](/examples/page-layout/listing-with-thumbnails)
15. [Thumbnails with title](/examples/page-layout/thumbnails-with-title)

{::nomarkdown}
<div class="example-layout" id="layout1">
<header><h3>A simple grid</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/layout1.png" alt="image of a simple grid.">
</figure>
<div class="description">
{:/nomarkdown}

This is a simple, non-responsive layout using the line-based placement properties. I have created a layout that is essentially an old school liquid layout with two fixed width columns and an auto stretching content area.

- [Defining a Grid](/examples/#example1)
- [Line-based placement](/examples/#example2)

{::nomarkdown}
</div>
</div>

<footer>
<a href="/examples/code/layout1.html">View the layout</a>
</footer>
</div>
{:/nomarkdown}


{::nomarkdown}
<div class="example-layout" id="layout2">
<header><h3>A simple responsive layout</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/layout2.png" alt="image of A simple responsive layout.">
<img src="/examples/images/layout2-2.png" alt="image of A simple responsive layout.">
<img src="/examples/images/layout2-3.png" alt="image of A simple responsive layout.">
</figure>
<div class="description">
{:/nomarkdown}

This is a simple, responsive layout using the line-based placement properties and three breakpoints.

I am using the shorthand `grid-row` and `grid-column` properties in this example.

- [Defining a Grid](/examples/#example1)
- [Line-based placement](/examples/#example2)
- [Line-based placement shorthand](/examples/#example3)

{::nomarkdown}
</div>
</div>

<footer>
<a href="/examples/code/layout2.html">View the layout</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example-layout" id="layout3">
<header><h3>A responsive layout using named Grid Areas</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/layout3.png" alt="A responsive layout using named Grid Areas.">
<img src="/examples/images/layout3-2.png" alt="A responsive layout using named Grid Areas.">
</figure>
<div class="description">
{:/nomarkdown}

A simple responsive layout with three breakpoints. This time I am using the `grid-area` to define the named areas of the grid and describing the grid with the `grid-template-areas` property within the Media Queries.

- [Redefining Grid Areas](/examples/#example11)
- [Media Queries](/examples/#example13)

{::nomarkdown}
</div>
</div>

<footer>
<a href="/examples/code/layout3.html">View the layout</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example-layout" id="layout9">
<header><h3>Two column responsive layout with footer</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/layout-twocol.png" alt="Two column responsive layout with footer">
</figure>
<div class="description">
{:/nomarkdown}

- [Defining a Grid](/examples/#example1)
- [Line-based placement](/examples/#example2)
- [Line-based placement shorthand](/examples/#example3)

{::nomarkdown}
</div>
</div>

<footer>
<a href="/examples/code/layout9.html">View the layout</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example-layout" id="layout10">
<header><h3>Two column responsive layout with footer using named grid lines</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/layout-twocol.png" alt="Two column responsive layout with footer using named grid lines.">
</figure>
<div class="description">
{:/nomarkdown}

- [Naming Grid Lines](/examples/#example7)

{::nomarkdown}
</div>
</div>

<footer>
<a href="/examples/code/layout10.html">View the layout</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example-layout" id="layout11">
<header><h3>Two column responsive layout with footer using Named Grid Areas</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/layout-twocol.png" alt="Two column responsive layout with footer using Named Grid Areas.">
</figure>
<div class="description">
{:/nomarkdown}

- [Defining Grid Areas](/examples/#example11)
- [Redefining Grid Areas with Media Queries](/examples/#example13)

{::nomarkdown}
</div>
</div>

<footer>
<a href="/examples/code/layout11.html">View the layout</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example-layout" id="layout4">
<header><h3>16 column flexible grid</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/layout4.png" alt="16 column flexible grid">
</figure>
<div class="description">
{:/nomarkdown}

An example demonstrating how Grid can be used to create a flexible multiple column grid. This example uses the repeat keyword and named grid lines.

- [Line-based placement](/examples/#example2)
- [Line-based placement named lines with span](/examples/#example8)
- [The Repeat Keyword](/examples/#example9)


{::nomarkdown}
</div>
</div>

<footer>
<a href="/examples/code/layout4.html">View the layout</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example-layout" id="layout5">
<header><h3>Placing elements into Grid Areas on the 16 column grid</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/layout5.png" alt="Placing elements into Grid Areas on the 16 column grid">

</figure>
<div class="description">
{:/nomarkdown}

Creating a simple three column layout by placing items onto our 16 column grid, as an example of how this could be used in practice.

- [Line-based placement](/examples/#example2)
- [Line-based placement named lines with span](/examples/#example8)
- [The Repeat Keyword](/examples/#example9)


{::nomarkdown}
</div>
</div>

<footer>
<a href="/examples/code/layout5.html">View the layout</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example-layout" id="layout12">
<header><h3>Skeleton Grid Experiments</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/layout12.png" alt="Skeleton Grid">
</figure>
<div class="description">
{:/nomarkdown}

Taking the grid used by the <a href="http://getskeleton.com">Skeleton framework</a> as an example. Demonstrating how CSS Grid Layout removes the need to describe layout in markup.

- [Line-based placement](/examples/#example2)
- [Line-based placement named lines with span](/examples/#example8)
- [The Repeat Keyword](/examples/#example9)


{::nomarkdown}
</div>
</div>

<footer>
<a href="/examples/code/layout12.html">View the layout</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example-layout" id="layout13">
<header><h3>Skeleton Grid Layout</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/layout13.png" alt="Skeleton Grid Layout.">

</figure>
<div class="description">
{:/nomarkdown}

Taking the grid used in my Skeleton experiments and using that for a layout.

- [Line-based placement](/examples/#example2)
- [Line-based placement named lines with span]([/examples/#example8])
- [Repeat Keyword](/examples/#example9)

{::nomarkdown}
</div>
</div>

<footer>
<a href="/examples/code/layout13.html">View the layout</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example-layout" id="layout6">
<header><h3>AG Grid Example</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/layout6.png" alt="AG Grid Example.">

</figure>
<div class="description">
{:/nomarkdown}

I was interested in whether I could recreate the example used in[this blog post](http://www.zell-weekeat.com/susy2-tutorial/) about the [Susy Grid System](http://susy.oddbird.net/). Susy is a very clever semantic Grid system that relies on pre-processing CSS to calculate your grid.

- I have fixed the row heights just to match the Susy example. In Grid Layout you actually have the benefit of being able to easily have full height columns if you want them.
- This is an example where the lack of subgrid became an issue. The layout is absolutely doable but you can see the problem of fraction widths in the gutters. I'd have liked the nested grids to conform to the main grid.
- It works! Other than the subgrid issue I could create this complex nested grid without any need for a preprocessor, complicated math, or clear fixes.


{::nomarkdown}
</div>
</div>

<footer>
<a href="/examples/code/layout6.html">View the layout</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example-layout" id="layout7">
<header><h3>Simple Grid + Flexbox example</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/layout7.png" alt="Simple Grid + Flexbox example.">
</figure>
<div class="description">
{:/nomarkdown}

A simple example used in my presentation for the Responsive Web Design Summit, to demonstrate using Grid for the main layout and Flexbox for UI items.

{::nomarkdown}
</div>
</div>

<footer>
<a href="/examples/code/layout7.html">View the layout</a>
</footer>
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="example-layout" id="layout8">
<header><h3>Auto Placement Example</h3></header>
<div class="body">
<figure class="imagefig">
<img src="/examples/images/layout8.png" alt="Auto Placement Example">
</figure>
<div class="description">
{:/nomarkdown}

Playing with the Auto Placement algorithm and dense and sparse grid-auto-flow modes.

- The example is responsive, and I redefine the grid at 2 breakpoints after the initial single column grid.
- The list item containing text is actually positioned upon the grid. All other elements are placed using auto-placement.
- There are no gutter columns, spacing is just margins and padding on the elements.
- Read <a href="http://blogs.igalia.com/mrego/2015/02/25/grid-auto-placement-is-ready/">an in-depth article about how Grid Auto-Placement works</a> from Manuel Rego Casasnovas who is working on the implementation.

- [Grid auto-flow](/examples/#example17)
- [Grid auto-flow with a positioned element](/examples/#example19)

{::nomarkdown}
</div>
</div>

<footer>
<a href="/examples/code/layout8.html">View the layout</a>
</footer>
</div>
{:/nomarkdown}
