---
layout: page
title: A Comprehensive Guide to Pencil2D Video Export Issues
comments: true
# originally posted by scribblemaniac at https://discuss.pencil2d.org/t/7394
---

Exporting your Pencil2D project is normally a very straightforward process. You go to the File section in the top menu, then Export..., then select the format you want to export to. Change any settings you want in the export dialog, press okay, and after a brief wait, you should have an exported project usable in other applications. This guide is for when your export does not go so smoothly and the export fails or produces the wrong output. Scroll through the headers to find sections that may describe your issue.

{% include toc.html %}

## An error dialog appears / Something went wrong

![Error Dialog Screenshot]({% link images/video-export-error-dialog.png %})

If your export does not complete, and a window pops up with an error message that looks like above (the message may be different), there are many potential causes. We'll walk through all of them roughly in order of most to least common:

### ↳ Too many sounds

Currently Pencil2D's movie exporter has a limit of 63 sound keys in a project across all layers. If you have a project with many sounds, you may be encountering this limit. To check for sure, you can look for the text `Error initializing filter ‘amerge’` in the details box at the bottom of your error dialog. If it contains this text, then this is your problem.

At some point, Pencil2D will be updated to support more sound clips, but this may not happen soon. Until then, here is our recommended workaround:

1. Make a backup copy of your project. Do this by either copying your project's file, or from within Pencil2D by using the File > Save As... action to save a copy to a different file location.
2. Whether by deleting individual sound keys, or by deleting whole sound layers if you have multiple layers, remove sound keys until you are able to export successfully.
3. Reopen your project without saving, and delete any the sounds you've previously exported, continue deleting sounds until you can export successfully to a different output file.
4. Repeat this process as many times as necessary until you have all your sounds in exactly one of your exported files.
5. Import the video from one of your exported animations, and the audio from all of them into a video editor (Shotcut is a relatively simple FOSS option, but there are many other open and commercial options available). You can then use this to export a final video that contains your animation with all of the exported audio playing together.

Please note that part of the reason this limit exists is because Pencil2D was not designed for large animations to be contained within in a single project. If you are encountering this limit, you should reconsider how you're structuring your work. Creating a project for each shot in your animation will result in smaller projects where this issue is less likely to be encountered. This approach will also reduce the impact on your overall animation should one of the files get corrupted or accidentally deleted. Your shots can then be exported individually and combined in a video editor.

### ↳ Invalid camera dimensions

If you are exporting as a movie to the MP4 format (the default), the width and height of your exported must both be even numbers (divisible by 2). This is a requirement of the underlying video codec and cannot be changed by Pencil2D. The details box at the bottom of your error dialog should contain the text `width not divisible by 2` or `height not divisible by 2` if this is your issue. Working around this is quite easy:

1. Double click the camera layer in your project. This will bring up the camera dimensions.
2. Change any of the dimensions that are odd to an even number. Adding one will result in an extra row/column while subtracting one will remove a row/column. In both cases the change should be virtually unnoticeable unless you are producing a very small animation. If you have filled in the background of some of your frames, subtracting a pixel is usually the best option unless you have filled past the edge of your camera border.
3. You should now be able to export your animation. When the export dialog appears, make sure that the export width and height match the numbers you set for the camera layer (they should by default).

As an alternative workaround, you can export to either the WEBM or AVI format. AVI has a much poorer video quality and compression ratio so we don't recommend using it over MP4. The quality and compression of WEBM is much better, but it is typically much slower to export and isn't as widely supported.

### ↳ FFmpeg is missing


This issue is an internal issue that can easily happen on Windows and with some Linux distributions. FFmpeg is a tool Pencil2D relies upon to export video and this error can occur if Pencil2D can't find it. If this is your issue, the error dialog may have no message at all aside from `Ooops, Something went wrong.`, although this isn't the only issue which will cause of an empty error dialog.

