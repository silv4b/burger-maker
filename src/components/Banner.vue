<template>
  <div id="main-banner">
    <h1>Make Your Burger 🍔</h1>
    <button @click="scroollDown()" class="center">AOBA</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    scroollDown() {
      window.scrollBy(0, 1000);
    }
  }
};
</script>

<style scoped>
.center {
  margin: 0;
  position: absolute;
  top: 80%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 999 !important;
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