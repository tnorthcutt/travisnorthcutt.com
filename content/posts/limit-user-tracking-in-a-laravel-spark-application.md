---
title: "Limit user tracking in a Laravel Spark application"
slug: "limit-user-tracking-in-a-laravel-spark-application"
date: "2018-12-10"
---

[Laravel Spark](https://spark.laravel.com/) comes with a really handy feature: user impersonation. The "kiosk" allows you to search for users of your application, and click a button to sign in as that user. This is great for things like white-glove onboarding, recording screencasts for a user to show them a feature, etc.

It's quite common to use something like Intercom, FullStory, etc. to track users in your application. You might want to keep tabs on how often they log in, what actions they take, and so on. But, if you use that impersonation feature, you'll trigger that tracking for a user's account when they aren't actually using the app! And, you probably don't care about using something like FullStory to track your own usage of the app.

I wanted a way to avoid this problem, and after some digging, I discovered that Spark sets a `spark:impersonator` session key when using the impersonation feature. As a result, we can check for that in our app's `app.blade.php` layout file, and conditionally set a javascript variable:

<script src="https://gist.github.com/tnorthcutt/930fca70f68949a5a54ee98ae0da04bd.js"></script>

[View this gist on GitHub](https://gist.github.com/tnorthcutt/930fca70f68949a5a54ee98ae0da04bd)

We can then check for that variable in our javascript, and skip user tracking if it's present.
