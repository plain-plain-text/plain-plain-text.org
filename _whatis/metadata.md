---
title: What Is Metadata?
author: muziejus
---

**Metadata** is “[data that provides information about other
data](https://en.wikipedia.org/wiki/Metadata).” In the context of plain text,
metadata is where we attach information to content that is not content per se.

Typical examples of metadata for plain text documents are precisely the sorts
of things you would find in a bibliographic listing, such a title, list of
authors, and publication information, including a date.

However, in plain text documents metadata can often signal other things, such
as what font to use when typesetting the document or what the margins should
be. It could be a set of coordinates that are then programmatically plotted on
a map in a webpage. Metadata is a way to get information to the computer that
is not, again, the actual _content_ of the document, but, rather, related to
it or describing it, the content.

In [Jekyll](/whatis/jekyll), metadata is called “[front
matter](https://jekyllrb.com/docs/frontmatter/). In both Jekyll and
[Pandoc](/whatis/pandoc), metadata is written in [YAML].
