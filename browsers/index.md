---
layout: default
title: Browser Support for CSS Grid Layout
---

# Current Browser/Rendering Engine Information

You can view data across different browsers at [Can I Use](http://caniuse.com/#feat=css-grid). However this information tends to confuse people as it looks as though IE is the only browser with support. Read on to understand the status of Grid Layout in browsers.

If you find a bug in a browser implementation then the best thing to do is to search the logged bugs for that browser as this will include known bugs and issues still being worked on. If you have found something new then you can find [information about logging bugs with browsers here](http://testthewebforward.org/docs/bugs.html).

## Microsoft Edge

On launch Edge shipped with the IE11 Grid implementation. Therefore the current implementation in Edge is against the original and not the new spec. In September 2015 Microsoft indicated that updating Grid to the current spec is [on the backlog with a priority of High](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/6514853-update-css-grid). Do add your votes to encourage implementation.

You can [keep track of the Edge Status of updating Grid Layout](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/gridupdate/?q=grid%20update).

## Internet Explorer 10 and 11

The original Grid implementation was part of IE10, also in IE11. This implementation is now quite different to the current spec and other implementations. Internet Explorer 11 will never be updated to the new specification. There is some possibility in using the old spec to provide some grid layout for these browsers however.

- [April 2011 Grid Spec](http://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/)
- [My 24 Ways Article covering the IE implementation](http://24ways.org/2012/css3-grid-layout/)
- [Should I try to use the IE implementation of Grid Layout?](https://rachelandrew.co.uk/archives/2016/11/26/should-i-try-to-use-the-ie-implementation-of-css-grid-layout/)

## Blink Rendering Engine (Chrome, Opera)

**Igalia have posted the [Intent to Ship](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/hBx1ffTS9CQ) for Grid into Chrome.** Chrome 57 is when we expect to see it, estimated release date [March 14th 2017](https://www.chromium.org/developers/calendar).

[Blink Meta Bug](https://code.google.com/p/chromium/issues/detail?id=79180)

My reference implementation is the one in Blink, unless stated otherwise on an example. I am typically using Chrome and Chrome Canary.

The Blink implementation has been carried out by Igalia, sponsored by Bloomberg. You can [read about the implementation work in this post from Igalia](http://blogs.igalia.com/mrego/2015/01/08/css-grid-layout-2014-recap-implementation-status/).

At the present time you need to enable the Experimental Web Platform Features Flag in Chrome or Opera.

Download Chrome Canary if you want to get the very latest features that have been implemented. Chrome Canary does not need flags enabled.

## Safari

[Webkit Meta Bug](https://bugs.webkit.org/show_bug.cgi?id=60731)

Grid is available in [Webkit Nightly builds](http://nightly.webkit.org/) and also in the new [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/release-notes/). Grid is now unprefixed in the Nightly and Preview versions.

On the 24th January 2017, [Apple announced the features](https://developer.apple.com/library/prerelease/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_1.html) that would be part of the Safari 10.1 Spring update now in beta. This includes Grid!

## Gecko Rendering Engine (Firefox)

**Firefox have indicated they [intend to ship Grid in March](https://groups.google.com/forum/#!topic/mozilla.dev.platform/6shk3TZX5vo).** The release date for Firefox 52 is listed as the [7th March 2017](https://wiki.mozilla.org/RapidRelease/Calendar).

[Gecko Meta Bug](https://bugzilla.mozilla.org/show_bug.cgi?id=616605)

Grid is currently being implemented in Gecko. You need to enable the layout.css.grid.enabled flag by going to about:config in regular Firefox. For the latest features download a [Firefox Nightly](https://nightly.mozilla.org/) or the [Firefox Developer Edition](https://www.mozilla.org/en-GB/firefox/developer/). In Nightly and Developer Edition you do not need to enable the flag - Grid should just work!

## A Grid Layout tool for Firefox

Firefox Nightlies and Firefox Developer Edition [include a grid highlighter](https://hacks.mozilla.org/2016/12/css-grid-and-grid-highlighter-now-in-firefox-developer-edition/) in DevTools.

If you are using Firefox then you can use the experimental [CSS Grid Inspector](https://addons.mozilla.org/en-US/firefox/addon/css-grid-inspector/) to help you visualize your grids. It is a tool in development - just like Grid Layout.


