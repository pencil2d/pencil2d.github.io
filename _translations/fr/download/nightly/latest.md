---
layout: page
ref: nightly-latest
title: Nightly Builds
tagline: Download bleeding edge builds of Pencil2D
fetch-limit: 100
nightly-repo: pencil2d/pencil
nightly-workflow: ci.yml
drive-api-key: AIzaSyD2z_aPwUD5HFRHUtFKihgoEWv3nZnzsik
windows-x86-parent: 0BxdcdOiOmg-CcUEwS1R0WFhwM0E
windows-x86-resource-key: 0-7hr0hkLkSBVdEkaeb-okdg
windows-x86-64-parent: 0BxdcdOiOmg-CSVlqc3JNQV9hVGs
windows-x86-64-resource-key: 0-mfeDpkYVm70KrOvKYM7UVw
macos-parent: 0BxdcdOiOmg-CeVpTY294cXdLZ2c
macos-resource-key: 0-OH02kleYDbtzlw3UbxFMZA
linux-parent: 0BxdcdOiOmg-CcU1WOFpCOFBvVXc
linux-resource-key: 0-2L-INjRPsn2ANX4MZIGU0Q
---

<noscript id="build-dirs">
<h2>Build Directories</h2>
<p>The following links will direct you to Google Drive folders. Please right-click on a file listed and select <code>Download</code>. The naming format is <code>pencil2d-OS-buildnumber-year-month-day</code>.</p>

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
      <td style="text-align: center"><a href="https://drive.google.com/drive/folders/{{page.windows-x86-64-parent}}?resourcekey={{page.windows-x86-64-resource-key}}&usp=sharing">Download</a></td>
      <td style="text-align: center"><a href="https://drive.google.com/drive/folders/{{page.windows-x86-parent}}?resourcekey={{page.windows-x86-64-resource-key}}&usp=sharing">Download</a></td>
      <td style="text-align: center"><a href="https://drive.google.com/drive/folders/{{page.macos-parent}}?resourcekey={{page.macos-resource-key}}&usp=sharing">Download</a></td>
      <td style="text-align: center"><a href="https://drive.google.com/drive/folders/{{page.linux-parent}}?resourcekey={{page.linux-resource-key}}&usp=sharing">Download</a></td>
    </tr>
  </tbody>
</table>
</noscript>

<ol id="nightly-builds"></ol>

<script src="nightly_fetch.js"></script>
<script>
  "use strict";
  (function() {
    function displayFallback() {
      const nightlyLoading = document.getElementById("nightly-loading");
      nightlyLoading.style.display = "none";
      const buildDirs = document.createElement("div");
      buildDirs.innerHTML = document.getElementById("build-dirs").innerHTML;
      nightlyLoading.parentNode.insertBefore(buildDirs, nightlyLoading.nextSibling);
    }

    function showError(message) {
      displayFallback();
      const nightlyLoading = document.getElementById("nightly-loading");
      const errorMessage = document.createElement("blockquote");
      errorMessage.textContent = message;
      nightlyLoading.parentNode.insertBefore(errorMessage, nightlyLoading.nextSibling);
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
      const osParam = urlParams.get("os").toLowerCase();
      switch(osParam) {
      case "windows":
      case "linux":
        arch = Number(urlParams.get("arch")) || arch;
      case "macos":
        os = osParam;
        break;
      default:
        showError(`There are no nightly builds for the operating system "${osParam}". Supported operating systems are: "windows", "macos", "linux".`);
        return;
      }
    } else {
      console.error("Invalid search params. Must specify os parameter.");
      displayFallback();
      return;
    }

    const driveMap = {
      "windows": {
        32: { "parentId": "{{page.windows-x86-parent}}", "resourceId": "{{page.windows-x86-resource-key}}" },
        64: { "parentId": "{{page.windows-x86-64-parent}}", "resourceId": "{{page.windows-x86-64-resource-key}}" }
      },
      "linux": { 64: { "parentId": "{{page.linux-parent}}", "resourceId": "{{page.linux-resource-key}}" } },
      "macos": { 64: { "parentId": "{{page.macos-parent}}", "resourceId": "{{page.macos-resource-key}}" } }
    }

    if (!(os in driveMap)) {
      showError(`There are no nightly builds for the operating system "${osParam}". Supported operating systems are: "windows", "macos", "linux".`);
      return;
    }
    if (!(arch in driveMap[os])) {
      showError(`There are no nightly builds for the ${arch}-bit architecture of ${os}. Supported architectures for ${os} are: ` + Object.keys(driveMap[os]).map(arch => arch + "-bit").join(", "));
      return;
    }

    const fetcher = new NightlyBuildFetcher("{{page.drive-api-key}}", {{page.fetch-limit}});
    fetcher.addGDriveResource(driveMap[os][arch]["parentId"], driveMap[os][arch]["resourceId"], "result");

    fetcher.fetchAll().then(fetch_results => {
      if ("result" in fetch_results) {
        let folder = fetch_results["result"];
        let maxRunNumber = 0, maxRun = null;
        console.log(folder);
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
          showError("No builds were found for the specified os and architecture.");
          return;
        }

      }
      else {
        showError("There was an error automatically fetching the build data.");
        return;
      }
    }).catch(error => {
      console.error(error);
      showError("There was an error automatically fetching the build data.");
    });
  })();
</script>
