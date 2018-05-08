---
title: Create a Local Repository in Atom
---

To create a new [local repository](/whatis/local-repository), we need to get
Atom out of our current projects, otherwise it keeps creating new files within
those projects.

Open the [Command Palette](/whatis/command-palette) and type `new wind` until
you can select “Application: New Window.” Choose that, and a blank window with
a file called `untitled` should appear. Type into that window:

{% highlight markdown linenos %}
# My local repository

This is a local repository. It is not backed up to GitHub.
{% endhighlight %}

Open up the Command Palette again and this time type `save` until you can
select “Core: Save.” Choose that.

Now you have to do two steps here: create a new folder for your project and
save the document *inside* that folder.

<div class="pc">
<div class="mac">
Under “Where:,” it probably reads “github.” You want to save to a new folder,
so click on the dropdown arrow up by “Save As:” Now a full dialog box should
appear. Navigate to where you want your project to be, and click on the “New
Folder” button.

Type in the name of the new folder and then click “Create.” The computer will
automatically put you inside that folder, so now you can type, into “Save
As:,” `README.md`.
</div>
<div class="win">
<div class="alert alert-warning">
Windows instructions for creating a new folder and saving to it not yet
available, but you should name the file `README.md`.
</div>
</div>
</div>

Once the file is saved, the [Tree View](/whatis/tree-view) should now open
with your `README.md` file inside the folder you created. Similarly, the file
should now show coloring that indicates that Atom recognizes that it is a
[Markdown](/whatis/markdown) file.

Next, open the [Git Tab](/whatis/git-tab), and there should be a large button
there labeled “Create Repository.” Click on that, and you will be prompted
with the location of the folder you just created. Click “Init,” and now you
have a local repository. You should have a folder called `.git` appear just
above your `README.md` file in the Tree View.

Now save, stage, and commit README.md. You won’t need to push, because this
repository is local.

{:module="save/stage-commit-change"}
#### Save, Stage, and Commit README.md
