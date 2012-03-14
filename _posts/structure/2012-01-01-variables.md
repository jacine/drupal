---
layout: post
title: "Variables"
categories: [structure]
---

<dl>
  <dt>$content or $items</dt>
  <dd>
    <p>The content or items the template contains. Certain variable names are reserved for consistency:</p>
    <dl>
      <dt>attributes</dt>
      <dd>Pluggable attributes (class, id, data attributes, RDF, etc.) for the outermost element.</dd>
      <dt>prepend</dt>
      <dd>Similar to jQuery's <code>.prepend()</code>, it prints as the first child in the template.</dd>
      <dt>append</dt>
      <dd>Similar to jQuery's <code>.append()</code>, it prints as the last child in the template.</dd>
      <dt>title</dt>
      <dd>Reserved for the title of the template, which can be used for various things, such as headings, label for form elements, summary for details, legend for fieldset, etc.</dd>
    </dl>
  </dd>
  <dt>$object</dt>
  <dd>Contains the current object, i.e. entity, block, field, etc.</dd>
  <dt>$context</dt>
  <dd>Contains information about the context.</dd>
</dl>
