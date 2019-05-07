import recheioDao from "../../store/api/services/recheio.js";
import { ALERTAR } from './mutations'

const state = {}

const getters = {}

const actions = {

  salvar(state, valor) {

    recheioDao.salvar(valor).then(response => {
     
      state.commit(
        ALERTAR,    // a mutation que será executada
        null,
        { root: true })   // se a mutations é a root ou não
      
    }).catch( error => {

      state.commit(
        ALERTAR,    // a mutation que será executada
        { type: 'error', visivel: true, mensagem: 'Ocorreu um erro' },   // o valor que é passado para a mutations
        { root: true })   // se a mutations é a root ou não

    });

  }

}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
};