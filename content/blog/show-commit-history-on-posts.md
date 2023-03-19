---
external: false
title: "Showing commit history on posts"
date: 2020-09-08
---

Update: since converting this site to use [Astro](https://astro.build), I needed to change how the commit history component works. You can see the changes [in this commit](https://github.com/tnorthcutt/travisnorthcutt.com/commit/64b31ad39bf5e1fa19f6a83e67049b83d53d8656). Unfortunately, the conversion to Astro resulted in the commit history for old posts effectively being reset, but c'est la vie.

Thanks to [Tom Critchlow](https://twitter.com/tomcritchlow/status/1303186638978326528), I recently found out about [Ryan Duffy's](https://twitter.com/theryanjduffy) [blog post](https://ryanjduffy.github.io/blog/2016/01/08/including-git-history-in-a-jekyll-post.html) detailing how he added commit history to the posts on his Jekyll-powered site. I recently [discussed a similar idea](https://twitter.com/tnorthcutt/status/1295548319012278273) with [Jon Borichevskiy](https://twitter.com/jborichevskiy) and decided to adapt Ryan's method to my Gridsome-powered site.

To do this, I added a `CommitHistory` component, which takes a `path` as a prop; the path is then concatenated with the base path and a request is made to the GitHub [commits endpoint](https://developer.github.com/v3/repos/commits/):

https://gist.github.com/tnorthcutt/b683bb8af856ed020d75bfa3d7d7b803#CommitHistory.vue

In my `Post.vue` template file, I then have a `path` computed property that determines the path in the repository of the current post, and sends that to the `CommitHistory` component:

https://gist.github.com/tnorthcutt/b683bb8af856ed020d75bfa3d7d7b803#Post.vue

Nothing fancy, but a fun little feature to add to my site. Of course, since most of my posts are recently imported from WordPress, they'll almost all have a commit message of `add a ton of stuff? ¯\_(ツ)_/¯`. All the more reason to write more!
