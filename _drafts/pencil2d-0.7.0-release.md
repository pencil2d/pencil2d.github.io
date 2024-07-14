---
layout: post
title: Pencil2D v0.7.0 – Exciting New Features!
tagline: ""
categories: "Release Note"
author: "The Pencil2D Team"
published: false
comments: false
excerpt_separator: <!-- excerpt end -->
---

It's been long overdue... but here it is: Pencil2D release 0.7.0!

We've been working on this release for more than two years, a release which packs **more than 450 commits**, and boy do we have things to show! A much awaited re-designed camera system, timeline dragging and exposure improvements, adjustable layer opacity, repositioning content of multiple frames, perspective grids and more.

<!-- excerpt end -->

[Download Pencil2D 0.7.0 Now!](https://www.pencil2d.org/download)
{:style="font-size:xx-large;text-align:center"}

> _**Note**: Some of the legacy builds **may not be available** yet, since we depend on external maintainers to finalize the release cycle. If the latest version is not available for your current OS or system architecture please let us know through our [dedicated forum][0]._

[0]: https://discuss.pencil2d.org/

| Contents                        |
| --------------------------------|

<br>

Many thanks to all the people who helped to make this release possible.

[Chchwy]: https://github.com/chchwy
[Scribblemaniac]: https://github.com/scribblemaniac
[MrStevns]: https://github.com/MrStevns
[Davidlamhauge]: https://github.com/davidlamhauge
[Josemoreno]: https://github.com/jose-moreno
[J5lx]: https://github.com/j5lx
[iynaur]: https://github.com/iynaur
[aeroc7]: https://github.com/aeroc7
[v404]: https://github.com/v404
[donarturo11]: https://github.com/donarturo11
[anpanring]: https://github.com/anpanring
[musicinmybrain]: https://github.com/musicinmybrain
[CSinclair89]: https://github.com/CSinclair89

[Chchwy] - [Scribblemaniac] - [MrStevns] - [Davidlamhauge] - [Josemoreno] - [J5lx] - [iynaur] - [aeroc7] - [v404] - [donarturo11] - [anpanring] - [musicinmybrain] - [CSinclair89]

_______________________________________________
## Feature highlights

### Adjustable Layer/Keyframe opacity - [#1355](https://github.com/pencil2d/pencil/pull/1355), [#459](https://github.com/pencil2d/pencil/issues/459)
Back in 2020, David Lamhauge made a proposal on how to introduce adjustable layer/keyframe opacity, which has always been a much requested feature. The proposal made it into our master branch on the 10 of March 2021.

<img width="287" alt="image" src="{{ '/images/pencil2d-0.7.0-opacity.png' | relative_url }}">

#### Opacity
When you open the window, you have a few options to choose from, giving you more control over how you can change the opacity of one or more keyframes.

+ Active keyframe
Allows you to change the opacity of the current keyframe.

+ Selected keyframe(s)
Allows you to change the opacity of one or more selected keyframes.

+ Layer
Allows you to change the opacity of all keyframes on that specific layer.

#### Fade in / Fade out
Imagine a classic scenario where you want to make an item disappear over a few keyframes, previously this couldn't be done except by using a brush with an alpha value, and gradually drawing it with less alpha. The amount of work that required in Pencil2D made it a non starter... Well now it's finally possible!

Simply start by selecting 3 or more keyframes you want to fade in or out on the timeline, then click on the "Fade in" or "Fade out" button in the Layer opacity window.

The result should be an item going from 100% to 0% or 0 to 100%.

You can however also choose to fade using a relative opacity, say if your first frame has an opacity of 50% and you select "fade in", the following frames will gradually increase their opacity until the last is fully opaque.

### Camera system makeover - [#1584](https://github.com/pencil2d/pencil/pull/1584), [#1587](https://github.com/pencil2d/pencil/pull/1587), [#1732](https://github.com/pencil2d/pencil/pull/1732), [#1738](https://github.com/pencil2d/pencil/pull/1738)
The camera system has had a huge makeover. We have added features ranging from an entirely new and better way to interact with the camera to having a wide range of easings for you to move the camera around. You will also be able to visually see the keyframe path on the canvas as well as interact with it.

***What's new:***
+ A new and object based camera system
+ A tool panel for the new camera functionalities
+ The ability to see interpolations on the canvas
+ A wide range of easings to choose from:

<p> <video autoplay controls height=400 src="{{ '/images/pencil2d-0.7.0-camera.mp4' | relative_url }}" /> </p>

We always try to keep the interface as simple as possible in Pencil2D. As such, there are no new tools you have to learn to use the camera; instead, the existing tools in the toolbox change depending on the layer type.

To interact with the camera, select the ***Move*** tool and a keyframe on the camera layer. This will enable you to see the handles of the camera.

#### Object based interaction
Where the old camera system was a part of the viewport, making it more of a WYSIWYG (what you see is what you get), the new system is object-based, meaning you can now modify the camera's placement, rotation, and size without altering the view.

| Translate | Rotate | Scale |
| --------- | ------ | ----- |
| <video autoplay controls height=200 src="{{ '/images/pencil2d-0.7.0-camera-translate.mp4' | relative_url }}"/> | <video controls autoplay height=200 src="{{ '/images/pencil2d-0.7.0-camera-rotate.mp4' | relative_url }}"/> | <video autoplay controls height=200 src="{{ '/images/pencil2d-0.7.0-camera-scale.mp4' | relative_url }}"/> |
| Moving the camera is as simple as dragging it anywhere within the bounds of its area. | To rotate the camera, click and hold on the top circular handle. | To change the perceived size of the camera, click and hold-drag on any of the squared corners. Dragging diagonally outward will make objects seem smaller, while dragging inward will make objects appear larger. |

#### Camera tool options
To house some of the new camera features, we've added camera functionalities to the options panel. From the panel, you will be able to reset the camera's current transformations, either all of them or one by one.

<p style="display: flex;"><img width="277" alt="image" src="{{ '/images/pencil2d-0.7.0-camera-options.png' | relative_url }}"><video autoplay controls height=400 src="{{ '/images/pencil2d-0.7.0-camera-options.mp4' | relative_url }}"/> </p>

When you click on the ***Show path*** checkbox, an entirely new feature unfolds. You will now be able to see and interact with the camera's curve on the canvas.

<br> 

##### Onion skinning
Onion skinning is a vital feature in animation; being able to see what has and what will occur allows the animator to make changes with ease, so naturally, like with the other layer types, you can now utilize the functions of the onion skin panel for camera keyframes too.

<p> <video autoplay controls height=400 src="{{ '/images/pencil2d-0.7.0-camera-path.mp4' | relative_url }}"/> </p>

For example, if you only care about seeing the previous and/or next keyframe, you can enable ***Show keyframe only***, which will hide in-between interpolations, or if you only want to see the previous keyframe, simply toggle ***Previous Frames***.

<p> <video autoplay controls height=400 src="{{ '/images/pencil2d-0.7.0-camera-onion-skins.mp4' | relative_url }}"/> </p>

To enable interaction with a keyframe path, you first have to scrub to an in-between frame. While the timeline scrubber is in between keyframes, you can change the trajectory of one or multiple paths.

If you need to change the position of the camera again, simply scrub back to the nearest keyframe and drag the camera elsewhere. Once a keyframe's path handle has been moved, it will stay in place until the path for that particular frame has been reset again.

#### Camera easings
Previously, it was only possible to make linear-based movements for the camera, which, while being an okay starting point, didn't allow for much flexibility. Linear-based movement is considered to be anything but organic; as such, it's not something you should rely too much on; instead, experiment with the new easing types we've added, such as "In: Slow", "In: Fast" and then "Out: Faster".

<p> <video autoplay controls height=500 src="{{ '/images/pencil2d-0.7.0-camera-easings.mp4' | relative_url }}"/></p>

This feature is currently only possible to access through the timeline, via a new right-click menu. From the menu, you can select from a wide range of easing types to control the movement of the camera. Whether you're trying to ease in, out, in-out, or out-in, we have you covered. You can see the current easing type at the top of the menu, as well as near the handle on the canvas.

### Reposition content of multiple frames - [#1325](https://github.com/pencil2d/pencil/pull/1325)
This feature allows you to reposition the content of multiple keyframes, across multiple layers.

To access it, locate the "Animation" menu in the top bar, and find the item called "Reposition Selected Frames".
<img width="1000" alt="image" src="{{ '/images/pencil2d-0.7.0-reposition-selected-frames-interface.png' | relative_url }}">

Clicking on the menu item reveals the "Reposition Frames" dialog. The top half of the dialog shows which keyframes are selected.
The bottom half makes it possible to reposition keyframes across other layers.

Here's how it works:
<p><video autoplay controls height=400 src="{{ '/images/pencil2d-0.7.0-reposition-selected-frames-showcase.mp4' | relative_url }}"/></p>

In the video you can see that the content of the keyframe 1 of "Bitmap Layer 2" are being moved from the top left corner, to the bottom left corner and afterwards the same process is being applied to the other keyframes.

Note that because of the limitations of the current undo/redo system, repositioning may not always be undo'able.

***Known issue:***
+ The cancel button doesn't work, use the close in top left/right corner depending on the platform.

### Timeline UI/UX - Exposure features [#1343](https://github.com/pencil2d/pencil/pull/1343)

Add gif or video of feature

Changes:
+ Adding frame next to current position, no matter if there's a frame or not.
  + Happens out of the box, just place the scrubber and add a frame.
+ Add/Remove exposure:
  + Requirement: Frame has to be selected
    - How to use:
      - Shortcuts: Ctrl+'+' for add and Ctrl+'-' for subtract.
      - Menu: Animation -> 'Timeline selection' -> Add exposure / Subtract exposure
+ Add keyframe by double-clicking on the timeline.
  + The frame graphic while hovering
+ Scrubber will be shown as hollow when hovering
+ Ability to copy/cut/paste multiple frames to timeline via standard shortcuts
+ Ability to remove a selection of frames
  + Shortcuts: None as default but it can be set.
  + Cannot be undone currently! Awaiting the new undo/redo implementation.
+ Reverse selection of frames.
  + Shortcuts: None as default but can be set.

### Timeline UI/UX - Non destructive dragging [#1495](https://github.com/pencil2d/pencil/pull/1495)

Add gif or video of feature

+ Changes
  + Dragging is cosmetic until the very moment you let go on the frames.
  + Frames are slightly lifted off the track to help visualize that dragging has been initiated.'

+ What's removed
  + Ability to easily swap frames when dragging, eg. the old functionality.

### Selection/Move tool improvements [#1724](https://github.com/pencil2d/pencil/pull/1724)

It's been on our TODO list for a long time but this release is finally where we got around to fix one obnoxious problem about the move tool. The fact that when you rotate a selection, the selection visual itself doesn't change. Fixing this problem however required reworking a lot of the selection logic but doing so also allowed us to fix a bunch of other annoying bugs, while also being able to improve the user experience.


| Old                        | New                                              |
| ---------------------------|------------------------------------------------- |
|  ![selection-old](https://github.com/pencil2d/pencil2d.github.io/assets/1045397/3177aeba-756e-44cd-b1ab-7fe59a93e91a)     |  ![selection-new](https://github.com/pencil2d/pencil2d.github.io/assets/1045397/5569241b-3f99-4831-a2f9-68692dfff286) |

A few quality of life improvements that this gave birth to:

Previously when you had created a selection and moved your object without deselecting and wanting to change layer, you would get a blocking dialog, requiring you to deny or accept the current transformation.

<img width="532" alt="image" src="{{ '/images/pencil2d-0.7.0-selection-dialog.png' | relative_url }}">

Now because of the reworked logic, this is no longer neccesary and we can instead just apply the change immediately and change layer.

In addition to that every transform will also now be undo'able.

### Perspective grids! [#1352](https://github.com/pencil2d/pencil/pull/1352)
In addition to having various grid types for layout, we now also have the ability to enable one, two or three point perspective.

<img width="333" alt="perspective-grid-types" src="{{ '/images/pencil2d-0.7.0-perspective-grid-types.png' | relative_url }}">

| One point                  | Two point              | Three point         |
| ---------------------------|------------------------| ------------------- |
| <img width="400" alt="one-point-perspective" src="{{ '/images/pencil2d-0.7.0-one-point-perspective.png' | relative_url }} "> | <img width="400" alt="two-point-perspective" src="{{ '/images/pencil2d-0.7.0-two-point-perspective.png' | relative_url }}"> |<img width="400" alt="three-point-perspective" src="{{ '/images/pencil2d-0.7.0-three-point-perspective.png' | relative_url }}"> |

To interact with a perspective grid, select the move tool and move the dot appearing on top of the vanishing point.

### Windows Installer [#848](https://github.com/pencil2d/pencil/pull/848)

On Windows, Pencil2D has traditionally been distributed as a simple self-contained ZIP archive. This has a number of advantages, such as minimal impact on the system configuration, simple removal once you no longer need the software or the ability to easily switch between different versions of Pencil2D.

However, we noticed that this method of distribution also caused a number of issues, particularly for non-technical users who are not familiar with it. Some did not know how to extract the file, others were confused by the lack of a dedicated uninstaller, and many were greeted by frustrating error messages concerning missing DLL files.

To address these issues, we're now providing an installer for Pencil2D, as many Windows users have come to expect from their programs. The installer will ensure that all the DLL files Pencil2D needs are available, file type associations and a start menu shortcut are set up correctly, and an uninstaller is available from the apps page in your system settings which allows you to easily remove Pencil2D when you no longer need it. Of course, the traditional ZIP files also continue to be available to those who prefer them!

_________________________________________
## Enhancements/Changes
### Interface:
+ Introduced a comprehensive new icon set - [#1356](https://github.com/pencil2d/pencil/issues/1356), [#1361](https://github.com/pencil2d/pencil/pull/1361)

  Check out [our behind the scenes blog post]({% post_url 2024-05-17-icon-redesign %}) to learn more about the work that went into this redesign!
+ Replaced the zoom text on the status bar with an interactive control - [#1442](https://github.com/pencil2d/pencil/pull/1442)
+ Added help text for the currently active tool to the status bar - [#1442](https://github.com/pencil2d/pencil/pull/1442)
+ Added toolbars for commonly used actions - [#1468](https://github.com/pencil2d/pencil/pull/1468)
+ Improved layout of the onion skin tool window - [#1589](https://github.com/pencil2d/pencil/pull/1589), [#1753](https://github.com/pencil2d/pencil/pull/1753)
+ Changed the default export file path to the file path of the current project - [#1657](https://github.com/pencil2d/pencil/pull/1657)
+ Removed vector layer from default timeline setup [#1666](https://github.com/pencil2d/pencil/pull/1666)

  Please note that vector layers can still be added manually and the default layer setup can be customized by modifying the default preset in Edit → Preferences → Files. Existing custom default presets are not affected by this change.
+ Added a warning when adding more sound clips than can be exported - [#1701](https://github.com/pencil2d/pencil/pull/1701)
+ Added a warning when opening multiple instances of Pencil2D - [#1702](https://github.com/pencil2d/pencil/pull/1702)
+ Replaced the display option window with a toolbar - [#1734](https://github.com/pencil2d/pencil/pull/1734)
+ Improved error messages when importing images - [#1750](https://github.com/pencil2d/pencil/pull/1750)
+ Added an abortable progress dialog when importing animated images - [#1801](https://github.com/pencil2d/pencil/pull/1801)
+ Added support for importing animated WebP images - [#1801](https://github.com/pencil2d/pencil/pull/1801)
+ Added support for importing and exporting static WebP images - [#1801](https://github.com/pencil2d/pencil/pull/1801)
+ Improved usability and reliability of quick sizing - [#1806](https://github.com/pencil2d/pencil/pull/1806)
+ Added an option to configure keyboard shortcuts to flip the current selection - [#1816](https://github.com/pencil2d/pencil/pull/1816)
+ Improved zoom behavior for devices that report pixel-based scrolling data - [06a4495](https://github.com/pencil2d/pencil/commit/06a44959bd93c8b9dc3d2c1cb803577e29391a9f)
+ Added translations for Bulgarian, Persian, Korean, Norwegian Bokmål, Dutch (Netherlands) and Cantonese - [#1826](https://github.com/pencil2d/pencil/pull/1826)
+ Changed the warning dialog when switching the application language to display in the new language instead of the current one - [#1836](https://github.com/pencil2d/pencil/pull/1836)
+ Improved the movie export dialog to prevent exporting MP4 files in an invalid resolution - [#1833](https://github.com/pencil2d/pencil/pull/1833)


### Bucket tool:

+ Added an option to set the fill reference layer - [#1630](https://github.com/pencil2d/pencil/pull/1630)
+ Added an option to toggle tolerance on/off - [#1630](https://github.com/pencil2d/pencil/pull/1630)
+ Added an option to expand the fill area - [#1630](https://github.com/pencil2d/pencil/pull/1630)
+ Added the ability to drag to fill - [#1630](https://github.com/pencil2d/pencil/pull/1630)
+ Improved fill performance *significantly* - [#1707](https://github.com/pencil2d/pencil/pull/1707)
+ Added an option to fill using a blend mode: Overlay/Behind/Replace - [#1590](https://github.com/pencil2d/pencil/pull/1590)
+ Removed nonsensical quick sizing support - [#1806](https://github.com/pencil2d/pencil/pull/1806)

### Workflow improvements
+ Aligned color palette behavior on vector and bitmap layers so that palette colors and their associated vector strokes are only updated when the replace function is used - [#1265](https://github.com/pencil2d/pencil/pull/1265)
+ Added an action to paste content from the previous frame - [#1682](https://github.com/pencil2d/pencil/pull/1682)
+ Added an action to duplicate layers - [#1690](https://github.com/pencil2d/pencil/pull/1690), [#1744](https://github.com/pencil2d/pencil/pull/1744)
+ Optimized the peg bar alignment workflow by activating the select tool, creating an initial selection and pre-selecting the first layer upon opening the dialog - [#1580](https://github.com/pencil2d/pencil/pull/1580)

### Behind the curtain
+ Optimized visual updates of the timeline window - [#1737](https://github.com/pencil2d/pencil/pull/1737)
+ Improved painting performance by re-rendering only modified areas - [#1761](https://github.com/pencil2d/pencil/pull/1761), [#1789](https://github.com/pencil2d/pencil/pull/1789)
+ Improved painting performance by introducing a tiled buffer - [#1776](https://github.com/pencil2d/pencil/pull/1776)
+ Reworked switching tools temporarily through modifier keys or right-clicking to be more reliable - [#1675](https://github.com/pencil2d/pencil/pull/1675)

### Bugfixes

+ Fixed an issue where undoing after deleting a layer caused the program to crash - [#1412](https://github.com/pencil2d/pencil/issues/1412)
+ Fixed an issue where certain user interface controls did not display correctly when using the Direct2D platform on Windows - [#1575](https://github.com/pencil2d/pencil/pull/1575)
+ Fixed several issues where the canvas did not immediately update after using certain actions - [#1642](https://github.com/pencil2d/pencil/pull/1642), [#1581](https://github.com/pencil2d/pencil/pull/1581), [#1580](https://github.com/pencil2d/pencil/pull/1580), [#1577](https://github.com/pencil2d/pencil/pull/1577), [#1576](https://github.com/pencil2d/pencil/issues/1576)
+ Fixed an issue where undoing the deletion of a keyframe caused the program to perform an additional undo operation or crash - [#1629](https://github.com/pencil2d/pencil/pull/1629)
+ Fixed an issue where the hand tool icon remained active after zooming with a stylus - [#1633](https://github.com/pencil2d/pencil/pull/1633)
+ Fixed an issue where transforming areas in certain imported footage would color them black - [#1642](https://github.com/pencil2d/pencil/pull/1642)
+ Fixed an issue where fill operations were performed twice when performed with a tablet - [#1667](https://github.com/pencil2d/pencil/pull/1667)
+ Fixed an issue where the system language was detected incorrecty on systems that have secondary languages configured - [#1703](https://github.com/pencil2d/pencil/pull/1703)
+ Fixed an issue where mouse wheel zoom misbehaved on some systems using the X Window System - [#1716](https://github.com/pencil2d/pencil/pull/1716), [#1711](https://github.com/pencil2d/pencil/issues/1711)
+ Fixed an issue where undo information was recorded improperly for the first change made after navigating between frames - [#1717](https://github.com/pencil2d/pencil/pull/1717)
+ Fixed an issue where the project recovery dialog appeared behind the main window on some systems - [#1721](https://github.com/pencil2d/pencil/pull/1721)
+ Fixed an issue where rotated selections boundaries were not visualised properly - [#1724](https://github.com/pencil2d/pencil/pull/1724)
+ Fixed an issue where transforms were applied incorrectly to rotated selections - [#1724](https://github.com/pencil2d/pencil/pull/1724)
+ Fixed an issue where the undo and redo shortcuts were erroneously disabled under certain circumstances - [#1721](https://github.com/pencil2d/pencil/pull/1721)
+ Fixed an issue where deleting a sound layer on Windows would under certain circumstances lead to a crash - [#1731](https://github.com/pencil2d/pencil/pull/1731)
+ Fixed an issue where playback of certain sound clips was truncated on Windows - [#1733](https://github.com/pencil2d/pencil/pull/1733), [#1756](https://github.com/pencil2d/pencil/pull/1756)

  Please note that in order to benefit from this bug fix in existing projects, it is necessary to re-import affected sound clips.
+ Fixed an issue where the use of valid file name extensions was not properly enforced in file save dialogs - [#1736](https://github.com/pencil2d/pencil/pull/1736)
+ Fixed several issues where the timeline was drawn incorrectly - [#1737](https://github.com/pencil2d/pencil/pull/1737)
+ Fixed an issue where dragging the timeline with the middle mouse button could alter the frame selection - [#1737](https://github.com/pencil2d/pencil/pull/1737)
+ Fixed an issue where tool windows briefly appeared and disappeared on startup before the main window was shown - [#1737](https://github.com/pencil2d/pencil/pull/1737)
+ Fixed an issue where the follow camera image import option used the wrong transform and resulted in general inaccuracies - [ebad47e](https://github.com/pencil2d/pencil/commit/ebad47ed4102818e4ca26b1d1a9318af654f61a5)
+ Fixed an issue where opening Unicode file paths failed when the program was compiled against MinGW32 - [eefd148](https://github.com/pencil2d/pencil/commit/eefd14824efa3689eb2443222ee22287240bc61b)
+ Fixed an issue where the movie exporter sometimes failed to export sounds when exporting a range that does not start at the first frame - [e9f72dc](https://github.com/pencil2d/pencil/commit/e9f72dcc468eb9887a8ed332be6d58ffbde473a4)
+ Fixed an issue where the movie exporter erroneously included hidden sound layers - [b315f27](https://github.com/pencil2d/pencil/commit/b315f27e2016ce779782ead4889205fe1ef6913c)
+ Fixed an issue where importing vector layers from a project file did not preserve their original colors - [#1798](https://github.com/pencil2d/pencil/pull/1798)
+ Fixed an issue where importing vector layers from a project file caused the program to crash - [#1798](https://github.com/pencil2d/pencil/pull/1798)
+ Fixed an issue where exporting a movie did not prevent interaction with the rest of the program - [#1801](https://github.com/pencil2d/pencil/pull/1801)
+ Fixed an issue where importing an image did not account for certain types of potential errors - [#1801](https://github.com/pencil2d/pencil/pull/1801)
+ Fixed an issue where trying to import an image onto a hidden layer caused the program to crash if a keyframe did not already exist on the target frame - [#1820](https://github.com/pencil2d/pencil/pull/1820)
+ Fixed an issue where trying to import an image onto a hidden layer did not produce an error if a keyframe already existed on the target frame - [#1820](https://github.com/pencil2d/pencil/pull/1820)
+ Fixed various memory leaks


### Various
+ Raised minimum system requirements of our AppImages to Ubuntu 16.04 "Xenial Xerus" or newer distributions - [#1635](https://github.com/pencil2d/pencil/pull/1635)
+ Added support for Wayland to our AppImages - [#1663](https://github.com/pencil2d/pencil/pull/1663)
+ Added update information to our AppImages - [#1680](https://github.com/pencil2d/pencil/pull/1680)
+ Added MIME type information to .pclx files - [#1698](https://github.com/pencil2d/pencil/pull/1698)
+ Improved robustness of project save/load logic - [#1710](https://github.com/pencil2d/pencil/pull/1710)
+ Added compatibility with Qt 6 when building Pencil2D from its source code - [#1743](https://github.com/pencil2d/pencil/pull/1743)
+ Clarified licence of certain files incorporated from the Qt Project - [#1757](https://github.com/pencil2d/pencil/pull/1757)
+ Added a custom start menu tile for Windows versions that support them - [#1787](https://github.com/pencil2d/pencil/pull/1787)
+ Added macOS builds for Apple Silicon - [#1835](https://github.com/pencil2d/pencil/pull/1835)



<Insert list of bugfixes reported in 0.6.6 or older that has been fixed.>

## Known issues & Gotchas

Here is a non-exhaustive list of bugs that we are already aware of, but were unable to fix in this release. Rest assured, we will do our best to fix all of them eventually.

\<Insert known issues>

## How can I help?

Pencil2D is developed by passionate volunteers in their spare time. You can become one too, there are many ways to help other than programming! Please visit the [Contribute page](https://www.pencil2d.org/contribute/) for further information.

