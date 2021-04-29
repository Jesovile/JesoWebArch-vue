<template>
  <section class="ItemInfo">
    <div class="ItemInfo-Container">
      <div class="ItemInfo-Container_cardSlot">
        <item-card :item="item">
          <item-panel :is-favourite="item.isFavorite"/>
        </item-card>
      </div>
      <div class="ItemInfo-Container-Description">
        <h2>{{ item.name || "-" }}</h2>
        <p class="ItemInfo-Container-Description_text">
          {{ item.fullDescription || "-" }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import ItemCard from "../appCommons/ItemCard";
import ItemPanel from "./components/ItemPanel";

export default {
  name: "ItemInfo",
  components: {
    'item-card': ItemCard,
    'item-panel': ItemPanel,
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    item() {
      return Object.assign(
          {},
          this.$store.state.catalogItems.find((catalogItem) => catalogItem.id === this.id) || {},
          {
            fullDescription: this.$store.state.itemDescriptions.find((fullDescObj) => fullDescObj.id === this.id).fullDescription,
            isFavorite: !!this.$store.state.favorite.find((favItem) => favItem.id === this.id),
          }
      )
    },
  },
}
</script>

<style scoped>
.ItemInfo {
  display: flex;
  /*align-items: center;*/
  justify-content: center;
  font-size: 4em;
}

.ItemInfo-Container {
  display: flex;
  padding: 1em;
}

.ItemInfo-Container_cardSlot {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2em;
}

.ItemInfo-Container-Description > *:not(:last-child) {
  padding-bottom: 1.5em;
}

.ItemInfo-Container-Description_text {
  font-size: 0.25em;
}
</style>