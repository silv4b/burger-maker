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
          <label for="pao">Escolha o seu pão.</label>
          <select name="pao" id="pao" v-model="pao">
            <option>Selecione o seu pão</option>
            <option value="Integral">Integral</option>
          </select>
        </div>

        <div class="input-container">
          <label for="carne">Escolha o sua carne.</label>
          <select name="carne" id="carne" v-model="carne">
            <option>Selecione a sua carne</option>
            <option value="Maminha">Maminha</option>
          </select>
        </div>

        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
          <div class="checkbox-container">
            <input type="checkbox" name="opcionais" v-model="opcionais" value="Salame" />
            <spam>Salame</spam>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="opcionais" v-model="opcionais" value="Salada" />
            <spam>Salada</spam>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="opcionais" v-model="opcionais" value="Tomate" />
            <spam>Tomate</spam>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="opcionais" v-model="opcionais" value="Frango" />
            <spam>Frango</spam>
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
  data() {},
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
#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}

#opcionais-title {
  widows: 100%;
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