import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import AddPedido from "./components/pedido/AddPedido.vue";

import AddRecheio from "./components/recheio/AddRecheio.vue";
import ListarRecheio from "./components/recheio/ListarRecheio.vue";

import AddTamanho from "./components/tamanho/AddTamanho.vue";
import ListarTamanho from "./components/tamanho/ListarTamanho.vue";

import AddProduto from "./components/produto/AddProduto.vue";
import ConsultarCliente from "./components/cliente/ConsultarCliente.vue";
import AddCliente from "./components/cliente/AddCliente.vue";
import AddSabor from "./components/sabor/AddSabor.vue";

import AddCategoria from "./components/categoria/AddCategoria.vue";


import Cadastro from "@/components/cadastro.vue"
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/adicionar/",
      name: "adicionar",
      component: Cadastro,
      children: [
        {
          name: "Cadastro Pedido",
          path: "pedido",
          component:AddPedido
        },
        {
          name: "Cadastro Categoria",
          path: "categoria",
          component:AddCategoria
        },
        {
          name: "Cadastrar Recheio",
          path: "recheio",
          component: AddRecheio
        },
        {
          name: "Cadastrar Tamanho",
          path: "tamanho",
          component: AddTamanho
        },
        {
          name: "Cadastrar Produto",
          path: "produto",
          component: AddProduto
        },
        {
          name: "Cadastrar Cliente",
          path: "cliente",
          component: AddCliente
        },
        {
          name: "Cadastrar Sabor",
          path: "sabor",
          component: AddSabor
        }
      ]
    },
    {
      path: "/listar/",
      name: "listar",
      // component: ,
      children: [
        {
          name: "Listar Recheio",
          path: "recheio",
          component: ListarRecheio
        },
        {
          name: "Listar Tamanho",
          path: "tamanho",
          component: ListarTamanho
        }
      ]
    },
    {
      path: "/editar",
      name: "Editar",
      component: Cadastro,
      children: [
        {
          path: "recheio/:id",
          name: "recheio",
          component: AddRecheio
        }
      ]      
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/consultar/cliente",
      name: "search",
      component: ConsultarCliente
    }
  ]
});
