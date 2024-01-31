<template>
  <section class="user">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{ name: 'user'}">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'user-buys' }">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'user-sells' }">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'user-edit' }">Editar Usuário</router-link>
        </li>
        <li>
          <button @click.prevent="logout">Sair</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
    name: "UserView",
    methods: {
      logout() {
        this.$store.dispatch("logoutUser");
        this.$router.push("/login");
      }
    }
}
</script>

<style>

</style>