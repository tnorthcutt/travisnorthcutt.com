<template>
  <ArticlesLayout>
    <h1 class="">Stuff I've written</h1>
    <p class="italic mb-12">
      N.B. Some of these articles are rather old! But, for now I'm keeping them
      published here in the hopes they'll be useful to someone.
    </p>
    <section
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 row-gap-10"
    >
      <PostList
        v-for="edge in $page.allPost.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </section>
  </ArticlesLayout>
</template>

<script>
import PostList from "@/components/PostList";
export default {
  components: {
    PostList,
  },
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        path
      }
    }

  }
}
</page-query>