If you are on Windows, you can try the following things to fix this issue:
1. Navigate to where you have the pencil2d.exe executable file saved. In this same director you should have multiple other files and directories. One of these should be a "plugins" directory. Open this up and verify that there is a file named ffmpeg.exe inside it. If this file is there, proceed to step 2. If it is missing, go to step 3.
2. If you have an third-party antivirus software installed on your computer, make sure that this ffmpeg.exe file is not block or quarantined. If you don't have an anti-virus software or this does not fix the issue. Continue to the next step.
3. Redownload and reinstall Pencil2D from [our download page]({% link download/index.md %}).
4. If you are still have issues, try following the extra steps outlined in [this Pencil2D Windows installation guide]({% link doc/how-to-train-your-pencil2d.md %}) to make sure the application is being installed completely. Antivirus software and even Windows itself can sometimes interfere with the installation and this guide suggest ways to avoid these issues.

If you are on Linux, the cause of this issue can depend on the method you used to install Pencil2D. If you are using an AppImage or Flatpak, this issue should never be encountered and you should report the problem (see the "Something else" subsection below). If you installed this using your package manager, it should automatically install the ffmpeg utility as a dependency. Refer to the documentation of your package manager to check for and resolve unmet dependencies. Often uninstalling and reinstalling the package will work. If your using a package manager, or have built Pencil2D from source, make sure that the ffmpeg utility is on the PATH environment variable passed to the Pencil2D process, or that there is an executable file named ffmpeg in a plugins directory next to the pencil2d executable and that the user running the Pencil2D process has permission to run the ffmpeg file. 

### ↳ Save location is not writeable

There are multiple reasons why Pencil2D may not be allowed to write to the destination file location. 

If the details section at the bottom of the error dialog contains `No such file or directory` then the folder in which it is attempting to export to does not exist, and Pencil2D will not create it automatically. To fix this, you should change the export file location in the export dialog and select a location that already exists, or create new folders for the location that does not exist.

If the details section contains `Permission denied`, then you may not have write-permission to the target directory, or a file may already exist at the target location and you do not have permission to delete/overwrite it. To fix this, you should change the export file location in the export dialog and select a location you are sure you can edit, and where a file with the same name does not already exist. Selecting a location within your user directory (Desktop, Documents, Videos, etc.) will usually work well.

### ↳ Non-local directories (external drives, network drives, cloud storage)

Exporting to locations on external drives such as USB Drives or to network mounted drives may cause some issues that are difficult to diagnose. There have also been reports of issues attempting to export directly to locations synced with a cloud file storage service such as Dropbox. If you are attempting to save to a location like the ones just described and are encountering issues exporting, please try exporting to a directory on your local machine (folders within your user directory Desktop, Documents, Videos, etc. are usually local). If this succeeds, then you can move or copy the files to your desired location after the export is complete.

### ↳ Out of space

If the drive you are saving to is low on space, the export can fail in unpredictable ways. Check the amount of free space remaining on the drive you are trying to save to, and if it is less than 100 MB, you likely have run out of space. Delete some files from the drive that you no longer need to free up space, or find a different drive to save to with free space available, and export again.

### ↳ Something else

If an error dialog is showing up after attempting to export, and you've gone through all the sections above without finding a solution to your problem, please follow the instructions under the "Reporting your problem" section at the bottom of this guide.

## Audio issues

### ↳ Audio cuts off early

If the audio in your exported video stops before the end of the sound clip, it is most likely an issue with your export settings. By default, Pencil2D will export from the first frame of your animation to the last key in any non-sound layer. This means that if your sound clips extend past your last drawing/camera key, then by default it will not export the end of your audio. When you go to export, make sure that you have the "To the end of sound clips" option checked in the Range section of the export dialog. This will extend the range of frames exported to the end of your last key, including sound keys.

When playing back an animation in Pencil2D rather than exporting, the audio can be cut off early due to issues with the audio's metadata. It is very unlikely that this will affect the exported video, but if the above solution does not work for you, you can try downloading and installing the latest nightly build from [our nightly build download page]({% link download/nightly/index.md %}) and then deleting and reimporting your sound clips with the nightly build version and reexporting. These newer versions of Pencil2D will automatically strip out problematic metadata from audio when importing.

