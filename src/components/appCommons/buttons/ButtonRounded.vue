<template>
  <button class="ButtonRounded" @click="buttonOnClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonRounded",
  methods: {
    buttonOnClick() {
      this.$emit('click');
    },
  },
}
</script>

<style scoped>
.ButtonRounded {
  border-radius: 20%;
  text-align: center;
  font-weight: 400;
  background-color: transparent;
}

.ButtonRounded:hover {
  background-color: gray;
}

.ButtonRounded:active {
  background-color: aliceblue;
}
</style>