---
layout: page
title: FAQ
tagline: Frequently Asked Questions
comments: true
---

> **NOTE:** Since people are asking the same things over and over, we provide a much needed FAQ, please bear in mind we are working hard on solving stuff. If you'd like to suggest other "frequently asked questions" please leave comments. Note that you'll have to login into a DISQUS account to comment in this page.

{% include toc.html %}

## Where's the [Insert OS here] version? Why isn't my [OS] version updated?

At the time of writing, Pencil2D can run on:

- Windows 7 or later versions
- MacOS 10.10 Yosemite or later version
- Linux Ubuntu 16.04, OpenSUSE 42.1 and RedHat 6.6 or later version.

It's rather difficult to get Pencil2D working on some older OS like Windows XP or Mac OS 10.9, particularly since the devs are not able to access these old Operating Systems.

If you have these old machines and you'd like, please consider giving some of your time to improve this wonderful tool!

## I hear about "Nightly Builds" so what is it?

Nightly Builds are the most up-to-date, experimental versions that reflects the most recent development progress. In Nightly build you can have the latest features and bugfixes. But you have to understand the nightly builds are not final versions and can break easily.

However, we encourage you to try the latest Nightly Builds whenever you encounter an issue with current pencil2d version, to see if the problem has already been fixed. That can help our dev team to avoid unnecessary or duplicate bug reports.

**Nightly Builds** [DOWNLOAD HERE](/download/#nightlybuild)

## Understanding Pencil2D Save files .PCL

When you save your animation file in Pencil2D there are several things that you'll get.

1. Pencil2D saves a **.PCL** file that is exclusive to the software. It is **not** an image or a video file, that means it does **not** hold inside any of image or sound you imported or created. It's more like an address book, which locates all those resources you've created or imported!

2. A New folder is automatically created in the same location next to your .PCL file. It's name should be like something like this `MyFileName.pcl.data`. This folder contains all of your actual drawn keyframes saved as numbered .PNG images! as well as Your current colour palette info plus your "vector shapes" information are included there as .xml and .vec files respectively. If you import sound for example (see partial solution below), you'll also see a copy of the actual sound file in this folder. All of the resources in the folder are absolutely necessary for Pencil2D to understand how your animation is going to be displayed when you preview it inside the program.

3. The **.PCLX** file from 0.6+ on the other hand is basically a container. It’s a compressed ZIP file that holds both the .PCL file and it’s associated DATA folder. You can extract it’s contents effortlessly if you rename the .PCLX extention to .ZIP (e.g myAnimation.PCLX -> myAnimation.ZIP)

## Pencil2D keeps crashing (/sob) / Something happened and I couldn't save my work!

Fortunately Pencil2D has an autosave feature for those moments when you forget to save!

On every version you can access it like this:

**EDIT > PREFERENCES > FILES > Enable Autosave [ ] (click checkbox)**

![Autosave Preferences](http://i.imgur.com/CaRcfof.png)

The “Number of modifications before autosaving” is pretty self-explanatory. After 15 strokes you’ll get your file auto-saved. You can obviously change that number.

Also when you activate that without having saved, ever, after 15 changes you’ll be prompted to save for the first time your file.

## I can’t import videos, what's up?

This issue has been fixed. Please download Pencil2D 0.6.0 or later version.

## When I import sounds, I can see it on the layer, but I can’t hear anything?

This issue has been fixed. Please download Pencil2D 0.6.0 or later version.

## Hey, I can’t export videos!?

This issue has been fixed. Please download Pencil2D to 0.6.0 or later version.

## Can I copy and paste in place specific content from one frame to another inside Pencil2D?

Yes, to COPY a portion of your drawing, you can use the selection tool (dotted marquee) select a partial section of your drawing and press CTRL+C. You'll know you did it correctly because the selection box will dissappear. Go to a new frame you have already created or create one now, then pres CTRL + V, and your selection will be pasted in place.

If you need to CUT something from one frame to another, it WON'T work, you'll lose whatever you cut because it didn't go to the clipboard. So it's recommended (meanwhile it's fixed) that you always copy and paste, then delete the content on your previous frame.

Here's a video tutorial that explains this plus a bonus (hackish) method to mirror your drawing inside Pencil2D:

[![Watch on Youtube!](http://img.youtube.com/vi/37Ui5KbVqk4/hqdefault.jpg)](https://youtu.be/37Ui5KbVqk4)

## I like Pencil2D but... it is a bit buggy :'( , what can i do?

We feel you, but every great piece of software you might know began in a humble way. Right now Pencil2D is in need of developers experienced or willing to learn Qt framework and C++ as well as proactive users that want to help however they can.

Pencil2D won't get hot just by looking at it, in fact there's more chances that you'll hate it the more you look at it. We need YOU for miracles to happen! [Consider donating your time](/contribute/) to report bugs, create art or just hang out with us at the forum while we wait for the next release.

For more information on how to contribute to Pencil2D's code visit our [Github Respository](https://github.com/pencil2d/pencil#pencil2d-animation)

## OMG Pencil Crashed and my files are unusable / corrupted!!!11!1! /cry!!!

A proper crash recovery has already been in our development plan, we won't let you wait too long!

--------
Some of the original FAQ solutions were contributed by user Piggy and user morr.
