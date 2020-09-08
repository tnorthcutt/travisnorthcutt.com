<template>
  <div>
    <h3>Revisions</h3>
    <div
      class="flex border-solid border border-gray-300 p-4"
      v-html="commits"
    ></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["path"],
  data() {
    return {
      commits: "",
    };
  },
  created() {
    fetch(this.path)
      .then(response => response.json())
      .then(commits => {
        const html = commits
          .map(commit => {
            const author = commit.commit.author.name,
              avatar = commit.author.avatar_url,
              date = new Date(commit.commit.author.date),
              message = commit.commit.message.split("\n")[0],
              url = commit.html_url;
            return (
              '<img class="my-0 h-16 w-16 rounded-full" src="' +
              avatar +
              '">' +
              '<div class="flex flex-col px-4"><a class="bg-none" href="' +
              url +
              '" target="gh-history">' +
              message +
              "</a>" +
              "<span>" +
              author +
              " updated this on " +
              date.toLocaleDateString() +
              "</span></div>"
            );
          })
          .join("");
        this.commits = html;
      });
  },
  computed: {},
};
</script>
