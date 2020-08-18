<template>
  <button
    class="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
  >
    <g-link :to="to">
      Read more →
    </g-link>
  </button>
</template>

<script>
export default {
  name: "ReadMore",
  props: ["to"],
};
</script>
