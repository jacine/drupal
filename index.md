---
layout: post
title: Definitions
---

## Structure

There are 2 main structural concepts here to understand:

<dl>
  <dt>Containers</dt>
  <dd>
    <p>Provide wrapper markup with attributes and share the same data structure and <a href="{{ site.baseurl }}/variables">variables</a>. The contents of containers are <a href="{{ site.baseurl }}/item">item(s)</a>. One really important thing about containers is that a themer can render all the individual children of a container inside the container's template, sort of how it's done in <code>views-view.tpl.php</code>.</p>

  </dd>
  <dt>Items</dt>
  <dd>Items are formats. They provide markup (although there is none by default), and are designed to handle single and multiple pieces of output and go inside <a href="{{ site.baseurl }}/container">containers</a>.</dd>
</dl>


## Containers

- contain <a href="{{ site.baseurl }}/items">items</a>.
- can wrap anything and everything from regions to form elements.
- usually contain a heading, whether visually displayed or not.
- can completely control the rendered children from the container template, like <code>views-view.tpl.php</code>.
- contain special variables for injecting content at the beginning or the end of the template.

## Items

- are structured content made up of formats, components or both.
- do not print any wrapper markup by default.
- can be wrapped with containers if necessary.
- aim to kill most of the templates and theme functions that exist in Drupal today.
- can be overridden by format, component, type, and id.

## Both...

- Both containers and items share the same <a href="{{ site.baseurl }}/variables">variables</a>.


## Formats

Formats consist of HTML markup defined by the spec. See examples of this in the navigation menu on the left. Some important things to note about formats:

1. They need to be extremely flexible.
2. If possible they should have the exact same data structure no matter what format is being used (maybe table will be an exception, but I hope not), so they can easily be switched from one format to another.
3. They are variants (like theme hook suggestions) of <a href="{{ site.baseurl }}/item">item(s)</a>.
4. They can optionally use containers.

## Components

Components are usually a combination of contents and formats that make up custom UI elements. They tend to have recommended use cases for application and their implementation can vary from a CSS and JavaScript standpoint (where applicable), but their markup is usually pretty standard.
