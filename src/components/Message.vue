<template>
  <div class="message-container">
    <p>{{ msg }}</p>
   <button @click="$emit('cleanMessage')">Tudo certo! 🥪</button>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    msg: {
      type: String,
      required: true
    },
  },
  emits: ['cleanMessage'],
  methods: {
    retornaEmitMsg() {
      this.$emit('cleanMessage');
    },
  },
};
</script>

<style scoped>
.message-container {
  color: #964d05;
  background-color: #fce1c6;
  border: 2px solid #ff8a15;
  border-radius: 5px;
  padding: 10px;
  max-width: 432px;
  margin: 30px auto;
  text-align: center;
}

button {
  margin-top: 10px !important;
  background-color: #222;
  color: #fcba03;
  border: 2px solid #222;
  padding: 8px;
  font-size: 12px;
  margin: 0;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 4px;
}
</style>
