<template>
  <div class="ItemPanel">
    <i v-if="isFavourite" class="fas fa-apple-alt"></i>
  </div>
</template>

<script>
export default {
  name: "ItemPanel",
  props: {
    isFavourite: Boolean,
  },
}
</script>

<style scoped>
  .ItemPanel {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 0.5em 0;
  }
</style>