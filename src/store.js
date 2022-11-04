import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        titulo: 'Emergências Médicas',
        equipe: {
            enfermeiro: 'Nome do enfermeiro',
            socorrista: 'Nome do socorrista',
            medico: 'Nome do medico',
            carro: 'AAA-1111',
            telefone: '11 00000-0000',
            kit_reanimacao: 'Kit 001',
        }
    }
})