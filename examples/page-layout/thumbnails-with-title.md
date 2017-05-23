---
pattern-name: "List of thumbnails with section titles"
title: "Thumbnails with section titles"
main-image: pattern-1-1.jpg
pattern-desc: "A listing which has thumbnails plus section titles, displayed at three breakpoints. Grid with flexbox and float fallbacks."
layout: bigpattern
active: patterns
images:
  - pattern-1-2.jpg: "Image at mobile view"
  - pattern-1-1.jpg: "Image at wide view"
  - pattern-1-3.jpg: "Image at medium view"
pattern-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="RGwyAb" data-default-tab="result" data-user="rachelandrew" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/RGwyAb/">List with thumbnails enhanced with Grid and Flexbox</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'

---

Taking a starting point of the pattern Brad Frost lists with his responsive patterns [http://codepen.io/bradfrost/pen/GFHmf](http://codepen.io/bradfrost/pen/GFHmf).

The original pattern does not cope well with different height of content added to the boxes. With minimal changes to the original I am dealing with that issue and then enhancing the display for browsers that support newer features.

I'm using CSS Feature Queries to enhance the pattern.

Flexbox and grid enable the boxes to line up even if we add additional content to any box.

Note that we use Feature Queries in such a way that we start with the version for the most limited of browsers and then build up to those that support grid, making use of the fact that in the CSS Cascade properties and values defined later in the stylesheet override those that come before.
