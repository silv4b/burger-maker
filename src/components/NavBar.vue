<template>
  <div id="nav" :class="{ 'navbar--hidden': !showNavbar }">
    <router-link to="/" id="logo-url">
      <img :src="logo" id="logo" />
    </router-link>
    <router-link to="/">Início</router-link>
    <router-link to="/pedidos">Pedidos</router-link>
    <router-link to="/sobre">Sobre</router-link>
  </div>
</template>

<script>
export default {
  name: "NarBar",
  props: ["logo"],
  data() {
    return {
      showNavbar: true,
      lastScroll: 0,
    }
  },
  methods: {
    onScroll() {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll < 0) {
        return;
      }
      // this.showFabButton = currentScroll != 0;
      this.showNavbar = currentScroll < this.lastScroll;
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
#nav {
  background-color: #222;
  border-bottom: 0px solid #111;
  padding: 12px 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1000;
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-in-out;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
}

#nav #logo-url {
  margin: auto;
  margin-left: 0;
}

#logo {
  width: 40px;
  height: 40px;
}

#nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px 18px;
  font-size: 1rem;
  transition: 0.2s;
}

#nav a:hover {
  color: #fff;
}

#nav.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>