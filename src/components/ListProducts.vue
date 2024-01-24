<template>
  <section class="products-container">
    <transition mode="out-in">
      <div v-if="products.length > 0" class="products" kay="productsList">
        <div v-for="(product, index) in products" :key="index" class="product">
          <router-link to="/">
            <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0].titulo">
            <p class="price">{{ product.preco }}</p>
            <h2 class="title">{{ product.nome }}</h2>
            <p>{{ product.descricao }}</p>
          </router-link>
        </div>
        <PaginationProducts
          :total-products="totalProducts"
          :per-page="pagination"
        ></PaginationProducts>
      </div>
      <div v-else-if="products.length === 0" class="no-result" key="noResult">
        <p>
          Busca sem resultados
        </p>
      </div>
      <div v-else key="loading">
        <LoadingPage></LoadingPage>
      </div>
    </transition>
  </section>
</template>

<script>
import { api } from "./../services.js";
import { serialize } from "./../helpers.js"

import PaginationProducts from "@/components/PaginationProducts"

export default {
  name: "ListProducts",
  components: { PaginationProducts },
  data() {
    return {
      products: [],
      totalProducts: 0,
      pagination: 3
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
      this.products = [];
      api.get(this.url)
        .then(data => {
          //MOCK 12
          this.totalProducts = Number(data.data['x-total-count']) || 12
          this.products = data.data
        })
    }
  },
  watch: {
    url() {
      this.getProducts();
    }
  }
}
</script>

<style scoped>
  .products-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin: 30px;
  }

  .product {
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    transition: all 0.2s;
  }

  .product:hover {
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
    transform: scale(1.1);
    position: relative;
    z-index: 1;
  }

  .product img {
    border-radius: 4px;
    margin-bottom: 20px;
  }

  .title {
    margin-bottom: 10px;
  }

  .price {
    color: #e80;
    font-weight: bold;
  }

  .no-result {
    text-align: center;
  }
</style>