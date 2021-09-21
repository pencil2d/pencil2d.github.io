---
layout: page
title: FAQ
tagline: Frequently Asked Questions
comments: true
---

> **NOTE:** Since people are asking the same things over and over, we provide a much needed FAQ, please bear in mind we are working hard on solving stuff. If you'd like to suggest other "frequently asked questions" please leave comments.

{% include toc.html %}

## The program can't start because some .dll files are missing!

Depending on the name of the missing file, this error can occur for different reasons. Please check [the Troubleshooting Guide](/download/#troubleshooting) for some of the most common cases. If your particular case isn't solved there, please [let us know](/community/).

## Where's the [Insert OS here] version? Why isn't my [OS] version included?

At the time of writing, Pencil2D can run on:

- Windows 7/8/10 (experimental support for Windows XP/Vista)
- macOS 10.12 Sierra or later versions (experimental support for 10.7 Lion)
- Linux Ubuntu 16.04, OpenSUSE 42.1 and RedHat 6.6 or later version
- FreeBSD

### Legacy system support

Currently we are providing experimental support for legacy systems like Windows XP and macOS Mavericks.

We urgently need users' feedback from these systems since the devs don't have these old Operating Systems anymore. If you own a older machine that can run macOS 10.7-10.11 or Windows XP, and you'd like to help test, [please contact the devs](/community/)!

## I hear about "Nightly Builds" so what is it?

Nightly Builds are the most up-to-date, experimental versions that reflects the current state of the pencil2D application development. In Nightly builds you will have the latest features and bug fixes if you like to try something new. But you have to understand the nightly builds are not final versions and sometimes they can break more easily.

However, we encourage you to try the latest Nightly Builds whenever you encounter an issue with current pencil2d version, to see if the problem has already been fixed. That can help our dev team to avoid unnecessary or duplicate bug reports.

**Nightly Builds** [DOWNLOAD HERE](/download/nightly/)

## How to change the size of the canvas?

TL;DR - Double click on the Camera Layer.

Pencil2D has a infinite canvas, the bright rectangle at the center is the camera, a preview area when you export your animation to a video & image. So double-clicking on the camera layer is actually change the size of a camera, not the canvas. You can draw outside the camera border and move the camera around on the infinite canvas, set keyframes of camera positions on Timeline. For more info please check [this tutorial](https://www.pencil2d.org/doc/tutorials.html#ca).

## I like Pencil2D but... it is a bit 'buggy', what can i do?

We feel you, but every great piece of software you might know began in a humble way. Right now Pencil2D is in need of developers experienced or willing to learn Qt framework and C++ as well as proactive users that want to help however they can.

Pencil2D won't get hot just by looking at it, in fact there's more chances that you'll hate it the more you look at it. We need YOU for miracles to happen! [Consider donating your time](/contribute/) to report bugs, create art or just hang out with us at the forum while we wait for the next release.

For more information on how to contribute to Pencil2D please visit the **[Contribute](/contribute/)** Page.

## Pencil2D keeps crashing / Something happened and I couldn't save my work!

Fortunately Pencil2D has an autosave feature for those moments when you forget to save!

On every version you can access it like this:

**EDIT > PREFERENCES > FILES > Enable Autosave [ ] (click checkbox)**

![Autosave Preferences]({{ "/images/autosave.png" | relative_url }})

**Note** Change the “Number of modifications before autosaving” to affect how often Pencil2D will save automatically. As seen on the picture, in this case after 15 strokes or commands (like moving or clearing a frame), you’ll get your file auto-saved. You can modify this value to a **maximum** of **1024 steps** (0.6.5+) until the auto-save is triggered.

Note that before auto-save can work properly you HAVE to **save your file manually at least once** (i.e give it a name and specify a location to be saved on your computer). If you have the auto-save option enabled, and you have not saved your file at least once, once auto-save activates you’ll be prompted to save your file for the first time.

If you don't save at least once, you run the risk of getting a crash due to memory overload, particularly in low end computers (see below).

**Avoiding Memory Overload Crashes**

No matter the kind of work you're doing, be it a doodle or a full youtube episode, please, save your new files at the beginning of your work session at least **once**. We recently found that people were having constant crashes when working on files with many frames, but they were not saving at least once. 

The problem is that if you do not save, all the drawings will be stored in the RAM, and there's a limit to how much it can store, after reaching that limit your computer memory will not accept any more data and Pencil2D WILL crash.

## Does Pencil2D have a text tool?

Unfortunately not yet, but we are aware of this requirement and will work towards implementing once other critical issues have been solved.

## Does Pencil2D have a shape tool?

Unfortunately not right now, we are aware of the need behind this tool and will work towards implementing once other critical issues have been solved.

## I can’t seem to import videos, what's up?

This functionality has not been implemented yet, it's on our to-do list at the moment. If you'd like to see what features are coming feel fee to visit our **[Official Feature Request Tracker](https://github.com/pencil2d/pencil/issues/540)**

## When I import sounds, I can see it on the layer, but I can’t hear anything?

Please download Pencil2D 0.6.4 or later version and check it again. If you still can't hear the sound, we offer you a small workaround. Please download a free audio editor Audacity (http://www.audacityteam.org/download/).

  1. Open the file you want with it.
  2. The re-export it as a WAV file. It appears as WAV (Microsoft) PCM 16bit signed.

It will be a lot bigger, BUT, you will be able to import the file now!

If you want to convert back to a readable **MP3 file**, you have to download an [additional plug-in](https://manual.audacityteam.org/man/faq_installing_the_lame_mp3_encoder.html) for Audacity.

## My sound is off-sync after exporting a video

Pencil2D developers have worked heavily in the audio syncinc issue however there can be a small delay form how you preview it in the editor vs how it sound in a video player. To workaround this please finalize your video using a video editor. There are free alternatives that can help you shift the sound track appropriately and export.

## Can’t export videos.

Please make sure you are using the latest version (0.6.4 or later) to export videos. We use FFMPEG for this process.

**For users with spanish language localization (and perhaps other languages)**

There's a bug in version predating 0.6.5 which impedes users to export videos when having the interface To fix this you have to explicitly add the filetype to the video name when browsing for an output folder after using the "browse" button. 

If you see your file named only as `"MyAnimation"` please rename it to `"MyAnimation.FileType"` _(e.g FileType -> MP4, AVI, WebM, etc)_ and make sure the filetype extension is visible in the file address bar before exporting, otherwise Pencil2D will export an empty file and not a video, as it can convert the animation. **This has been fixed in version 0.6.5+**

## I was told it was possible to export GIF's but I can’t seem to find this option?

Use the dedicated GIF export action command:
**File > Export > Animated GIF... > Export Options Dialog**

In the export options click on **browse** to give your file a name (and make sure the filetype is attached to the name)

**Open-Source--**
+ [OpenShot](https://openshot.org)
+ [KDEnlive](https://kdenlive.org/en/)
+ [Shotcut](https://shotcut.org)
+ [Olive (Beta)](https://olivevideoeditor.org)

**Free**
+ [Lightworks](https://lwks.com)
+ [Hitfilm Express](https://fxhome.com/hitfilm-express)
+ [Davinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve/)

## Can I copy and paste in place specific content from one frame to another inside Pencil2D?

Yes, to COPY a portion of, or your entire drawing, you can use the selection tool (dotted marquee) to select a partial section of your drawing and press CTRL+C. Conversely you can also CUT the selected artwork by pressing CTRL+X.

Once you've copied or cut the artwork, Go to a new frame you have already created or create one now, then pres CTRL + V, and your selected artwork will be pasted in place.

## Can I flip / mirror my drawings?

Yes, in version 0.6.0 and above you can flip your **drawings** either vertically or horizontally.

If you want to flip the **VIEW** (meaning you only mirror how you see the canvas) you can use the menu commands:

**VIEW > Horizontal Flip (Shift + H)**
**VIEW > Vertical Flip (Shift + V)**

If you want to flip /mirror your **ARTWORK** permanently you can do the following:

1) Pick the **Select Tool (V)**
2) Select the artwork you want to mirror
3) With the selection still visible, use the menu command:

**EDIT > Selection > Flip X / Flip Y**

## I have a Hi-DPi screen / high resolution desktop, but text is wonky / icons are too small in Pencil2D

User **Jeetman** has contributed with this small workaround while the development team improves compatibility with high resolution displays:

Here is a quick fix for **HDTV display problems**. This may work for all HDTV’s, but I know that it definitely works on a SAMSUNG HDTV with recommended screen setting of 3840 x 2160. This may also work on other programs. I used this fix to correctly display the paint program that I use (paint shop pro X6) as well.

![Pencil2D Text / Icons Random Size]({{ "/images/high-dpi-problem.jpg" | relative_url }})

If you’ve installed Penci2D and are using Windows 10 and an HDTV, Your screen display may look like the picture above.

<img alt="Pencil2D Shortcut" src="{{ "/images/shortcut.jpg" | relative_url }}" style="width: 120px;">

To fix this, find your Pencil2D shortcut which is usually on the desktop but can be on the taskbar or in your start up.

<img alt="Pencil2D shortcut Properties" src="{{ "/images/properties.jpg" | relative_url }}" style="width: 400px;">

Once you locate your Pencil2D shortcut, right-click on the Pencil2D shortcut, click on properties.

<img alt="Shortcut Compatibility Tab" src="{{ "/images/shortcut-compatibility.jpg" | relative_url }}" style="width: 400px;">

The properties menu will open. Left-click on the ‘Compatibility’ tab on the top.

<img alt="OS Compatibility Menu" src="{{ "/images/compatibility-mode.jpg" | relative_url }}" style="width: 400px;">

The Compatibility menu will come up. Do the following:

Under the ‘Compatibility Mode’-‘Run this compatibility mode for:’ – CHECK THE BOX

Verify ‘Windows 8’ is selected. If not, left click the flyout and select Windows 8
_(Note: You can also use compatibility with Windows 7)_

Under Settings: ‘Override high DPI scaling behavior’ – CHECK THE BOX

Under Settings: ‘Scaling performed by’ change ‘Application’ to ‘System’ by left-clicking the flyout and choosing ‘System’. Click Apply then OK.

![Fixed Pencil2D Compatibility]({{ "/images/high-dpi-scaled.jpg" | relative_url }})

Run Pencil2D (from the shortcut icon you just modified). Your display should look as shown above.

## Pencil Crashed and my files are unusable / corrupted!

_**A proper crash recovery has already been put in our development plans, we won't let you wait too long!**_

_Please follow the **[Pencil2D Project File Corruption Prevention / Partial Recovery Guide](https://discuss.pencil2d.org/t/pencil2d-project-file-corruption-prevention-partial-recovery-guide/3105)** to avoid losing work._

We are looking for ways to optimize Pencil2D, but improving your computer is paramount for any graphics creation software. Meanwhile please read the following advice to prevent losing work when experiencing similar issues:

1. If you’re planning to work semi-professionally with Pencil2D (youtube content creator, freelance animator, etc) we recommend that you comply with the following minimum requirements:
+ 64 Bits Operating System
+ ICore-5 (3rd Generation or Above) or comparable CPU architecture
+ 4GB of RAM

2. When working we recommend that you work with Individual Files for your CUTS / SHOTS / SCENES, instead of doing a full length video on a single file.
+ Separate your animation into smaller chunks that contain only ONE scene or cut each. Do this according to your storyboard / beatboard, so you can keep track of each scene requirements.

3. Professional digital artists and animators in studio environments use a **numbered nomenclature** to name their files. Usually each saved file name is suffixed by a double, triple or even quad digit number. **e.g** `my_pencil_file_0001.pclx`
+ You should attempt to make habit of saving your progress with the next number in sequence at major milestones (i.e keyframes, breakdowns, inbetweens, ink n' paint, etc). This way you can prevent to lose your work in the rare case that Pencil2D crashes and corrupts your save.
+ In the future we will attempt to automate this process as well, since it’s good practice to save it that way regardless of stability issues of any given software.

## How to increase the timeline frame length? I can only see 240 frames.

Pencil2D can currently display up to **10,000 thousand frames**.

But don't worry the timeline will auto extend when you place a keyframe towards the end of timeline panel display space.

To enable more frames manually please go to:
**EDIT > PREFERENCES > TIMELINE > Timeline size in Frames**

However we advice that you **DON'T** force Pencil2D to work with more than 1500+ frames per file, unless you are prepared for possible issues during work in the editor and during export that can arise from high memory use. We understand this might seem like a rather strict limitation, but it’s a safe boundary limit before things can start to go out of control.

We will be working to optimize and improve the amount of frames you can work with and export at any given time, but we ask you to work smart. Remember the more frames and layers you have, the more memory Pencil2D WILL use, and the chance of crashing WILL increase particularly on low-end computers.

## Understanding Pencil2D Save files *.PCL (Legacy) & *.PCLX

When you save your animation file in Pencil2D there are several things that you'll get.

1. Pencil2D saves a **.PCL** file that is exclusive to the software. It is **not** an image or a video file, that means it does **not** hold inside any of image or sound you imported or created. It's more like an address book, which locates all those resources you've created or imported!

2. A New folder is automatically created in the same location next to your .PCL file. It's name should be like something like this `MyFileName.pcl.data`. This folder contains all of your actual drawn keyframes saved as numbered .PNG images! as well as Your current colour palette info plus your "vector shapes" information are included there as .xml and .vec files respectively. If you import sound for example (see partial solution below), you'll also see a copy of the actual sound file in this folder. All of the resources in the folder are absolutely necessary for Pencil2D to understand how your animation is going to be displayed when you preview it inside the program.

3. The **.PCLX** file from 0.6+ on the other hand is basically a container. It’s a compressed ZIP file that holds both the .PCL file and it’s associated DATA folder. You can extract it effortlessly by common zip tools like Winrar or 7zip if you rename the .PCLX extention to .ZIP (e.g `myAnimation.PCLX` -> `myAnimation.ZIP`)

--------
Some of the original FAQ solutions were contributed by user Piggy, chchwy, Jeetman and morr.
