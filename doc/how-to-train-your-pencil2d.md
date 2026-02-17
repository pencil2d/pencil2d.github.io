---
layout: page
title: How to Train Your Pencil2D (Windows)
comments: true
# originally posted by josemoreno at https://discuss.pencil2d.org/t/4106
---

Windows OS tends to be very jealous (particularly newer versions) of files that **are not “signed”** by official windows developers, since Pencil2D is an open-source project we don't have the resources to sign the software digitally, so in general those apps tend to be *blocked* even if you can "normally" open the file at some point.

{% include toc.html %}

## Choosing 32 or 64bits {#bitarch}

To answer the timeless question **Do I download 32 or 64 bits version?**  please visit [this official Microsoft guide](https://support.microsoft.com/en-us/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d) to find your own bit architecture under Windows OS systems 

## How to download Pencil2D {#download}

Pencil2D can be downloaded in [the download section of our website]({% link download/index.md %}).

The links there will redirect you to the source repository service [over at **GitHub**](https://github.com/pencil2d/pencil/releases).

However in case this does not work, Pencil2D also has [mirrors in the source repository service **Bitbucket**](https://bitbucket.org/chchwy/pencil2d/downloads/)

## Unblock the ZIP File download {#unblock}

After you **download** the ZIP file you have to **unblock** it.

**To unblock a ZIP file** you have to:

1. **Right click** on the downloaded zip file
2. Go to file **_properties_**
3. Browser to the **_general tab_**
4. Towards the bottom press the **unblock button**
5. Press **Apply** and then **OK**
6. Only then you’ll be able to extract ALL the files without issue.

<img alt="image" src="https://www.thewindowsclub.com/wp-content/uploads/2012/08/unblock.jpg" width="393" height="500"><br>
_Image taken from [this guide](https://www.thewindowsclub.com/fix-windows-blocked-access-file)_

>*[Alt. guide to Unblock files on Windows10](https://singularlabs.com/tips/how-to-unblock-a-zip-file-on-windows-10/)*

## Unzipping Pencil2D Download Files {#unzip}

Afterwards please **unzip the files** to your **`Program Files`** folder found in your **`C:\`** drive

**To Unzip the files please take a look at either of these guides**
https://www.windowscentral.com/how-zip-and-unzip-files-windows-10

>*Alt. guide for unzipping https://www.fonecope.com/unzip-files-windows-10.html*

### Additional Troubleshooting

If you run into additional problems, like missing **MSVCP140.dll**, **VCRUNTIME140.dll**, **QT5Widgets.dll**, **api-ms-win-crt-runtime-l1-1-0.dll**, etc

Please visit our [**troubleshooting quick guide** section]({% link download/index.md %}#troubleshooting) in the **downloads page** for Pencil2D.

## Check your Antivirus Rules {#antivirus}

If you have an antivirus software with **real-time protection** enabled (e.g Kaspersky, Avira, Panda, AVG, etc) to avoid being blocked by real-time scanners you should consider checking the **antivirus settings** and **create an rules exception** for both:
1. The **Pencil2D application folder** (where you extracting the files in)
2. We recommend to create a general **Pencil2D projects folder** to save all your future animation files.

Please refer to your antivirus manual or online reference knowledge base for additional information on how to create these rules.

For a **Windows Defender** specific procedure please take a look at [this guide](https://support.microsoft.com/en-us/help/4028485/windows-10-add-an-exclusion-to-windows-security).

## UAC Permissions Handling {#permissions}

It is possible that the **UAC (User Account Control)** permission levels are set very high and is not allowing any kind of program or DLL file to be executed on your system (this can effect movie exports too).

[Here](https://www.howtogeek.com/howto/windows-vista/disable-user-account-control-uac-the-easy-way-on-windows-vista/)'s a guide to **disable it** or at least consider lowering the rating (if you are not the system administrator you'd have to ask them to help or get the password for your computer workstation in order to do this).

## Run as Administrator {#admin}

Make sure you are **running windows OS as an administrator** whenever possible. Otherwise Windows users are allowed to configure individual apps to run with administrator rights.

Consider setting the `**Pencil2d.exe**` application file (the one with a pencil icon <img alt="pencil2d" src="{% link images/pencil2d-logo.png %}" width="32" height="32">) to **run as administrator** in the file properties.

If you are not the admin, ask your parents or third party system administrator for the password and then set the program application file itself (`Pencil2D.exe`) to run as an admin by following [this guide](https://www.techadvisor.com/article/728225/how-to-run-programs-as-adminstrator-windows.html).

## Enable Developer Mode {#developer}

Sometimes installing software in the default mode (Sideload Apps) can still prompt issues so try following [this guide](https://www.howtogeek.com/292914/what-is-developer-mode-in-windows-10/) to enable developer mode on your Windows 10 OS (it works for all editions of Windows 10 including Home).

## Troubleshooting {#trouble}

**`Qt5Widgets.dll` / `Qt5Multimedia.dll` / `Qt5Gui.dll` / `Qt5Xml.dll` was not found** 

+ Right click on the file.
+ Select `Extract all`
+ Go to the folder you extracted the files to
+ Find `pencil2d.exe` and double click on it. 

**`MSVCP140.dll` / `VC_RUNTIME140_1.dll` is missing** 

+ On the Pencil2D extraction folder
+ Find the `vcredist_x64.exe` or `vcredist_x86.exe` (*depending on 64 or 32 bit architecture*)
+ Double click and follow the install instructions. 

_Note: For more info and links to Microsoft installers please read [this forum thread](https://discuss.pencil2d.org/t/vcruntime140-1-dll-msvcp140-dll-missing-help/4764)_

**`MSVCP120.dll` is missing** 

Download and install [this package](https://www.microsoft.com/en-us/download/details.aspx?id=40784).

_Note: For more info regarding Visual C++ 2013 files check [this link](https://support.microsoft.com/en-us/help/3179560/update-for-visual-c-2013-and-visual-c-redistributable-package)_

**Universal C runtime `api-ms-win-crt-runtime-l1-1-0.dll` is missing** 

For **legacy Windows versions** (7, 8, 8.1) download and install [these windows updates](https://support.microsoft.com/en-us/help/2999226/update-for-universal-c-runtime-in-windows).

## **Final words** {#final}

If you've been having issues in **2019** and beyond while using **Windows10** specifically experiencing your files disappearing or getting corrupted after saving the project file (.pclx) correctly (can't open them; get error) please follow this guide to a T. 

Afterwards please download [the **nightly builds**]({% link download/nightly/index.md %}) which contain a recently issued fix that partially addresses this problem.

While we'll keep working on this and eventually correct these issues, note that these are **development versions** of the software. While they are run in the same way, and don't have any extra requirement to be used, they may be more unstable than the official release on our download website.

:warning: **Please don't start your homework or next grand masterpiece with these dev builds**, but do test these versions, and let us know if during testing these builds improve your experience when running into the aforementioned problems.

_Look carefully at the timestamsp!_
