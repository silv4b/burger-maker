<template>
  <NavBar :logo="logo_src" :alt="app_name" />
  <router-view />
  <Footer />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      logo_src: "/img/logo.png",
      app_name: "Make Your Burger"
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

* {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 3rem;
  min-height: 30rem;
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2.8px;
  color: #222;
}

/* Webkit scroller bar */
::-webkit-scrollbar {
	width: 8px;
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