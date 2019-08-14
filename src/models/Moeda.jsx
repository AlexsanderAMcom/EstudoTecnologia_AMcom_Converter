export default class Moeda {

    constructor(currencyName, currencySymbol, id){
        
        this._currencyName = currencyName;
        this._currencySymbol = currencySymbol;
        this._id = id;

        Object.freeze();
    }

    get currencyName(){
        return this._currencyName;
    }

    get currencySymbol(){
        return this._currencySymbol;
    }

    get id(){
        return this._id
    }

}