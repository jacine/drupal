---
layout: post
title: "Containers"
categories: [structure]
---

In Drupal 7, we have many different templates, theme functions and render properties that are solely used to wrap content in one or more HTML elements. Instead of creating a template for each different instance, we can use one "container" template and create common variations of that style to make taming and grouping types of output easier.

## Examples


### Default container

A simple example that would work for most entities and blocks.

{% include examples/container.html %}

### Default container for an "article"

Where different wrapper elements are needed, theme hook suggestions can be used, e.g. <code>theme_container__article()</code>:

{% include examples/container-article.html %}

## This could deprecate

- [block.tpl.php](http://api.drupal.org/api/drupal/modules!block!block.tpl.php/7)
- [node.tpl.php](http://api.drupal.org/api/drupal/modules!node!node.tpl.php/7)
- [theme_container](http://api.drupal.org/api/function/theme_container/7)
- [toolbar.tpl.php](http://api.drupal.org/api/drupal/modules!toolbar!toolbar.tpl.php/7)
- [aggregator-wrapper.tpl.php](http://api.drupal.org/api/drupal/modules!aggregator!aggregator-wrapper.tpl.php/7)
- [comment-wrapper.tpl.php](http://api.drupal.org/api/drupal/modules!comment!comment-wrapper.tpl.php/7)
- [book-all-books-block.tpl.php](http://api.drupal.org/api/drupal/modules!book!book-all-books-block.tpl.php/7)
