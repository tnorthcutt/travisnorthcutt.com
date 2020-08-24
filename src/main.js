// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require("~/main.css");

import DefaultLayout from "~/layouts/Default.vue";
import ArticlesLayout from "~/layouts/ArticlesLayout.vue";
import NavMenu from "~/components/Nav.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("ArticlesLayout", ArticlesLayout);

  Vue.component("NavMenu", NavMenu);
}
