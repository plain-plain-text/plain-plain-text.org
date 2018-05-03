---
title: Clone a Repository
author: muziejus
whatis: git atom github control-palette home-directory
---

Cloning a repository grabs it from a remote location (in our case, a
[GitHub](/whatis/github) server) and saves it to your local computer. The
remote location takes the format of:
`http://some.server.name/some-repository.git`. You may be emailed this
location or get it in a handout. If you want to clone a specific repository
from GitHub, the process is straight forward:

1. Point your browser to the repository’s GitHub page, typically of the format
   `https://github.com/some-user-or-org-name/repository-name`. 

1. On the front page of the repository, there should be a green button, “Clone
   or download.” When you click on it, a box should appear, offering to “Clone
   with HTTPS.”

1. Beneath the line “Use Git or checkout with SVN using the web URL” is the
   url for the repository, which you can now copy.

1. Open [Atom](/whatis/atom). 

1. Open the [Command Palette](/whatis/command-palette).

1. Type “clone” into the Command Palette window, and the command “GitHub:
   Clone” should appear. Click on that.

{:.pc}
1. Now a window with two field should appear, “Clone from” and “To directory.”
   Paste the url above into “Clone from.” Note, however, where it plans on
   saving your repository. The default value is a `github` folder in
   your [home directory](/whatis/home-directory), that is,
   `/Users/yourusername/github`{:.mac} `C:\Users\yourusername\github`{:.win}.

1. When you press “Clone,” Atom will download the repository and open in in a
   new pane, the [Tree View](/whatis/tree-view), all the way on the left of
   the window, and at the top, just under “Project” should be the name of
   your repository beside an icon of a book, with your files below. Similarly,
   on the far right, it will open the [Git Tab](/whatis/git-tab), where your
   changes 
