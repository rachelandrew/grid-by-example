---
layout: post
title:  "Day 13: Grid Template Areas"
date:   2016-12-13 20:10:00
categories: learn
---

Earlier in this series we looked at how to lay out items using line numbers, and also named lines. There is another way to create layouts on your grid and that is to use the descriptive named grid areas method.

To use template areas you first need to name the areas of your layout, using the `grid-area` property.

~~~
header {
  grid-area: hd;
}

footer {
  grid-area: ft;
}

article {
  grid-area: main;
}

aside {
  grid-area: sidebar;
}
~~~

You then use the assigned names to describe your layout as the value of the `grid-template-areas` property.

~~~
.grid {
    grid-template-columns: 2fr 4fr;
    grid-template-areas:
      "hd hd"
      "sidebar main"
      "sidebar ft";
  }
~~~

I demonstrate how to create a layout using `grid-template-areas` in this video from my [video tutorial series](/video).

<div class="embed-container">
<iframe src="https://www.youtube.com/embed/RssSS_xhv2E?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>



### What is this?

I'm sharing some tips to help you learn Grid Layout from the 1st of December until Christmas. Edited highlights from the things on this site and that I've posted elsewhere. **Follow along!**
