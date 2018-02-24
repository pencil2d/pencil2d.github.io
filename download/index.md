---
layout: page
title: Download
tagline: Let's start animating immediately! 
comments: true
---

## Current Stable Version (v0.6)

<blockquote style="color:#898989;font-size:0.8em">
Last Updated on 1 December 2017. See  
<a href="/2017/12/introducing-pencil2d-0.6.html">What's New</a> in v0.6.
</blockquote>

<div class="download-tiles">
<div></div>
<div class="download-tile">
  <a href="{{ site.download.win64 }}">
    {% include win_icon.svg %} 
  </a><br>
  Windows 64 bit <br>
  <a href="{{ site.download.win64 }}">Download</a>
  <div class="download-size">{{ site.download.win64-size }}</div>
</div>

<div class="download-tile">
  <a href="{{ site.download.win32 }}">
    {% include win_icon.svg %}
  </a><br>
  Windows 32 bit <br>
  <a href="{{ site.download.win32 }}">Download</a>
  <div class="download-size">{{ site.download.win32-size }}</div>
</div>

<div class="download-tile">
  <a href="{{ site.download.mac }}">
    {% include mac_icon.svg %}
  </a><br>
  Mac <br>
  <a href="{{ site.download.mac }}">Download</a>
  <div class="download-size">{{ site.download.mac-size }}</div>
</div>

<div class="download-tile">
  <a href="{{ site.download.linux64 }}">
    {% include linux_icon.svg %}
  </a><br>
  Linux 64 bit<br>
  <a href="{{ site.download.linux64 }}">Download</a>
  <div class="download-size">{{ site.download.linux64-size }}</div>
</div>

<div class="download-tile">
  <a href="{{ site.download.linux32 }}">
    {% include linux_icon.svg %}
  </a><br>
  Linux 32 bit<br>
  <a href="{{ site.download.linux32 }}">Download</a>
  <div class="download-size">{{ site.download.linux32-size }}</div>
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

## Troubleshooting

**Qt5Widgets.dll was not found**

1. Right click on the file you just downloaded and select `Extract all`.
2. Go to the location you just extract to, find `Pencil2D.exe` and double click on it.

**msvcp140.dll is missing**

- Please install `vc_redist.x64.exe` or `vc_redist.x86.exe`, you can find it in the same folder of Pencil2D.exe after you extract the zip.

**api-ms-win-crt-runtime-l1-1-0.dll is missing**

- Please follow the instructions of this [Microsoft Help Page](https://support.microsoft.com/en-us/help/2999226/update-for-universal-c-runtime-in-windows).


