---
layout: page
title: Nightly Builds
tagline: Download bleeding edge builds of Pencil2D
comments: false
fetch-limit: 100
nightly-repo: pencil2d/pencil
nightly-branch: master
nightly-workflow: ci.yml
drive-api-key: AIzaSyD2z_aPwUD5HFRHUtFKihgoEWv3nZnzsik
windows-x86-parent: 0BxdcdOiOmg-CcUEwS1R0WFhwM0E
windows-x86-64-parent: 0BxdcdOiOmg-CSVlqc3JNQV9hVGs
macos-parent: 0BxdcdOiOmg-CeVpTY294cXdLZ2c
linux-parent: 0BxdcdOiOmg-CcU1WOFpCOFBvVXc
resource-keys: 0BxdcdOiOmg-CcUEwS1R0WFhwM0E/0-7hr0hkLkSBVdEkaeb-okdg,0BxdcdOiOmg-CSVlqc3JNQV9hVGs/0-mfeDpkYVm70KrOvKYM7UVw,0BxdcdOiOmg-CeVpTY294cXdLZ2c/0-OH02kleYDbtzlw3UbxFMZA,0BxdcdOiOmg-CcU1WOFpCOFBvVXc/0-2L-INjRPsn2ANX4MZIGU0Q
---

Nightly Builds are created automatically whenever the Pencil2D source code is updated and are therefore the most
up-to-date versions of Pencil2D. They usually contain new fixes and features that have not made it into a stable release
yet, however they can also contain new bugs.

We provide Nightly Builds for Windows (32-bit and 64-bit), macOS and Linux (64-bit). However, because these downloads
are created in an automated process, it is possible for the build to temporarily fail on some operating systems. In case
a certain build is not available for your operating system, please check the preceding builds.

<style>
#nightly-builds > li {
  padding: .5em;
}
#nightly-builds > li::marker {
  content: "(" attr(value) ") ";
  color: #bbbbbb;
}
#nightly-builds > li:first-child {
  background-color: #f3f6fa;
}
#nightly-builds summary {
  cursor: pointer;
  display: list-item;
}
#nightly-builds ul {
  padding-left: 2em;
}
#nightly-builds ul li {
  margin-top: .5em;
}
</style>

> Loading...
{:#nightly-loading}

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
      document.getElementById("nightly-loading").textContent = "Unable to retrieve Nightly Builds. Please try again later.";
    }

    Promise.all([
      // Fetch workflow runs
      fetch("https://api.github.com/repos/{{page.nightly-repo}}/actions/workflows/{{page.nightly-workflow}}/runs?branch={{page.nightly-branch}}&per_page={{page.fetch-limit}}", {
        headers: {
          "Accept": "application/vnd.github.v3+json"
        }
      }).then(response => response.json()),

      // ...and files for all OSes on Google Drive
      fetchGoogleDriveFiles("{{page.windows-x86-parent}}").then(response => response.json()),
      fetchGoogleDriveFiles("{{page.windows-x86-64-parent}}").then(response => response.json()),
      fetchGoogleDriveFiles("{{page.macos-parent}}").then(response => response.json()),
      fetchGoogleDriveFiles("{{page.linux-parent}}").then(response => response.json())
    ]).then(([runs, win32Files, win64Files, macosFiles, linuxFiles]) => {
      if ("message" in runs ||
          "message" in win32Files ||
          "message" in win64Files ||
          "message" in macosFiles ||
          "message" in linuxFiles) {
        // Messages are bad news, it means we got an error
        showError();
        return;
      }

      const aggregatedData = {};

      // Collect all the per-OS download links for each run
      for (let [os, folder] of [["win32", win32Files], ["win64", win64Files], ["macos", macosFiles], ["linux", linuxFiles]]) {
        for (let file of folder.files) {
          const match = file.originalFilename.match(/^pencil2d-\w+-(\d+)-\d{4}-\d{2}-\d{2}.(zip|AppImage)$/);
          if (match === null) {
            // File name didn't match, don't know what to do with it
            continue;
          }
          const runNumber = match[1];
          if (runNumber in aggregatedData === false) {
            aggregatedData[runNumber] = {};
          }
          aggregatedData[runNumber][os] = file.webContentLink;
        }
      }

      // Add the metadata for all the runs that we have files for
      for (let run of runs.workflow_runs) {
        if (run.run_number in aggregatedData) {
          aggregatedData[run.run_number]["commit"] = run.head_commit
          aggregatedData[run.run_number]["run_url"] = run.html_url
        }
      }

      // Let's "render" our data
      const nightlyList = document.getElementById("nightly-builds");
      let detailsOpen = true;
      for (let [runNumber, data] of Object.entries(aggregatedData).sort((a, b) => Math.sign(b[0] - a[0]))) {
        const buildItem = document.createElement("li");
        buildItem.value = runNumber;
        const details = document.createElement("details");
        // Open the first entry by default
        details.open = detailsOpen;
        detailsOpen = false;
        const summary = document.createElement("summary");
        if ("commit" in data) {
          // Build summary - timestamp + (linked) commit message
          summary.appendChild(document.createTextNode(`${data.commit.timestamp.replace("T", "_").replace("Z", "")} \u2013 `));
          const commitLink = document.createElement("a");

          let commitMessage = data.commit.message.split("\n").shift();
          if (commitMessage.length > 72) {
            // Make sure commit message is no longer than 72 characters (like GitHub)
            commitMessage = commitMessage.substring(0, 69) + "...";
          }

          commitLink.appendChild(document.createTextNode(commitMessage));
          commitLink.href = `https://github.com/{{page.nightly-repo}}/commit/${data.commit.id}`;
          summary.appendChild(commitLink);
        } else {
          // Got no metadata about this run :(
          summary.appendChild(document.createTextNode("Unable to retrieve information"));
        }
        details.appendChild(summary);

        // Add the actual details area...
        const linkList = document.createElement("ul");

        // ...with the download links...
        const downloadList = document.createElement("li");
        let text = "Download for ";
        for (let [os, osName] of [["win32", "Windows (32-bit)"], ["win64", "Windows (64-bit)"], ["macos", "macOS"], ["linux", "Linux"]]) {
          if (os in data === false) {
            continue; // No download for this OS
          }

          downloadList.appendChild(document.createTextNode(text));
          text = ' \u2022 '; // bullet
          const downloadLink = document.createElement("a");
          downloadLink.appendChild(document.createTextNode(osName));
          downloadLink.href = data[os];
          downloadList.appendChild(downloadLink);
        }
        linkList.appendChild(downloadList);

        // ...and the link to the build details
        if ("run_url" in data) {
          const buildDetails = document.createElement("li");
          buildDetails.appendChild(document.createTextNode("View "));
          const detailsLink = document.createElement("a");
          detailsLink.appendChild(document.createTextNode("build details"));
          detailsLink.href = data.run_url;
          buildDetails.appendChild(detailsLink);
          linkList.appendChild(buildDetails);
        }

        details.appendChild(linkList);
        buildItem.appendChild(details);
        nightlyList.appendChild(buildItem);
      }
      // Remove the loading message
      document.getElementById("nightly-loading").remove();
    })
    .catch(showError);
  })();
</script>
