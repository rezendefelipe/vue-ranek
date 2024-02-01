<template>
  <section>
    <h2>Endereço de envio</h2>
    <UserForm>
        <button class="btn btn-form" @click.prevent="buyProduct">Finalizar Compra</button>
    </UserForm>
  </section>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
    name: "CheckoutProduct",
    components: {
        UserForm
    },
    computed: {
        ...mapState(["user"]),
        buyObj() {
            return {
                comprador_id: this.user.email,
                vendedor_id: this.product.usuario_id,
                produto: this.product,
                endereco: {
                    cep: this.user.cep,
                    rua: this.user.rua,
                    numero: this.user.numero,
                    bairro: this.user.bairro,
                    cidade: this.user.cidade,
                    estado: this.user.estado,
                }
            }
        }
    },
    props: {
        product: {
            type: Object,
            default: null
        }
    },
    methods: {
        async createTransaction() {
            return api.post("/transacao", this.buyObj).then(() => {
                this.$router.push({ name: "user-buys" })
            });
        },
        buyProduct() {
            if (this.$store.state.login) {
                this.createTransaction();
                return;
            }
            this.userCreate();
        },
        async userCreate() {
            try {
                await this.$store.dispatch("createUser", this.$store.state.user);
                await this.$store.dispatch("getUser", this.$store.state.user.email);
                await this.createTransaction();
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>

<style scoped>
    h2 {
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .btn {
        background: #e80;
    }

</style>