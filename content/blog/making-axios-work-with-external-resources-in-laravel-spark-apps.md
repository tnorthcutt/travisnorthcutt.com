---
external: false
title: "Making axios work with external resources in Laravel Spark apps"
date: 2018-12-06
---

In [MemberScore](https://memberscore.io), we make use of a WordPress plugin to connect a user's site to MemberScore. The easiest way to provide that plugin is to give users a zip file that they can upload through their WordPress admin area. I could ship a zip file with my Laravel application, but since I'm already hosting that plugin's code on Github, it seems silly to also add it to the Laravel application, and to update the file each time I make a change to the plugin code.

Github does give you a [/latest release URL](https://github.com/tnorthcutt/member-score-wp-plugin/releases/latest) that redirects to the most recent release of a repository, but that would still require users to then click on the correct download link – plus it's an extra step.

Instead, I opted to make use of the Github API, which returns that latest release as a json object: [https://api.github.com/repos/tnorthcutt/member-score-wp-plugin/releases/latest](https://api.github.com/repos/tnorthcutt/member-score-wp-plugin/releases/latest). I'm then able to grab the first element of the `assets` array in that object, and use the `browser_download_url`. In my Vue component:

{% githubgist id="9ee01af0f3d7f5684ad6b7172c98a658" /%}

You'll notice there that I'm fetching the Github URL with axios. By default, [Laravel Spark](https://spark.laravel.com/) makes use of [axios](https://github.com/axios/axios), a handy dandy "promise based HTTP client for the browser and node.js." Axios is very convenient to use. However, Spark also sets some default headers on requests sent with axios:

{% githubgist id="84a5a4b26d69aea91c25310c65568d56" /%}

As a result, you may run into some issues using axios for external requests (outside of your application). Here's a [Laracasts thread](https://laracasts.com/discuss/channels/javascript/axios-without-csrf-and-requested-with-headers) explaining just that problem. This was the case for me; performing that request resulted in this nasty error message:

```
Access to XMLHttpRequest at 'https://api.github.com/repos/tnorthcutt/member-score-wp-plugin/releases/latest' from origin 'https://app.memberscore.io' has been blocked by CORS policy: Request header field X-CSRF-TOKEN is not allowed by Access-Control-Allow-Headers in preflight response.
```

The solution turns out to be deleting the `X-CSRF-TOKEN` header just before making the request, then adding it back afterwards (so we don't break things for other parts of the application):

{% githubgist id="2a0dd75fc6dc8f5defc05605009bf41b" /%}

While this seems like a bit of a messy workaround, it does indeed work. There is currently a [pull request on the axios repository](https://github.com/axios/axios/pull/1845) to allow setting a header to `null` on an individual request and not sending that header as a result; that would be far preferable. As of this writing, axios still sends an empty header if you set it to `null`, which breaks [Access-Control-Allow-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers).
