<template>
  <Layout>
    <div class="prose mx-auto">
      <h1 v-html="$page.post.title"></h1>
      <div v-html="$page.post.content"></div>
      <CommitHistory v-bind:path="path" />
    </div>
  </Layout>
</template>
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
  computed: {
    path() {
      return (
        this.$page.post.fileInfo.directory.replace("./", "") +
        "/" +
        this.$page.post.fileInfo.name +
        this.$page.post.fileInfo.extension
      );
    },
  },
};
</script>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
    fileInfo {
      extension
      directory
      name
    }
  }
}
</page-query>
