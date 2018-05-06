---
title: Markdown Cheatsheeet
---

# Markdown Cheatsheet

This cheatsheet introduces the basics of using [Markdown](/whatis/markdown), a
central component to plain text communication. A lot of the syntax may seem
familiar from chatrooms or other online spaces.

## Text formatting

{% highlight markdown linenos %}
If I want to write in _italics_, I surround it by underscores.

For **bold**, I use **2** asterisks.
{% endhighlight %}

creates: 

<div class="card card-body pb-0 mb-3">
If I want to write in _italics_, I surround it by underscores.

For **bold**, I use **2** asterisks.
</div>

## Links

There are three kinds of links: to webpages, to images on the internet, and to
footnotes on the page.

### Linking to webpages

{% highlight markdown linenos %}
Writing some text in honor of [NYU](http://nyu.edu).
{% endhighlight %}

creates:

<div class="card card-body pb-0 mb-3">
Writing some text in honor of [NYU](http://nyu.edu).
</div>

As you can see, the “NYU” part makes up the _text_ of the link, in “[]”
brackets, and the parentheses is where you put the url.

### Linking to images

The syntax is identical, except you add an exclamation point:

{% highlight markdown linenos %}
![Bobst Library](https://i.imgur.com/o2jgwv2.png)
{% endhighlight %}

creates:

<div class="card card-body pb-0 mb-3">
![Bobst Library](https://i.imgur.com/o2jgwv2.png)
</div>

Here, “Bobst Library” appears as text to describe the image for people who
have impaired vision. Note that the image has to have a URL. I recommend
uploading images to [imgur.com](http://imgur.com) and then using those urls
for images.

### Linking to footnotes

Footnotes are a bit trickier, since while you’re writing, you can add a quick
marker to a footnote, but you have to define the footnote elsewhere:

{% highlight markdown linenos %}
This is some text I am writing about a footnote[^footnote-about-footnotes]

[^footnote-about-footnotes]: This is the text of the footnote.
{% endhighlight %}

creates:

<div class="card card-body pb-0 mb-3">
This is some text I am writing about a footnote[^footnote-about-footnotes]
</div>

[^footnote-about-footnotes]: This is the text of the footnote.

Scroll down to the bottom of the page to see the footnote. You can call the
footnotes whatever you want, but that name has to be in “[]” brackets, can’t
have spaces, and has to begin with a “^” caret.

## Headers

{% highlight markdown linenos %}
# This is a header

## This is a subheader

###### This is six levels down
{% endhighlight %}

creates:

<div class="card card-body pb-0 mb-3">
# This is a header

## This is a subheader

{:.mb-3}
###### This is six levels down
</div>

## Blockquotes

{% highlight markdown linenos %}
> A blockquote begins with a “>” symbol and continues until a blank line. For
multiple paragraph blockquotes, keep adding “>” symbols.
{% endhighlight %}

creates:

<div class="card card-body pb-0 mb-3">
{:.blockquote}
> A blockquote begins with a “>” symbol and continues until a blank line. For
multiple paragraph blockquotes, keep adding “>” symbols.

</div>

## Lists

Finally, lists. Much like how blockquotes begin with a “>”, lists begin with
either a “*” or a “1.” depending on whether you want an unordered or ordered
list.

{% highlight markdown linenos %}
* This
* is
* an
* unordered list
{% endhighlight %}

creates:

<div class="card card-body pb-0 mb-3">
* This
* is
* an
* unordered list
</div>

{% highlight markdown linenos %}
1. This
4. is
5. an ordered
1. list. Notice
100. that the numbers
2. don’t matter
{% endhighlight %}

creates:

<div class="card card-body pb-0 mb-3">
1. This
4. is
5. an ordered
1. list. Notice
100. that the numbers
2. don’t matter
</div>

There’s a whole lot more that Markdown can do, but this should cover most of
your bases for starters.
