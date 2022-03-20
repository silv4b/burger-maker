<template>
  <div id="nav">
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
</style>