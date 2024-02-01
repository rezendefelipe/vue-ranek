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
            <button class="delete" @click="deleteProduct(product.id)">
              Deletar
            </button>
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
import { api } from "@/services.js";

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
      ...mapActions(['getUserProducts']),
      deleteProduct(id) {
        const confirm = window.confirm("Deseja remover esse produto?");
        if (confirm) api.delete(`/produto/${ id }`).then(() => {
          this.getUserProducts();
        }).catch(err => {
          console.log(err);
        })
      }
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

  .delete {
    position: absolute;
    right: 0px;
    top: 0px;
    background: url("../../assets/remove.svg") no-repeat center center;
    width: 24px;
    height: 24px;
    text-indent: -140px;
    overflow: hidden;
    cursor: pointer;
    border: none;
  }
</style>