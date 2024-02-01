<template>
  <section>
    <div v-if="product" class="product">
      <ul class="photos" v-if="product.fotos">
        <li v-for="(pic, index) in product.fotos" :key="index">
          <img :src="pic.src" :alt="pic.titulo">
        </li>
      </ul>
      <div class="info">
        <h1>{{ product.nome }}</h1>
        <p class="price">{{ product.preco | currencyPrice }}</p>
        <p class="description">{{ product.descricao }}</p>
        <transition v-if="product.vendido === 'false'" mode="out-in">
          <button class="btn" v-if="!goToCheckout" @click="goToCheckout = true">Comprar</button>
          <CheckoutProduct v-else :product="product" />
        </transition>
        <button v-else class="btn" disabled>Produto Vendido</button>
      </div>
    </div>
    <LoadingPage v-else />
  </section>
</template>

<script>
import { api } from "../services";
import CheckoutProduct from "@/components/CheckoutProduct.vue";

export default {
    name: "ProductView",
    components: {
      CheckoutProduct
    },
    data() {
      return {
        product: null,
        goToCheckout: false
      }
    },
    props: {
      id: {
        type: String
      }
    },
    methods: {
      getProduct() {
        api.get(`/produto/${ this.id }`)
          .then(data => {
            this.product = data.data
          })
      }
    },
    created() {
      this.getProduct();
    }
}
</script>

<style scoped>
  .product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    max-width: 900px;
    padding: 60px 20px;
    margin: 0 auto;
  }

  .price {
    color: #e80;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 40px;
  }

  .description {
    font-size: 1.2rem;
  }

  .btn {
    margin-top: 60px;
    width: 200px;
  }
</style>