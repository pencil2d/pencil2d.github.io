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
windows-x86-resource-key: 0-7hr0hkLkSBVdEkaeb-okdg
windows-x86-64-parent: 0BxdcdOiOmg-CSVlqc3JNQV9hVGs
windows-x86-64-resource-key: 0-mfeDpkYVm70KrOvKYM7UVw
macos-parent: 0BxdcdOiOmg-CeVpTY294cXdLZ2c
macos-resource-key: 0-OH02kleYDbtzlw3UbxFMZA
linux-parent: 0BxdcdOiOmg-CcU1WOFpCOFBvVXc
linux-resource-key: 0-2L-INjRPsn2ANX4MZIGU0Q
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}
#nightly-builds ul {
  padding-left: 2em;
}
#nightly-builds ul li {
  margin-top: .5em;
}
</style>

<noscript id="build-dirs">
<h2>Nightly Build Directories</h2>
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
      <td style="text-align: center"><a href="https://drive.google.com/drive/folders/0BxdcdOiOmg-CSVlqc3JNQV9hVGs?resourcekey=0-mfeDpkYVm70KrOvKYM7UVw&usp=sharing">Download</a></td>
      <td style="text-align: center"><a href="https://drive.google.com/drive/folders/0BxdcdOiOmg-CcUEwS1R0WFhwM0E?resourcekey=0-7hr0hkLkSBVdEkaeb-okdg&usp=sharing">Download</a></td>
      <td style="text-align: center"><a href="https://drive.google.com/drive/folders/0BxdcdOiOmg-CeVpTY294cXdLZ2c?resourcekey=0-OH02kleYDbtzlw3UbxFMZA&usp=sharing">Download</a></td>
      <td style="text-align: center"><a href="https://drive.google.com/drive/folders/0BxdcdOiOmg-CcU1WOFpCOFBvVXc?resourcekey=0-2L-INjRPsn2ANX4MZIGU0Q&usp=sharing">Download</a></td>
    </tr>
  </tbody>
</table>
</noscript>

<ol id="nightly-builds"></ol>

<script src="nightly_fetch.js"></script>
<script>
  "use strict";
  (function() {
    let hasFallenBack = false;
    function displayFallback() {
      if (hasFallenBack) return;

      const nightlyLoading = document.getElementById("nightly-loading");
      nightlyLoading.style.display = "none";
      const buildDirs = document.createElement("div");
      buildDirs.innerHTML = document.getElementById("build-dirs").innerHTML;
      nightlyLoading.parentNode.append(buildDirs);
      hasFallenBack = true;
    }

    function showError(message) {
      displayFallback();
      const nightlyLoading = document.getElementById("nightly-loading");
      const errorMessage = document.createElement("blockquote");
      errorMessage.textContent = message;
      nightlyLoading.parentNode.insertBefore(errorMessage, nightlyLoading.nextSibling);
    }

    function showWarning(message) {
      displayFallback();
      const nightlyLoading = document.getElementById("nightly-loading");
      const warningMessage = document.createElement("blockquote");
      warningMessage.textContent = message;
      nightlyLoading.parentNode.insertBefore(warningMessage, nightlyLoading.nextSibling);
    }

    // Add loading message
    {
      const nightlyBuilds = document.getElementById("nightly-builds");
      const nightlyLoading = document.createElement("blockquote");
      nightlyLoading.id = "nightly-loading";
      nightlyLoading.appendChild(document.createTextNode("Loading\u2026"));
      nightlyBuilds.parentNode.insertBefore(nightlyLoading, nightlyBuilds);
    }

    const fetcher = new NightlyBuildFetcher("{{page.drive-api-key}}", {{page.fetch-limit}});
    fetcher.addGithubActionsResource("{{page.nightly-repo}}", "{{page.nightly-workflow}}", "runs");
    fetcher.addGDriveResource("{{page.windows-x86-parent}}", "{{page.windows-x86-resource-key}}", "win32");
    fetcher.addGDriveResource("{{page.windows-x86-64-parent}}", "{{page.windows-x86-64-resource-key}}", "win64");
    fetcher.addGDriveResource("{{page.macos-parent}}", "{{page.macos-resource-key}}", "macos");
    fetcher.addGDriveResource("{{page.linux-parent}}", "{{page.linux-resource-key}}", "linux");

    fetcher.fetchAll().then(fetch_results => {
      if (Object.keys(fetch_results).length <= 1) {
        showError("There was an error automatically retrieving the nightly build data.");
        return;
      }
      if ("runs" in fetch_results) {
        const aggregatedData = {};

        // Collect all the per-OS download links for each run
        for (let os of ["win32", "win64", "macos", "linux"]) {
          if (!(os in fetch_results)) {
            showWarning(`Warning: Could not get data for ${os}`);
            continue;
          }
          const folder = fetch_results[os];

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
        for (let run of fetch_results["runs"].workflow_runs) {
          if (run.run_number in aggregatedData) {
            aggregatedData[run.run_number]["commit"] = run.head_commit
            aggregatedData[run.run_number]["run_url"] = run.html_url
          }
        }

        // Let's "render" our data
        const nightlyList = document.getElementById("nightly-builds");

        const nightlyListTitle = document.createElement("h2");
        nightlyListTitle.textContent = "Nightly Build List";
        nightlyList.parentNode.insertBefore(nightlyListTitle, nightlyList);

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
            const timestamp = new Date(data.commit.timestamp);
            const dateMessage = document.createElement("span")
            dateMessage.textContent = timestamp.toLocaleString(undefined, {"dateStyle": "medium"}) + " \u2013 ";
            dateMessage.title = timestamp.toLocaleString(undefined, {"dateStyle": "long", "timeStyle": "long"});
            summary.appendChild(dateMessage);
            const commitLink = document.createElement("a");
            commitLink.appendChild(document.createTextNode(data.commit.message.split("\n")[0]));
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
          for (let [os, osName] of [["win32", "Windows (32-bit)"], ["win64", "Windows (64-bit)"], ["macos", "macOS"], ["linux", "Linux (64-bit)"]]) {
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
