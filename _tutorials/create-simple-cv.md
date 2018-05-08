---
title: Create a Simple CV
create-button: A Simple CV
author: muziejus
tags: publishing latex pdf html 
---

This tutorial makes use of the
[simple-cv](http://github.com/muziejus/simple-cv) [GitHub](/whatis/github)
package to generate a CV that can be served both as a webpage and emailed as a
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

Now you can edit the YAML files in the `data` folder to personalize the
structure of the document.

The documentation for the package explains what the various options in
`data/format.yml` and `data/personal.yml`. Most notably, the `cv-sections:`
key in `data/format.yml` gives the list of files the package expects in
the `sections` folder. These should correspond to whatever is important in
your field for your CV. Similarly, you can reorder them or
[comment](/whatis/comment) out sections you don’t need right away.


