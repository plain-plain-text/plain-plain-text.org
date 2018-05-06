---
title: YAML Cheatsheet
---

# YAML Cheatsheet

This cheatsheet introduces the basics of using [YAML](/whatis/yaml), a central
component to plain text communication. A YAML document describes a data
[object](/whatis/object)
that is then parsed by software. Because the YAML standard is meant to be
friendly to humans _and_ machines, it’s relatively easy to type.

As an object, a YAML document distinguishes itself by having many properties,
which it breaks down into three types, which I think of basic things
(scalars), lists (sequences), and other objects (mappings).

## The YAML document

YAML documents, for our purposes, begin and end with three hyphens `---` on a line
by themselves. Any text on a line following a `#` will be commented out and
ignored by the YAML parser.

{% highlight yaml linenos %}
# This is commented text, so it’s ignored
--- # This begins the document

# We’ll put some data in here

--- # This ends the document
{% endhighlight %}

In YAML, you _must use spaces and not tabs_. Furthermore, it’s important to
remember that property names must be separated from their values by a space,
too.

## Basic Things

The simplest YAML structure is a basic thing, which means that, typically,
it’s a string of text, a number, `true` or `false`, or a date. In the YAML
document, we map those basic things to a property. For example,
in [Jekyll](/whatis/jekyll), the [metadata](/whatis/metadata) (or frontmatter) often looks like this:

{% highlight yaml linenos %}
---
title: My great blog post
author: muziejus
date: 2018-05-01
include_profile_photo: true
---
{% endhighlight %}

The syntax is, then: `key: value`, where `value` is a basic thing.
If the string of text has a colon
in it, it’s best to surround the string in quotes, like:

{% highlight yaml linenos %}
---
title: "My great blog post: Why I write such great books"
---
{% endhighlight %}

## Lists

Lists (sequences) are lists of, typically, basic things. Say, for example, a
blog post has multiple authors.

{% highlight yaml linenos %}
---
title: Our great blog post
authors:
  - me
  - myself
  - I
---
{% endhighlight %}

Note that each author is on a separate line, preceded by hyphen and a space.
_More importantly_, note the two spaces before each hyphen. Because the
list of `me`, `myself`, and `I` makes up the property `authors`, each member
of the list is indented one level, like in an outline.

## Objects

So just as the YAML document itself is an object with certain properties (like
`title` and `author`), it’s possible to nest objects inside the document. Say
you want to describe a book in YAML, for example:

{% highlight yaml linenos %}
---
title: "Simians, Cyborgs, and Women: The Reinvention of Nature"
author: Donna Haraway
address: New York
publisher: Routledge
year: 1991
---
{% endhighlight %}

We have a bunch of these YAML documents, and each describes one book. So we
write a program that builds a bibliography out of it. But for some
bibliography styles, the first name goes first. And in others, the last name
goes first. Wouldn’t it be nice if the `author` property had sub properties,
like `firstname` and `lastname`? Yes. And doing so changes `author` from
referring to a basic thing to referring to an object. Now we have:

{% highlight yaml linenos %}
---
title: "Simians, Cyborgs, and Women: The Reinvention of Nature"
author:
  firstname: Donna
  lastname: Haraway
address: New York
publisher: Routledge
year: 1991
---
{% endhighlight %}

Note again, that the object is indented, like the list example above. 

## Mixing It Up

As you can probably guess, it’s possible to make lists of objects, lists of
lists, and objects with yet even more objects inside them. As long as the
indenting remains clear, everything should work fine. Here is an example where
`authors` takes a list of `author` objects:

{% highlight yaml linenos %}
---
title: The Hundreds
authors:
  - firstname: Lauren
    lastname: Berlant
  - firstname: Kathleen
    lastname: Stewart
address: Durham, NC
publisher: Duke University Press
year: 2019
---
{% endhighlight %}

YAML can do much, much more, of course, but this is probably sufficient for
our plain text needs.
