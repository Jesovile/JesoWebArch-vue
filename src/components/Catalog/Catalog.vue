<template>
  <section class="Catalog">
    <catalog-section section-name="All" :items="items"/>
    <catalog-section section-name="Viewed" :items="viewed"/>
    <favorites :items="favorites"/>
  </section>
</template>

<script>
import {mapState} from "vuex";
import CatalogSection from "./components/sections/CatalogSection";
import CatalogSectionFavorites from "./components/sections/CatalogSectionFavorites/CatalogSectionFavorites";

/**
 * CATALOG MODULE FRONT CONTROLLER
 * FR: connect and prepare data for sections of the catalog (module state)
 * VR: render sections
 * notes:
 * In this place we should initiate inner-module data transport (provide data from vuex, for example)
 * But in this case we don't need it, cause all catalog-data are used in this level only.
 * Sections manage their parts of module state separately
 * */
export default {
  name: "Catalog",
  components: {
    'catalog-section': CatalogSection,
    'favorites': CatalogSectionFavorites,
  },
  computed: {
    ...mapState({
      items: state => state.catalogItems,
      viewed: state => {
        const result = [];
        state.viewed.forEach((viewedId) => {
          const viewedItem = state.catalogItems.find((item) => item.id === viewedId);
          if (viewedItem) {
            result.push(viewedItem);
          } else {
            console.warn(`CATALOG: Viewed item with id ${viewedId} is not exist`);
          }
        });
        return result;
      },
      favorites: state => {
        const result = [];
        state.favorite.forEach((favoriteId) => {
          const favoriteItem = state.catalogItems.find((item) => item.id === favoriteId);
          if (favoriteItem) {
            result.push(favoriteItem);
          } else {
            console.warn(`CATALOG: Favorite item with id ${favoriteId} is not exist`);
          }
        });
        return result;
      },
    })
  },
}
</script>

<style scoped>
  .Catalog {
    padding: 2em;
  }
</style>