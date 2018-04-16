---
layout: page
title: Download
tagline: Let's start animating immediately! 
comments: true
download:
  win64: https://github.com/pencil2d/pencil/releases/download/v0.6.1.1/pencil2d-win64-0.6.1.1.zip
  win32: https://github.com/pencil2d/pencil/releases/download/v0.6.1/pencil2d-win32-0.6.1.zip
  mac: https://github.com/pencil2d/pencil/releases/download/v0.6.1.1/pencil2d-mac-0.6.1.1.zip
  linux64: https://github.com/pencil2d/pencil/releases/download/v0.6.1.1/pencil2d-linux-amd64-0.6.1.1.AppImage
  linux32: https://github.com/pencil2d/pencil/releases/download/0.6.0/pencil2d-linux-i386-0.6.0.AppImage
  win64-size: 49.1MB
  win32-size: 35.4MB
  mac-size: 41.1MB
  linux64-size: 37.8MB
  linux32-size: 58.3MB
---

## Current Stable Version (v0.6.1)

<blockquote style="color:#898989;font-size:0.8em">
Last Updated on 15 April 2018. 
<!-- See <a href="/2017/12/introducing-pencil2d-0.6.html">What's New</a> in v0.6 -->
<br>
If you have trouble running the program, please see the
<a href="#troubleshooting">Troubleshooting section</a> below.
</blockquote>

<div class="download-tiles">
<div></div>
<div class="download-tile">
  <a href="{{ page.download.win64 }}">
    {% include win_icon.svg %} 
  </a><br>
  Windows 64 bit <br>
  <a href="{{ page.download.win64 }}">Download</a>
  <div class="download-size">{{ page.download.win64-size }}</div>
</div>

<div class="download-tile">
  <a href="{{ page.download.win32 }}">
    {% include win_icon.svg %}
  </a><br>
  Windows 32 bit <br>
  <a href="{{ page.download.win32 }}">Download</a>
  <div class="download-size">{{ page.download.win32-size }}</div>
</div>

<div class="download-tile">
  <a href="{{ page.download.mac }}">
    {% include mac_icon.svg %}
  </a><br>
  Mac <br>
  <a href="{{ page.download.mac }}">Download</a>
  <div class="download-size">{{ page.download.mac-size }}</div>
</div>

<div class="download-tile">
  <a href="{{ page.download.linux64 }}">
    {% include linux_icon.svg %}
  </a><br>
  Linux 64 bit<br>
  <a href="{{ page.download.linux64 }}">Download</a>
  <div class="download-size">{{ page.download.linux64-size }}</div>
</div>

<div class="download-tile">
  <a href="{{ page.download.linux32 }}">
    {% include linux_icon.svg %}
  </a><br>
  Linux 32 bit<br>
  <a href="{{ page.download.linux32 }}">Download</a>
  <div class="download-size">{{ page.download.linux32-size }}</div>
</div>

</div>
<div style="clear:both"></div>


### Arch Linux

Pencil2D is available for Arch Linux through the package [pencil2d](https://aur.archlinux.org/packages/pencil2d) on the AUR. If you are not yet familiar with the process of building and installing packages from the AUR, please follow [the tutorial on the Arch Wiki](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages).

### Debian & Ubuntu

```
sudo apt-get install pencil2d
```

### Homebrew Cask (macOS)

```
brew cask install pencil2d
```

## Nightly build <a name="nightlybuild"></a>

Nightly builds are the bleeding edge versions of Pencil2D, which contains the most recent fixes and features. The following links will direct you to Google Drive, please right-click on a file and select `Download`. The filename is `pencil2d-OS-year-month-date`.

| Windows 64 bit   | Windows 32 bit    | Mac             | Linux             |
| :--------------: | :---------------: | :-------------: | :---------------: |
| [Download][0]    | [Download][1]     | [Download][2]   | [Download][3]     |

[0]: https://goo.gl/5pZXED
[1]: https://goo.gl/0rbHu6
[2]: https://goo.gl/PXsLCI
[3]: https://goo.gl/NQuJYr

## Troubleshooting {#troubleshooting}

**Qt5Widgets.dll was not found**

1. Right click on the file you just downloaded and select `Extract all`.
2. Go to the location you just extract to, find `Pencil2D.exe` and double click on it.

**msvcp140.dll is missing**

- Please install `vcredist_x64.exe` or `vcredist_x86.exe`, you can find it in the same folder of Pencil2D.exe after you extract the zip.

**api-ms-win-crt-runtime-l1-1-0.dll is missing**

- Please follow the instructions of this [Microsoft Help Page](https://support.microsoft.com/en-us/help/2999226/update-for-universal-c-runtime-in-windows).
