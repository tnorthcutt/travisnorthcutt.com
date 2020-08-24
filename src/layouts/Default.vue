<template>
  <div class="">
    <NavMenu />

    <main>
      <div class="mx-auto py-6 px-6 lg:px-8 prose">
        <!-- Replace with your content -->
        <slot />
        <!-- /End replace -->
      </div>
    </main>
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
