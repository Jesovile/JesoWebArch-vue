<template>
  <header class="FavoritesSectionHeader">
    <p>{{headerText}}</p>
    <button
        @click="expandButtonOnClick"
        class="FavoritesSectionHeader_expandButton"
    >
      <i v-if="isSectionOpen" class="fas fa-minus"></i>
      <i v-else class="fas fa-plus"></i>
    </button>
  </header>
</template>

<script>
export default {
  name: "FavoritesSectionHeader",
  props: {
    headerText: String,
    isSectionOpen: Boolean,
  },
  methods: {
    expandButtonOnClick() {
      this.$emit('toggle-expand-button');
    }
  }
}
</script>

<style scoped>
  .FavoritesSectionHeader {
    display: flex;
    justify-content: space-between;
    padding: 0.5em 0;
    font-size: 2em;
    font-weight: 400;
    border-bottom: 1px solid gray;
  }

  .FavoritesSectionHeader_expandButton {
    border-radius: 50%;
    text-align: center;
  }
</style>