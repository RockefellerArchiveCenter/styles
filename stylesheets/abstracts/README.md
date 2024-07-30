# Abstracts

The `abstracts/` folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.

The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers.

## \_index.scss

With the deprecation of the `@import` keyword, we now use the `@use` and `@forward` keywords. Unlike with `@import`, adding abstracts with `@use` at the top of the `main.scss` file does not make them globally accessible to everything else coming afterwards.

Because of that we need to import those abstracts using `@use` keyword each time we need them inside the individual files, similar to how we would import utilities in JavaScript.

This is where we need the `@forward` keyword.

We can create an `_index.scss` file. In this file, we can collect all the abstract partials with the `@forward` keyword and re-export all abstract modules when we need them as a singular entry.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Abstracts folder](http://sass-guidelin.es/#abstracts-folder)
