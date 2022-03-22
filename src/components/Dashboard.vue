<template>
  <div id="burger-table">
    <Message v-show="msg" :msg="msg" @cleanMessage="cleanMessage" />
    <div>
      <div id="burger-table-heading">
        <div class="order-id">#</div>
        <div>Cliente</div>
        <div>Pão</div>
        <div>Carne</div>
        <div>Molhos</div>
        <div>Opcionais</div>
        <div>Ações</div>
      </div>
    </div>
    <div id="burger-table-rows">
      <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
        <div class="order-number">{{ burger.id }}</div>
        <div>{{ burger.nome }}</div>
        <div>{{ burger.pao }}</div>
        <div>{{ burger.carne }}</div>
        <div>
          <ul>           
            <li v-for="(molho, index) in burger.molhos" :key="index">
              {{ molho }}
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li v-for="(opcional, index) in burger.opcionais" :key="index">
              {{ opcional }}
            </li>
          </ul>
        </div>
        <div id="status">
          <select
            name="status"
            class="status"
            @change="updateBurger($event, burger.id)"
          >
            <option
              v-for="stts in status"
              :key="stts.id"
              :value="stts.tipo"
              :selected="burger.status == stts.tipo"
            >
              {{ stts.tipo }}
            </option>
          </select>
          <button @click="deleteBurger(burger.id)" class="delete-btn">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "../components/Message.vue";

export default {
  name: "Dashboard",
  components: {
    Message,
  },
  data() {
    return {
      burgers: null,
      burger_id: null,
      status: [],
      msg: "",
    };
  },
  methods: {
    /** nome da funcão que também é chamada através do $emit
     * no componente de mensagens, pelo mesmo nome.
     */
    cleanMessage(new_msg) {
      this.msg = new_msg;
      console.log(this.msg);
    },
    async getPedidos() {
      const req = await fetch("http://localhost:3000/burgers");
      const data = await req.json();
      this.burgers = data;
      // Resgata os status de pedidos
      this.getStatus();
    },
    async getStatus() {
      const req = await fetch("http://localhost:3000/status");
      const data = await req.json();
      this.status = data;
    },
    async deleteBurger(id) {
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "DELETE",
      });

      const res = await req.json();
      this.getPedidos();

      // mensagem de sistema
      this.cleanMessage(`Pedido Nº ${id} foi CANCELADO com sucesso! 🗑️`);
      setTimeout(() => (this.cleanMessage("")), 3000);
    },
    async updateBurger(event, id) {
      const option = event.target.value;
      const dataJson = JSON.stringify({ status: option });
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();
      
      this.cleanMessage(`Pedido Nº ${res.id} foi ATUALIZADO para ${res.status} com sucesso! 
      ✅`);
      setTimeout(() => (this.cleanMessage("")), 3000);
    },    
  },
  mounted() {
    this.getPedidos();
  },
};
</script>

<style scoped>
#burger-table {
  max-width: 1200px;
  margin: 0 auto;
}

#burger-table-heading,
#burger-table-rows,
.burger-table-row {
  display: flex;
  flex-wrap: wrap;
}

#burger-table-heading {
  font-weight: bold;
  padding: 1rem;
  border-bottom: 3px solid #333;
}

.burger-table-row {
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

#burger-table-heading div,
.burger-table-row div {
  width: 14%;
}

#burger-table-heading .order-id,
.burger-table-row .order-number {
  width: 3%;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
  border-radius: 6px;
}

button {
  border-radius: 6px;
}

.delete-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.3s;
}

.delete-btn:hover {
  background-color: #fcba03;
  color: #222;
}

#status {
  width: auto;
}
</style>