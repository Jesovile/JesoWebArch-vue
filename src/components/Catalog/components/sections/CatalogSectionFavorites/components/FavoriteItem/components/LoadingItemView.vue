<template>
  <div class="LoadingItemView">
    <i class="far fa-clock"></i>
    <p :style="{fontSize: '1.5em', fontStyle: 'italic'}">Loading...</p>
  </div>
</template>

<script>
export default {
  name: "LoadingItemView"
}
</script>

<style scoped>
.LoadingItemView {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20%;
}
</style>