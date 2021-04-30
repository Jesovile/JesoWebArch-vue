<template>
  <section class="CatalogSection">
    <h2 class="CatalogSection-Header">{{sectionName}}</h2>
    <catalog-section-row>
      <item-card
          v-for="itemData in items"
          :item="itemData"
          :key="itemData.id"
      >
        <button-rounded v-on:click="() => itemCardOnAction({id: itemData.id})">
          Details
        </button-rounded>
      </item-card>
    </catalog-section-row>
  </section>
</template>

<script>
import CatalogSectionRow from "./commons/CatalogSectionRow";
import ItemCard from "../../../appCommons/ItemCard";
import ButtonRounded from "../../../appCommons/buttons/ButtonRounded";

/**
 * COMMON SECTION COMPONENT
 * FR: separate part of module state by common repeatable way. Default section data separation. Default item click behaviour.
 * VR: render common section header, style and layout. Render items of section from data.
 * */
export default {
  name: "CatalogSection",
  components: {
    'catalog-section-row': CatalogSectionRow,
    'item-card': ItemCard,
    'button-rounded': ButtonRounded,
  },
  props: {
    sectionName: String,
    items: Array,
  },
  methods: {
    itemCardOnAction(data) {
      this.$router.push(`/item/${data.id}`);
    }
  },
}
</script>

<style scoped>
  .CatalogSection {
    padding: 3em 0;
    border-bottom: 2px solid gray;
  }

  .CatalogSection-Header {
    padding: 1em 0;
    text-align: left;
  }
</style>