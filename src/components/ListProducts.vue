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
import { api } from "./../services.js";
import { serialize } from "./../helpers.js"

export default {
    name: "ListProducts",
    data() {
      return {
        products: null,
        pagination: 9
      }
    },
    created() {
      this.getProducts()
    },
    computed: {
      url() {
        const queryString = serialize(this.$route.query);
        return `/produto?_limit=${ this.pagination }${ queryString }`
      }
    },
    methods: {
      getProducts() {
        api.get(this.url)
          .then(data => this.products = data.data)
      }
    },
    watch: {
      url() {
        this.getProducts();
      }
    }
}
</script>

<style>

</style>