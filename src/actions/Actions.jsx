import Service from '../services/MoedaService';

const service = new Service();

export const getLista = () => {

    return dispatch => {
        service.getMoedasList()
            .then(res => dispatch({
                type: "GET_LISTA_COMPLETE",
                payload: res
            }));
    };
};

export const setMoedaA = e => ({
    type: 'SET_MOEDA_A',
    payload: e.target.value
});

export const setMoedaB = e => ({
    type: 'SET_MOEDA_B',
    payload: e.target.value
});

export const setAConverter = e => ({
    type: 'SET_A_CONVERTER',
    payload: e.target.value
});

export const trocarMoedas = () => ({
    type: 'TROCAR_MOEDAS'
});

export const convert = (moedaA, moedaB, aConverter) => {

    return dispatch => {
        service.realizaConvercao(moedaA, moedaB, parseFloat(aConverter))
            .then(res => {
                dispatch({
                    type: "CONVERT_COMPLETE",
                    payload: res.toFixed(2)
                });
            });
    }
};

