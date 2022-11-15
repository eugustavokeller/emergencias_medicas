<template>
    <div>
        <div class="row">
            <div class="col-1" v-if="dados.id" v-text="dados.id"></div>
            <div class="col" v-if="dados.nome" v-text="dados.nome"></div>
            <div class="col" v-if="dados.placa" v-text="dados.placa"></div>
            <div class="col" v-if="dados.telefone" v-text="dados.telefone"></div>
            <div class="col" v-if="dados.kit" v-text="dados.kit"></div>
            <div class="col-2" v-if="dados.escala" v-text="dados.escala"></div>
            <div class="col-2" v-if="dados.turno" v-text="dados.turno"></div>
            <div class="col-1">
                <i
                    class="bi-check2-square" 
                    style="cursor: pointer"
                    @click="adicionarItemEquipe"
                ></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Item',
    props: {
        // Recebendo via props DADOS e TIPO
        dados: Object,
        tipo: String
    },
    methods: {
        // ...mapMutations(['setItemEquipe']), Notaçao de array
        ...mapMutations({ // Notaçao de objeto
            setItemEquipe: 'setItemEquipe'
        }),
        adicionarItemEquipe() {
            let item = {
                tipo: this.tipo,
                dados: this.dados
            }
            // this.$store.commit('setItemEquipe', item)  **Notacao normal**
            
            /*this.$store.commit({ // Notação de Objeto
                type: 'setItemEquipe',
                item // sem chave e valor o JS identifica o nome sendo a chave e também o valor, Ex: item: item
            })
            */

            // this.$store.commit({ // Enviando vários parametros para serem recuperados como payload nas mutations...
            //     type: 'setItemEquipe',
            //     item,
            //     abc: 'ABC',
            //     numero: 7.7,
            //     xyz: true
            // })
            this.setItemEquipe(item)
        },
        adicionarItemEquipeAbordagemIncorreta() {
            // abordagem incorreta
            let t = this.tipo
            let d = this.dados

            t == 'enfermeiros' ? this.$store.state.equipe.enfermeiro = d.nome : null
            t == 'socorristas' ? this.$store.state.equipe.enfermeiro = d.nome : null
            t == 'medicos' ? this.$store.state.equipe.enfermeiro = d.nome : null
            t == 'carros' ? this.$store.state.equipe.enfermeiro = d.nome : null
            t == 'telefones' ? this.$store.state.equipe.enfermeiro = d.nome : null
            t == 'kit_reanimacao' ? this.$store.state.equipe.kitsDeReanimacao = d.kit : null
        }
    }
}
</script>