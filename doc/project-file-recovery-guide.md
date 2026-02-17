---
layout: page
title: Project File Corruption Prevention / Partial Recovery Guide
comments: true
# originally posted by josemoreno at https://discuss.pencil2d.org/t/3105
---

If you’re just starting out with Pencil2D, the development team has been fixing a few bugs that have to do with saving and loading. **Release version 0.6.5 and above should minimize these issues** get it from [our download page]({% link download/index.md %})

{% include toc.html %}

## CORRUPTION PREVENTION TIPS {#prevention}

### WINDOWS

Due to recent change in the **security protocols** for Windows OS, after downloading the Pencil2D ZIP file from the website please review [our How to Train Your Pencil2D guide]({% link doc/how-to-train-your-pencil2d.md %}) first.

**Note**: if you're NOT the **system admin** unzipping the app in the `C:\Program Files` folder should help reduce the instances where windows aggressively blocks the application_

### MACOS

These problems also occur from security permissions limitations imposed by the OS ever since **GateKeeper** was introduced (10.9.5) so you might need to look into your **System security settings**. 

Please review [this guide](https://support.apple.com/en-us/102445) in case you need further assistance on how to deal with your macOS security settings for **unsigned apps** (apps not downloaded from the app store)

### OS AGNOSTIC TIPS {#agnostic}

However, In the event that you find yourself running upon rare issues (app crashing is absolutely not normal behavior), please consider the following to prevent losing and, in some specific scenarios, also recover your work:

1. Always **create backup copies** of your work file BEFORE loading and AFTER saving a project successfully. his is so you can go back to a previous state if something happens.
   *Note: A feature to do this automatically [**has been proposed here**](https://github.com/pencil2d/pencil/issues/1045) but it will take time for it to be implemented.*
2. Issues when **loading** a file:
   - **Problem**: In **0.6.1**, you could load a file without problem for the first time, but **if you had a file already open** and you wanted to load an existing file, the files would load but all the keyframes would appear blank.
     - **Workaround**: You need to create a NEW FILE first, and then use either the "open" or "open recent" commands to successfully load an existing file.
       _Note_: This has been **fixed for 0.6.2**, but if this behavior occurs to you please try this workaround and report this issue in the [Bug Reports](https://discuss.pencil2d.org/c/bugs/6) category in the forum.
   - **Problem**: Loading a file prompts an error. This means your file is corrupted. Please copy the error and share it with the Pencil2D developers when requesting support.
     - **Workaround**: While the file is corrupted, there's a high chance that some files were properly saved into the main container. See **Save File Verification / Recovery Procedure** below.
3. Issues when **saving** a file:
   - **Problem A**: Sometimes after saving a file users reported that their files would be corrupted and Pencil2D would not allow them to open the files again.
     - **Workaround**: First of all we need to understand how to open and extract the contents of PCLX files in order to verify if your file was saved successfully. This method can also be used to _partially_ recover your work if you've had your file corrupted.
   - **Problem B** In **0.6.4+** There was a new issue where drawings would disappear after saving. This was identified as an issue with temporary files writing permissions on **Windows10** when users moved frames a lot on their timelines. A **fix** has been pushed for 0.6.5 and we hope this will solve the problem.
     - **Workaround** Theoretically you could save your file as a `.pcl` file so instead of having the drawings saved to the temp folder, they will be saved in a visible `data` folder, but if you're having permission problems in the first place, this won't work unless you explicitly make Pencil2D work form the `Program Files` folder and run it as an admin if possible.
   - **Problem C**. In **0.6.4+** there seems to be an issue with **Windows 10 Permissions** where the OS will make the save procedure fail silently, so saving will not prompt an error, but many of the internal files will not be written back to the save file and the PCLX will be corrupted. 
     - **Possible Workaround** Since the problem keeps happening when saving to the `.pclx` filetype, we have considered that saving to the `.pcl` filetype could potentially help to soften this problem. 
Considering that the main issue is most likely that Windows blocks the zip utility (and the writing process), and the internal information is always deleted upon successfully closing the program, we think that using the "**legacy**" format which saves both **pcl** and a **data folder** wherever the user wants, will help to improve the chances of your project surviving this kind of file corruption, however it is not 100% guaranteed and you still need to attempt the initial instructions to diminish the permissions policy from Windows systems.

## RECOVERY SCENARIOS {#scenarios}

_a.k.a What you can expect when trying to recover files and what to do afterwards_

**IF** you are **verifying** that your file was successfully preserved after saving and it wasn't

> A. **DO NOT close your file or the Pencil2D software**<br>
> B. Make a COPY of the TEMP folder. This way you'll preserve the last state it had when it was **loaded**. <br>
> C. **ZIP / Compress** the temporary folder contents (`main.xml` + `.data` folder) and rename it from the `.ZIP` to the `.PCLX` extension. This will allow you to open your file properly at that point in time.

---

**IF** you saved already but **closed** the file or software, use the pclx to zip conversion to check if it has your data before loading the file again. If your save was corrupted use the recovery procedure or fall back to the copy you did at the beginning of the session.

---

**IF** you are attempting to **recover a corrupted file** 

> Make a copy of the data folder to import your saved drawings (images or vector) on a newly create a new file  or import the salvaged drawings to combine them with a previous backup version.

## RECOVERY CONSIDERATIONS {#considerations}

* **There is no guarantee this will work 100%** to recover your corrupted projects, but a few people have managed to get their some of their files back using this method.
* If you were using `.pcl` files instead of `.pclx` files and you can’t find your files inside the **.data** folder, there’s little we can do to recover.
* For the **file recovery** steps you will be required to change the file extensions of your Pencil2D project files. If you cannot currently see file extensions please follow these external guides:

  [**WINDOWS**](https://www.thewindowsclub.com/show-file-extensions-in-windows)

  [**MACOSX**](http://www.idownloadblog.com/2014/10/29/how-to-show-or-hide-filename-extensions-in-os-x-yosemite/)

## RECOVERY PROCEDURE {#recovery}

### **WINDOWS OS** {#windows}

:new: :warning:  _From version 0.6.5 onwards you can open the Temporary File Folder for your OS directly by visiting the menu **Help > Open Temporary Directory**. this will allow you to skip step 1 through 5 below._ :warning: 

While file corruption indeed surfaces when something interrupts Pencil2D's saving procedure (like a blackout, power surge, etc) files can have a greater chance of recovery if Pencil2D crashed instead.

On Windows OS Pencil2D saves a copy in the **temporary files folder** when the program doesn't close properly.

**RECOVERY STEPS**  :

1. On **Windows 7**: In the  **Start Menu**  > Go to  **Computer** / "My PC"<br>
   On **Windows 10**: Right click the **Start Menu** > Press **File Explorer**<br>
   Any version of Windows: You can also, click the **File explorer** on your taskbar to open a new folder.
2. On the explorer, locate the folder  **address bar**  at the top of the window.<br>
   <img alt="image" src="{% link images/project-file-recovery-guide-windows-explorer-address-bar.png %}" width="161" height="42">
3. Click over the **current folder address** i.e if you see something like **`C:\User\Username\Desktop`** or **`USERNAME > Desktop`** click on that. <br>
   <img alt="image" src="{% link images/project-file-recovery-guide-windows-explorer-address-bar-edit.png %}" width="170" height="35"> <br>
   _**Note**: MORE is my username, your's will be different._
4. Erase the current address text and type the symbol-phrase **`%temp%`**<br>
   <img alt="image" src="{% link images/project-file-recovery-guide-windows-explorer-address-bar-edit-temp.png %}" width="90" height="36"> <br>
   then press `Enter` and this will take you to the **temporary files folder.**<br>
   <img alt="image" src="{% link images/project-file-recovery-guide-windows-explorer-address-bar-temp.png %}" width="237" height="34">
5. Search for the **Pencil2D folder** > Enter the Folder > Organize the files by _last modified_<br>
   <img alt="image" src="{% link images/project-file-recovery-guide-windows-explorer-pencil2d-folder.png %}" width="106" height="33"> 
6. Look for a folder with a name that resembles your saved file following the `Y2XD` extension and a random alphanumeric string added to the folder name.**e.g  *MyFileName_Y2xD_5yz4hsui***<br>
   <img alt="image" src="{% link images/project-file-recovery-guide-windows-explorer-y2xd-folder.png %}" width="300" height="52"> 
7. Double click and enter the `Y2xD folder`.<br>
   Verify if there’s a “  **main.xml**  ” file.<br>
   <img alt="image" src="{% link images/project-file-recovery-guide-windows-explorer-main-xml.png %}" width="88" height="56"> <br>
   **_Note_**: If you see the **main.xml**, there’s a good chance your file is still healthy and recoverable.<br>
8. After checking the **main.xml** file, browse to the  ***data folder***  and verify if there is  **any**  file inside.
   Drawings are saved as **`PNG` images** with the filename having an additional number sequence. In this case the name will correspond to ***layer.frame.png***  e.g  *003.001.png* which means **Layer No.3 from and Frame No.1**<br>
   <img alt="image" src="{% link images/project-file-recovery-guide-windows-explorer-drawings.png %}" width="109" height="71"> <br>
   _**Note**: Layers are counted bottom to top and the camera layer is **always** the first layer. If you used a **bitmap layer** to draw you’ll find **PNG images**, if you used a **vector layer** you’ll find **VEC files**, which are read only by Pencil2D._

9. If you find the **main.xml** and the **data** folder with the “lost” elements, then you can select both elements, right click the selection and use the **send to zip** command to “compress” them together, then rename the  `.ZIP`  filetype part, as  `.PCLX`  and try to open it inside Pencil2D.

   **_Note_**: To learn how to zip files look at [this guide](https://www.windowscentral.com/how-zip-and-unzip-files-windows-10)

**_Note_**: If you lost your file due **during** the save procedure, saving your file for the first time due to a blackout, power surge, etc, look for a folder called “Default.Y2XD”

**_Note_**: So far Pencil2D does not have an import /export feature for .VEC vector files, but this has [**been proposed for implementation here**](https://github.com/pencil2d/pencil/issues/1056)

### **MAC OSX** {#mac}

**RECOVERY STEPS**

:new: :warning:  _From version 0.6.5 onwards you can open the Temporary File Folder for your OS directly by visiting the menu **Help > Open Temporary Directory**. this will allow you to skip step 1 through 3 below._ :warning: 

**Option A -  macOSX 10.4 and under**
1. In the Finder Menu, under GO choose “Go to Folder” you can also use the shortcut: Shift + CMD + G.
2. In the Go To Folder dialog box enter: ~/Library/Caches.
3. Look for a Pencil2D folder. Enter the Folder. 
4. Organize the files by “last modified”. Look for a folder with the name of your saved file. **OR** If you never saved at least once, look for a folder called **_Default_**
5. Make a copy of this folder on your desktop or a preferred folder.

**Option B - macOSX 10.5 and above**
1. In the Finder Menu, under GO choose “Go to Folder” you can also use the shortcut: Shift + CMD + G.
2. In the Go To Folder dialog box enter: `~/var/folders/`
3. In that folder due to security protocols most folders will appear with random names so you will need to use the Finder search functionality and look for the **Pencil2D folder.** specifically.<br>
   For advanced options please look at [this guide](https://support.apple.com/guide/mac-help/narrow-search-results-in-finder-mh15155/mac)

4. Once you find it enter the Folder. Organize the files by “last modified”
5. Look for a folder with a similar name of your saved file that's the latest one.
6. Make a copy of this folder on your desktop or a preferred folder.

---

## SAVE FILE VERIFICATION {#verification}

### Windows

1. Make a copy of the current PCLX file you saved. 
2. Rename the copied file extension from **.PCLX** to **.ZIP**. Your OS will probably warn you about changing the filetype. Read the warning carefully and accept the change.
3. Open the copied file with a ZIP file manager as shown below.
   
   The process describe on the following video should work in any platform but this was made in a Windows 7 OS. You can use the Windows File Explorer or the WinZip, 7-Zip or even WinRAR file managers. 

   {% include youtubePlayer.html vid="z5W6oC4Cod0" %}

4. Check your temporary file system folder to find Pencil2D files for the work session

### **MacOSX**
You can use the built in **Archive Utility** program.  You could also use a software called **Pea ZIP**

>_**Scribblemaniac says**: In fact you don't even need to rename the file, you can just right click on the pclx file and then select Open With &gt; Archive Utility and it will extract everything to a folder with the same name as the file._

Check your temporary file system folder to find Pencil2D files for the work session

## OS FILE BACKUP & RECOVERY SETTINGS {#bakcup}
Fortunately despite all potential issues, modern operating systems have additional file backup and restoring capabilities which should be appropriated for important creative work in professional settings.

[**Win10**](https://www.pcworld.com/article/423183/how-to-use-windows-10s-file-history-backup-feature.html)

[**macOSX**](https://support.apple.com/en-us/104984)

**Linux (Ubuntu)**

Ubuntu has [a system wide backup and restore feature](https://www.lifewire.com/backup-ubuntu-4126286) (similar to Windows restore point)

But additionally you [can](https://www.fosslinux.com/14004/how-to-setup-files-and-folders-backup-on-ubuntu.htm) [use](https://www.linux.com/topic/desktop/total-system-backup-and-recall-deja-dup/) an application called `Déjà Dup` to restore individual files as Linux systems manage files in an incremental fashion.

---
## EXPERIMENTAL RECOVERY METHODS {#experimental}

In the event that none of the previous methods wor for you, can try using professional grade recovery software like "recuva" (windows) and apply the file search in the Pencil2D folder located in temporary files folder for your specific OS distribution. This is very difficult to predict as every piece of hardware works differently but there is a medium to high probability that using these file recovery applications can help recover the deleted files so you can at least recover the original file.

It is theoretically possible to recover the uncompressed folder that Pencil2D creates which contains the **main.xml** file and the PNG individual drawings, that once existed in a previous working version. 

For this method to work, It is SUPER IMPORTANT that you **do not** install or create anything other piece of "new" data (i.e download files, songs, install games) except for the file recovery software. This is to prevent that the parts of the hard drive that might still contain the deleted files are not overwritten.This applies to a similar extent to Solid State Drives (SSD)

**We've never tried this so do it under your own risk and with parental guidance if you're underage**

[Here](https://www.lifewire.com/free-data-recovery-software-tools-2622893)'s a list of file recovery software.

:new: Data recovery with **Wondershare RecoverIt** by NobleFrugal, Opentoonz tutor (_we don't know how good it is, but the demo seems to be decent for most purposes_).

{% include youtubePlayer.html vid="QluYpyrmiYE" %}

> Video tutorials on using **Recuva** file recovery in Windows.

## [2020]

{% include youtubePlayer.html vid="D0Yz0rU3vMw" %}

## [2016]

{% include youtubePlayer.html vid="V7SwEgIN1TM" %}

**_Final Note_**: Depending on how much the save operation managed to run, most of the time there will be a percentage of images that will be lost, but this will allow you to get some of them back. Also if the main.xml file was lost, consider that the drawings will not be properly aligned since Pencil2D grabs the “RAW” image and then position it with coordinates found in the **main.xml** file. 
It’s like an address book to find it’s way to put the stuff in a correct order. So if the file becomes damaged or lost, you’d have to re-position each individual image manually.

_[26/02/2019] Updated to add explanation on possible methods for file recovery_<br>
_[18/02/2020] Updated and clarified explanation, added images to windows recovery steps, added TOC._ <br>
_[24/05/2020] Added existing OS File back & recovery methods for major OS_ <br>
_[04/03/2021] Reorganized menu. Added Pencil2D "open temporary directory" operator as an alternative for finding files after crashes. Added additional software for file recovery_ <br>
