---
title: Install Pandoc
author: muziejus
whatis:
version:
- windows: 2.2
---

<div class="pc">
<div class="win">

1. Navigate your browser to the [Pandoc installer
page](https://github.com/jgm/pandoc/releases/latest) and choose the
appropriate file to download. For us, the appropriate file is
`pandoc-2.2-windows-x86_64.msi`.

1. Once the file is done downloading, open it and accept the terms of the
agreement.

1. Tick the box for “Install for all users of this machine”

1. Click “Install” and then “Finish.”

Pandoc only works in the [terminal](/whatis/terminal), so it will not appear
as a program you can run just for fun.

</div>
<div class="mac mt-3">

{:module="/install/homebrew"}
#### Install Homebrew

Next, from your [terminal](/whatis/terminal), type

{% highlight shell linenos %}
brew install pandoc
{% endhighlight %}

and hit <kbd>return</kbd>.

</div>
</div>
