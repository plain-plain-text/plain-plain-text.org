---
title: Install Git
author: muziejus
whatis: git atom github
version:
- win: 2.17.0-64-bit
---

Using [Git](/whatis/git) is not required for full integration into the plain
text universe, but putting your files under version control provides many
benefits.

Before installing Git, you should


{:module="create/github-account"}
#### Create a GitHub Account

<div class="pc">
<div class="win">


1. Point your browser to
   [git-scm.com/download/win](https://git-scm.com/download/win) and let the
   download automatically begin by clicking “Save File.” The file is saved to your “Downloads” folder.

1. Double-click on the downloaded file, called “Git-{{ page.version.win }}” (your version number may vary).

1. Click “Run” when it asks for permission.

1. Click “Next” through all the options. There are many, and the defaults are
   all fine. The system is now installing git but also an interface for git
   (Git Bash), which, hopefully, you will only have to use once, and that is
   during this tutorial.

1. When the install is finished, tick the box beside “Launch Git Bash” and
   untick the box beside “View release notes.” Click “Finish”

1. The black terminal window for Git Bash should appear.

1. Now type two commands into the Git Bash window (copy paste doesn’t work, so
   type carefully:

   `git config --global user.email "theemailaddress@you.gave.github.com"`

   Hit “Enter” and then:

   `git config --global user.name "yourgithubusername"`

   And hit “Enter.”
</div>
<div class="mac">

In your [terminal](/whatis/terminal), type

{% highlight shell linenos %}
git --version
{% endhighlight %}

and hit <kbd>return</kbd>. Your Mac will prompt you to install git via the XCode command
line tools.

</div>
</div>
