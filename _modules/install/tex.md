---
title: Install TeX
author: muziejus
whatis: 
version:
- mac: MacTeX-2018
- win: MikTeX 2.9.6643
---

Before continuing, it’s important to underscore again that [TeX](/whatis/tex)
is a *system* of applications, scripts, and files. As such, it’s a big
behemoth and installed as a distribution (as opposed to just “an app”).

<div class="pc">
<div class="win">

1. Point your browser to the [MiKTeX on
   Windows](https://miktex.org/howto/install-miktex) introduction. That gives
   good instructions, but, if you’re in a rush…

1. Download the [basic installer](http://miktex.org/download/), which as of
   this tutorial, is a file named `basic-miktex-2.9.6643-x64.exe`.

1. Once the file is done downloading (it is 207mb), open it. 

1. Accept the MiKTeX copying conditions and click “Next.”

1. Keep clicking “Next,” but set your paper to the appropriate size. The
   default is A4, which doesn’t work in the US. 

1. Click “Start” to begin the installation.

1. Click until the final screen, where you should uncheck the “Tell me more”
   offer and then click “Close.”

Test that the installation worked by opening a [terminal](/whatis/terminal) and typing:

{% highlight shell linenos %}
tex --version
{% endhighlight %}

The first line of output should read something like `MiKTeX-TeX 2.9.6300 (3.14159265) (MiKTeX 2.9.6630 64-bit)`.

</div>
<div class="mac">
Macs have two main TeX distributions, [MacTeX](https://tug.org/mactex/) and
[BasicTeX](https://www.tug.org/mactex/morepackages.html). They’re both
provided by the same people, but BasicTeX is more lightweight. The MacTeX
installer weighs in at over 3gb, and the full install pushes past 4gb on you
hard drive. BasicTex, in comparison, is around 75mb.

A new version of the software appears once a year, and then it’s updated when
necessary until it’s time for next big version.

### For MacTeX

1. Download the installer from [tug.org/mactex/mactex-download.html](https://tug.org/mactex/mactex-download.html)

1. Once the .pkg file is downloaded, double click it and click “Continue”
through all the defaults until you have to “Agree” to the license
agreement.

1. Next, if you’re certain you’ll only use TeX through [Pandoc](/whatis/pandoc), you
can click “Customize” and deselect “GUI-Applications” and “Ghostscript” to
save some space.

1. Click “Install.”

1. Once the installer says that “The installation was successful,” you can
   click “Close.”

Everything should be set. Test if TeX is available by opening the
[terminal](/whatis/terminal) and entering

{% highlight shell linenos %}
tex --v
{% endhighlight %}

  The first line of output should read `TeX 3.14159265 (TeX Live 2018)`.
</div>
</div>
