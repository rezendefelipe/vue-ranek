<template>
  <section class="produtos-container">
    <div v-for="product in products" :key="product.id">
      <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0].titulo">
      <p class="preco">{{ product.preco }}</p>
      <h2 class="titulo">{{ product.nome }}</h2>
      <p>{{ product.descricao }}</p>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
    name: "ListProducts",
    data() {
      return {
        products: null
      }
    },
    created() {
      this.getProducts()
    },
    methods: {
      getProducts() {
        axios.get('https://raw.githubusercontent.com/rezendefelipe/vue-ranek/main/ranek-api/ranek.json')
          .then(data => this.products = data.data.produto)
      }
    }
}
</script>

<style>

</style>