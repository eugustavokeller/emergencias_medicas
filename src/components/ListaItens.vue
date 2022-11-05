<template>
    <div>
        <!-- <table class="table mt-4">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOME</th>
                    <th scope="col">ESCALA</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(i, chave) in itens" :key="chave">
                    <td>{{ i.id }}</td>
                    <td>{{ i.nome }}</td>
                    <td>{{ i.escala }}</td>
                </tr>    
            </tbody>
        </table>
        <br> -->
        <item 
            v-for="(item, indice) in itens"
            :key="indice"
            :dados="item"
        />
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import { mapState } from 'vuex';

export default {
    name: 'ListaItens',
    components: { 
        Item
    },
    props: {
        tipo: String
    },
    computed: {
        ...mapState({
            enfermeiros: state => state.enfermeiros,
            socorristas: state => state.socorristas,
            medicos: state => state.medicos,
        }),
        itens() {
            switch(this.tipo) {
                case 'enfermeiros': return this.enfermeiros
                case 'socorristas': return this.socorristas
                case 'medicos': return this.medicos
            }
            return []
        }
    }
}
</script>