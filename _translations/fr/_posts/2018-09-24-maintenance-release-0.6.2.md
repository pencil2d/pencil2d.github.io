---
ref: news-0_6_2_release
title: "Pencil2D v0.6.2 Now Available"
tagline: ""
categories: "Release Note"
author: "The Pencil2D Team"
published: true
---
{% include translated_pages %}

Pencil2D v0.6.2 is here! In this version, we fixed a rather critical file-saving issue. We encourage all users to **upgrade to v0.6.2 as soon as possible** to avoid any chance that you may lose your work accidentally. Additionally, Pencil2D v0.6.2 comes with heaps of improvements and fixes. [Download it now]({{ translated_pages | where: "ref", "download" | map: "url" | first | relative_url }}) and enjoy animating.

<img src="{{ "/images/pencil2d_horizontal_banner_1024x256_trans.png" | relative_url }}" alt="Pencil2D Banner">

## What's New in v0.6.2

### New Color Inspector

![img color inspector]({{ "/images/pencil2d-color-inspector.gif" | relative_url }})

A completely overhauled color inspector. We changed the spinboxes for interactive sliders and a more stylish way to change between **HSV / RGB** color spaces. This improvement will let you preview colors and _alpha_ values much more easily than before.

### New Color Palette Workflow (WIP)

Previously you could change a selected swatch color through the color inspector, but this caused unpredictable alterations to already used colors on both bitmap and vector layers. We are working to improve how swatch colors are handled to preserve custom palettes while drawing.

To improve the creation of custom palettes we implemented **Add, Replace** and **Remove** commands through a **contextual menu**, plus you can now select and delete multiple colors at the same time in both **list** and **grid** display mode. We have also added the ability to import from and export to the GIMP palette format (.gpl) to make it easier to share palettes with drawing applications.

![color palette swatch replace]({{ "/images/color_swatch_replace.gif" | relative_url }})

Since this workflow tweak is a work in progress please see our **known issues** section to learn some of the caveats we are currently fixing.

### Auto Keyframe Insertion

Pencil2D now comes equipped with three drawing modes for empty frames. You can switch between them in your preferences under timeline. When drawing at a position without a keyframe, you can chose for the program to do one of the following:

+ Add a new (blank) keyframe
+ Duplicate the previous keyframe
+ Keep drawing on the previous keyframe

![preferences window > timeline section]({{ "/images/pencil2d_062_autokey.png" | relative_url }})

A huge thank you to **Martin Van Zijl** for implementing this feature!

### Import/Export a GIF

This is probably one of the most asked questions: **Can I export my animation as a gif?** Yes, you sure can. GIF Import/Export has been working since v0.6, but many people had difficulties finding it so we have made this option more visible in both Import/Export menus.

![import / export menus > animated gif]({{ "/images/gif_import_export.jpg" | relative_url }})

###  Project Corruption - Saving & Loading Files

We received a series of [bug reports](https://github.com/pencil2d/pencil/labels/bug%3A%20file-save) (especially for the Windows platform) where users encountered errors while saving (and sometimes loading) a file that prohibited them from opening it again. We paid great attention on this issue and worked hard to make sure you can save and load your work without further inconvenience. We have extensively tested this issue and consider it has been fixed for most foreseeable scenarios. However, we **urge all our users to review and follow** the [Pencil2D file corruption prevention / recovery guide](https://discuss.pencil2d.org/t/pencil2d-project-file-corruption-prevention-recovery-guide/3105) to avoid losing work in the off chance that you still encounter an error.

_**Note:** Most corrupted projects are by definition not recoverable, but there are ways to partially recover certain parts. Read the guide for more info._

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
- [#1051][1051]: Auto-crop bitmap images if there is extra white space.

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
- [#908][908]: Stabilizer was reset to default level after restarting Pencil2D.
- [#920][920]: Bitmap layer doesn't refresh after deleting a layer.
- [#948][948]: Remove `.tiff` format support since it always failed.
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

- Color Palette (Bitmap): First Swatch is unchangeable. Can't use replace command. Use the other swatches to create your own colors or change it by editing the palette in a vector layer or via XML.
- Color Palette (Bitmap): Swatches will only update using the Replace command when having a vector layer active. (Note: Create your custom palettes with a vector layer selected)
- Selection Tool: Pressing `ALT + TAB` / `APPLE + TAB` / `SHIFT + TAB`, or changing application focus in your OS while having a selection active will ERASE the selection contents and in some rare instances will crash Pencil2D.
- Selection Tool (Rotation): Using the SELECT ALL command (`CTRL + A`) and rotating a selection, will store the rotation transformation, if you press `CTRL+A` again and click with the MOVE TOOL on the selection, it will apply the stored value and rotate the selection again. Despite possible use cases this is a bug.
- Undo: Undoing a drawing modification made on an empty frame creates a keyframe on that frame.
- Undo: Undoing moving a keyframe to a new frame will create a blank keyframe on the place where it used to be.
- Undo, Smudge Tool (Bitmap): You cannot UNDO the smudge tool at the moment.
- Blur Tool (Bitmap): Pressing `ALT` with smudge tool doesn’t work, do not use it. Use other drawing apps for smudge effects.
- Fill Tool (Vector): Filling a stroke requires the stroke to be selected.
- Fill Tool (Vector): “stroke thickness” option will reset pressure sensitive lines width.

## Help improve Pencil2D

Pencil2D is developed by passionate people in their spare time. If you like this software, and you want it to get better, you can help! Please visit the [Contribute Page]({{ translated_pages | where: "ref", "contribute" | map: "url" | first | relative_url }}) or [Community]({{ translated_pages | where: "ref", "community" | map: "url" | first | relative_url }}) for further information.