### ↳ No audio in output

There are multiple things to check if you don't hear anything when playing back your exported video. First off, make sure that you are using a format that supports audio. Only movie exports have sound. Animated GIFs are not able to store sound, and neither are APNGs. Currently only MP4, WEBM, and AVI movie formats support sound, so make sure you are exporting to one of these.

If you're exporting to a format that supports audio and you still don't hear anything when playing it back, make sure that the audio settings on your computer and video player are not muted. The best way to check this would be to play a video you know has audio with the same video player.

This next thing to check only applies if you are using a version newer than 0.6.6 (including the nightly builds). If you are using one of these builds, make sure that your sound layers are not hidden. If they are hidden, they will be muted in the preview and exported video. Hidden layers have a unfilled circle next to them on the far right hand side of the timeline. After unhiding any layers, you will need to re-export the animation.

At this point if you are still having issues, it may be helpful to load the audio from your exported video into an video or audio editing program that displays waveforms to determine if there is an audio track that won't play, or if there is no audio track at all. We recommend using [Audacity](https://www.audacityteam.org/) which can open the video files directly. If when opening the video with such a program, it successfully loads an audio track, and can play that audio track then most likely your video player does not support the audio codec Pencil2D exports to. You can try a different video player ([VLC](https://www.videolan.org/vlc/) for example).

If there is an audio track when loaded into a video/audio editor, but it consists of nothing but silence, your source audio may be cancelling itself out when downsampling to mono output. Please see the "Portions of audio clips quieter than source" section below for more details.

If there is no audio track whatsoever in your video/audio editor, then there was some unknown error during the export. See the "Something else" section below.

### ↳ Missing stereo output

Currently, Pencil2D's movie exporter only supports one specific configuration for audio layout. All exported movies will technically have two audio channels (ie. stereo), however both channels are identical and are the result of downmixed all sound clips to single-channel (mono) audio. This is done for technical and compatibility reasons and will likely be improved upon at some point. If you need to preserve the stereo channels of your input audio, or you need more than two audio channels, please use an external video editor to add the audio clips to a video or image sequence exported from Pencil2D.

### ↳ Portions of audio clips quieter than source

Under very specific circumstances, you may observe portions of your audio clips being quieter than you expect. This could be full sound clips or limited to segments of sound clips, specific pitches/frequencies, or even specific instrument or vocal tracks within a sound clip. The reason for this is that, as explained in the previous section, a part of Pencil2D's movie exporting process is downsampling the audio clips to mono. If your source audio is stereo, the exported audio will be the average of the left and right channels. These two channels can interfere with each other, and even cancel each other out completely.

If you are experiencing an issue like this, there are two ways you can work around this. One, you could downmix the audio yourself to mono in a way that preserves the content of the audio using an external audio editor. Then import the mono audio tracks for use in your Pencil2D project. Two, you could use an external video editor to add the audio clips to a video or image sequence after it has been exported from Pencil2D. This has the benefit of usually supporting more flexibility in the audio channel layout than what Pencil2D can provide.

### ↳ Something else

If you've gone through all the sections above without finding a solution to your audio problem, please follow the instructions under the “Reporting your problem” section at the bottom of this guide. If possible also share a link to the audio files you imported into your project (this can be done the same way as sharing the project file, which is described under the aforementioned section).

## Video quality problems

### ↳ Blurry video

If your exported video appears blurry when compared to viewing it in Pencil2D, there are many possible causes of this issue.

The most common reasons for a blurry export are due to specific project settings. The first thing you want to check is that the camera resolution (which can be found by double clicking on the camera layer) matches the export resolution (which is found in the export dialog). If the width and height don't match up between these two places, then your final video will be a scaled version of your animation. Unless you are just starting your animation, you will want to modify the export resolution, not the camera resolution. Modifying the camera resolution will change the area of the canvas that gets exported, and will cut off or add unwanted areas on the edges of your animation.

