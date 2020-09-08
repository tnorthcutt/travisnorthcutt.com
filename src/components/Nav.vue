<template>
  <div>
    <nav class="bg-gradient-to-r from-yellow-200 to-orange-400">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="hidden md:block">
              <div class="ml-10 text-gray-900 flex items-baseline space-x-4">
                <g-link
                  to="/"
                  class="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >Home</g-link
                >
                <g-link
                  to="/articles"
                  class="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >Articles</g-link
                >
                <g-link
                  to="/hire-me"
                  class="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >Work with me</g-link
                >
                <g-link
                  to="/now"
                  class="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >/now</g-link
                >
                <g-link
                  to="/open-source-contributions"
                  class="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >Contributions</g-link
                >
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              @click="menu = !menu"
            >
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg
                class="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg
                class="hidden h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
      <div v-show="menu" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <g-link
            to="/"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Home</g-link
          >
          <g-link
            to="/articles"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Articles</g-link
          >
          <g-link
            to="/hire-me"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Work with me</g-link
          >
          <g-link
            to="/now"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >/now</g-link
          >
          <g-link
            to="/open-source-contributions"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Contributions</g-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    };
  },
};
</script>
