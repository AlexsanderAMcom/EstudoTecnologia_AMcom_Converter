import Axios from "axios";
import ListMoeda from "../models/ListMoeda";
import Moeda from "../models/Moeda";

export default class MoedaService {

    constructor() {

        this.ListaMoeda = new ListMoeda();
        this.ApiKey = "a9764fa1f098438abf4e";
        this.UrlBase = "https://free.currconv.com/api/v7/";
        this.valorConvertido = 0.00;
    }

    getMoedasList = async () => {

        const coins = localStorage.getItem("coins");

        if (coins) {

            let lista = JSON.parse(coins).ListMoeda;

            lista.forEach(element => {
                var moeda = new Moeda(element._currencyName, element._currencySymbol, element._id);

                this.ListaMoeda.setLista(moeda);
            });

        } else {

            await Axios.get(`${this.UrlBase}currencies?apiKey=${this.ApiKey}`)
                .then(res => this._MontaArrayMoedas(res.data.results))
                .then(res => this.ListaMoeda = res)
                .catch(error => console.error(error));

        }

        return this.ListaMoeda ? this.ListaMoeda : [];
    }

    realizaConvercao = async (moedaA, moedaB, valorAConverter) => await this._getConvercao(moedaA, moedaB, valorAConverter);

    _getConvercao = async (moedaA, moedaB, valorAConverter) => {

        const convercao = `${moedaA}_${moedaB}`;

        if (localStorage.getItem(convercao)) {

            this.valorConvertido = this._converter(localStorage.getItem(convercao), valorAConverter);

        } else {

            await Axios.get(`${this.UrlBase}convert?q=${convercao}&compact=ultra&apiKey=${this.ApiKey}`)
                .then(res => {

                    this._SalvaConvercaoLocalStorage(res.data, convercao);

                    this.valorConvertido = this._converter(res.data[convercao], valorAConverter);

                })
                .catch(error => console.error(error));

        }

        return this.valorConvertido;
    }

    _converter = (valor, valorAConverter) => {

        let convertido = valor * valorAConverter;

        return convertido;
    }

    _SalvaConvercaoLocalStorage = (result, convercao) => localStorage.setItem(convercao, result[convercao]);

    _MontaArrayMoedas = (result) => {
        let Moedas = Object.keys(result);

        Moedas = Moedas.sort();

        Moedas.forEach(stringMoeda => {
            let m = result[stringMoeda];

            let objMoeda = new Moeda(m.currencyName, m.currencySymbol, m.id);

            this.ListaMoeda.setLista(objMoeda);
        });

        localStorage.setItem("coins", JSON.stringify(this.ListaMoeda));
    }

}