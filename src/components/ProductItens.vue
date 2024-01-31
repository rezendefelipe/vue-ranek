<template>
  <section class="product" v-if="product">
    <router-link :to="{ name: 'product', params: { id: product.id } }" class="product-img">
        <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0].titulo">
        <p>Ver produto</p>
    </router-link>
    <div class="info">
        <p class="price">{{ product.preco | currencyPrice }}</p>
        <h2 class="title">{{ product.nome }}</h2>
        <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
    name: "ProductItens",
    props: {
        product: {
            type: Object,
            default: null
        }
    }
}
</script>

<style scoped>
    .product {
        display: grid;
        grid-template-columns: minmax(100px, 200px) 1fr;
        grid-gap: 20px;
        margin-bottom: 40px;
        position: relative;
    }

    .info {
        align-self: end;
    }

    .product-img {
        border-radius: 4px;
        overflow: hidden;
        height: 100px;
    }

</style>