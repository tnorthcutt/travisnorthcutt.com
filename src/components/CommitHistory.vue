<template>
  <div>
    <h3>Revisions</h3>
    <div class="space-y-4">
      <div
        v-for="commit in commits"
        v-bind:key="commit.sha"
        class="flex border-solid border border-gray-300 p-4"
      >
        <img
          class="my-0 h-16 w-16 rounded-full"
          :src="commit.committer.avatar_url"
        />
        <div class="flex flex-col px-4">
          <a class="bg-none" :href="commit.html_url" target="gh-history">{{
            commit.commit.message.split()[0]
          }}</a
          ><span
            >Travis Northcutt updated this on
            {{ new Date(commit.commit.author.date).toLocaleDateString() }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetch from "node-fetch";

export default {
  props: ["path"],
  data() {
    return {
      commits: "",
    };
  },
  created() {
    const base =
      "https://api.github.com/repos/tnorthcutt/travisnorthcutt.com/commits?path=/";

    fetch(base + this.path)
      .then(response => response.json())
      .then(commits => {
        this.commits = commits;
      });
  },
};
</script>