If the camera resolution and export resolution match, your animation can still be scaled if the camera layer is zoomed in or out on your animation. To check this, select your camera layer, and then in the top menu go to View > Zoom >\> 100%. If the scale of your animation changes after you do this, then your camera layer was zoomed. This can happen whenever you try to zoom in while a camera layer is selected. Resetting the zoom to 100% should fix this, but your animation may now be the wrong scale. Your options are to undo the zoom reset and settle for some blurriness from scaling, or to lower/increase your camera resolution until your animation "fits" within the camera border. If your camera layer was zoomed out, this could mean exporting to a lower resolution, which will be scaled back up by your video player when played in a large enough window.

If you are using vector layers and notice a difference in quality between the exported video and Pencil2D, this is a normal part of how the vector layer works. The vector layer represents your stokes as paths, rather than pixels, so they are not constrained to the resolution of the canvas, but they must be rasterized (converted to a pixel representation) for export. If you increase the export resolution (in the export dialog), the vector frames will scale to the higher resolution before rasterization, preventing blurriness that might arise from scaling applied by your video player. Be sure to increase the width and height by the same percentage to preserve the aspect ratio of your video and avoid stretching.

Finally, your exported animation may be blurry because of the format being exported to. Pencil2D only supports exporting MP4, WEBM, AVI, and GIF videos in a lossy manner. The internal settings for exporting have been tuned to provide a high quality video at a reasonable file size, but there are situations where the visual difference may be noticeable. In particular, aliased strokes such as those made with the pen tool and anti-aliasing disabled, can create sharp edges that are difficult for most video formats to capture properly. In this specific case, a GIF may work better than MP4, WEBM, or AVI. If you need a higher quality video though, we recommend exporting your animation as a image sequence and using an external video editor with more advanced export settings to export the image sequence as a video with your desired quality.

### ↳ Timing is off

If the timing of your animation in Pencil2D does not match up with the timing in Pencil2D, there are several possible causes. In the general and most common case, when working with a project with audio, the audio and video may go out of sync when previewing the animation in Pencil2D. This can lead to different results than you would expect when the video is finally exported. The reason for this is that the Pencil2D preview will not drop frames or modify the speed of the audio, so if your computer is unable to render the frames at the target frame rate, the video will fall behind the audio. The longer you are playing back for, the greater this difference becomes. The recommended workaround for this issue is to use the sound scrubbing feature for timing your animation as it is usually accurate and won't get out of sync. Additionally, for larger previews, making a test export is recommended to get the most accurate representation of the timing. You can choose to only export a specific range, or reduce the export resolution (ideally your camera resolution divided by some multiple of 2) if you wish to speed up the export for previewing purposes.

The timing of frames may also be different when exporting to the animated GIF format. The GIF format stores the timing for each frame in tens of milliseconds. So, if the frame duration (1/fps) is not a multiple of 0.01 seconds, then frames may be duplicated or dropped to approximate your desired fps. In practice, frame durations of 0.01 seconds are slowed down to 0.02 by most browsers, making 50fps effectively the max frame rate that can be exported correctly as a GIF. The only way to fix this issue would be to set the project frame rate that can be used in a GIF without rounding (50, 25, 20, 10, 5, 4, 2, or 1 fps), or to export to a different format.

### ↳ Background is not transparent

Support for transparency/alpha channels varies depending on the format you are trying to export to.

If you are trying to export to an animated GIF, the GIF format technically supports fully opaque and fully transparent pixels, but nothing in-between (ie. the equivalent of a 1-bit alpha channel). However, Pencil2D does not currently support exporting animated GIFs with transparent pixels. This functionality will be added in a future version. Until then, you can workaround this issue by exporting your project as an image sequence and then converting that to an animated GIF with an external video editor or online converter.

