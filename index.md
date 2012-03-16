---
layout: post
title: Introduction
---

## Structure

There are 2 main structural concepts here to understand: Containers and Items. The main purpose of a container is to provide structure and wrap items. Items are also structured, but they contain actual data (content). Both containers and items share:

- the same data structure and <a href="{{ site.baseurl }}/structure/variables">variables</a>.
- special variables for injecting content at the beginning or the end of the template.

### Containers

- provide wrapper markup with attributes.
- contain <a href="{{ site.baseurl }}/structure/item">items</a>.
- can wrap anything and everything from regions to form elements.
- usually contain a heading, whether visually displayed or not.
- can print all children (items) right in the container template, like <code>views-view.tpl.php</code>.
- can be overridden by component, type and id.

### Items

- are structured content made up of formats, components or both.
- do not print any wrapper markup by default.
- can optionally be wrapped with containers.
- aim to kill most of the templates and theme functions that exist in Drupal today.
- can be overridden by format, component, type, and id.

### Formats

Formats consist of HTML markup defined by the spec. See examples of this in the navigation menu on the left. Some important things to note about formats:

1. They need to be extremely flexible.
2. If possible they should have the exact same data structure no matter what format is being used (maybe table will be an exception, but I hope not), so they can easily be switched from one format to another.
3. They are variants (like theme hook suggestions) of <a href="{{ site.baseurl }}/structure/item">item(s)</a>.
4. They can optionally use containers.

### Components

Components are usually a combination of contents and formats that make up custom UI elements. They tend to have recommended use cases for application and their implementation can vary from a CSS and JavaScript standpoint (where applicable), but their markup is usually pretty standard.

### Type

Types are used in Drupal today to define "Drupal elements." They can be a majority of different things, like form elements, nodes, blocks, etc.  When it comes to markup in a flexible system like Drupal, they are just not that special. Their relationship to the theme system today is way too tight. There are different theme functions and templates for these types and it just makes Drupal harder to work with. Drupal will always have types for processing, and this proposal does not aim to replace them, but they should not be the basis for defining our output. It just doesn't scale.
