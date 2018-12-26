---
title: Create an Essay with Pandoc
create-button: An Essay with Pandoc
author: muziejus
tags: writing pandoc
whatis: pandoc
---

This tutorial aims to show you how, with a combination of [Git](/whatis/git),
[Pandoc](/whatis/pandoc), [TeX](/whatis/tex), and [Zotero](/whatis/zotero),
you can write a paper (or chapter or whatever) completely within
[Atom](/whatis/atom).

The workflow is like this:

1. Write the paper in [Markdown](/whatis/markdown) using Atom, keeping track
   of changes with Git.
1. Have Pandoc convert the Markdown file into a file TeX can use or a Word
   document, depending.
1. Have TeX build a [pdf](/whatis/pdf).

What about Zotero? It’s in the background, handling your citations.

## Initialize the Essay with a Repository

If you want to use [GitHub](/whatis/github) to hold backups of your work, you
should create a [repository](/whatis/repository). If you qualify for the
[GitHub Student Developer Pack](https://education.github.com/pack), you can
make the repository private and hide your work in progress. Otherwise, you can
create a [local repository](/whatis/local-repository).

## Start Writing

Now you can start your essay. We recommend creating two new files,
`metadata.yml` and `main.md`.

{:module="create/new-file-in-github-repository"}
#### Add a New File to a Repository

`metadata.yml` is a [YAML](/whatis/yaml) file that holds the metadata for your
document. For starters, it should have a `title:`, `author:`, and `date:` set:

{% highlight yaml linenos %}
---
title: My Great Essay
author: My Better Name
date: 2018-05-01
---
{% endhighlight %}

Note that the date is written as `yyyy-mm-dd`.

`main.md`, on the other hand, is just a Markdown file that you write in, using
the syntax from our [Markdown cheatsheet](/cheatsheets/markdown) to add
italics and footnotes and images, if necessary. See below for citations.

## Process the Markdown with Pandoc

<div class="pc">
<div class="mac">
Once you have a bit typed, and you want to see how it will look typeset as a
pdf, you need to use [Run-command](/whatis/run-command) to summon pandoc. Type
into the run-command window:
</div>
<div class="win">
</div>
</div>

{% highlight shell linenos %}
pandoc -sr markdown+yaml_metadata_block --pdf-engine=xelatex metadata.yml main.md -o main.pdf
{% endhighlight %}

Press <kbd>return</kbd> and, after a few seconds, a file called `main.pdf`
should appear in your repository.

