<template>
  <div>

    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{ $store.state.titulo }}</a>
      </div>
    </nav>

    <div class="container">

      <div class="row mt-5">
        <div class="col-6 p">
          <profissionais />
        </div>

        <div class="col-6">
          <equipamentos />
        </div>
      </div>

      <div class="row mt-5 mb-5 bg-light p-2">
        <div class="col">
          <configuracao-equipe />
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col">
          <equipes />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import ConfiguracaoEquipe from './ConfiguracaoEquipe.vue'
import Equipamentos from './Equipamentos.vue'
import Equipes from './Equipes.vue'
import Profissionais from './Profissionais.vue'

export default {
  components: {
    ConfiguracaoEquipe,
    Equipamentos,
    Equipes,
    Profissionais
  },
  name: 'Index',
  props: {
    msg: String
  },
  computed: {
    tituloCustomizado() {
      return `.: ${this.$store.state.titulo}`
    }
  },
  methods: {
    ...mapMutations([
      'setEnfermeiros',
      'setSocorristas',
      'setMedicos',
      'setCarros',
      'setTelefones',
      'setKitsDeReanimacao'
    ])
  },
  created() {
    fetch('http://localhost:3000/enfermeiros')
      .then(response => response.json())
      .then(dados => this.setEnfermeiros(dados))
    fetch('http://localhost:3000/socorristas')
      .then(response => response.json())
      .then(dados => this.setSocorristas(dados))
    fetch('http://localhost:3000/medicos')
      .then(response => response.json())
      .then(dados => this.setMedicos(dados))

    fetch('http://localhost:3000/equipamentos')
      .then(response => response.json())
      .then(dados => {
        this.$store.dispatch('adicionarEquipamentos', dados)
      })
    // fetch('http://localhost:3000/equipamentos')
    //   .then(response => response.json())
    //   .then(dados => {
    //     this.setCarros(dados),
    //     this.setTelefones(dados),
    //     this.setKitsDeReanimacao(dados)
    //   })
  }
}
</script>
