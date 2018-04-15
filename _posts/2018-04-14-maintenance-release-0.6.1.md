---
layout: post
title: "Maintenance Release: Pencil2D 0.6.1"
tagline: ""
categories: "Release Note"
image: "/images/pencil_icon.png"
author: "The Pencil2D team"
published: false
comments: false
---

Hello, Pencil2D users! We are excited to announce our first maintenance release after the official 0.6 version with dozens of bug fixes and improvements.

## What's new in v0.6.1

In this version, you will get a better, faster, lighter Pencil2D in many aspects. It takes less time to save/load a project, 3 times faster in exporting movies and GIFs. And the memory usage is greatly reduced, which is good news if you are working on large projects with hundreds of frames. Please go directly to the [download page](https://pencil2d.org/download) and get Pencil2D 0.6.1 with all the benefits and fixes.

### Pencil2D as a brand
While we have smashed numerous bugs, improvemented and added several new features, we also decided to give the original Pencil2D a facelift.

Since our project is a fork of the old Pencil animation drawing project by **Pascal Naidon**, we decided that it was time to change the appearance of Pencil2D, make it feel like it truly belongs to us.

In that sense we've given the icon a needed facelift, making it both stand out from any other application, while also retaining the look of the old icon.

![pencil2d](https://user-images.githubusercontent.com/1045397/38779313-da53598c-40c6-11e8-8910-28725c068673.png)


### Shiny new tool icons!
Although they've been available for a long time via the nightly builds, the new tool icons has finally arrived!
![toolicons](https://user-images.githubusercontent.com/1045397/38779287-607263c4-40c6-11e8-8aeb-7bc1ad010ce7.png)

### Dock(ception)
With great customization comes even greater docking!
![docking](https://user-images.githubusercontent.com/1045397/38779399-3321f81a-40c8-11e8-827b-c53cf75f798a.gif)

### Reducing Memory Usage

Reducing memory usage is one of the main goals of v0.6.1. In a 1321-frame sample project, it was using 1.8GB RAM in Pencil2D v0.6. But in v0.6.1, the initial RAM usage is down to 31MB after loading up the project. And it increases slowly to about 370MB over time but never goes over 400MB. We hope this change could help those users with low-end device have better experience.

### Speeding up Movie exporting

The same 1321-frame project, it was taking 42.7 seconds to export a mp4 video in v0.6. But in v0.6.1 it takes only 8.5 seconds to get it done. And  


### New
* #821 Brand new tool icons.
* #849 Allowing nested dock panels.
* The layout of tool buttons will change automatically by its width and height.
* Re-added zoom levels, now available via View->Zoom in/out or their respective shortcuts.
* Be able to set the pen width to 2 decimal places.
* Auto extend Timeline length when users reach the end of Timeline.
* #905 Greatly reduced the memory usage.
* Speeding up project save and load significantly.
* #876, #904 Greatly speed up the movie export and reduce temporary used disk space during exporting.
* Updated app icons.
* #513, #904 Allowing export APNG (Animated PNG) format.
* #857, #899 Importing image sequence now has progress bar. -- [Martin van Zijl](https://github.com/martinvanzijl)
* #851, #898 Fixed the FPS spinbox didn't work on Ubuntu 14.04. -- [Martin van Zijl](https://github.com/martinvanzijl)
* #836 Improved the canvas quality when the zoom level is less than 100%.
* #810, #813 Export video via command line.
* #818, #835 Improved Gif exporting quality.
* #288 Added `webm` format for video exporting.
* #434 Give more information in about dialog.
* #530, #850 Migrate the internal zip engine from Quazip to Miniz.
* #747 Can turn each sound layer on/off separately by switching visibility.
* Added languages: Indonesia, Hebrew, Vietnamese, Slovenian and Portugal Portuguese.

### Fixes

* #816, #819 Not able to type correct values into HSV and RGB boxes.
* #826 The save dialog showed twice on OSX when quitting from dock.
* #826 "Cancel" button of save dialog was ignored.
* #412, #814 Duplicate key wasn't working in some cases.
* #831 App crashed when duplicating a sound key.
* #830 Can't save .pcl multiple times after importing sound layers.
* #845 The framerate wasn't accurate when playing animation. 
* #828 The app stalled when using dotted cursor and zooming-in very much.
* #739, #889 Vector outlines are not drawn when Horizontal Flip and Show Outlines Only are activated. -- [Martin van Zijl](https://github.com/martinvanzijl)
* #735, #913 Some shortcuts are broken, file extensions are case-sensitive in image sequence import -- [Nick](https://github.com/Spark01)
