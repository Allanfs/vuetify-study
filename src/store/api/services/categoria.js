import { http } from '../config.js'

const servico = 'categoria'

const buscaPorNome = `${servico}/nome`

export default {

    /**
     * Lista todos os recheios cadastrados
     */
    listar: () => {
        return http.get(servico)
    },
    
    /**
     * Busca um recheio pelo nome cadastrado
     */
    buscarPorNome: (nome) => {
        return http.get(`${buscaPorNome}/${nome}`)
    },
    salvar: (obj) => {
        return http.post(servico, obj)
    },
    excluir: (obj) => {
        return http.delete(`${servico}/${obj.id}`, obj)
    }
}