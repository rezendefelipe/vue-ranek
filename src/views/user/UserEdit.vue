<template>
  <section>
    <UserForm>
      <button class="btn btn-form" @click.prevent="updateUser">Atualizar Usuário</button>
    </UserForm>
  </section>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import { api } from "@/services.js";

export default {
  name: "UserEdit",
  components: {
    UserForm
  },
  methods: {
    updateUser() {
      api.put(`/usuario/${ this.$store.state.user.id }`, this.$store.state.user).then(() => {
        this.$store.dispatch("getUser", this.$store.state.user.id);
        this.$router.push({ name: "user" })
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style>

</style>