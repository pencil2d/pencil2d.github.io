---
layout: page
title: Download
tagline: Let's start animating immediately!
comments: false
tabs: true
download:
  win64: https://github.com/pencil2d/pencil/releases/download/v0.6.5/pencil2d-win64-0.6.5.zip
  win64legacy: https://github.com/pencil2d/pencil/releases/download/v0.6.4/pencil2d-win64-legacy-0.6.4.zip
  win32: https://github.com/pencil2d/pencil/releases/download/v0.6.5/pencil2d-win32-0.6.5.zip
  winxp: https://github.com/pencil2d/pencil/releases/download/v0.6.5/pencil2d-winxp-0.6.5.zip
  mac: https://github.com/pencil2d/pencil/releases/download/v0.6.5/pencil2d-mac-0.6.5.zip
  maclegacy: https://github.com/pencil2d/pencil/releases/download/v0.6.4/pencil2d-mac-legacy-0.6.4.zip
  linux64: https://github.com/pencil2d/pencil/releases/download/v0.6.5/pencil2d-linux-amd64-0.6.5.AppImage
  linux32: https://github.com/pencil2d/pencil/releases/download/v0.6.4/Pencil2D-linux-i386-0.6.4.AppImage
nightly-link: https://discuss.pencil2d.org/t/pencil2d-nightly-builds-v0-6-3/3118
---

## Current Stable Version (v0.6.5)

<blockquote style="color:#898989;font-size:0.8em">
Last Updated on 31 July 2020.
<!--See <a href="/2019/05/pencil2d-0.6.4-release.html">What's New</a> in v0.6.4 -->
</blockquote>

<div class="download-tiles">
<div></div>
<div class="download-tile">
  <a href="{{ page.download.win64 }}">
    {% include win_icon.svg %}
  </a><br>
  Windows 7/8/10<br><br>
  <a href="{{ page.download.win64 }}">64-bit</a> |
  <a href="{{ page.download.win32 }}">32-bit</a>
</div>

<div class="download-tile">
  <a href="{{ page.download.win32 }}">
    {% include vista_icon.svg %}
  </a><br>
  Windows XP/Vista<br><br>
  <a href="{{ page.download.winxp }}">32-bit</a><br>
</div>

<div class="download-tile">
  <a href="{{ page.download.mac }}">
    {% include mac_icon.svg %}
  </a><br>
  Mac <br>
  <a href="{{ page.download.mac }}">10.12+</a><br>
  <a href="{{ page.download.maclegacy }}">10.7-10.11</a>
</div>

<div class="download-tile">
  <a href="{{ page.download.linux64 }}">
    {% include linux_icon.svg %}
  </a><br>
  Linux<br><br>
  <a href="{{ page.download.linux64 }}">64-bit</a> |
  <a href="{{ page.download.linux32 }}">32-bit</a>
</div>

</div>
<div style="clear:both"></div>

Having trouble running the program? please see the
<a href="#troubleshooting">Troubleshooting</a>.

<br>
## Other ways to install Pencil2D

<div class="tab">
  <button class="tablinks" onclick="openTab(event, 'arch')" id="defaultTab">Arch Linux</button>
  <button class="tablinks" onclick="openTab(event, 'debian')">Debian/Ubuntu</button>
  <button class="tablinks" onclick="openTab(event, 'fedora')">Fedora 28+</button>
  <button class="tablinks" onclick="openTab(event, 'flatpak')">Flatpak</button>
  <button class="tablinks" onclick="openTab(event, 'freebsd')">FreeBSD</button>
  <button class="tablinks" onclick="openTab(event, 'cask')">Homebrew Cask</button>
</div>

<div id="arch" class="tabcontent">
<h3>Arch Linux</h3>
<pre>sudo pacman -S pencil2d</pre>
</div>

<div id="debian" class="tabcontent">
<h3>Debian/Ubuntu</h3>
<pre>sudo apt-get install pencil2d</pre>
</div>

<div id="fedora" class="tabcontent">
<h3>Fedora 28+</h3>
<pre>sudo dnf install Pencil2D</pre>
</div>

<div id="flatpak" class="tabcontent">
<h3>Flatpak</h3>
Install:
<pre>flatpak install flathub org.pencil2d.Pencil2D</pre>
Run:
<pre>flatpak run org.pencil2d.Pencil2D</pre>
</div>

<div id="freebsd" class="tabcontent">
  <h3>FreeBSD</h3>
  Package:
<pre>pkg install pencil2d</pre>
Port:
<pre>cd /usr/ports/graphics/pencil2d/ && make install clean</pre>
</div>

<div id="cask" class="tabcontent">
<h3>Homebrew Cask</h3>
<pre>brew cask install pencil2d</pre>
</div>
<script>document.getElementById("defaultTab").click();</script>

<br>

## Nightly Build <a name="nightlybuild"></a>

Nightly builds are the bleeding edge versions of Pencil2D, which contains the most recent fixes and features. The following links will direct you to Google Drive, please right-click on a file and select `Download`. The filename is `pencil2d-OS-year-month-date`. See [What's New]({{ nightly-link }}) in nightly builds.

| Windows 64 bit   | Windows 32 bit    | Mac             | Linux             |
| :--------------: | :---------------: | :-------------: | :---------------: |
| [Download][0]    | [Download][1]     | [Download][2]   | [Download][3]     |

[0]: https://goo.gl/5pZXED
[1]: https://goo.gl/0rbHu6
[2]: https://goo.gl/PXsLCI
[3]: https://goo.gl/NQuJYr

<br>

## Troubleshooting {#troubleshooting}

- **Qt5Widgets.dll was not found**

    1. Right click on the file you just downloaded and select `Extract all`.
    2. Go to the location you just extract to, find `Pencil2D.exe` and double click on it.
  
  <br>

- **msvcp140.dll is missing**

    Double click and install `vcredist_x64.exe` or `vcredist_x86.exe` inside the **Pencil2D** folder.

- **api-ms-win-crt-runtime-l1-1-0.dll is missing**

    Download and install the following windows updates:
    - Win7 32bit: <https://www.microsoft.com/en-us/download/details.aspx?id=51137>
    - Win7 64bit: <https://www.microsoft.com/en-us/download/details.aspx?id=51161>
    - Win8 32bit: <https://www.microsoft.com/en-us/download/details.aspx?id=51106>
    - Win8 64bit: <https://www.microsoft.com/en-us/download/details.aspx?id=51109> <br><br>
 
- **Pencil 2D can't be opened because it is from an unidentified developer. (Mac users)**

    Right click on the file and press `Open`.

Still getting in trouble? Please go to [Pencil2D forum](https://discuss.pencil2d.org/c/support).
