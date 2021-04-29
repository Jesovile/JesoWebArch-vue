<template>
  <section class="Layout">
    <div class="Layout-HeaderSlot">
      <slot name="header"/>
    </div>
    <div class="Layout-ContentSlot">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderContentLayout",
}
</script>

<style scoped>
  .Layout {
    width: 100%;
    height: 100%;
    padding: 2em;
    display: flex;
    flex-direction: column;
  }

  .Layout-HeaderSlot {
    padding-bottom: 1.5em;
    border-bottom: 2px solid gray;
  }

  .Layout-ContentSlot {
    flex-grow: 1;
  }
</style>