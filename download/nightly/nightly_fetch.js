"use strict";
class NightlyBuildFetcher {
  constructor(fetchLimit) {
    this.fetchLimit = fetchLimit;
    this.resources = [];
  }

  addGithubActionsArtifactsResource(repo, workflow, label) {
    this.resources.push({
      "label": label,
      "type": "githubActionsArtifacts",
      "repo": repo,
      "workflow": workflow,
      "page": 1
    });
    this.resources.push({
      "label": label,
      "type": "githubActionsArtifacts",
      "repo": repo,
      "workflow": workflow,
      "page": 2
    });
    this.resources.push({
      "label": label,
      "type": "githubActionsArtifacts",
      "repo": repo,
      "workflow": workflow,
      "page": 3
    });
  }

  addGithubActionsRunsResource(repo, workflow, label) {
    this.resources.push({
      "label": label,
      "type": "githubActionsRuns",
      "repo": repo,
      "workflow": workflow
    });
  }

  fetchAll() {
    function fetchGithubArtifacts(resource) {
      return fetch(`https://api.github.com/repos/${resource.repo}/actions/artifacts?per_page=${this.fetchLimit}&page=${resource.page}`, {
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

    function fetchGithubRuns(resource) {
      return fetch(`https://api.github.com/repos/${resource.repo}/actions/workflows/${resource.workflow}/runs?branch=master&event=push&exclude_pull_requests=true&per_page=${this.fetchLimit}`, {
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

    const fetchMap = {
      "githubActionsArtifacts": fetchGithubArtifacts,
      "githubActionsRuns": fetchGithubRuns
    };

    let promises = [];

    this.resources.forEach(resource => {
      promises.push(fetchMap[resource["type"]].call(this, resource));
    });

    return Promise.allSettled(promises).then(responses => {
      let results = {};
      responses.forEach((response, index) => {
        if (response.status == "fulfilled") {
          if (this.resources[index]["type"] !== "githubActionsArtifacts" || !(this.resources[index]["label"] in results)) {
            results[this.resources[index]["label"]] = response.value;
          } else {
            results[this.resources[index]["label"]].total_count += response.value.total_count;
            results[this.resources[index]["label"]].artifacts.push(...response.value.artifacts);
          }
        }
      });
      return results;
    });
  }
}
