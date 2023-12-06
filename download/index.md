---
layout: page
title: Download
tagline: Let's start animating immediately!
comments: false
tabs: true
download:
  win64: https://github.com/pencil2d/pencil/releases/download/v0.6.6/pencil2d-win64-0.6.6.zip
  win32: https://github.com/pencil2d/pencil/releases/download/v0.6.6/pencil2d-win32-0.6.6.zip
  winxp: https://github.com/pencil2d/pencil/releases/download/v0.6.6/pencil2d-winxp-0.6.6.zip
  mac: https://github.com/pencil2d/pencil/releases/download/v0.6.6/pencil2d-mac-0.6.6.zip
  maclegacy: https://github.com/pencil2d/pencil/releases/download/v0.6.6/pencil2d-mac-legacy-0.6.6.zip
  linux64: https://github.com/pencil2d/pencil/releases/download/v0.6.6/pencil2d-linux-amd64-0.6.6.AppImage
  linux32: https://github.com/pencil2d/pencil/releases/download/v0.6.6/pencil2d-linux-i386-0.6.6.AppImage
nightly-link: https://discuss.pencil2d.org/t/pencil2d-nightly-builds-v0-6-3/3118
release-note-link: /2021/02/pencil2d-0.6.6-release.html
---

## Current Stable Version (v0.6.6)

<blockquote style="color:#898989;font-size:0.8em">
Last Updated on 17 Feb 2021. <a href="{{ page.release-note-link }}">What's New?</a>
</blockquote>

<div class="download-tiles">

<div class="download-tile">
  <a href="{{ page.download.win64 }}">
    {% include win_icon.svg %}
  </a>
  <h3>Windows 7+</h3>
  <hr>
  <a href="{{ page.download.win64 }}">64-bit</a>
  <span class="vertical-separator"></span>
  <a href="{{ page.download.win32 }}">32-bit</a>
</div>

<div class="download-tile">
  <a href="{{ page.download.mac }}">
    {% include mac_icon.svg %}
  </a>
  <h3>macOS 10.13+</h3>
  <hr>
  <a href="{{ page.download.mac }}">Intel</a><br>
</div>

<div class="download-tile">
  <a href="{{ page.download.linux64 }}">
    {% include linux_icon.svg %}
  </a>
  <h3>Linux</h3>
  <hr>
  <a href="{{ page.download.linux64 }}">64-bit</a>
  <span class="vertical-separator"></span>
  <a href="{{ page.download.linux32 }}">32-bit</a>
</div>

</div>
<div style="clear:both"></div>

Having trouble running the program? please see the
<a href="#troubleshooting">Troubleshooting</a>.

<br>
## Other ways to install Pencil2D

<div class="tabs">
  <button class="tablinks" onclick="openTab(event, 'arch')" id="defaultTab">Arch Linux</button>
  <button class="tablinks" onclick="openTab(event, 'debian')">Debian/Ubuntu</button>
  <button class="tablinks" onclick="openTab(event, 'fedora')">Fedora 28+</button>
  <button class="tablinks" onclick="openTab(event, 'flatpak')">Flatpak</button>
  <button class="tablinks" onclick="openTab(event, 'freebsd')">FreeBSD</button>
  <button class="tablinks" onclick="openTab(event, 'mac-legacy')">macOS 10.7-10.12</button>
  <button class="tablinks" onclick="openTab(event, 'cask')">macOS (Homebrew)</button>
  <button class="tablinks" onclick="openTab(event, 'windows-legacy')">Windows XP/Vista</button>
</div>

<hr style="margin: 0 2rem;">

<div id="arch" class="tabcontent">
<pre>sudo pacman -S pencil2d</pre>
</div>

<div id="debian" class="tabcontent">
<pre>sudo apt-get install pencil2d</pre>
</div>

<div id="fedora" class="tabcontent">
<pre>sudo dnf install Pencil2D</pre>
</div>

<div id="flatpak" class="tabcontent">
<p>Install:</p>
<pre>flatpak install flathub org.pencil2d.Pencil2D</pre>
<p>Run:</p>
<pre>flatpak run org.pencil2d.Pencil2D</pre>
</div>

<div id="freebsd" class="tabcontent">
<p>Package:</p>
<pre>pkg install pencil2d</pre>
<p>Port:</p>
<pre>cd /usr/ports/graphics/pencil2d/ && make install clean</pre>
</div>

<div id="mac-legacy" class="tabcontent">
<div class="warning-box"><span style="font-weight: bold;">&#9888; Warning:</span> This is a legacy build. Legacy builds do not contain the latest security fixes and we may not be able to provide the same level of support for any issues you encounter while using them. Use at your own discretion.</div>
<p>Download the legacy Pencil2D app <a href="{{ page.download.maclegacy }}">here</a> for Mac OS X/macOS versions 10.7 up to and including 10.12.</p>
</div>

<div id="cask" class="tabcontent">
<pre>brew install --cask pencil2d</pre>
</div>

<div id="windows-legacy" class="tabcontent">
<div class="warning-box"><span style="font-weight: bold;">&#9888; Warning:</span> This is a legacy build. Legacy builds do not contain the latest security fixes and we may not be able to provide the same level of support for any issues you encounter while using them. Use at your own discretion.</div>
<p>Download the legacy Pencil2D app <a href="{{ page.download.winxp }}">here</a> for Windows XP and Vista.</p>
</div>

<script>document.getElementById("defaultTab").click();</script>

## Nightly Builds {#nightlybuild}

Nightly Builds are the bleeding edge versions of Pencil2D which contain the most recent fixes and features.
You can find them on our [Nightly Build download page](nightly/).

## Troubleshooting {#troubleshooting}

- **Qt5Widgets.dll was not found**

    1. Right click on the file you just downloaded and select `Extract all`.
    2. Go to the location you just extract to, find `Pencil2D.exe` and double click on it.

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

## Older Pencil2D Versions

All older versions of Pencil2D are available on [Github Releases][gh-releases] or [Bitbucket Downloads][bb-downloads].

[gh-releases]: https://github.com/pencil2d/pencil/releases
[bb-downloads]: https://bitbucket.org/chchwy/pencil2d/downloads/
