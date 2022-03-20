<template>
  <div class="message-container">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    msg: String,
  }
};
</script>

<style scoped>
.message-container {
  /*color: #004085;
  background-color: #cce5ff;
  border: 2px solid #b8daff;*/
  color: #964d05;
  background-color: #fce1c6;
  border: 2px solid #ff8a15;
  border-radius: 5px;
  padding: 10px;
  max-width: 432px;
  margin: 30px auto;
  text-align: center;
}
</style>