If you are trying to export to WEBM or APNG, these formats fully support transparency, but you must make sure that you have "Transparency" checked in the Export Dialog under Exporter Settings. If you still do not see a transparent background in the exported video after doing this, it may be an issue with your video player. Not all programs support video transparency, particularly with the WEBM format. They may instead choose to render transparent areas as black.

If you are trying to export to any other video format, including MP4 and AVI, the codecs used for these formats do not support transparency and there is no way to enable it. Select another formats if you need transparency. If you need it to transfer to another animation program or video editor, a PNG image sequence is highly recommended to avoid quality degradation from lossy video formats.

### ↳ Color is slightly off

There are two known issues with export coloring, one applying to GIFs and one applying to MP4, WEBM, and AVI formats (which we will simply refer to as the video formats in this section).

If you are exporting as an animated GIF, you may notice regions that are not the correct color, banding issues, or dithering, particularly with animations that contain many colors or gradients. This is expected behavior for the GIF format, which has a limited 256 color palette. Exporting to movie format will result in better quality at lower file sizes. If you absolutely require a GIF and you want to squeeze the highest quality possible out of it without regard to the file size, you can look into using the Image Sequence export along with the third-party FOSS application [Gifski](https://gif.ski/).

If you are exporting to a video format and are finding that colors of the exported video are slightly off compared to playback in Pencil2D, you may be encountering a difference between the colorspace conversion standard Pencil2D uses to export the video, and the one your video player is using to play that video. More technical details can be found in [this issue](https://github.com/pencil2d/pencil/issues/1366). If you need to work around this, you will have to export your animation as an image sequence and combine them into a video using an advanced video editor which either matches the behavior of your video player, or allows for manually specifying the colorspace conversion options.

### ↳ Something else

If you’ve gone through all the sections above without finding a solution to your video problem, please follow the instructions under the "Reporting your problem" section at the bottom of this guide.

## Pencil2D crashes

If Pencil2D shuts down without warning at any time during the export process, then it has crashed. One possible reason Pencil2D may crash is if your computer runs out of free memory. You can check if this is the case by opening your Task Manager (or the equivalent on non-Windows systems), starting an export in Pencil2D, and then watching the total memory of your system to see if it is filled shortly before Pencil2D crashes. The Pencil2D exporter is designed to require up to about 1 GB of memory during export. However, the animated GIF export can require substantially more memory for longer/larger animations as all frames have to be rendered into memory for technical reasons. This may change in future versions, but for now we recommend only using animated GIFs for animations that are short and not too high resolution, particularly if you are on a system without a lot of RAM. Regardless of the format you are trying to export to, if your computer is running out of memory, you can try exporting your animation to an image sequence, and then converting that image sequence to a video with an external video editor.

If Pencil2D is crashing and your computer does not appear to be running out of memory, it is likely some internal issue with Pencil2D. In this case, please report the issue to us as described in the "Reporting your Problem" section at the bottom of this guide, except use the [the bugs section of our forum](https://discuss.pencil2d.org/c/bugs/) or the bug-discussion channel of [our Discord server](https://discord.gg/8FxdV2g).

## Reporting your problem

If none of the sections above provide a solution to your problem, you may have encountered a particularly rare issue or one that we are not aware of yet. Please request support in [the appropriate section of our forum](https://discuss.pencil2d.org/c/support/5) or in the help-me channel of [our Discord server](https://discord.gg/8FxdV2g). Wherever you report your problem, at minimum please include *all* of the following details:

* Your operating system (Windows, macOS, Linux)
* The version of Pencil2D you are using (you can check by going to Help > About, or Pencil2D > About on macOS).
* The format your are trying to export to, and any non-default export settings.
* If you encountered an error dialog, the *entire* error message of that dialog.

If possible, sharing a link to your project file is also very helpful. Depending on the platform and the size of the project, you may be able to upload the project file directly. If not, you can use a third-party service such as [WeTransfer](https://wetransfer.com/), [Google Drive](https://drive.google.com/), [Dropbox](https://www.dropbox.com/), or [MEGA](https://mega.nz/) or any file hosting service that produces publicly shareable links.
