<template>
  <NavBar :logo="logo_src" />
  <router-view />
  <Footer />
  <FabButton />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import FabButton from "./components/ButtonTop.vue";      

export default {
  components: {
    NavBar,
    Footer,
    FabButton,
  },
  data() {
    return {
      logo_src: "/img/logo.png",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

* {
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 3rem;
  min-height: 100vh;
  margin-top: 6rem;
}

.center {
  margin: 0;
  position: absolute;
  top: 88% !important;
  left: 50% !important;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 999 !important;
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2.8px;
  color: #222;
}

ul {
  list-style-type: none;
}

ul li {
  margin-bottom: 8px;
}

html {
  scroll-behavior: smooth;
}

/* Webkit scroller bar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #222;
  padding: 5px !important;
}

::-webkit-scrollbar-thumb {
  background: #fcba03;
  border-radius: 10px !important;
  margin-right: 5px !important;
}
</style>