---
layout: post
title:  "The subgrid feature is now in Firefox Nightly"
date:   2019-05-23 10:00:00
categories: news
---

Last night the release of Firefox Nightly included subgrid. So you can now try out all of the examples I have been creating for yourself.

Here are some of the places you can go to look at the examples I have been putting together:

1. [My initial write-up of the feature in Smashing Magazine](https://www.smashingmagazine.com/2018/07/css-grid-2/).
2. [The documentation for the feature on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_layout/Subgrid).
3. [Examples on this site](/examples/#css-grid-level-2-examples)
4. The recent talk I have been doing - the latest was yesterday at Codegarden - has [slides and more demos](https://noti.st/rachelandrew/R1WpMJ/grids-all-the-way-down).
5. A post on my blog regarding [one of the less obvious patterns subgrid will help us with](https://rachelandrew.co.uk/archives/2019/05/07/a-design-pattern-solved-by-subgrid/).

If you are looking at subgrid and find something which looks like a browser bug in Nightly - something where the specification says one thing and the browser is doing another - you can raise that over at Bugzilla. The main bug for implementation is [here](https://bugzilla.mozilla.org/show_bug.cgi?id=1240834). If you look at the "Depends on" section you can see other issues already raised. If you find something new, raise a new issue.

If you find something that is not in the specification but you think that it should be, or realise there is a problem building a certain pattern which seems like a subgrid use case, log that with the CSS Working Group [as an issue on the spec itself](https://github.com/w3c/csswg-drafts/issues).

Head over to the Chrome bugtracker and [star the bug there](https://bugs.chromium.org/p/chromium/issues/detail?id=618969) to show your interest in implementation. Don't add "me too" type comments,  just hit the star. By doing so you'll get updates if any comments are made on progress.