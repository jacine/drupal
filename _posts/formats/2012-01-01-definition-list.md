---
layout: post
title: "Definition Lists"
categories: [formats]
---

{% highlight php %}
<dl<?php print $attributes; ?>>
  <?php foreach ($items as $item): ?>
    <dt><?php print render($item['title']); ?></dt>
    <dd><?php print render($item); ?></dd>
  <?php endforeach; ?>
</dl>
{% endhighlight %}

{% include markup/definition-list.html %}

<details>
<summary>Data Structure</summary>
{% highlight php %}<?php
// The default type = 'item'.
$data = array(
  'format' => 'definition_list',
  'items' => array(
    array(
      'title' => 'Example one',
      'items' => array('Lorem ipsum Dolor sit amet, consectetur adipiscing elit.'),
    ),
    array(
      'title' => 'Example two',
      'items' => array(
        'format' => 'list',
        'items' = array(
          'Cras sit amet dolor sit amet nunc congue luctus ultrices vitae quam.',
          'In eu augue lectus, sit amet scelerisque magna.',
        ),
      ),
    ),
    array(
      'title' => 'Example three',
      'items' => array(
        'Maecenas sit amet erat a arcu pellentesque rhoncus sit amet in ipsum.',
        'Vestibulum vitae leo vitae enim tempus euismod at quis mi.',
      ),
    ),
    array(
      'title' => 'Example four',
      'items' => array(
        array(
          'format' => 'definition_list',
          'title' => 'Nested Example One',
          'items' => array(
            'Vestibulum a augue leo, sit amet faucibus nunc.',
            'Ut quis nibh eget nunc tristique consectetur vel volutpat elit.',
          ),
        ),
        array(
          'format' => 'list',
          'title' => 'Nested Example Two',
          'items' => array(
            'Vestibulum a augue leo, sit amet faucibus nunc.',
            'Ut quis nibh eget nunc tristique consectetur vel volutpat elit.',
          ),
        ),
      ),
    ),
  ),
);?>{% endhighlight %}
</details>

