---
title: Create a Simple CV
create-button: A Simple CV
author: muziejus
tags: publishing latex pdf html 
---

This tutorial makes use of the
[simple-cv](http://github.com/muziejus/simple-cv) package at [GitHub](/whatis/github)
to generate a CV that can be served both as a webpage and emailed as a
[pdf](/whatis/pdf).

It works by reading two [YAML](/whatis/yaml) files that feature configuration
options and personal information. Then it also reads in
[Markdown](/whatis/markdown) files to generate the body of both documents. It
then uses [Pandoc](/whatis/pandoc) and [TeX](/whatis/tex) to generate the web
page and pdf. 

First, fork the simple-cv [repository](/whatis/repository):
`https://github.com/muziejus/simple-cv`

{:module="fork/repository"}
#### Fork a repository on GitHub

You should now have a repository at
`https://www.github.com/your-github-username/simple-cv`. That is the repository
you now clone.

{:module="clone/repository"}
#### Clone a repository into Atom

## Personalizing the Data Files

Now you can edit the YAML files in the `data` folder to personalize the
structure of the document.

The documentation for the package explains what the various options in
`data/format.yml` and `data/personal.yml`. Most notably, the `cv-sections:`
key in `data/format.yml` gives the list of files the package expects in
the `sections` folder. These should correspond to whatever is important in
your field for your CV. Similarly, you can reorder them or
[comment](/whatis/comment) out sections you don’t need right away.

## Filling out the Sections of the CV

Every section of the CV (“Education,” “Publications,” etc.) corresponds to a
line in the `cv-sections:` list in `data/format.yml` and to a file in the
`sections` folder. So the Education section is described in
`sections/education.md`. These files are [Markdown](/whatis/markdown), so you
can use headings and lists and links as you like.

Each section file *should* begin with a second level heading, like:

{% highlight markdown linenos %}
## Education
{% endhighlight %}

## Generating the Webpage and pdf

Once you have a certain amount finished, using
[run-command](/whatis/run-command), execute:

{% highlight markdown linenos %}
ruby process-cv.rb
{% endhighlight %}

You should see, at the bottom of your Atom screen,

{% highlight markdown linenos %}
Could not find ./fonts/EBGaramond12-Regular.otf, defaulting to Computer Modern
Could not find ./fonts/EBGaramond12-Italic.otf, defaulting to Computer Modern
Could not find ./fonts/SourceCodePro-Regular.otf, defaulting to Computer Modern
Generated docs/out.tex
Generated docs/H_W_Jones.pdf
Generated docs/index.html
Command exited
{% endhighlight %}

The package ships expecting font files that don’t exist. If you want to use EB
Garamond, you can [download the otf files
freely](https://bitbucket.org/georgd/eb-garamond/downloads/) and put the files
in the `fonts` folder. Source Code Pro you can [download
freely](https://github.com/adobe-fonts/source-code-pro/releases/tag/2.030R-ro%2F1.050R-it)
as well, even though it’s not actually used in the default template.

## Put your Webpage and pdf Online

When you like your changes, it’s time to save, stage, commit, and
[push](/whatis/push).

{:module="save/stage-commit-change"}
#### Save, Stage, and Commit the CV

{:module="push/to-github"}
#### Push the CV to GitHub

Finally, in order to serve the files in `docs` as a webpage and pdf, you need
to enable [gh-pages](/whatis/gh-pages) on your repository.

