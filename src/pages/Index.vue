<template>
  <ArticlesLayout>
    <div class="max-w-4xl mx-auto mt-8 md:mt-16">
      <h1 class="text-6xl font-normal">{{ greeting }}</h1>
      <p class="text-2xl leading-relaxed">
        I'm Travis Northcutt. I write code – mostly
        <a href="https://vuejs.org">VueJS</a> and
        <a href="https://laravel.com">Laravel</a>. I'm a Lead Software Engineer at <a href="https://apiabroad.com/">API Abroad</a>.
      </p>
      <p class="text-2xl leading-relaxed">
        You can find me on <a href="https://twitter.com/tnorthcutt">Twitter</a>,
        <a href="https://github.com/tnorthcutt">GitHub</a>, and
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">LinkedIn</a>.
      </p>
    </div>
  </ArticlesLayout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
  computed: {
    greeting() {
      let hour = new Date().getHours();
      if (hour < 12) {
        return "Good morning!";
      } else if (12 <= hour && hour < 17) {
        return "Good afternoon!";
      } else if (17 <= hour && hour < 20) {
        return "Good evening!";
      } else {
        return "Good night!";
      }
    },
  },
};
</script>

<style scoped>
p a {
  @apply no-underline bg-yellow-100 bg-gradient-to-r hover:from-yellow-200 hover:to-orange-400;
}
</style>
