"use strict";
class NightlyBuildFetcher {
  constructor(gDriveKey, fetchLimit) {
    this.fetchLimit = fetchLimit;
    this.gDriveKey = gDriveKey;
    this.resources = [];
  }

  addGDriveResource(parentId, resourceId, label) {
    this.resources.push({
      "label": label,
      "type": "googleDrive",
      "parentId": parentId,
      "resourceId": resourceId
    });
  }

  addGithubActionsResource(repo, workflow, label) {
    this.resources.push({
      "label": label,
      "type": "githubActions",
      "repo": repo,
      "workflow": workflow
    });
  }

  fetchAll() {
    function fetchGithubRuns(resource) {
      return fetch(`https://api.github.com/repos/${resource.repo}/actions/workflows/${resource.workflow}/runs?per_page=${this.fetchLimit}`, {
        headers: {
          "Accept": "application/vnd.github.v3+json"
        }
      }).then(response => {
        if (response.ok)
          return response.json();
        else
          throw new Error(response.statusText);
      });
    }

    function fetchGoogleDriveFiles(resource) {
      return fetch(`https://content.googleapis.com/drive/v3/files?q=%22${resource.parentId}%22%20in%20parents&fields=files(originalFilename,webContentLink)&pageSize=${this.fetchLimit}&key=${this.gDriveKey}`, {
        headers: {
          "X-Goog-Drive-Resource-Keys": `${resource.parentId}/${resource.resourceId}`
        }
      }).then(response => {
        if (response.ok)
          return response.json();
        else
          return Promise.reject(new Error(response.statusText));
      });
    }

    const fetchMap = {
      "githubActions": fetchGithubRuns,
      "googleDrive": fetchGoogleDriveFiles
    };

    let promises = [];

    this.resources.forEach(resource => {
      promises.push(fetchMap[resource["type"]].call(this, resource));
    });

    return Promise.allSettled(promises).then(responses => {
      let results = {};
      responses.forEach((response, index) => {
        if (response.status == "fulfilled")
          results[this.resources[index]["label"]] = response.value;
      });
      return results;
    });
  }
}
