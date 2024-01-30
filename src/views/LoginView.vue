<template>
  <section class="login">
    <h1>
      Login
    </h1>
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email">
      <label for="password">Senha</label>
      <input type="password" name="password" id="password" v-model="login.password">
      <button class="btn" @click.prevent="handleLogin">Logar</button>
    </form>
    <p class="lost-passwaord">
      <a href="/" target="_blank">Perdeu a senha? Clique aqui.</a>
    </p>
    <createAccount />
  </section>
</template>

<script>
import createAccount from "@/components/createAccount";

export default {
    name: "LoginView",
    components: {
      createAccount
    },
    data() {
      return {
        login: {
          email: "",
          password: ""
        }
      }
    },
    methods: {
      handleLogin() {
        this.$store.dispatch("getUser", this.login.email);
        this.$router.push({ name: "user" })
      }
    }
}
</script>

<style scoped>
  .login {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-top: 40px;
    color: #87F;
  }

  form {
    display: grid;
  }

  .btn {
    widows: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .lost-passwaord {
    text-align: center;
    margin: 20px auto 0 auto;
  }

  .lost-passwaord a:hover {
    color: #87F;
    text-decoration: underline;
  }




</style>