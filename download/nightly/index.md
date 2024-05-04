---
layout: page
title: Nightly Builds
tagline: Download bleeding edge builds of Pencil2D
comments: false
fetch-limit: 100
nightly-repo: pencil2d/pencil
nightly-workflow: ci.yml
---

Nightly Builds are created automatically whenever the Pencil2D source code is updated and are therefore the most
up-to-date versions of Pencil2D. They usually contain new fixes and features that have not made it into a stable release
yet, however they can also contain new bugs.

We provide Nightly Builds for Windows (32-bit and 64-bit), macOS (Intel and Apple Silicon) and Linux (64-bit). However, because these downloads
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
  width: 100%;
}

#nightly-builds details:not([open]) summary {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#nightly-builds ul {
  padding-left: 2em;
}
#nightly-builds ul li {
  margin-top: .5em;
}
</style>

<noscript id="build-dirs">
<h2>Browsing Nightly Build Manually</h2>
<p>To browse current nightly builds manually, please <a href="https://github.com/{{page.nightly-repo}}/actions/workflows/{{page.nightly-workflow}}?query=branch%3Amaster">visit GitHub</a>.</p>
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

    const fetcher = new NightlyBuildFetcher({{page.fetch-limit}});
    fetcher.addGithubActionsRunsResource("{{page.nightly-repo}}", "{{page.nightly-workflow}}", "runs");
    fetcher.addGithubActionsArtifactsResource("{{page.nightly-repo}}", "{{page.nightly-workflow}}", "artifacts");

    fetcher.fetchAll().then(fetch_results => {
      if (Object.keys(fetch_results).length <= 1) {
        showError("There was an error automatically retrieving the nightly build data.");
        return;
      }
      if ("runs" in fetch_results) {
        const aggregatedData = {};

        // Collect all the per-OS download links for each run
        if (!("artifacts" in fetch_results)) {
          showError("There was an error automatically retrieving the nightly build data.");
          return;
        }
        const folder = fetch_results.artifacts;

        for (let file of folder.artifacts) {
          const match = file.name.match(/^pencil2d-(\w+(?:-\w+)?)-(\d+)-\d{4}-\d{2}-\d{2}(?:\.zip|\.AppImage)?$/);
          if (match === null || file.expired) {
            // File name didn't match, don't know what to do with it
            continue;
          }
          let os = match[1];
          const runNumber = match[2];
          if (runNumber in aggregatedData === false) {
            aggregatedData[runNumber] = {};
          }
          aggregatedData[runNumber][os] = `https://get.pencil2d.org/@{{page.nightly-repo|split:"/"|first}}/${file.id}`;
        }

        // Add the metadata for all the runs that we have files for
        for (let run of fetch_results["runs"].workflow_runs) {
          // Make sure to check the repo name as well - the GitHub API seems to include PRs under certain circumstances
          // even though it's not supposed to
          if (run.run_number in aggregatedData && run.head_repository.full_name === "{{page.nightly-repo}}") {
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
          if (!("commit" in data)) {
            // Skip PR builds, builds from other branches, etc.
            continue;
          }
          const buildItem = document.createElement("li");
          buildItem.value = runNumber;
          const details = document.createElement("details");
          // Open the first entry by default
          details.open = detailsOpen;
          detailsOpen = false;
          const summary = document.createElement("summary");
          // Build summary - timestamp + (linked) commit message
          const timestamp = new Date(data.commit.timestamp);
          const dateMessage = document.createElement("span")
          dateMessage.textContent = timestamp.toLocaleString("en-US", {"dateStyle": "medium"}) + " \u2013 ";
          dateMessage.title = timestamp.toLocaleString("en-US", {"dateStyle": "long", "timeStyle": "long"});
          summary.appendChild(dateMessage);
          const commitLink = document.createElement("a");
          commitLink.appendChild(document.createTextNode(data.commit.message.split("\n")[0]));
          commitLink.href = `https://github.com/{{page.nightly-repo}}/commit/${data.commit.id}`;
          summary.appendChild(commitLink);
          details.appendChild(summary);

          // Add the actual details area...
          const linkList = document.createElement("ul");

          // ...with the download links...
          const downloadList = document.createElement("li");
          let text = "Download for ";
          for (let [os, osName] of [["win64", "Windows (64-bit)"], ["win32", "Windows (32-bit)"], ["mac", "macOS"], ["mac-x86_64", "macOS Intel"], ["mac-arm64", "macOS Apple Silicon"], ["linux", "Linux (64-bit)"]]) {
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
