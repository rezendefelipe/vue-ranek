<template>
  <section>
    <div v-if="sells">
      <h2>Vendas</h2>
      <div class="products-wrap" v-for="(sell, index) in sells" :key="index">
        <ProductItens v-if="sell.produto" :product="sell.produto">
          <p class="seller">
            <span>Comprador: </span> {{ sell.comprador_id }}
          </p>
        </ProductItens>
        <div class="address">
          <h3>Entrega: </h3>
          <ul v-if="sell.endereco">
            <li v-for="(value, index) in sell.endereco" :key="index">{{ `${index}: ${value}` }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductItens from '@/components/ProductItens.vue';
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
    name: "UserSells",
    components: {
      ProductItens
    },
    computed: {
        ...mapState(["user", "login"]),
    },
    data() {
      return {
        sells: null
      }
    },
    methods: {
      getSells() {
        api.get(`/transacao?vendedor_id=${ this.user.id }`).then(resp => {
          this.sells = resp.data
        });
      }
    },
    watch: {
      login() {
        this.getSells();
      }
    },
    created() {
      if (this.login) {
        this.getSells();
      }
    }
}
</script>

<style scoped>
  .products-wrap {
    margin-bottom: 40px;
  }

  .seller span {
    color: #e80;
  }

  h2 {
    margin-bottom: 20px;
  }

  .address {
    display: grid;
    grid-template-columns: minmax(100px, 200px) 1fr;
    grid-gap: 20px;
    margin-bottom: 60px;
  }

  h3 {
    margin: 0;
    justify-self: end;
  }
</style>