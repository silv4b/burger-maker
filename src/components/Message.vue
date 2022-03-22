<template>
  <div class="message-container">
    <p>{{ msg }}</p>
   <button @click="$emit('cleanMessage')">Limpar Mensagem</button>
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
      // this.$emit('cleanMessage');
      setTimeout(() => (this.$emit('cleanMessage')), 3000);
      // verificar o erro aqui 😒
    },
  },
  mounted: this.retornaEmitMsg()
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
</style>
