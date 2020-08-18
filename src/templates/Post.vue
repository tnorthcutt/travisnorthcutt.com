<template>
  <Layout>
    <div class="prose mx-auto">
      <h1 v-html="$page.post.title"></h1>
      <div v-html="$page.post.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
    icon
  }
}
</page-query>
