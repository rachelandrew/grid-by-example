---
layout: default
title: Discussion, Issues and Things Grid Can't Do
---

# Discussion, Issues and Things Grid Can't Do

One of my hopes in presenting this information in a digestible format, is that other people will take a look at Grid Layout and see whether it would be "fit for purpose" in terms of the types of layouts that they create. That can be as simple as taking a layout that you recently built and seeing how you would do that using Grid.

When I built the example of the [16 column grid](http://gridbyexample.com/examples/code/layout4.html), that was exactly my thought process. Flexible Grid systems are commonly used already - how does Grid cope with that? I initially developed the same type of layout for the IE10 implementation for [this 24 Ways article](http://24ways.org/2012/css3-grid-layout/), and I think that what we have now is greatly improved.

However the specification isn't without issues, and if you find issues, and can put together a simple case that demonstrates the problem (or can describe it to me so I can build one) then I'll post it here. It's really important that we - the folk who use these specifications - do engage with them, and instead of grumbling when something doesn't work as we want, put together use cases of these problems.

## The gutter problem

I've already discussed this issue on www-style, however one issue I've found is when using Grid's ability to create an implicit grid, I lose the ability to have fixed size 'gutter' rows or columns. If you take a look at [example 10](/examples/#example10) when I add my area 'e' it creates an implicit grid track. What I would really like to happen is for it to create both the grid track to hold the content AND a gutter track to match those above.

The same issue can be seen in my [16 column grid example](http://gridbyexample.com/examples/code/layout4.html). I have to explicitly create rows and gutter rows on my grid, otherwise I would lose the spacing.

This issue could be solved by having a method of repeating a pattern for auto rows, or by having `column-gap` and `row-gap` properties in the same way that multi-column layout does for `column-gap`. I think the latter would work in the majority of cases and save developers needing to account for gutter columns in their grid systems. However the `column-gap` and `row-gap` properties have been moved to level 2 of the spec.

## An issue of naming

When the initial specification was proposed in 2011 Mark Boulton wrote an article [detailing his objections to it](http://www.markboulton.co.uk/journal/rethinking-css-grids). I'm neither a graphic designer or typographer so I'm not really in a position to make an informed opinion about his article. I've included it here as it might be of interest to people who are designers and understand grid systems from that background. 

If anyone who has a solid understanding of typographic grids wants to help me put together some examples that demonstrate potential issues and/or solutions let me know.