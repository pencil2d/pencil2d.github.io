---
layout: post
title: "Maintenance Release: Pencil2D v0.6.1"
tagline: ""
categories: "Release Note"
image: '{{ "/images/pencil_icon.png" | relative_url }}'
author: "The Pencil2D team"
published: true
comments: true
---

We are excited to announce our first maintenance release after v0.6 with dozens of bug fixes and improvements. Please go to our [Download Page]({{ "/download" | relative_url }}) and download the new version.

## What's new in v0.6.1

Although it is a maintenance release but still something to be excited about. With Pencil2D v0.6.1, you will get a better, faster, lighter Pencil2D in many aspects. Here are some of the highlights of this release:

## Pencil2D as a brand

While we have smashed numerous bugs, improved and added several new features, we also decided to give the original Pencil2D a facelift.

<img src="{{ "/images/pencil2d-logo.png" | relative_url }}" style="float:left;" alt="Pencil2D Logo">

Since our project is a fork of the old Pencil animation drawing project by **Pascal Naidon**, we decided that it was time to change the appearance of Pencil2D, make it feel like it truly belongs to us.

In that sense we've given the icon a needed facelift, making it both stand out from any other application, while also retaining the look of the old icon.

<div style="clear:both;"></div>

## Shiny new tool icons!

Although they have been available for a while via the nightly builds, the new tool icons has finally arrived!

![Tool icons]({{ "/images/shiny-new-tools.png" | relative_url }})

## Dock (ception)

With great customization comes even more flexibility in docking!


<video width="800" height="590" autoplay loop style="border:solid 3px #999">
  <source src="{{ "/images/docking.mp4" | relative_url }}" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Speeding up Movie exporting

Exporting movie is blazing fast now. Exporting a 1321-frame project to mp4 was taking **42.7 seconds** but only **8.5 seconds** in v0.6.1. Similarly, GIF exporting time goes down from **53.8 secs** to **17.6 secs**.

## Lowering Memory Usage

We heard some of our users said, Pencil2D became very unstable when they created more than 700 frames. This is probably caused by high memory usage and we decided to improve it.

As a result, a 1321-frame project which used **1.8GB RAM** in v0.6 now never takes more than **400MB RAM**. We hope this change could bring you better experiences on low-end devices.

## Faster Project Load/Save

In this new version, Pencil2D takes much less time to save/load projects. On the loading side, Pencil2D loads only a few key frames at beginning so you can start animating without waiting for all frames to load at once. On the saving side, Pencil2D saves edited frames only and skips those unchanged frames. It will make a big difference when you are working on a large project with hundreds of frames.

Also we hope this change can make the "auto-save" feature less annoying and doesn't let it interrupt you from animating too long.

## Quick Reference Guide

Need help in using Pencil2D? Press `F1` for the **Quick Reference Guide**, it's a handy pocket-sized guide that contains the instructions for all basic functionalities. (By Radhika Sundararaman)

## Localization

5 new languages added: **Indonesia, Hebrew, Vietnamese, Slovenian and Portugal Portuguese**. Can't find your language or want to improve the existing translations? [Join us on Transifex](https://www.transifex.com/pencil2d/pencil2d/)!

## Other Improvements

* Can turn each sound layer on/off separately by switching visibility.
* Automatically change the layout of tool panel by its width and height.
* Auto extend Timeline length when users reach the end of Timeline.
* Re-added zoom levels, now available via View->Zoom in/out or their respective shortcuts.
* Set the pen width to 2 decimal places.
* Allowing export `APNG` (Animated PNG) format.
* Added `webm` format for video exporting.
* Importing image sequence now has progress bar. By [Martin van Zijl](https://github.com/martinvanzijl)
* Improved the canvas quality when the zoom level is less than 100%.
* Export video via command line.
* Improved Gif exporting quality.
* Give more information in about dialog.
* Migrate the internal zip engine from Quazip to Miniz.

## Fixes

* FPS spinbox didn't work on Ubuntu 14.04. By [Martin van Zijl](https://github.com/martinvanzijl)
* Not able to type correct values into HSV and RGB boxes.
* Save dialog showed twice on OSX when quitting from dock.
* "Cancel" button of save dialog was ignored.
* Duplicate key wasn't working in some cases.
* App crashed when duplicating a sound key.
* Can't save `.pcl` multiple times after importing sound layers.
* The framerate wasn't accurate when playing animation.
* The app stalled when using dotted cursor and zooming-in very much.
* Vector outlines are not drawn when Horizontal Flip and Show Outlines Only are activated. By [Martin van Zijl](https://github.com/martinvanzijl)
* Some shortcuts are broken, file extensions are case-sensitive in image sequence import By [Nick](https://github.com/Spark01)

## Help improve Pencil2D

Pencil2D is developed by passionate people on their spare time. If you like this software, and you want it to get better, you can help! Please visit [Contribute Page]({{ "/contribute" | relative_url }}) or [Community]({{ "/community" | relative_url }}) for further information.
