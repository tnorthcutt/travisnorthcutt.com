---
external: false
title: "Git clean"
date: 2014-01-03
---

{% oldpost /%}

Thanks to [Josh Eaton](http://www.josheaton.org/), I recently discovered [git clean](http://git-scm.com/docs/git-clean). This command came up because I had somehow created a rogue file in the root directory of a site I was working on (I'm not even sure how it got there), but couldn't figure out how to delete it, due to its odd name:

![](/images/git-clean.png)

Josh helpfully suggested that I try using `git clean`, which worked!

Basically, `git clean` removes any "untracked files" from the working tree. That is, it removes any files you haven't already told Git about (e.g. via `git add [files]`). This was useful in my case because I couldn't easily delete the file otherwise, but it could also come in handy if you started experimenting with some new work, especially if that work were in several different new files, that you hadn't already started tracking yet.

Warning: this will delete files, so be careful! In my case, just running `git clean` by itself did nothing, resulting in the error message

fatal: clean.requireForce defaults to true and neither -i, -n nor -f given; refusing to clean

However, just to be sure, you should always run `git clean --dry-run` first, which will show you what *would be removed* if you ran it with the -f or --force flag. You can also perform an *interactive* clean; see the [linked documentation](http://git-scm.com/docs/git-clean) for more information.
