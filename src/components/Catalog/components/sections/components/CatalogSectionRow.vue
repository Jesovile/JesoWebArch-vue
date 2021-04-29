<template>
  <div class="CatalogSectionRow">
    <slot></slot>
  </div>
</template>

<script>

/**
 * CATALOG SECTION ROW VIEW
 * Row view for catalog items ("Wrapper" composition pattern).
 * Common component for all section components (part of)
 * FR: -
 * VR: row layout view for section items. First implementation of section inner view and items visual composition
 * */
export default {
  name: "CatalogSectionRow",
}
</script>

<style scoped>
  .CatalogSectionRow {
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
  }

  .CatalogSectionRow > * {
    margin: 0 1em 1em 0;
  }
</style>