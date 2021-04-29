<template>
  <div
      class="FavoriteItem"
      @mouseenter="() => isShowDetails=true"
      @mouseleave="() => isShowDetails=false"
      @click="itemOnClick"
  >
    <loading v-if="isShowDetails && !isLoaded"/>
    <item-details v-if="isShowDetails && isLoaded" :info="info"/>
    <item-view v-if="!isShowDetails" :id="this.id"/>
  </div>
</template>

<script>
import FavoriteItemDetails from "./components/FavoriteItemDetails";
import LoadingItemView from "./components/LoadingItemView";
import FavoriteItemView from "./components/FavoriteItemView";

/**
 * FAVORITE ITEM COMPONENT
 * FR: favorite item view manager.
 * It don't need any item data except id for request detailed info about favorite item)
 * (!ASSUMPTION: this component also plays a role of the data-manager for a FavoriteItemDetails view.
 * It's non-clear design (cause it breaks SRP). This logic must be separated)
 * VR: render item views depends on item state (loaded, detailed etc.)
 * notes:
 * It's example of BAD design. SRP is broken. This component is responsible for:
 * - detailed info loading (api url, item id etc.)
 * - view managing (show\hide details, show loading view, manage conditions etc.)
 * - set props for FavoriteItemView (id)
 * What will happened when details id and item it become different? What will happened when request url is changed?
 * What will happened when business request us to add another one view or view condition?
 * And what can we do, if all of it are happened in the same time? (except suicide and firing)
 * In this case requirements can be contradictory, and we can't implement them without refactoring.
 *
 * Another side effect (IMHO, and more important) is this bad design makes FavoriteItem a MODULE.
 * It is because of FavoriteItem uses SERVER STATE (request to the backend API) as a data source.
 * And this link is even stronger than link to application state. We can't use FavoriteItem in other business domain and\or with other API url.
 *
 * Unfortunately, this dependency implicitly makes whole CatalogSectionFavorites a MODULE. And now we have a conflict.
 * CatalogSectionFavorites is designed as a component (cause it's data source is props),
 * but we can't use CatalogSectionFavorites in other business domain (cause FavoriteItem depends on API-url and transitively on server state and server data model).
 * This conflict brings programmer to depression, who try to use CatalogSectionFavorites in other place. I think. that it's very dangerous design mistake.
 * */
export default {
  name: "FavoriteItem",
  components: {
    'item-details': FavoriteItemDetails,
    'loading': LoadingItemView,
    'item-view': FavoriteItemView,
  },
  props: {
    id: {
      type: String,
      require: true,
    }
  },
  data() {
    return {
      info: {},
      isLoaded: false,
      isShowDetails: false,
    }
  },
  methods: {
    loadData() {
      // server request imitation (TODO handle error)
      console.log(`Load data for favorite ${this.id}`);
      setTimeout(() => {
        this.info = {
          viewTimes: 10,
          rating: 4.8,
          comment: "Lorem ipsum bla-bla-bla",
        };
        this.isLoaded = true;
        console.log(`Loaded ${this.id}`);
      }, 5000)
    },
    itemOnClick() {
      this.$router.push(`/item/${this.id}`);
    }
  },
  mounted() {
    this.loadData();
  }
}
</script>

<style scoped>
.FavoriteItem {
  width: 10em;
  height: 15em;
  border-radius: 1em;
  background-color: bisque;
}
</style>