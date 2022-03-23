<template>
  <div id="main-banner">
    <h1>Make Your Burger 🍔</h1>
    <button @click="scroollDown()" class="button center">Monte o Seu 🍔</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    scroollDown() {
      // height recebe o tamanho da div do banner através do query selector
      const height = document.querySelector("#main-banner").offsetHeight;
      // scroll down o tamanho da tela - 10px (border-botton amarela)
      window.scrollBy(0, (height - 10));
    },
  },
};
</script>

<style scoped>
.button {
  background-color: #fcba03;
  color: #222;
  border: 4px solid #222;
  padding: 10px 30px;
  font-size: 30px;
  margin: 0;
  cursor: pointer;
  transition: 0.1s;
  width: auto;
  border-radius: 8px;
  border-color: #222;
  position: absolute;
  top: 80%;
  left: 90%;
  z-index: 999 !important;
}

.button:hover {
  background-color: #222;
  border: 0px solid #fcba03;
  color: #fcba03;
}

#main-banner {
  background-image: url("../../public/img/burger.jpg");
  background-size: cover;
  background-position: center center;
  height: 100vh; /* For 100% screen height */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 10px solid #fcba03;
}

#main-banner h1 {
  color: #fcba03;
  text-align: center;
  font-size: 3.6rem;
  background-color: #222;
  padding: 2rem 4rem;
}
</style>