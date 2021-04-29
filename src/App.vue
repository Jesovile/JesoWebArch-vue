<template>
  <div class="App-Container">
    <layout>
      <template v-slot:header>
        <h1 :style="{textAlign: 'center', fontSize: '1.5em'}">Game of Stores</h1>
      </template>
      <router-view></router-view>
    </layout>
  </div>
</template>

<script>
import HeaderContentLayout from "./components/appCommons/layouts/HeaderContentLayout/HeaderContentLayout";
import Catalog from "./components/Catalog/Catalog";
import ItemInfo from "./components/ItemInfo/ItemInfo";

/**
 * APPLICATION ROOT COMPONENT
 * Is this place we register root modules (Catalog & ItemInfo) with their routes.
 * FUNCTIONAL RESPONSIBILITY (FR): register modules with routes
 * VISUAL RESPONSIBILITY (VR): render static application level elements (header) and slot for modules (router-view)
 * */
export default {
  name: 'App',
  components: {
    'layout': HeaderContentLayout,
  },
  beforeMount() {
    this.$router.addRoute({ name: 'catalog', path: '/catalog', component: Catalog });
    this.$router.addRoute({ name: 'itemInfo', path: '/item/:id', component: ItemInfo });
    this.$router.addRoute({ path: '/', redirect: 'catalog' });
  },
}
</script>

<style scoped>
  .App-Container {
    width: 100%;
    height: 100%;
  }
</style>