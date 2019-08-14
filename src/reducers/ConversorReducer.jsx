import Service from '../services/MoedaService';
import ListMoeda from '../models/ListMoeda';


const initialState = {
    aConverter: 0,
    Convertido: 0,
    moedaA: "",
    moedaB: "",
    listaMoedas: new ListMoeda(),
    service: new Service()
};

export const conversorReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_LISTA_COMPLETE':
            return { ...state, listaMoedas: action.payload };
        case 'SET_MOEDA_A':
            return { ...state, moedaA: action.payload };
        case 'SET_MOEDA_B':
            return { ...state, moedaB: action.payload };
        case 'SET_A_CONVERTER':
            return { ...state, aConverter: action.payload };
        case 'TROCAR_MOEDAS':
            return { ...state, moedaA: state.moedaB, moedaB: state.moedaA };
        case 'CONVERT_COMPLETE':
            return { ...state, Convertido: action.payload };
        default:
            return state;
    }

};