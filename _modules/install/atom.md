---
title: Install Atom
author: muziejus
whatis: atom github command-palette
version:
- win: 1.26.1
- mac: 1.26.1
---

<div class="pc">
<div class="win">

1. Point your browser to [atom.io](https://atom.io) and click “Download.” 

1. Click on “Save File” to save the file. It’s a big file, which means the
   download may take some time. The file is saved to your “Downloads” folder.

1. Double-click on the downloaded file, called `AtomSetup-x64`.

1. Click “Run” when it asks for permission.

1. An image of a rocket being loaded with cargo should appear as the install
   takes place. Once the install is done, the Atom window should open.

1. Permit registering the default `atom://` URI handler This just means that
   if you get a webpage that begins with `atom://` (as opposed to `http://`,
   say), it will open in Atom.

</div>
<div class="mac">

1. Point your browser to [atom.io](https://atom.io) and click “Download.” 

1. Save the subsequent `atom-mac.zip` file to a place you will find it.

1. Double-click on `atom-mac.zip`, which creates an app called `Atom.app`.

1. Drag that `Atom.app` to your `Applications` folder (which you can open by typing
   <kbd><kbd>cmd</kbd> <kbd>shift</kbd> <kbd>a</kbd></kbd>).

1. Double-click on `Atom.app` to launch Atom.

</div>

Now that Atom is installed, you should immediately you see two panes beside
one another. One pane has three tabs, “untitled,” “Telemetry Consent,” and
“Welcome.” The other pane features the Welcome Guide. 

Panes hold tabs, and you can have many tabs as well as many panes, and panes
can even be stacked vertically, not just horizontally.

The following steps finish up your installation.

1. Uncheck the “Show Welcome Guide when opening Atom”

1. Close the “Welcome” pane (*not* the “Welcome Guide”).

1. Decide on the “Telemetry Consent” tab if you want to help Atom or not. It’s
   up to you. Choosing will close that tab, leaving you with “untitled,” a
   blank text document. 

1. Finally, enable autosave. Atom ships with autosave disabled by default. Enable it
   right away, if you like. First, open the [Command
   Palette](/whatis/command-palette).

1. Type in “Settings” and choose “Settings View: Open” from the list by
   clicking on it.

1. Now click on “Packages” beside an icon of a shipping box.

1. In the “Filter packages by name” field, type in “autosave”

1. An Autosave panel should appear under “Core Packages.” Click on the
   “Settings” button.

1. Scroll down to “Settings” and check the box beside “Enabled.”

Once this is all done, Atom is good to go. The *Atom Flight Manual* begins
with an [introduction to
Atom
basics](https://flight-manual.atom.io/getting-started/sections/atom-basics/)
which can introduce the application. 

It would be useful now to add some additional
[packages](/whatis/atom-package) for Atom:

{:module="add/atom-packages"}
#### Add Additional Atom Packages

Finally, a key benefit of Atom is its [Git](/whatis/git) integration, so now
is a good time to install it, too:

{:module="install/git"}
#### Install Git

</div>
