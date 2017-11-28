---
layout: post
title: "Introducing Pencil2D 0.6"
tagline: ""
categories: "Release Note"
image: /images/pencil_icon.png
author: "The Pencil2D team"
published: false
comments: false
---

Christmas is getting close, and it’s about time to unwrap one of the presents for you. So yes, it has finally happened: Pencil2D 0.6 released today! You can get it from http://pencil2d.github.io/download/.

Let’s unwrap it a little bit, and take a look at what’s inside.

## 0.6 is much more stable than 0.5.4

Thanks to all the [contributors][0], there are tons of bugs have been fixed in the 0.6. We can say with confidence that Pencil2D 0.6 is more stable than old 0.5.4. Now you can simply enjoy animating without worrying too much about losing your work.

But please keep in mind, there are still some [known issues][] and developers are working hard to resolve them. Please don't hesitate to [tell us][1] if you encounter any issues. Your report will help Pencil2D get better.

[0]: https://github.com/pencil2d/pencil/graphs/contributors
[1]: https://github.com/pencil2d/pencil/issues

## Color Wheel

[picture]

## Color Grid

[picture]

It’s now possible to show your palette as a grid, which is handy for those who don’t rely on labelling their colors. In addition, you can now also change the size of the swatches withc 3 sizes.

## Colored Onion skins

Hard to know what are in previous or next frames? Display the onion skins of “previous frames” as **red** and the onion skins of "next frames" as **blue** to see them clearly.

## Export your animation to mp4, avi or gif

Finally, the movie export is working. Go to the menu → File → Export and export your animation to the following formats: animated gif, avi, mp4 or wmv.

## 12 languages available

Pencil2D are making things easier for non English speakers. Thanks to all the hard work of volunteer translators, 12 languages are now available within Pencil2D, includes: English, Czech, Danish, German, Spanish, French, Hungarian, Italian, Japanese, Portuguese, Russian, and Traditional Chinese. You can also change languages in preferences if you like.  

There is still a lot of work to do. If Pencil2D is not yet available in your language, you can translate it or improve the existing translations by joining our [Transifex translation project][3].

[3]: https://www.transifex.com/pencil2d/

## Timeline Improvements

- Playback in a given start/end frame range.
- Relative/absolute mode of onion skins.
- Select a range of frames (Shift + LMB).
- Select/deselect individual frames (Ctrl +LMB)
- Select a frame and all the frames after it (Alt + LMB)
- Move a single frame (LMB Selected + Drag)
- Move a frame and all the frames at its right (Alt + LMB +Drag)
- Added an option to change the number of frames of onion skin in prefrences.

## Drawing Tool Improvements

- Brush quick-sizing (Shift + Drag Left/Right)
- Brush feather quick-sizing (Ctrl + Drag Left/Right)
- Fast Hand Tool (by holding Space bar).
- Fast Eyedropper (Alt).
- Move tool can rotate selection area by Ctrl + Drag Left/Right.
- Smudge tool is working on Bitmap layer for creating coloring effects similar to oil painting. Hold Alt key to get liquify effect.
- 3-level stroke stablizer.
- Dotted Cursor available in prefrences.

## UI improvements

- Show/Hide Grid (G)
- Show zoom ratio on the status bar
- Added a **Windows** menu to show/hide panels.
- Added a menu option “lock window” to lock panels.
- Changed Layer display order.

## More features and improvements

- Added Alpha Channel to color palette.
- Added .pcl/.pclx file associations and icons on MacOS.
- Removed Fill Tool bleeding into other layers.
- Improved Fill Tool bitmap area fill algorithm.
- Color selection was separated between Bitmap & Vector Layers (Changing the colors of Color Palette changes will affect only vector colors).
- Implemented Canvas “freehand” Rotation. (ALT + Right Click)
- Implemented persistent camera frame to Preview export size (Can be hidden by hiding the camera layer)
- Implemented selection horizontal & vertical Mirroring (“Flipping”)
- Implemented range feature for Movie Export.

## Fixes

- Re-implemented Camera Tweening.
- Removed gradient background from preferences.
- Fixed Sound Import and Playback.
- Fixed auto-save.
- Fixed Shortcut Mapping.
- Misc bug fixes.

## Known issues

- Vector Engine is being reworked, the functionalities are limited and it’s not yet ready for production use.
- You will be able to undo a “frame deletion”, but cannot redo it.
- Smudge tool (Bitmap) fills the background with white color, which should be fully transparent.
- Polyline Tool: Bezier mode is experimental and does not create splines in Bitmap Layers. But in vector layers, It’s working by default.
- Preview mode is disabled.
- Multi-Layer Onion Skin is not working.
- The original Pencil PDF manual has been removed. We will work to create a new online user manual accessible for everyone.

## Support Pencil2D

Pencil2D is a free and open source project. Please consider supporting the project by joining our [community][4]. Further information please visit [Contribute][5] page.

[4]: /community
[5]: /contribute