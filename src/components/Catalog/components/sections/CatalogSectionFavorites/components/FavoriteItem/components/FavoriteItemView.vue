<template>
  <div>
    <item-card v-if="itemData" :item="itemData">
      <div class="FavoriteItemView_panel">
        <i class="fas fa-apple-alt"></i>
      </div>
    </item-card>
  </div>
</template>

<script>
import ItemCard from "../../../../../../../appCommons/ItemCard";

/**
 * DEFAULT FAVORITE ITEM VIEW COMPONENT
 * FR: inject data for item
 * VR: render item-card view and panel with apple (!ATTENTION: it uses application level common component ItemCard)
 * notes:
 * Design of this component is good (in my opinion). It has only one responsibility - to render favorite item view.
 * Data source is "inject" option. It bring us to those conclusions:
 * - it's a component (and data source is not a parent but "older" component in the family)
 * - it's a "part-of" a module or more complex component
 * - we can use it in other place (it's easy generalizable part of application)
 * */
export default {
  name: "FavoriteItemView",
  components: {
    'item-card': ItemCard,
  },
  props: {
    id: String,
  },
  data() {
    return {
      itemData: this.items.find((item) => item.id === this.id) || {},
    }
  },
  inject: ['items'],
}
</script>

<style scoped>
  .FavoriteItemView_panel {
    display: flex;
    flex-direction: row-reverse;
    padding: 0.1em;
  }

</style>