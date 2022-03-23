<template>
  <!-- @click="goTop()" -->
  <button
    @click="goTop()"
    class="button"
    :class="{ 'button--hidden': !showFabButton }"
  >
    🔝
  </button>
</template>

<script>
export default {
  name: "FabButton",
  data() {
    return {
      showFabButton: false,
      lastScroll: 0,
    };
  },
  methods: {
    goTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      //console.log("Chamada de: goTop()");
    },
    onScroll() {
      // Pega a posição de rolagem atual
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      // Por causa do scroll em mobiles, não se pode continuar se for menor que zero
      if (currentScroll < 0) {
        return;
      }
      // Aqui é determinado quando é necessário mostrar ou esconder o fab
      this.showFabButton = currentScroll != 0;
      //this.showFabButton = currentScroll > this.lastScroll;
      // Seta o valor de rolagem atual como o ultimo valor
      this.lastScroll = currentScroll;
      //console.log(currentScroll);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped>
.button {
  margin: 0;
  top: 88% !important;
  left: 93% !important;
  z-index: 9999 !important;
  position: fixed;
  background-color: #fcba03;
  color: #222;
  border: 4px solid #222;
  padding: 10px;
  font-size: 30px;
  cursor: pointer;
  transform: translate3d(-80%, 0, 0);
  transition: 0.2s all ease-in-out;
  border-radius: 8px;
  border-color: #222;
}

.button.button--hidden {
  transition: 0.9s all ease-out;
  transform: translate3d(1200%, 0, 0);
}
</style>