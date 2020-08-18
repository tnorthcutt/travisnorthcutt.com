<template>
  <div class="">
    <div>
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="hidden md:block">
                <div class="flex items-baseline">
                  <g-link
                    to="/"
                    class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                    >Home</g-link
                  >
                  <g-link
                    to="/articles"
                    class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >Articles</g-link
                  >
                  <g-link
                    to="/work-with-me"
                    class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >Work with me</g-link
                  >
                  <g-link
                    to="/now"
                    class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >Now</g-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 prose">
          <!-- Replace with your content -->
          <slot />
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
