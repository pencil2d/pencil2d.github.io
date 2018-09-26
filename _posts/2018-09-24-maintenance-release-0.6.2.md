---
layout: post
title: "Maintenance Release: Pencil2D 0.6.2"
tagline: ""
categories: "Release Note"
image: "/images/pencil_icon.png"
author: "The Pencil2D team"
published: false
comments: true
---

Welcome to Pencil2D v0.6.2. In this version, we fixed a rather critical file-saving issue which had annoyed us for a while. In order to avoid any chance that you may lose your work accidentally, we are encouraging all v0.6.1 users to upgrade to v0.6.2 as soon as possible. Additionally, v0.6.2 comes with heaps of improvements and fixes. Download it now from the [Download Page](https://pencil2d.org/download).

## What's new in v0.6.2

<img src="{{ "/images/pencil2d_horizontal_banner_1024x256_trans.png" | relative_url }}" alt="Pencil2D Banner">

### New Colour inspector

![img color inspector](/images/pencil2d-color-inspector.gif)

A completely overhauled colour inspector. 

### Auto Keyframe Insertion

Pencil2D now comes equipped with different behaviors for automatic keyframe creation. You can switch between these behaviors on your preferences and they will take effect when drawing on an empty frame on the timeline to either:

+ Add New (blank) keyframe
+ Duplicate the previous keyframe
+ Keep drawing on the previous keyframe (default behavior)

![preferences window > timeline section](/images/properties_timeline.png)

A huge thank you to Martin Van Zijl for implementing this feature!

### Import/Export a GIF

It is probably one of the most asked questions: "Can I export my animation as a gif?" Yes, you sure can. GIF Import/Export is working since v0.6, but many people had difficulties finding it so we have made this option more visible in both Import / Export related menus.

![import / export menus > animated gif](/images/gif_import_export.jpg)

### Import/Export Gimp Palette

Now Pencil2D supports the GIMP (.gpl) palette format.

### File-saving process

A couple of users (especially from Windows platform) [reported](https://github.com/pencil2d/pencil/labels/bug%3A%20file-save) that they encountered an error from Pencil2D v0.6.1 while saving a file and not able to open it again. We put a lot of effort to track down the issues and try to make sure your work will be saved correctly and smoothly.

**Note**: Although this issue has been fixed for most foreseeable scenarios we urge all our users to consider following the [Pencil2D file corruption prevention / recovery guide](https://discuss.pencil2d.org/t/pencil2d-project-file-corruption-prevention-recovery-guide/3105) to avoid losing work in the odd chance you are affected by this problem in the current release.

## Enhancements

- [#954][954] Disable onion skins while playing a animation.
- [#971][971]: Brought `Remove Color` button back to the palette and context menu.
- [#975][975]: Timeline will auto-extend the length when reaching the 70% of the current length.
- [#997][997]: Can export image sequence by a given range.
- [#1028][1028]: Improved color palette selection behaviours.
- [#1039][1039] Added command line completion for bash and zsh
- [#1051][1051]: Auto-crop bitmap images

[954]: https://github.com/pencil2d/pencil/issues/954
[971]: https://github.com/pencil2d/pencil/issues/971
[975]: https://github.com/pencil2d/pencil/issues/975
[997]: https://github.com/pencil2d/pencil/issues/997
[1028]: https://github.com/pencil2d/pencil/issues/1028
[1039]: https://github.com/pencil2d/pencil/issues/1039
[1051]: https://github.com/pencil2d/pencil/issues/1051

## Fixes

- [#948][948]: Remove `.tiff` format support since it failed always.
- [#949][949]: The selection rectangle disappeared in some scenarios.
- [#955][955]: Line stabilizer and anti-alias settings were reset to default values after reopening Pencil2D.
- [#970][970]: Color Wheel should always use full value and saturation.
- [#999][999]: Update camera bound immediately after chaging camera resolutions.
- [#1038][1028]: Reduced the high memory usage when exporting a long project as a movie.
- [#1043][1043]: Error occurred if opening a project twice in a row.
- [#1058][1058]: Vector eraser tool calculated the distance incorrectly.
- [#1060][1060]: The sound of movie always start from the first frame even if specifying an export range.

[948]: https://github.com/pencil2d/pencil/issues/948
[949]: https://github.com/pencil2d/pencil/issues/949
[955]: https://github.com/pencil2d/pencil/issues/955
[970]: https://github.com/pencil2d/pencil/issues/970
[999]: https://github.com/pencil2d/pencil/issues/999
[1038]: https://github.com/pencil2d/pencil/issues/1038
[1043]: https://github.com/pencil2d/pencil/issues/1043
[1058]: https://github.com/pencil2d/pencil/issues/1058
[1060]: https://github.com/pencil2d/pencil/issues/1060

## Translations

- New languages Added: Estonian, Polish and Simplified Chinese.

## Known Issues

- Color Palette (Bitmap): First Swatch is unchangeable. Can't use Replace Command. Use the other swatches to create your own colors or change it by editing the palette in a vector layer or via XML.
- Color Palette (Bitmap): Swatches will only update using the Replace command when having a vector layer active. (Note: Create your custom palettes with a vector layer selected)
- Selection Tool: Pressing `ALT + TAB` / `APPLE + TAB` / `SHIFT + TAB`, or changing application focus in your OS while having a selection active will ERASE the selection contents and in some rare instances will crash Pencil2D.
- Selection Tool (Rotation): Using the SELECT ALL command (CTRL + A) and rotating a selection, will store the rotation transformation, if you press `CTRL+A` again and click with the MOVE TOOL on the selection, it will apply the stored value and rotate the selection again. Despite possible use cases this is a bug.
- Undo: Undoing a drawing modification made on an empty frame creates a keyframe on that frame.
- Undo: Undoing moving a keyframe to a new frame will create a blank keyframe on the place where it used to be
- Undo, Smudge Tool (Bitmap): You cannot UNDO smudge tool at the moment.
- Blur Tool (Bitmap): Pressing `ALT` with smudge tool doesn’t work, Do not use it. Use other drawing apps for smudge effects.
- Fill Tool (Vector): Filling a stroke requires the stroke to be selected.
- Fill Tool (Vector): “stroke thickness” option will reset pressure sensitive lines width.

## Help improve Pencil2D

Pencil2D is developed by passionate people on their spare time. If you like this software, and you want it to get better, you can help! Please visit [Contribute Page](/contribute) or [Community](/community) for further information.
