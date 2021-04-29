<template>
  <div class="FavoriteItemDetails">
    <div>
      <p class="FavoriteItemDetails_label">View times:</p>
      <p>{{info.viewedTimes || 0}}</p>
    </div>
    <div>
      <p class="FavoriteItemDetails_label">Rating:</p>
      <p>{{info.rating || "-"}}</p>
    </div>
    <div>
      <p class="FavoriteItemDetails_label">Comment:</p>
      <p>{{info.comment || "-"}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoriteItemDetails",
  props: {
    info: {
      type: Object,
      default: () => {},
    }
  }
}
</script>

<style scoped>
  .FavoriteItemDetails {
    padding: 0.5em;
  }

  .FavoriteItemDetails > *:not(:last-child) {
    padding-bottom: 1em;
    display: flex;
  }

  .FavoriteItemDetails_label {
    width: 40%;
    color: gray;
  }
</style>