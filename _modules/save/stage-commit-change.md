---
title: Save, Stage, and Commit
author: muziejus
whatis:
---

<h2>Save</h2>

During the course of composing your post, assuming
[autosave](/whatis/autosave) is enabled in [Atom](/whatis/atom), your document
will be periodically saved. This is the first [Git](/whatis/git) stage in the process of
introducing changes into a [repository](/whatis/repository). 

Saving a file merely writes it to your disk. It doesn’t upload it, it
doesn’t save it to the cloud. It just writes to the disk.

<h2>Stage</h2>

Once files are saved, you have to stage them. That just means that you’re
preparing to commit the changes. In Atom, you stage files by first opening the
[Git Tab](/whatis/git-tab). Once the Git Tab is open, it lists the unstaged
files at the top of the tab. The workflow goes downward. Files have to move
down from unstaged to staged, and then from staged to committed.

Files with a green `+` are new files. Files with a yellow `•` are modified
files, and files with a red `-` are deleted files. Note that, for Git, a
renamed file is two files: one deleted and a new one created.

To stage a file, either click on the “Stage All” button or click on the file
and press <kbd>return</kbd>. Reverse the process to unstage.

When a file is highlighted in the Git Tab, the Unstaged Changes tab opens,
showing new additions in green and cuts in red. You can close this tab with no
worries.

<h2>Commit</h2>

Once you’ve made your changes and your files are staged, you can commit them.
When to commit is up to you. Too much committing can be overwhelming, and too
little can be useless. The general rule of thumb is to commit whenever an
important change is made. What counts as important is, again, up to you.

With the files staged, type in a useful commit message into the “Commit
message” field, like `Added post on burritos`. The “Commit to
[master](/whatis/master)” button
should become clickable now, and you can click to commit. 

Commits can be amended, rolled back, etc., but the general rule of thumb is to
treat saves, stages, and commits, with increasing levels of permanence. Save
always, stage very often, commit often. [Push](/whatis/push) when ready.
