<template>
  <Layout>
    <div class="prose mx-auto">
      <h1 v-html="$page.house.title"></h1>
      <div v-html="$page.house.content"></div>
      fart
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  page(id: $id) {
    title
    content
  }
}
</page-query>
