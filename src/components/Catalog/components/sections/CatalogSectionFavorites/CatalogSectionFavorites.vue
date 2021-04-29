<template>
  <section class="CatalogSectionFavorites">
    <favorites-header
        header-text="Favorites"
        :is-section-open="isExpand"
        @toggle-expand-button="() => isExpand = !isExpand"
    />
    <catalog-section-row v-if="isExpand">
      <favorite-item v-for="item in items" :key="item.id" :id="item.id"/>
    </catalog-section-row>
  </section>
</template>

<script>
import CatalogSectionRow from "../components/CatalogSectionRow";
import FavoritesSectionHeader from "./components/FavoritesSectionHeader";
import FavoriteItem from "./components/FavoriteItem/FavoriteItem";

/**
 * FAVORITES SECTION COMPONENT
 * Non-default container for favorites items.
 * FR: open\close section entry. Provide data for child components in this scope
 * VR: Render favorite item components. Render header and items layout (!ATTENTION it use common-level CatalogSectionRow as a part of layout).
 * notes:
 * It seems like a module (has a child components, provide data) but is isn't.
 * It's NOT singleton, cause the source of data is props. It means, that it depends on parent component (composition model "part-of").
 * If we want to make it like a module, the data source must be application state (vuex). With data from application state it is SINGLETON
 * */
export default {
  name: "CatalogSectionFavorites",
  components: {
    'catalog-section-row': CatalogSectionRow,
    'favorites-header': FavoritesSectionHeader,
    'favorite-item': FavoriteItem,
  },
  data() {
    return {
      isExpand: true,
    }
  },
  props: {
    items: Array,
  },
  provide() {
    return {
      items: this.items,
    }
  }
}
</script>

<style scoped>
  .CatalogSectionFavorites {
    border-bottom: 2px solid gray;
  }

  .CatalogSectionFavorites >*:nth-child(2) {
    margin: 1em 0;
  }
</style>