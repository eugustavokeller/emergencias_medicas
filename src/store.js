
import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        titulo: 'Emergências Médicas',
        equipe: {
            enfermeiro: '',
            socorrista: '',
            medico: '',
            carro: '',
            telefone: '',
            kit_reanimacao: '',
        },
        enfermeiros: [
            { id: 1, nome: 'João', escala: '12x36'},
            { id: 2, nome: 'Maria', escala: '12x36'},
            { id: 3, nome: 'Ana', escala: '24x48'},
            { id: 4, nome: 'José', escala: '24x48'},
            { id: 4, nome: 'Felipe', escala: '12x36'}
        ],
        socorristas: [
            { id: 1, nome: 'Marcos', turno: 'manha'},
            { id: 2, nome: 'Felipe', turno: 'tarde'},
            { id: 3, nome: 'Cláudia', turno: 'tarde'},
            { id: 4, nome: 'Michele', turno: 'noite'}
        ],
        medicos: [
            { id: 1, nome: 'André', escala: '12x36'},
            { id: 2, nome: 'Roberta', escala: '12x36'},
            { id: 3, nome: 'Carlos', escala: '24x48'},
            { id: 4, nome: 'Juliana', escala: '24x48'}
        ],
        equipamentos: {
            carros: [
                { id: 1, placa: 'ABC-0000' },
                { id: 2, placa: 'BRA-1A11' },
                { id: 3, placa: 'CBA-1111' },
                { id: 4, placa: 'ARB-2B22' }
            ],
            telefones: [
                { id: 1, telefone: '+55 (11) 98888-8888' },
                { id: 2, telefone: '+55 (11) 97777-7777' },
                { id: 3, telefone: '+55 (11) 96666-6666' },
                { id: 4, telefone: '+55 (11) 95555-5555' }
            ],
            kitsDeReanimacao: [
                { id: 1, kit: 'K0001' },
                { id: 2, kit: 'K0002' },
                { id: 3, kit: 'K0003' },
                { id: 4, kit: 'K0004' }
            ]
        }
    },
    getters: {
        totalEnfermeiros(state) {
            return state.enfermeiros.length
        },
        socorristaPorTurno(state) {
            return turno => !turno ? state.socorristas : state.socorristas.filter(s => s.turno === turno)
        },
        totalSocorristas: state => state.socorristas.length,
        totalSocorristasPorTurno: (state, getters) => turno => getters.socorristaPorTurno(turno).length

    },
    mutations: {
        setItemEquipe(state, item) { // Destructuring no JS pode extrair somente aquilo que precisa dentro de objeto que está sendo encaminhado...

            let t = item.tipo
            let d = item.dados

            if(t == 'enfermeiros') state.equipe.enfermeiro = d.nome
            if(t == 'socorristas') state.equipe.socorrista = d.nome
            if(t == 'medicos') state.equipe.medico = d.nome
            if(t == 'carros') state.equipe.carro = d.placa
            if(t == 'telefones') state.equipe.telefone = d.telefone
            if(t == 'kits-de-reanimacao') state.equipe.kit_reanimacao = d.kit
        },
        setEnfermeiros(state, payload) {
            state.enfermeiros = payload
        },
        setSocorristas(state, payload) {
            state.socorristas = payload
        },
        setMedicos(state, payload) {
            state.medicos = payload
        },
        setCarros(state, carros) {
            state.equipamentos.carros = carros
        },
        setTelefones(state, telefones) {
            state.equipamentos.telefones = telefones
        },
        setKitsDeReanimacao(state, kitsDeReanimacao) {
            state.equipamentos.kitsDeReanimacao = kitsDeReanimacao
        },
    },
    actions: {
        adicionarEquipamentos(context, { carros, kitsDeReanimacao, telefones }) {
            context.commit('setCarros', carros)
            // processamento assincrono
            context.commit('setTelefones', telefones)
            // processamento assincrono
            // diversas regras de negócio
            context.commit('setKitsDeReanimacao', kitsDeReanimacao)
            
        }
    }
})