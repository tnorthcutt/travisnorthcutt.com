---
title: Number of results shown in PhpStorm find modal
pubDate: 2024-11-14
---

By default, PhpStorm shows a maximum of 100 results in the "find in files" modal. This threw me off recently when I searched for `dotenv` in a Laravel project, expecting to see matches in lots of vendor files. I didn't notice that at the top of the modal there's a dim "110+ matches in 27+ files" message suggesting that there may be more results than shown.

To see all results, you can either click the "Open in Find Window" button (⌘+return), or increase the maximum number of results shown in the settings. That value is set in `Advanced Settings -> Find/Replace -> Maximum number of results to show in Find in Files/Show Usages preview`.

Thanks to [Tonko Mulder](https://tonkomulder.nl/) for the tip.
