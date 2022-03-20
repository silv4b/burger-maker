<template>
  <Banner />
  <div class="main-container">
    <h1>Monte o seu Burger:</h1>
    <BurgerForm />
  </div>
</template>

<script>
import BurgerForm from '@/components/BurgerForm.vue';
import Banner from "../components/Banner.vue";

export default {
  components: {
    Banner,
    BurgerForm,
  },
};
</script>

<style>
h1 {
  margin-bottom: 30px;
}
</style>