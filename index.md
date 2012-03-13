---
layout: post
title: Definitions
---

## Structure

There are 2 main components here, but both serve the purpose of providing structural markup:

<dl>
  <dt>Containers</dt>
  <dd>Provide wrapper markup with attributes and share the same data structure and <a href="{{ site.baseurl }}/variables">variables</a>. The contents of containers are <a href="{{ site.baseurl }}/item">item(s)</a>. One really important thing about containers is that a themer can render all the individual children of a container inside the container's template, sort of how it's done in <code>views-view.tpl.php</code>.</dd>
  <dt>Items</dt>
  <dd>Provide wrapper markup (although there is none by default), and are designed to handle single and multiple pieces of output and go inside <a href="{{ site.baseurl }}/container">containers</a>.</dd>
</dl>

## Formats

Formats consist of HTML markup defined by the spec. See examples of this in the navigation menu on the left. Some important things to note about formats:

1. They need to be extremely flexible.
2. If possible they should have the exact same data structure no matter what format is being used (maybe table will be an exception, but I hope not), so they can easily be switched from one format to another.
3. They are variants (like theme hook suggestions) of <a href="{{ site.baseurl }}/item">item(s)</a>.
4. They can optionally use containers.

## Patterns

Patterns are usually a combination of contents and formats that make up custom UI components. They tend to have recommended use cases for application and their implementation can vary from a CSS and JavaScript standpoint (where applicable), but their markup is usually pretty standard.
