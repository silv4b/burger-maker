<template>
  <div>
    <Message :msg="msg" @msg="msg" v-show="msg" />
    <br />
    <div>
      <form id="burger-form" @submit="createBurger($event)">
        <div class="input-container">
          <label for="nome">Nome do Cliente: </label>
          <input
            type="text"
            id="nome"
            name="nome"
            v-model="nome"
            placeholder="Digite o seu nome."
            required
          />
        </div>

        <div class="input-container">
          <label for="pao">Escolha o seu pão:</label>
          <select name="pao" id="pao" v-model="pao" required>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
              {{ pao.tipo }}
            </option>
          </select>
        </div>

        <div class="input-container">
          <label for="carne">Escolha o sua carne:</label>
          <select name="carne" id="carne" v-model="carne" required>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
              {{ carne.tipo }}
            </option>
          </select>
        </div>

        <div id="molhos-container" class="input-container">
          <label id="molhos-title" for="molhos" required
            >Selecione os molhos:</label
          >
          <div
            class="checkbox-container"
            v-for="molho in molhosdata"
            :key="molho.id"
          >
            <input
              type="checkbox"
              name="molhos"
              v-model="molhos"
              :value="molho.tipo"
              :id="molho.tipo"
            />
            <label :for="molho.tipo">{{ molho.tipo }}</label>
          </div>
        </div>

        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais"
            >Selecione os opcionais:</label
          >
          <div
            class="checkbox-container"
            v-for="opcional in opcionaisdata"
            :key="opcional.id"
          >
            <input
              type="checkbox"
              name="opcionais"
              v-model="opcionais"
              :value="opcional.tipo"
              :id="opcional.id"
            />
            <label :for="opcional.id">{{ opcional.tipo }}</label>
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
import Message from "../components/Message.vue";

export default {
  name: "BurgerForm",
  components: {
    Message,
  },
  data() {
    return {
      baseUrl: "https://json-fucking-server.herokuapp.com",
      paes: null,
      carnes: null,
      molhosdata: null,
      opcionaisdata: null,
      nome: null,
      pao: null,
      carne: null,
      molhos: [],
      opcionais: [],
      msg: "",
    };
  },
  methods: {
    cleanMessage(new_msg) {
      this.msg = new_msg;
      //console.log(this.msg);
    },
    async getIngredientes() {
      const req = await fetch(`${this.baseUrl}/ingredientes`);
      const data = await req.json();

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisdata = data.opcionais;
      this.molhosdata = data.molhos;
    },
    async createBurger(e) {
      e.preventDefault();

      if (
        this.nome == "" ||
        this.carne == "" ||
        this.pao == "" ||
        this.molhos == []
      ) {
        alert("Não foi possível fazer o seu pedido!");
        return false;
      }

      const data = {
        nome: this.nome,
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.opcionais),
        molhos: Array.from(this.molhos),
        status: "Solicitado",
      };

      const dataJson = JSON.stringify(data); //converte o objeto em texto
      const req = await fetch(`${this.baseUrl}/burgers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      // mensagem de sistema
      this.cleanMessage(
        `${res.nome}, seu pedido foi realizado com sucesso! 🍔`
      );
      setTimeout(() => this.cleanMessage(""), 3000);

      // limpar os campos
      this.nome = "";
      this.carne = "";
      this.pao = "";
      this.opcionais = [];
      this.molhos = [];
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
  margin-bottom: 10rem !important;
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
}

#opcionais-container,
#molhos-container {
  flex-direction: row;
  flex-wrap: wrap;
}

#opcionais-title,
#molhos-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: baseline;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container label {
  border-left: 4px solid transparent !important;
  padding: 0 !important;
  margin: 0 12px 0 10px !important;
  font-weight: normal;
}

.checkbox-container p .checkbox-container input {
  width: auto;
}

.checkbox-container p {
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