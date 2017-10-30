---
layout: page
title: FAQ
tagline: Frequently Asked Questions
---

### THIS PAGE IS UNDER HEAVY CONSTRUCTION

> **NOTE#1:** Since people seem to be asking the same things over and over, we'll provide everyone with a much needed FAQ, please bear in mind we are working hard on solving stuff. If you'd like to suggest other "frequently asked questions" please do it in the comments. Note that you'll have to login into a DISQUS friendly account to comment in this page.

> **NOTE#2:** Video and Sound related solutions only work with version 0.5.4b for Windows 7 SP1, NEWER Pencil2D versions will have the video and sound plugins DISABLED meanwhile developers fix the appropriate libraries

{% include toc.html %}

## Where's the [Insert OS here] version? Why isn't my [OS] version updated?

Right now it's rather difficult to get Pencil2D working on every OS side by side, particularly since the devs don't have exclusive access to machines with different Operating Systems.

So far there are Windows, Mac and Linux versions that work, but for Pencil2D to grow we need developers that have access to these machines in order to contribute. If you'd like, please consider donating some of your time to improve this wonderful tool!

## I hear about these "Nightly Builds" over and over but what are those?

Nightly Builds are basically bleeding edge, experimental, versions meant for bug testing and to show update on development. You have to understand these aren't final versions and can break easily.

However whenever you have an issue with your current pencil2d installation or portable version, we encourage you to use the latest Nightly Builds in order to see if your problem has already been fixed. tablehis can help our development team to avoid unnecessary or duplicate bug reports.

**Nightly Builds** [DOWNLOAD HERE](/download/)

## Understanding Pencil2D Save files

When you save your animation file in Pencil2D there are several things that you'll get.

Pencil2D saves a .PCL file (or a PCLX for bleeding edge versions) that is exclusive to the software. It is not an image or a video file, that means it does NOT hold inside of it any image or sound you imported or created. It's more like an address book, which locates all those resources you've created or imported!
A New folder is automatically created in the same location next to your .PCL file. It's name should be like something like this [MyFileName.pcl.data]This folder contains all of your actual drawn keyframes saved as numbered .PNG images! as well as Your current colour palette info plus your "vector shapes" information are included there as .xml and .vec files respectively.If you import sound for example (see partial solution below), you'll also see a copy of the actual sound file in this folder. All of the resources in the folder are absolutely necessary for Pencil2D to understand how your animation is going to be displayed when you preview it inside the program.

## Pencil keeps crashing (/sob) / Something happened and I couldn't save my work!

Fortunately Pencil2D has an autosave feature for those moments when you forget to save!

On every version you can access it like this:

**EDIT > PREFERENCES> FILES (Icon) > Enable Autosave [ ] (click checkbox)**

