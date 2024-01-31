<template>
  <section>
    <h2>
      Adicionar Produto
    </h2>
    <AddProducts></AddProducts>
    <h2>Seus Produtos</h2>
    <!-- <transition-group v-if="userProducts" name="list" tag="ul"> -->
      <ul>
        <li v-for="product in userProducts" :key="product.email">
          <ProductItens :product="product">
            <p>{{ product.descricao }}</p>
          </ProductItens>
        </li>
      </ul>
    <!-- </transition-group> -->
  </section>
</template>

<script>
import AddProducts from "@/components/AddProducts.vue";
import ProductItens from "@/components/ProductItens.vue";

import { mapState, mapActions } from "vuex";

export default {
    name: "UserProducts",
    components: {
      AddProducts,
      ProductItens
    },
    computed: {
      ...mapState(['login', 'user', 'userProducts']),
    },
    methods: {
      ...mapActions(['getUserProducts'])
    },
    watch: {
      login() {
        this.getUserProducts();
      }
    },
    created() {
      if (this.login) {
        this.getUserProducts();
      }
    }
}
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
  }
</style>