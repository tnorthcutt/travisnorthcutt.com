<template>
  <div class="">
    <g-link class="no-underline" :to="post.path">
      <div
        class="min-h-32 max-w-sm rounded overflow-hidden hover:border-t-2 hover:border-teal-500 shadow hover:shadow-lg"
      >
        <div class="px-6 py-4">
          <h3 class="text-2xl mt-0 mb-2 font-normal" v-html="post.title" />
        </div>
      </div>
    </g-link>
  </div>
</template>

<script>
import ReadMore from "@/components/ReadMore";

export default {
  components: {
    ReadMore,
  },
  props: ["post"],
  computed: {},
};
</script>