![Autosave Preferences](http://i.imgur.com/CaRcfof.png)

The “Number of modifications before autosaving” is pretty self-explanatory. After 15 strokes you’ll get your file auto-saved. You can obviously change that number.

Also when you activate that without having saved, ever, after 15 changes you’ll be prompted to save for the first time your file.

> **NOTE#1**: "Most solutions work only with version 0.5.4b for Windows 7 SP1, **NEWER** versions will have the **Video and Sound plugins DISABLED**"

## So it seems I can’t import videos, what's up?

Let’s take a look at the extremely useful console window. Apparently, a necessary plugin is missing. What you have to do is go HERE http://ffmpeg.zeranoe.com/builds/ and download FFmpeg git-3bedc99 32bit Static. Extract, and go to the bin folder. There you will find ffmpeg.exe. Copy it. Then, inside the Pencil2D folder, create a new folder named “plugins“. Paste ffmpeg.exe there, and voilà: You can now import videos for study, rotoscoping, or any other use you want.

Caution: You absolutely need to have a bitmap or vector layer selected before you import the video, or bad stuff will happen.

## When I import sounds, I can see it on the layer, but I can’t hear anything? (Windows only)

Well the thing is, right now Pencil is incapable of importing sound as it is, unless you tinker with the program itself. Since it’s annoying to download the whole 260 mb Qt Package just for a few plugins I managed to trim it down to the essentials (a.k.a the needed plugins)

Here’s a link to a zip file containing all the files.

[DOWNLOAD: Qt 4.8.5-VC2010 Plugin Package For Windows](https://dl.dropboxusercontent.com/u/59671876/4.8.5-VC2010.zip)

1. Go to your C:\ drive and create a folder named “Qt” (without the quotes)
2. Inside the Qt folder, extract the downloaded zip file
3. Afterwards it should look something like this C:\Qt\4.8.5-VC2010
4. Open the Pencil2D Software
5. Create a new “sound layer”
6. With the layer selected import a .wav sound file for testing purposes.
7. On your bitmap layer create a new keyframe for the final frame according to the duration of your sound. <br /> **For example** if your sound has a duration of 2 seconds, you have to create your _new keyframe_ on frame 48 using 24fps playback rate.
8. Click the play button, and see if it works!

Hope this helps, cheers!

## Hey, but I can’t export videos either!?

…Yeah, I still haven’t figured this one out. The program either looks like it exports the video perfectly, but when I look, there’s no file anywhere to be found, or it just crashes. I usually export in image sequences to further edit them in other programs, but the option to export directly to video file would be really nice to have.

What I found out so far: Part of the problem seems to be, again, with the sound layer. If I remove the sound, it exports the video perfectly. BUT, another part of the problem seems to be with the framerate! If I export a video in anything else than 24 FPS in the editor and 25 FPS in the export options, it crashes.

---Suggested Export Workflow for Animation & VFX---

Aside from limitations from a compositing & editorial perspective it is ALWAYS recommended to work with image sequences in a professional environment, just in case anything goes wrong your rendered piece wont go to waste, and you’ll be able to pick up where it was left off (if there’s a black out you won’t lose several hours of rendering but a few frames).

I’d recommend working your pencil files PER SHOT (as in Camera shots or cuts e.g. Close-up, long-shot, etc). And not work the entire animation on a single file.

This is how usually studio pipeline works, sometimes they go with entire scenes, but in here it is also the best route just to work camera-shot-by-file because of the software predisposition to crash. Besides when you import too many images on a timeline Pencil will eat RAMemory like crazy.

During my test I only imported 95 images and it’s eating a little short of 1 gig of RAM. So I assume one could handle at most 6 to 10 second shots depending on your computer and on your needs.

After you export your png image sequences by shot (remember to save on separate folders for better organization, inside a common scene folder) you can easily import them in your trusted video editor, and then render your finished animation in a video you can upload on youtube or send to your employer.

So, Indeed you can’t export a movie just yet, just png image sequences right now with the stable version (and possibly the bleeding edge ver).

Here's our preferred tutorial on how to create a video using [**Blender**](http://www.blender.org/download) Video Editing Module & Pencil2D:

[![Watch on Youtube!](http://img.youtube.com/vi/HIxm5xJW_Sc/hqdefault.jpg)](https://youtu.be/HIxm5xJW_Sc)

There's another quick video to learn how to export images from pencil2d and import them in the open source video editor **[Shotcut](http://www.shotcut.org/)** which is really easy to use, and there are versions for almost every operative system you can get at their website. (_**Warning:** The creator was a bit tired when recording this video_)

[![Watch on Youtube!](http://img.youtube.com/vi/4VUr2yCkm0U/hqdefault.jpg)](https://youtu.be/4VUr2yCkm0U)


## Man what the hell, -sigh- at least it imports / exports to GIF, right?

Entry Added on (04-FEB-2016)

Well..now that you mention it...right now we're looking into adding this type of functionality.

In version 0.5.4b you can't import or export animated GIF files properly. What I mean is that you can only import  only one (1) frame from an animated GIF, and you can export an image sequence with a GIF extension, but not an animated GIF.

In the newest developmental version (a.k.a Nightly Builds) you can now import every frame of your animated GIF's into pencil, but we are still looking for the export solution.

(25-FEB-2016) We now have a tutorial to churn Animated GIF's with minimum effort using Pencil2D & Free third-party software.

GifAnimation App is an open-source (free), lightweight and portable software that can run on Windows & Linux. Download it here: https://sourceforge.net/projects/gifapp/files/GifApp-1.3/

For our MAC users we recommend searching the Apple Store, although an anonymous user has pointed out that GifFun https://www.stone.com/GIFfun/ might do the trick, but you’ll have to use it at your own risk.

## Can I copy and paste in place specific content from one frame to another inside Pencil2D?

Yes, to COPY a portion of your drawing, you can use the selection tool (dotted marquee) select a partial section of your drawing and press CTRL+C. You'll know you did it correctly because the selection box will dissappear. Go to a new frame you have already created or create one now, then pres CTRL + V, and your selection will be pasted in place.

If you need to CUT something from one frame to another, it WON'T work, you'll lose whatever you cut because it didn't go to the clipboard. So it's recommended (meanwhile it's fixed) that you always copy and paste, then delete the content on your previous frame.

Here's a video tutorial that explains this plus a bonus (hackish) method to mirror your drawing inside Pencil2D:

[![Watch on Youtube!](http://img.youtube.com/vi/37Ui5KbVqk4/hqdefault.jpg)](https://youtu.be/37Ui5KbVqk4)

## I like Pencil2D but... it is a bit buggy :'( , what can i do?

We feel you, but every great piece of software you might know began in a humble way. Right now Pencil is in need of developers experienced or willing to learn QT framework and C++ as well as proactive users that want to help however they can.

Pencil2D won't get hot just by looking at it, in fact there's more chances that you'll hate it the more you look at it. We need YOU for miracles to happen! [Consider donating your time](/contribute/) to report bugs, create art or just hang out with us at the forum while we wait for the next release.

For more information on how to contribute to Pencil2D's code visit our [Github Respository](https://github.com/pencil2d/pencil#pencil2d-animation)

## In newer versions drawing is just too slow, what happened?

---This answer is a work In progress

## OMG Pencil Crashed and my files are unusable / corrupted!!!11!1! /cry!!!

---This answer is a work In progress. This will be more of a preventive guide to avoid getting your pencil files dragged to hell, because usually it's near impossible to recover them once this happens.

## Pencil just can't get anything right man, it's crashing left and right

---This answer is a work In progress. This will be a list of dont's to avoid crashing the program.

Some of the original FAQ solutions were contributed by user Piggy and user morr.
