import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services.js";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    user: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: ""
    }
  },
  getters: {
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    }
  },
  actions: {
    async getUser(context, payload) {
      return api.get(`/usuario/${ payload }`).then(resp => {
        context.commit("UPDATE_USER", resp.data)
        context.commit("UPDATE_LOGIN", true)
      })
    },
    createUser(context, payload) {
      context.commit("UPDATE_USER", { id: payload.email })
      return api.post(`/usuario`, payload);
    },
    logoutUser(context) {
      context.commit("UPDATE_USER", {
        id: "",
        nome: "",
        email: "",
        senha: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: ""
      });
      context.commit("UPDATE_LOGIN", false);
    }
  },
  modules: {
  }
})
