---
pattern-name: "Listing with thumbnails"
title: "Responsive listing with thumbnails"
main-image: pattern-2-1.jpg
pattern-desc: "A listing which has thumbnails, displayed at three breakpoints. Grid with flexbox and float fallbacks."
layout: bigpattern
active: patterns
images:
  - pattern-2-3.jpg: "Image at mobile view"
  - pattern-2-1.jpg: "Image at wide view"
  - pattern-2-2.jpg: "Image at medium view"
pattern-codepen-embed: '<p data-height="565" data-theme-id="0" data-slug-hash="WGNrPW" data-default-tab="result" data-user="rachelandrew" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/rachelandrew/pen/WGNrPW/">List with thumbnails enhanced using grid and flexbox</a> by rachelandrew (<a href="http://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="http://codepen.io">CodePen</a>.</p>'

---

Taking a starting point of the pattern Brad Frost lists with his responsive patterns [http://codepen.io/bradfrost/full/evwgx](http://codepen.io/bradfrost/full/evwgx)

The original does not cope so we when content of differing heights is added so I'm using CSS Feature Queries to enhance the pattern.

Flexbox and grid enable the boxes to line up even if we add additional content to any box.

Note that we use Feature Queries in such a way that we start with the version for the most limited of browsers and then build up to those that support grid, making use of the fact that in the CSS Cascade properties and values defined later in the stylesheet override those that come before.
