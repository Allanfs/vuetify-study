<template>
  <v-list two-line subheader>
    <v-list-group>
      <template v-slot:activator>
        <v-subheader>Tamanhos</v-subheader>
      </template>
      <v-radio-group v-model="tamanho">
        <v-list-tile v-for="tamanhoIt in tamanhos" :key="tamanhoIt.id">
          <v-list-tile-action>
            <v-radio :value="tamanhoIt" @change="$emit('input', tamanhoIt)"></v-radio>
            <!-- selecionar o checkbox deve ser unico -->
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{tamanhoIt.nome}}</v-list-tile-title>
            <v-list-tile-sub-title v-text="subtituloTamanho(tamanhoIt)"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-radio-group>
    </v-list-group>
  </v-list>
</template>

<script>
import tamanhoDao from "../../store/api/services/tamanho.js";
import facade from '../../facade';
export default {
  name: "lista-tamanhos",
  data: () => ({
    tamanhos: [],
  }),
  computed: {
    tamanho: {
      get() {
        return facade.itemPedido.getTamanho()
      },
      set(novo) {
        facade.itemPedido.setTamanho(novo)
      }
    }
  },
  mounted() {
    // obter tamanhos cadastrados.
    tamanhoDao.listarTodos().then(({ data }) => (this.tamanhos = data));
  },
  methods: {
    subtituloTamanho({ numero_fatias, numero_max_sabores, preco }) {
      return `${this.frazeNoPlural(
        numero_fatias,
        "fatia",
        "fatias"
      )} - Até ${this.frazeNoPlural(
        numero_max_sabores,
        "sabor",
        "sabores"
      )} - A partir de R$ ${preco}`;
    },
    frazeNoPlural(valor, singular, plural) {
      return valor === 1 ? `${valor} ${singular}` : `${valor} ${plural}`;
    }
  }
};
</script>

