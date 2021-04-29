<template>
  <div class="ItemCard">
    <h3 class="ItemCard-header">{{item.name}}</h3>
    <div class="ItemCard-content">
      <p>{{item.description}}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    item: Object,
  },
}
</script>

<style scoped>
  .ItemCard {
    width: 10em;
    height: 15em;
    border: 1px solid black;
    border-radius: 1em;
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
  }

  .ItemCard > * {
    width: 100%;
  }

  .ItemCard > *:not(:last-child) {
    padding-bottom: 0.5em;
  }

  .ItemCard-header {
    padding: 1em 0;
    border-bottom: 1px solid gray;
    text-align: center;
  }

  .ItemCard-content {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>