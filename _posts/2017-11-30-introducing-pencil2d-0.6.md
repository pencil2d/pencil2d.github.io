---
layout: post
title: "Introducing Pencil2D 0.6"
tagline: ""
categories: "ReleaseNote"
image: /images/pencil_icon.png
author: "The Pencil2D team"
published: false
comments: false
---

Christmas is getting close, and it’s about time to unwrap one of the presents for you. So yes, it has finally happened:

**Pencil2D 0.6 released today!** 

Please download it [here](http://pencil2d.github.io/download/). Let’s unwrap it a little bit, and take a look at what’s inside.

## 0.6 is much more stable than 0.5.4

Thanks to all the [contributors][0], tons of bugs have been fixed in the 0.6. We can say with confidence that Pencil2D 0.6 is more stable than old 0.5.4. Now you can simply enjoy animating without worrying too much about losing your work.

But please keep in mind, there are still some [known issues](#known_issues) and developers are working hard to resolve them. Please don't hesitate to [tell us][1] if you encounter any issues. Your report will help Pencil2D get better.

[0]: https://github.com/pencil2d/pencil/graphs/contributors
[1]: https://github.com/pencil2d/pencil/issues

## Color Wheel

Choosing colors is not frustrating anymoe. Take a look at the new Color Wheel! 
<br>
<table>
<tr>
  <td>Previous versions</td><td>v0.6</td>
</tr>
<tr>
<td><img src="/images/color054.png" style="" style="border:solid 1px #999"></td>
<td><img src="/images/color-wheel.gif" style="" style="border:solid 1px #999"></td>
</tr>
</table>

## Color Grid

It’s now possible to show your palette as a grid, which is handy for those who don’t rely on labelling their colors. In addition, you can now also change the size of the swatches.

<img src="/images/color-grid.gif" style="border:solid 1px #999">
<div style="clear:both"></div>

## Colored Onion skins

<img src="/images/color-onionskin.png" style="border:solid 1px #999;float:right">

Hard to know what are in previous frames or next frames? Display the onion skins of "previous frames" as **red** and the onion skins of "next frames" as **blue** to see them clearly.

<div style="clear:both"></div>

## Export your animation to mp4, avi or animated gif

<div style="float:left">
<video width="224" height="184" autoplay loop>
  <source src="/images/fun_animation.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>

Finally, the movie export is working. Go to the menu → File → Export and export your animation to the following formats: **gif, avi, mp4 or wmv**.

<div style="clear:both"></div>

## 12 languages available

Pencil2D are making things easier for non English speakers. Thanks to all the hard work of volunteer translators, 12 languages are now available within Pencil2D, includes: 

**English, Czech, Danish, German, Spanish, French, Hungarian, Italian, Japanese, Portuguese, Russian, and Traditional Chinese.**

You can also change languages in preferences if you like.  

There is still a lot of work to do. If Pencil2D is not yet available in your language, you can translate it or improve the existing translations by joining our [Transifex translation project][3].

[3]: https://www.transifex.com/pencil2d/

## Timeline Improvements

- Playback in a given start/end frame range.
- Relative/absolute mode of onion skins.
- Select a range of frames `(Shift + LMB)`.
- Select/deselect individual frames `(Ctrl +LMB)`
- Select a frame and all the frames after it `(Alt + LMB)`
- Move a single frame `(LMB Selected + Drag)`
- Move a frame and all the frames at its right `(Alt + LMB +Drag)`
- Added an option to change the number of frames of onion skin in prefrences.

## Drawing Tool Improvements

- Brush quick-sizing `(Shift + Drag Left/Right)`
- Brush feather quick-sizing `(Ctrl + Drag Left/Right)`
- Fast Hand Tool `(holding Space bar)`.
- Fast Eyedropper `(Alt)`.
- Move tool can rotate selection area by `Ctrl + Drag Left/Right`.
- Smudge tool is now working on bitmap layers for creating oil painting-like effects. Hold `Alt` to get liquify effects.
- 3-level stroke stablizer.
- Dotted Cursor available in prefrences.
- Improved `Fill Tool` bitmap algorithm and added a threshold slider.
- Removed `Fill Tool` bleeding into other layers.

## Interfaces Improvements

- Show/Hide Grid `(G)`
- Show zoom % ratio on the status bar
- Added a **Windows** menu to show/hide panels.
- Added a menu option **Lock Windows** to lock panels.
- Changed Layer display order.

## More Features and Improvements

- Added alpha channel to color palette.
- Added .pcl/.pclx file associations and icons on MacOS.
- Color selection behavior was separated Bitmap & Vector Layers (Using the color wheel on bitmap layers will only affect the active color and not the Color Palette swatches. In Vector Layers, changing any swatch will affect only vector colors)
- Implemented canvas “freehand” rotation. `(ALT + RMB and drag)`
- Implemented persistent camera frame ("passepartout") to preview canvas & export size (Can be hidden by hiding the camera layer)
- Implemented selection horizontal & vertical mirroring (“Flipping”)
- Export movies in a given range.

## Fixes

- Re-implemented Camera Motion Interpolation ("tweening").
- Removed unused gradient background option from preferences.
- Fixed sound import and timeline playback.
- Fixed auto-save feature.
- Fixed shortcut mappings.
- Misc bug fixes.

## Known Issues
<a name="known_issues"></a>

- Vector Engine is being reworked, the functionalities are limited and it’s not yet ready for production use.
- You will be able to undo a "delete frame", but cannot redo it.
- Smudge tool (Bitmap) fills the background with white color, which should be fully transparent. Plus you cannot undo it's behavior properly, yet.
- Polyline Tool: Bezier mode is experimental and does not create proper splines in Bitmap Layers. In vector layers, it's working by default and cannot be disabled.
- Preview mode is currently disabled since it's pending implementation.
- Multi-Layer Onion Skin option is not working, pending implementation.
- The original Pencil PDF manual has been removed. We will work to create a new online user manual accessible for everyone.

## Support Pencil2D

Pencil2D is a free and open source project. Please consider supporting the project by joining our [community][4]. Further information please visit [Contribute][5] page.

[4]: /community
[5]: /contribute

