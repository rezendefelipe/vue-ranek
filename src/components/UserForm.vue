<template>
  <form>
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" v-model="name">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" v-model="email">
    <label for="password">Senha</label>
    <input type="password" id="password" name="password" v-model="password">
    <label for="cep">CEP</label>
    <input type="cep" id="cep" name="cep" v-model="cep" @keyup="getAddressByCep">
    <label for="street">Rua</label>
    <input type="street" id="street" name="street" v-model="street">
    <label for="number">Número</label>
    <input type="number" id="number" name="number" v-model="number">
    <label for="bairro">Bairro</label>
    <input type="bairro" id="bairro" name="bairro" v-model="bairro">
    <label for="city">Cidade</label>
    <input type="city" id="city" name="city" v-model="city">
    <label for="state">Estado</label>
    <input type="state" id="state" name="state" v-model="state">
    <div class="button">
        <slot></slot>
    </div>
  </form>
</template>

<script>
import { getCep } from "@/services.js"

export default {
    name: "UserForm",
    methods: {
        getAddressByCep() {
            const cep = this.cep.replace(/\D/g, "");
            if (cep.length === 8) {
                getCep(cep).then(resp => {
                    this.street = resp.data.logradouro;
                    this.bairro = resp.data.bairro;
                    this.city = resp.data.localidade;
                    this.state = resp.data.uf;
                })
            }

        }
    },
    computed: {
        name: {
            get() {
                return this.$store.state.user.nome;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", { nome: value});
            }
        },
        email: {
            get() {
                return this.$store.state.user.email;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", { email: value });
            }
        },
        password: {
            get() {
                return this.$store.state.user.senha;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", { senha: value });
            }
        },
        cep: {
            get() {
                return this.$store.state.user.cep;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", { cep: value });
            }
        },
        street: {
            get() {
                return this.$store.state.user.rua;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", { rua: value });
            }
        },
        number: {
            get() {
                return this.$store.state.user.numero;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", { numero: value });
            }
        },
        bairro: {
            get() {
                return this.$store.state.user.bairro;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", { bairro: value });
            }
        },
        city: {
            get() {
                return this.$store.state.user.cidade;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", { cidade: value });
            }
        },
        state: {
            get() {
                return this.$store.state.user.estado;
            },
            set(value) {
                this.$store.commit("UPDATE_USER", { estado: value });
            }
        }
    }
}
</script>

<style scoped>
    form {
        display: grid;
        grid-template-columns: 80px 1fr;
        align-items: center;
    }

    .button {
        grid-column: 2;
        margin-top: 10px;
    }
</style>