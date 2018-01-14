---
layout: default
title: Browser Support for CSS Grid Layout
---

# Current Browser/Rendering Engine Information

You can view data across different browsers at [Can I Use](http://caniuse.com/#feat=css-grid). 

I am collecting known interoperability issues over at my [GridBugs repository](https://github.com/rachelandrew/gridbugs). Check there for known issues.

## Gecko Rendering Engine (Firefox)

Firefox were first to land grid support, on the 7th March 2017 in Firefox 52.

[Gecko Meta Bug](https://bugzilla.mozilla.org/show_bug.cgi?id=616605)

## A Grid Layout tool for Firefox

Firefox [includes a grid inspector](https://hacks.mozilla.org/2016/12/css-grid-and-grid-highlighter-now-in-firefox-developer-edition/) in DevTools.

## Blink Rendering Engine (Chrome, Opera)

Chrome 57 has now shipped with Grid Layout included. The listed date was March 14th 2017, however 57 was updating in browsers at the end of the previous week.

[Blink Meta Bug](https://code.google.com/p/chromium/issues/detail?id=79180)

The Blink implementation has been carried out by Igalia, sponsored by Bloomberg. You can [read about the implementation work in this post from Igalia](http://blogs.igalia.com/mrego/2015/01/08/css-grid-layout-2014-recap-implementation-status/).


## Safari

[Webkit Meta Bug](https://bugs.webkit.org/show_bug.cgi?id=60731)

[Safari 10.1 and iOS Safari ](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_1.html) support CSS Grid as of March 27, 2017.

## Microsoft Edge

On launch Edge shipped with the IE11 Grid implementation. 

The updated implementation is in Edge 16 and shipped October 17th 2017.

## Internet Explorer 10 and 11

The original Grid implementation was part of IE10, also in IE11. This implementation is now quite different to the current spec and other implementations. Internet Explorer 11 will never be updated to the new specification. There is some possibility in using the old spec to provide some grid layout for these browsers however.

- [Using CSS Grid - Supporting Browsers Without Grid](https://www.smashingmagazine.com/2017/11/css-grid-supporting-browsers-without-grid/)
- [April 2011 Grid Spec](http://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/)
- [My 24 Ways Article covering the IE implementation](http://24ways.org/2012/css3-grid-layout/)
- [Should I try to use the IE implementation of Grid Layout?](https://rachelandrew.co.uk/archives/2016/11/26/should-i-try-to-use-the-ie-implementation-of-css-grid-layout/)
