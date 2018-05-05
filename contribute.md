---
title: Contribute to Plain Plain Text
---

# {{ page.title }}

Plain Plain Text is, hopefully, a massively collaborative project, so this
page aims to show somewhat experienced users how to contribute by revealing
how the modules are built, etc. But the easiest thing to do is to
[read our contributor code of
conduct](https://github.com/plain-plain-text/plain-plain-text-www/blob/master/CONTRIBUTOR_CODE_OF_CONDUCT.md)
and [create a pull
request](https://help.github.com/articles/creating-a-pull-request/).

## Structure of the site

If you look at [the repository for this
site](https://github.com/plain-plain-text/plain-plain-text-www), you can see
that it’s a [Jekyll](/whatis/jekyll) site, with three collections of
particular interest to contributors:

* `_modules` holds all the individual modules. The first level of directories
  to the directory are all verbs, like “add” or “install” to force thinking
  about modules as active, goal-driven tasks. 
* `_tutorials` holds the master, main tutorial files. Modules can’t be loaded
  as individual web pages (well, they can, but it’s not pretty).
* `_whatis` holds the description files that open the cards that define key
  terms.

## Style

The site uses JavaScript to create the cards. 

### Modules

`<h4>` headers are turned into the green buttons that open modules, and the
appropriate module is indicated via the `module` property in the `<h4>` tag. More concretely,
[Markdown](/whatis/markdown) code like this:

{% highlight markdown linenos %}
{% raw %}
{:module="install/atom"}
#### Install Atom
{% endraw %}
{% endhighlight %}

is converted into `<h4 module="install/atom">Install Atom</h4>`, which the
site’s JavaScript subsequently turns into a green button and hidden card
holding the `_modules/install/atom.md` module that appears when the button is
clicked.

### Descriptions

The JavaScript looks for links to urls that begin with `/whatis/` and
converts those links into links that open description cards. For example,
again, [Markdown](/whatis/markdown) code like this:

{% highlight markdown linenos %}
[atom](/whatis/atom)
{% endhighlight %}

is converted into `<a href="#">Atom<sup><i class="fas
fa-question-circle"></sup</a>`, with a lot of Bootstrap-specific code
suppressed, in addition to the hidden card with the description it it that
appears when you click on the link. 

Descriptions should be kept short, with longer exposition saved for an
install module or something similar. They should be unobtrusive.

### Mac/Windows toggler

Simply, the JavaScript looks for entities with the class `.pc` and adds the
toggler inside. Then, the OSX-specific code is in an entity with the class
`.mac`, and the Windows-specific code in one with the class `.win`. As such,
something like this:

{% highlight html linenos %}
<div id="parentDiv" class="pc">
  <div class="mac">
    <!-- Mac content -->
  </div>
  <div class="win">
    <!-- Windows content -->
  </div>
</div>
{% endhighlight %}

adds the icon toggler at the top of `#parentDiv` and then hides whichever
`<div>` as needed. This is also possible to achieve in
[Markdown](/whatis/markdown), but it requires a bit of clunky code:

{% highlight markdown linenos %}
{% raw %}
{:.pc}
The **Command Palette** is a small box in Atom that lets you search for
command names and then execute them. Launch it by typing
<kbd><kbd>cmd</kbd> <kbd>shift</kbd> <kbd>p</kbd></kbd>{:.mac}
<kbd><kbd>ctrl</kbd> <kbd>shift</kbd> <kbd>p</kbd></kbd>{:.win}.
{% endraw %}
{% endhighlight %}

This adds `.pc` to the enclosing `<p>` for the whole paragraph, including the
`<kbd>` tags inside it, and
`.mac` and `.win` to the appropriate parent `<kbd>` tags. 
