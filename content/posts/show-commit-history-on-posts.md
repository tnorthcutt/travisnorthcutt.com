---
title: "Showing commit history on posts"
date: "2020-09-08"
slug: "showing-commit-history-on-posts"
---

Thanks to [Tom Critchlow](https://twitter.com/tomcritchlow/status/1303186638978326528), I recently found out about [Ryan Duffy's](https://twitter.com/theryanjduffy) [blog post](https://ryanjduffy.github.io/blog/2016/01/08/including-git-history-in-a-jekyll-post.html) detailing how he added commit history to the posts on his Jekyll-powered site. I recently [discussed a similar idea](https://twitter.com/tnorthcutt/status/1295548319012278273) with [Jon Borichevskiy](https://twitter.com/jborichevskiy) and decided to adapt Ryan's method to my Gridsome-powered site.

The relevant code is added in [this commit](https://github.com/tnorthcutt/travisnorthcutt.com/commit/21f65e6842144cd42674626fe5e7e0e8374d4206). There's nothing novel going on compared to Ryan's post; the only real difference is in how I build the correct path to send in the API request to GitHub, since it's using Gridsome instead of Jekyll, and in how I add the markup to the page once we have the data.

Nothing fancy, but maybe an interesting addition. Of course, since most of my posts are recently imported from WordPress, they'll almost all have a commit message of `add a ton of stuff? ¯\_(ツ)_/¯`. All the more reason to write more!
