<template>
  <section>
    <div v-if="buys">
      <h2>Compras</h2>
      <div class="products-wrap" v-for="(buy, index) in buys" :key="index">
        <ProductItens v-if="buy.produto" :product="buy.produto">
          <p class="seller">
            <span>Vendedor: </span> {{ buy.vendedor_id }}
          </p>
        </ProductItens>
      </div>
    </div>
  </section>
</template>

<script>
import ProductItens from '@/components/ProductItens.vue';
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
    name: "UserBuys",
    components: {
      ProductItens
    },
    computed: {
        ...mapState(["user", "login"]),
    },
    data() {
      return {
        buys: null
      }
    },
    methods: {
      getBuys() {
        api.get(`/transacao?comprador_id=${ this.user.id }`).then(resp => {
          this.buys = resp.data
        });
      }
    },
    watch: {
      login() {
        this.getBuys();
      }
    },
    created() {
      if (this.login) {
        this.getBuys();
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
</style>