---
layout: default
title: Discussion, Issues and Things Grid Can't Do
---

# Discussion, Issues and Things Grid Can't Do

The CSS Working Group have posted [asking for community feedback](http://www.w3.org/blog/CSS/2015/08/10/css-grid-pls-review/) on the CSS Grid Layout module before the Level 1 specification goes to Candidate Recommendation later this year. 

One of my hopes in presenting this information in a digestible format, is that other people will take a look at Grid Layout and see whether it would be "fit for purpose" in terms of the types of layouts that they create. That can be as simple as taking a layout that you recently built and seeing how you would do that using Grid.

When I built the example of the [16 column grid](http://gridbyexample.com/examples/code/layout4.html), that was exactly my thought process. Flexible Grid systems are commonly used already - how does Grid cope with that? I initially developed the same type of layout for the IE10 implementation for [this 24 Ways article](http://24ways.org/2012/css3-grid-layout/), and I think that what we have now is greatly improved.

However the specification isn't without issues, and if you find issues, and can put together a simple case that demonstrates the problem (or can describe it to me so I can build one) then I'll post it here. It's really important that we - the folk who use these specifications - do engage with them, and instead of grumbling when something doesn't work as we want, put together use cases of these problems.

## Subgrids

Level 1 of the spec currently defines a [subgrid](http://dev.w3.org/csswg/css-grid/#subgrids) keyword. It is currently At risk" of being moved to level two and has not been implemented in Blink. The subgrid keyword would enable a nested grid to follow the same grid as the parent. [This example](/examples/code/layout6.html) demonstrates a problem that I believe it would solve. As the nested grids have to define their own grid, if we use fraction units for the columns, the fractions are calculated from a different width than those of the parent. 

## An issue of naming

When the initial specification was proposed in 2011 Mark Boulton wrote an article [detailing his objections to it](http://www.markboulton.co.uk/journal/rethinking-css-grids). I'm neither a graphic designer or typographer so I'm not really in a position to make an informed opinion about his article. I've included it here as it might be of interest to people who are designers and understand grid systems from that background. 

If anyone who has a solid understanding of typographic grids wants to help me put together some examples that demonstrate potential issues and/or solutions let me know.