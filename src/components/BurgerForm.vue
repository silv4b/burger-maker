<template>
  <div>
    <!-- <p>Componente de mensagem.</p> -->
    <br />
    <div>
      <form id="burger-form">
        <div class="input-container">
          <label for="nome">Nome do Cliente: </label>
          <input
            type="text"
            id="nome"
            name="nome"
            v-model="nome"
            placeholder="Digite o seu nome."
          />
        </div>

        <div class="input-container">
          <label for="pao">Escolha o seu pão:</label>
          <select name="pao" id="pao" v-model="pao">
            <option>Selecione o seu pão</option>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
              {{ pao.tipo }}
            </option>
          </select>
        </div>

        <div class="input-container">
          <label for="carne">Escolha o sua carne:</label>
          <select name="carne" id="carne" v-model="carne">
            <option>Selecione a sua carne</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
              {{ carne.tipo }}
            </option>
          </select>
        </div>

        <div id="molhos-container" class="input-container">
          <label id="molhos-title" for="molhos">Selecione os molhos:</label>
          <div class="checkbox-container" v-for="molho in molhosdata" :key="molho.id" >
            <input type="checkbox" name="molhos" v-model="molhos" :value="molho.tipo" />
            <spam>{{ molho.tipo }}</spam>
          </div>
        </div>

        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
          <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id" >
            <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo" />
            <spam>{{ opcional.tipo }}</spam>
          </div>
        </div>

        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu Burger!" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "BurgerForm",
  data() {
    return {
      paes: null,
      carnes: null,
      molhosdata: null,
      opcionaisdata: null,
      nome: null,
      pao: null,
      carne: null,
      molhos: [],
      opcionais: [],
      status: "Solicitado",
      mensagem: null,
    };
  },
  methods: {
    async getIngredientes() {
      const req = await fetch("http://localhost:3000/ingredientes");
      const data = await req.json();

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisdata = data.opcionais;
      this.molhosdata = data.molhos;
    },
  },
  mounted() {
    this.getIngredientes();
  },
};
</script>

<style scoped>
#burger-form {
  max-width: 27rem;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;
}

label {
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  color: #222;
  padding: 10px 12px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 10px 10px;
  border-radius: 6px;

  font-size: 1.1rem;
  /*width: 300px;*/
}
#opcionais-container,
#molhos-container {
  flex-direction: row;
  flex-wrap: wrap;
}

#opcionais-title,
#molhos-title {
  width: 100%
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container spam .checkbox-container input {
  width: auto;
}

.checkbox-container spam {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #fcba03;
  border: 3px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0;
  cursor: pointer;
  transition: 0.3s;
}

.submit-btn:hover {
  background-color: #fcba03;
  border: 3px solid #222;
  color: #222;
}
</style>