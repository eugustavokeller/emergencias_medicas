<template>
    <div>
        <div v-if="tipo == 'socorristas'">
            <select class="form-control form-control-sm" v-model="turno">
                <option value="">Todos</option>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
            </select>
        </div>
        <!-- enviando tipo e dados para o componente item que recebera via props -->
        <item class="mt-1"
            v-for="(item, indice) in itens"
            :key="indice"
            :dados="item"
            :tipo="tipo"
        />
        <hr>
        <div v-if="tipo == 'socorristas'">
            Socorristas no Turno: {{ totalSocorristasPorTurno(turno) }}
        </div>
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: 'ListaItens',
    components: { 
        Item
    },
    // Recebendo via props o TIPO
    props: {
        tipo: String
    },
    data: () => ({
        turno: ''
    }),
    computed: {
        ...mapState({
            enfermeiros: state => state.enfermeiros,
            medicos: state => state.medicos,
            carros: state => state.equipamentos.carros,
            telefones: state => state.equipamentos.telefones,
            kitsDeReanimacao: state => state.equipamentos.kitsDeReanimacao,
        }),
        ...mapGetters({
            socorristaPorTurno: 'socorristaPorTurno',
            totalSocorristasPorTurno: 'totalSocorristasPorTurno'
        }),
        /*
        ...mapGetters(['socorristaPorTurno', 'totalSocorristasPorTurno'])
        */

        itens() {
            switch(this.tipo) {
                case 'enfermeiros': return this.enfermeiros
                case 'socorristas': return this.socorristaPorTurno(this.turno)
                case 'medicos': return this.medicos
                case 'carros': return this.carros
                case 'telefones': return this.telefones
                case 'kits-de-reanimacao': return this.kitsDeReanimacao
            }
            return []
        }
    },
}
</script>