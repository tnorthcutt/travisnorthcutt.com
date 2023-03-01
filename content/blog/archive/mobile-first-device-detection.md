---
title: "Mobile First Device Detection"
date: "2012-04-28"
---

I think Luke Wroblewski's approach to responsive web design, which he calls [RESS](http://www.lukew.com/ff/entry.asp?1392) (Responsive Web Design + Server Side Components) is a pretty solid concept. I"ll let him explain:

> In a nutshell, RESS combines adaptive layouts with server side component (not full page) optimization. So a single set of page templates define an entire Web site for all devices but key components within that site have device-class specific implementations that are rendered server side.

The idea is that instead of serving every device the exact same content the exact same way, some things are served differently depending on the device **class** (not specific device!).

Luke ends his post with a note that relying on user agent detection can be unreliable at times, and might be an issue in some situations:

> That said, there may be a few unsolved challenges.
> 
> Relying on user agent detection on the server to decide which device class specific components to include could be an issue for some. There's a lot of debate about how accurate [user agent detection](http://www.w3.org/TR/2001/NOTE-cuap-20010206) is.

This is a growing rather than shrinking issue; seemingly every day a new mobile device is launched, and keeping up with all the various user agent strings is difficult bordering on impossible.

However, what if, instead of trying to ferret out whether the connecting device is one of hundreds of possible mobile device/browser combinations, we instead attempt to discover if it's one of a few known desktop browsers, and then beyond that try to separate out large (iPad & other tablets) and small (phone-size) "mobile" devices? This is the approach that [Categorizr](http://www.brettjankord.com/2012/01/16/categorizr-a-modern-device-detection-script/) takes, and I think it has a lot of potential.

> **What makes Categorizr different?**
> 
> Instead of assuming the device is a desktop, and detecting mobile and tablet device user agents, **Categorizr** is a **[mobile first](http://www.lukew.com/ff/entry.asp?933 "Mobile First")** based device detection. It assumes the device is mobile and sets up checks to see if it’s a desktop or tablet. Desktops are fairly easy to detect, the user agents are known, and are not changing anytime soon. Tablets are also pretty easy to detect.
> 
> By assuming devices are mobile from the beginning, **Categorizr** aims to be more **[future friendly](http://futurefriend.ly/ "Future Friendly")**. When new phones come out, you don’t need to worry if their new user agent is in your device detection script since devices are assumed mobile from the start.

I think this approach allows you to avoid [the common pitfalls of responsive web design](http://www.netmagazine.com/features/five-responsive-web-design-pitfalls-avoid). Obviously it's not a panacea (nothing is), but it has potential to be a solid technique.

What do you think is missing with this method? Are there situations or contexts that it overlooks or glosses over?
