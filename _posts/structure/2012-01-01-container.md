---
layout: post
title: "Containers"
categories: [structure]
---

In Drupal 7, we have many different templates, theme functions and render properties that are solely used to wrap content in one or more HTML elements. Instead of creating a template for each different instance, we can use one "container" template and create common variations of that style to make taming and grouping types of output easier.

## Examples

<details>
  <summary>Variables</summary>
<dl>
  <dt>$prepend</dt>
  <dd>Similar to jQuery's <code>.prepend()</code>, it prints as the first child in the template. Contains contextual links.</dd>
  <dt>$append</dt>
  <dd>Similar to jQuery's <code>.append()</code>, it prints as the last child in the template.</dd>
  <dt>$attributes</dt>
  <dd>Pluggable attributes for the wrapper.</dd>
  <dt>$title_attributes</dt>
  <dd>Pluggable attributes for the title.</dd>
  <dt>$content</dt>
  <dd>The content.</dd>
</dl>
</details>

### Default container
A simple example that would work for most entities and blocks.

{% highlight php %}<div<?php print $attributes; ?>>
  <?php print render($prepend); ?>
  <h2<?php print $title_attributes; ?>></h2>
  <?php print render($content); ?>
  <?php print render($append); ?>
</div>{% endhighlight %}

### Default container for an "article"

Where different wrapper elements are needed, theme hook suggestions can be used, e.g. <code>theme_container__article()</code>:

{% highlight php %}<article<?php print $attributes; ?>>
  <?php print render($prepend); ?>
  <header>
    <h2<?php print $title_attributes; ?>></h2>
    <?php print render($item['submitted']); ?>
  </header>
  <?php print render($content); ?>
  <?php print render($item['something']); ?>
  <footer>
    <?php print render($item['links']); ?>
    <?php print render($append); ?>
  </footer>
</article>{% endhighlight %}

## This could deprecate

- [block.tpl.php](http://api.drupal.org/api/drupal/modules!block!block.tpl.php/7)
- [node.tpl.php](http://api.drupal.org/api/drupal/modules!node!node.tpl.php/7)
- [theme_container](http://api.drupal.org/api/function/theme_container/7)
- [toolbar.tpl.php](http://api.drupal.org/api/drupal/modules!toolbar!toolbar.tpl.php/7)
- [aggregator-wrapper.tpl.php](http://api.drupal.org/api/drupal/modules!aggregator!aggregator-wrapper.tpl.php/7)
- [comment-wrapper.tpl.php](http://api.drupal.org/api/drupal/modules!comment!comment-wrapper.tpl.php/7)
- [book-all-books-block.tpl.php](http://api.drupal.org/api/drupal/modules!book!book-all-books-block.tpl.php/7)
