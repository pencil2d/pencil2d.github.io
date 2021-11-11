---
layout: page
title: Nightly Builds
tagline: Download bleeding edge builds of Pencil2D
comments: false
fetch-limit: 100
nightly-repo: pencil2d/pencil
nightly-workflow: ci.yml
drive-api-key: AIzaSyD2z_aPwUD5HFRHUtFKihgoEWv3nZnzsik
windows-x86-parent: 0BxdcdOiOmg-CcUEwS1R0WFhwM0E
windows-x86-64-parent: 0BxdcdOiOmg-CSVlqc3JNQV9hVGs
macos-parent: 0BxdcdOiOmg-CeVpTY294cXdLZ2c
linux-parent: 0BxdcdOiOmg-CcU1WOFpCOFBvVXc
resource-keys: 0BxdcdOiOmg-CcUEwS1R0WFhwM0E/0-7hr0hkLkSBVdEkaeb-okdg,0BxdcdOiOmg-CSVlqc3JNQV9hVGs/0-mfeDpkYVm70KrOvKYM7UVw,0BxdcdOiOmg-CeVpTY294cXdLZ2c/0-OH02kleYDbtzlw3UbxFMZA,0BxdcdOiOmg-CcU1WOFpCOFBvVXc/0-2L-INjRPsn2ANX4MZIGU0Q
---

<noscript id="build-dirs">
<h2>Build Directories</h2>
The following links will direct you to Google Drive folders. Please right-click on a file listed and select <code>Download</code>. The naming format is <code>pencil2d-OS-buildnumber-year-month-day</code>.

<table>
  <thead>
    <tr>
      <th style="text-align: center">Windows (64-bit)</th>
      <th style="text-align: center">Windows (32-bit)</th>
      <th style="text-align: center">macOS</th>
      <th style="text-align: center">Linux (64-bit)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center"><a href="https://drive.google.com/drive/folders/0BxdcdOiOmg-CSVlqc3JNQV9hVGs?resourcekey=0-mfeDpkYVm70KrOvKYM7UVw&usp=sharing">Download</a></td>
      <td style="text-align: center"><a href="https://drive.google.com/drive/folders/0BxdcdOiOmg-CcUEwS1R0WFhwM0E?resourcekey=0-7hr0hkLkSBVdEkaeb-okdg&usp=sharing">Download</a></td>
      <td style="text-align: center"><a href="https://drive.google.com/drive/folders/0BxdcdOiOmg-CeVpTY294cXdLZ2c?resourcekey=0-OH02kleYDbtzlw3UbxFMZA&usp=sharing">Download</a></td>
      <td style="text-align: center"><a href="https://drive.google.com/drive/folders/0BxdcdOiOmg-CcU1WOFpCOFBvVXc?resourcekey=0-2L-INjRPsn2ANX4MZIGU0Q&usp=sharing">Download</a></td>
    </tr>
  </tbody>
</table>
</noscript>

<ol id="nightly-builds"></ol>

<script>
  "use strict";
  (function() {
    function fetchGoogleDriveFiles(parentId) {
      return fetch(`https://content.googleapis.com/drive/v3/files?q=%22${parentId}%22%20in%20parents&fields=files(originalFilename,webContentLink)&pageSize={{page.fetch-limit}}&key={{page.drive-api-key}}`, {
        headers: {
          "X-Goog-Drive-Resource-Keys": "{{page.resource-keys}}"
        }
      })
    }

    function showError() {
      const nightlyLoading = document.getElementById("nightly-loading");
      nightlyLoading.textContent = "Unable to retrieve the latest Nightly Build. Please try again later.";
      const buildDirs = document.createElement("div");
      buildDirs.innerHTML = document.getElementById("build-dirs").innerHTML;
      nightlyLoading.parentNode.insertBefore(buildDirs, nightlyLoading);
    }
    
    // Add loading message
    {
      const nightlyBuilds = document.getElementById("nightly-builds");
      const nightlyLoading = document.createElement("blockquote");
      nightlyLoading.id = "nightly-loading";
      nightlyLoading.appendChild(document.createTextNode("Redirecting, please wait\u2026"));
      nightlyBuilds.parentNode.insertBefore(nightlyLoading, nightlyBuilds);
    }
    
    let os, arch = 64;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("os")) {
      switch(urlParams.get("os").toLowerCase()) {
      case "windows":
      case "linux":
        arch = Number(urlParams.get("arch")) || arch;
      case "macos":
        os = urlParams.get("os").toLowerCase();
        break;
      default:
        showError();
        return;
      }
    } else {
      showError();
      return;
    }
    
    const driveMap = {
      "windows": { 32: "{{page.windows-x86-parent}}", 64: "{{page.windows-x86-64-parent}}" },
      "linux": { 64: "{{page.linux-parent}}" },
      "macos": { 64: "{{page.macos-parent}}" }
    }
    
    if ((os in driveMap && arch in driveMap[os]) === false) {
      showError();
      return;
    }

    fetchGoogleDriveFiles(driveMap[os][arch]).then(response => response.json())
    .then((folder) => {
      if ("message" in folder) {
        // Messages are bad news, it means we got an error
        showError();
        return;
      }
      
      let maxRunNumber = 0, maxRun = null;
      for (let file of folder.files) {
        const match = file.originalFilename.match(/^pencil2d-\w+-(\d+)-\d{4}-\d{2}-\d{2}.(zip|AppImage)$/);
        if (match === null) {
          // File name didn't match, don't know what to do with it
          continue;
        }
        const runNumber = match[1];
        if (runNumber > maxRunNumber) {
          maxRunNumber = runNumber;
          maxRun = file;
        }
      }
      
      if (maxRunNumber > 0) {
        window.location.href = maxRun.webContentLink;
        
        const nightlyLoading = document.getElementById("nightly-loading");
        nightlyLoading.textContent = "Thank you for your patience. If you are not redirected shortly, please click ";
        const manualRedirect = document.createElement("a");
        manualRedirect.href = maxRun.webContentLink;
        manualRedirect.textContent = "here";
        nightlyLoading.appendChild(manualRedirect);
      } else {
        showError();
      }
    })
    .catch(showError);
  })();
</script>
