import UtilsArray from "../utils/UtilsArray";

export default class ListMoeda{

    constructor(){
        this.ListMoeda = [];
    }

    setLista = (moeda) => {
        this.ListMoeda.push(moeda);
    }

    getLista =() =>{
        return [].concat(this.ListMoeda).sort((a,b) => UtilsArray.compare("id",a,b));;
    }
}