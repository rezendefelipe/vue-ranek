<template>
  <section>
    <h2>
      Adicionar Produto
    </h2>
    <AddProducts></AddProducts>
    <h2>Seus Produtos</h2>
    <div v-if="userProducts">
      <ul>
        <li v-for="product in userProducts" :key="product.email" class="item-li">
          <ProductItens :product="product" class="item">
            <p>{{ product.descricao }}</p>
          </ProductItens>
        </li>
      </ul>
    </div>
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

  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translate3d(20px, 0, 0);
  }

  .list-enter-active,
  .list-leave-active {
    transition: all .3s;
  }
</style>