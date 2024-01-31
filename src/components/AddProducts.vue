<template>
  <form class="add-produc">
    <label for="nome">Nome</label>
    <input type="text" id="nome" name="nome" v-model="produto.nome">
    <label for="preco">Preço</label>
    <input type="number" id="preco" name="preco" v-model="produto.preco">
    <label for="fotos">Fotos</label>
    <input type="file" id="fotos" name="fotos" ref="fotos">
    <label for="descricao">Descrição</label>
    <textarea name="descricao" id="descricao" v-model="produto.descricao" cols="30" rows="10"></textarea>
    <input class="btn" type="button" value="Adiconar Produto" @click.prevent="addProduct">
  </form>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "AddProducts",
  data() {
    return {
      produto: {
        nome: "",
        preco: "",
        descricao: "",
        fotos: null
      }
    }
  },
  methods: {
    addProduct() {
      this.formatProduct();
      api.post("/produto", this.produto).then(() => {
        this.$store.dispatch("getUserProducts");
      })
    },
    formatProduct() {
      this.produto.usuario_id = this.$store.state.user.id;
    }
  }
}
</script>

<style scoped>
  .add-produc {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    margin-bottom: 60px;
  }

  .btn {
    grid-column: 2;
  }
</style>