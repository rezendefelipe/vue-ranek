<template>
  <div>
    <h1>
      Compre / Venda
    </h1>
    <SearchProducts />
    <ListProducts />
  </div>
</template>

<script>
import SearchProducts from "@/components/SearchProducts";
import ListProducts from "@/components/ListProducts";

export default {
  name: 'HomeView',
  components: {
    SearchProducts,
    ListProducts
  }
}
</script>

<style scoped>
  h1 {
    color: #87f;
    margin-top: 40px;
    font-size: 2rem;
    text-align: center;
  }
</style>