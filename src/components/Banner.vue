<template>
  <div id="main-banner">
    <h1>Make Your Burger 🍔</h1>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
#main-banner {
  background-image: url("../../public/img/burger.jpg");
  background-size: cover;	
  background-position: center center;
  height: 1120px;
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