---
layout: post
title: "Maintenance Release: Pencil2D 0.6.2"
tagline: ""
categories: "Release Note"
image: "/images/pencil_icon.png"
author: "The Pencil2D team"
published: false
comments: false
---

Welcome to Pencil2D v0.6.2!

In this version, we fixed a rather critical file-saving issue. We encourage all users to **upgrade to v0.6.2 as soon as possible** to avoid any chance that you may lose your work accidentally. Additionally, Pencil2D v0.6.2 comes with heaps of improvements and fixes. [Download it now](https://pencil2d.org/download) and enjoy animating.

<img src="{{ "/images/pencil2d_horizontal_banner_1024x256_trans.png" | relative_url }}" alt="Pencil2D Banner">

## What's new in v0.6.2

### New Color inspector

![img color inspector](/images/pencil2d-color-inspector.gif)

A completely overhauled color inspector.

### Auto Keyframe Insertion

Pencil2D now comes equipped with 2 automatic keyframe creation mode. You can switch between them on your preferences when drawing on an empty frame on the timeline:

+ Add New (blank) keyframe
+ Duplicate the previous keyframe
+ Keep drawing on the previous keyframe (default behavior prior to v0.6.2)

![preferences window > timeline section](/images/pencil2d_062_autokey.png)

A huge thank you to **Martin Van Zijl** for implementing this feature!

### Import/Export a GIF

This is probably one of the most asked questions: **Can I export my animation as a gif?** Yes, you sure can. GIF Import/Export is working since v0.6, but many people had difficulties finding it so we have made this option more visible in both Import/Export menus.

![import / export menus > animated gif](/images/gif_import_export.jpg)

### Import/Export Gimp Palette

Pencil2D now supports the GIMP (.gpl) palette format.

###  Corrupted projects

We got a series of [bug reports](https://github.com/pencil2d/pencil/labels/bug%3A%20file-save) (especially from Windows platform) that users encountered errors while saving a file and not able to open it again. We paid great attention on this issue and work hard to make sure you can save your work flawlessly. In this version, we are pretty confident that this issue has been fixed for most foreseeable scenarios. However, we urge all our users to consider following the [Pencil2D file corruption prevention / recovery guide](https://discuss.pencil2d.org/t/pencil2d-project-file-corruption-prevention-recovery-guide/3105) to avoid losing work in the odd chance.

## Enhancements

- [#744][744]: Restore UI panel's positions after restarting Pencil2D.
- [#881][881]: Increased the corner area of Selection Tool for dragging.
- [#938][938]: Keep a backup file if failing to save the current project.
- [#942][942]: Brought the "Remove Colour" button back to Palette.
- [#954][954]: Disable onion skins while playing a animation.
- [#971][971]: Brought `Remove Color` button back to the palette and context menu.
- [#975][975]: Timeline will auto-extend the length when reaching the 70% of the current length.
- [#979][979]: Optimize bucket fill algorithm with cache.
- [#997][997]: Can export image sequence with a given range.
- [#1028][1028]: Improved color palette selection behaviours.
- [#1039][1039]: Added command line completion for bash and zsh.
- [#1051][1051]: Auto-crop bitmap images if there are extra white spaces.

[744]: https://github.com/pencil2d/pencil/issues/744
[881]: https://github.com/pencil2d/pencil/issues/881
[938]: https://github.com/pencil2d/pencil/issues/938
[942]: https://github.com/pencil2d/pencil/issues/942
[954]: https://github.com/pencil2d/pencil/issues/954
[971]: https://github.com/pencil2d/pencil/issues/971
[975]: https://github.com/pencil2d/pencil/issues/975
[979]: https://github.com/pencil2d/pencil/issues/979
[997]: https://github.com/pencil2d/pencil/issues/997
[1028]: https://github.com/pencil2d/pencil/issues/1028
[1039]: https://github.com/pencil2d/pencil/issues/1039
[1051]: https://github.com/pencil2d/pencil/issues/1051

## Fixes

- [#907][907]: Default project file leaked.
- [#908][908]: Stablizer was reset to default level after restarting Pencil2D.
- [#920][920]: Bitmap layer doesn't refresh after deleting a layer.
- [#948][948]: Remove `.tiff` format support since it failed always.
- [#949][949]: The selection rectangle disappeared in some scenarios.
- [#950][950]: Pencil2D crashes when attempting to modify a non-existing first (key)frame.
- [#955][955]: Line stabilizer and anti-alias settings were reset to default values after reopening Pencil2D.
- [#958][958]: Renaming a color in palette was not working.
- [#960][960]: Cameras didn't move in exported videos.
- [#970][970]: Color Wheel should always use full value and saturation.
- [#999][999]: Update camera bound immediately after changing camera resolutions.
- [#1028][1028]: Showing the proper icon color in palette when the color is selected.
- [#1038][1028]: Reduced the excessive memory usage when exporting a long project.
- [#1043][1043]: Error occurred if opening a project twice in a row.
- [#1058][1058]: Vector eraser tool calculated the distance incorrectly.
- [#1060][1060]: The sound of movie always start from the first frame even if specifying an export range.

[907]: https://github.com/pencil2d/pencil/issues/907
[908]: https://github.com/pencil2d/pencil/issues/908
[920]: https://github.com/pencil2d/pencil/issues/920
[948]: https://github.com/pencil2d/pencil/issues/948
[949]: https://github.com/pencil2d/pencil/issues/949
[950]: https://github.com/pencil2d/pencil/issues/950
[955]: https://github.com/pencil2d/pencil/issues/955
[958]: https://github.com/pencil2d/pencil/issues/958
[960]: https://github.com/pencil2d/pencil/issues/960
[970]: https://github.com/pencil2d/pencil/issues/970
[999]: https://github.com/pencil2d/pencil/issues/999
[1028]: https://github.com/pencil2d/pencil/issues/1028
[1038]: https://github.com/pencil2d/pencil/issues/1038
[1043]: https://github.com/pencil2d/pencil/issues/1043
[1058]: https://github.com/pencil2d/pencil/issues/1058
[1060]: https://github.com/pencil2d/pencil/issues/1060

## Translations

- New languages added: Estonian, Polish and Simplified Chinese.

## Known Issues

- Color Palette (Bitmap): First Swatch is unchangeable. Can't use Replace Command. Use the other swatches to create your own colors or change it by editing the palette in a vector layer or via XML.
- Color Palette (Bitmap): Swatches will only update using the Replace command when having a vector layer active. (Note: Create your custom palettes with a vector layer selected)
- Selection Tool: Pressing `ALT + TAB` / `APPLE + TAB` / `SHIFT + TAB`, or changing application focus in your OS while having a selection active will ERASE the selection contents and in some rare instances will crash Pencil2D.
- Selection Tool (Rotation): Using the SELECT ALL command (`CTRL + A`) and rotating a selection, will store the rotation transformation, if you press `CTRL+A` again and click with the MOVE TOOL on the selection, it will apply the stored value and rotate the selection again. Despite possible use cases this is a bug.
- Undo: Undoing a drawing modification made on an empty frame creates a keyframe on that frame.
- Undo: Undoing moving a keyframe to a new frame will create a blank keyframe on the place where it used to be.
- Undo, Smudge Tool (Bitmap): You cannot UNDO smudge tool at the moment.
- Blur Tool (Bitmap): Pressing `ALT` with smudge tool doesn’t work, Do not use it. Use other drawing apps for smudge effects.
- Fill Tool (Vector): Filling a stroke requires the stroke to be selected.
- Fill Tool (Vector): “stroke thickness” option will reset pressure sensitive lines width.

## Help improve Pencil2D

Pencil2D is developed by passionate people on their spare time. If you like this software, and you want it to get better, you can help! Please visit [Contribute Page](/contribute) or [Community](/community) for further information.
