---
title: "Converting Laravel Spark navigation to Tailwind CSS"
date: "2018-11-12"
---

I recently converted the navigation of my Laravel Spark based app, [MemberScore](http://memberscore.io), to use [Tailwind CSS](https://tailwindcss.com/). Spark uses Bootstrap out of the box, which I wanted to move away from for two reasons:

1. I find it a bit clunky and restricting, personally
2. I'd built a sales site for MemberScore (at memberscore.io), and I wanted the actual app (at app.memberscore.io) to match the sales site appearance.

I haven't converted the entire app to use Tailwind (yet?), but the nav is now converted and fully functional.

### Here's how I did it

Essentially, we're going to recreate all the nav-related Spark views, and swap out the various css classes to take advantage of Tailwind, removing Bootstrap-related ones and instead using Tailwind classes to get the nav looking how we want.

The first step is to install Tailwind. If you're not sure whether you'll want to make this change permanently, **I highly recommend** including Tailwind via CDN as referenced in [the docs](https://tailwindcss.com/docs/installation), rather than going through the relative hassle of including it via npm.

If you're ready to commit, you'll need to include `tailwindcss` in your `package.json` file. I also needed to bump the version of `laravel-mix` I was loading, from `^0.12.0` to `^2.0`. I also included [laravel-mix-tailwind](https://github.com/JeffreyWay/laravel-mix-tailwind).

In my `webpack.mix.js` file, I was then able to follow the instructions provided by [laravel-mix-tailwind](https://github.com/JeffreyWay/laravel-mix-tailwind), and get Tailwind compiling ok after adding the tailwind directives to the **end** of my `app.less` file:

https://gist.github.com/tnorthcutt/bfe7e103c1840b9f99fdbc7bd0234331

You'll notice the `bootstrap-overrides.less` file there; I had to make a couple of additions to override some default Bootstrap files that didn't play well with Tailwind:

https://gist.github.com/tnorthcutt/610cb8ee7884d43e521dbfb9362d1cd3

That may not be the Right Way™ to do this, but it's working ok for me.

Next, I had to figure out how to get two things working:

1. The toggling of the main nav menu on small screens
2. The account switcher/settings/kiosk etc. dropdown in the nav

I ended up creating a single file Vue template called `MainNav.vue` and using it as an inline template; this let me still use blade helpers within it. Here's the template:

https://gist.github.com/tnorthcutt/d0a310530e9eba955622e6f9d473f473

And where it's used in `resources/views/nav/user.blade.php`:

https://gist.github.com/tnorthcutt/594d767ead56f1a04cf5a030402cb29b

### Toggling visibility

Notice the `navOpen` and `dropdownOpen` props, and associated `toggleNav()` and `toggleDropdown()` methods; those handle showing/hiding the two items mentioned previously. You can see there's a button that calls `toggleNav()`, and the main div containing the nav items applies a class, either `block` or `hidden`, depending on the current value of `navOpen` (which is what `toggleNav()` alters).

The dropdown toggling is done exactly the same; you can see `dropdown-toggle.blade.php` is included in the main nav file. For some reason, I ended up with `dropdown.blade.php` being `@include()`\-ed in `dropdown-toggle.blade.php` instead other way around, but the names don't really matter.

https://gist.github.com/tnorthcutt/10a91f7da3141e7a208cb9da1d5f8c9d

### Wrap up

That's the general *gist* of how I did this. I'm sure this isn't all done as perfectly as it could be, but it's functional, looks how I want it, and I understand it – and those three things go a long way in production.

If you have any questions, or suggestions, shoot me an email at travis@travisnorthcutt.com. I'd love to hear from you.
