import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getLista, setMoedaA, setMoedaB, setAConverter, trocarMoedas, convert } from '../actions/Actions';
import SelectMoedas from '../components/selectMoedas/SelectMoedas';
import './Conversor.css';

class Conversor extends Component {

    componentDidMount() {
        this.props.getLista();
    }

    render() {
        return (
            <div className="row col-md-12 d-flex justify-content-center">
                <div className="card-body col-md-10">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body conversor form-inline m-b-0 p-b-0">
                                <div className="form-group col-md-5">
                                    <SelectMoedas className="col-md-12" listaMoedas={this.props.listaMoedas} value={this.props.moedaA} onChange={this.props.setMoedaA} />
                                </div>
                                <div className="form-group col-md-2 d-flex justify-content-center">
                                    <button id="btn-converter" onClick={this.props.trocarMoedas} className="btn btn-primary fa fa-exchange"></button>
                                </div>
                                <div className="form-group col-md-5">
                                    <SelectMoedas className="col-md-12" listaMoedas={this.props.listaMoedas} value={this.props.moedaB} onChange={this.props.setMoedaB} />
                                </div>
                            </div>
                            <div className="card-body conversor form-inline">
                                <div className="form-group col-md-5">
                                    <input className="form-control col-md-12" type="number" value={this.props.aConverter} onChange={this.props.setAConverter} />
                                </div>
                                <div className="form-group col-md-2 d-flex justify-content-center">
                                    <button type="submit" onClick={e => this.props.convert(this.props.moedaA, this.props.moedaB, this.props.aConverter)} className="btn btn-primary">Converter</button>
                                </div>
                                <div className="form-group col-md-5">
                                    <input readOnly className="form-control col-md-12" type="text" value={this.props.Convertido} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    aConverter: store.conversorState.aConverter,
    Convertido: store.conversorState.Convertido,
    moedaA: store.conversorState.moedaA,
    moedaB: store.conversorState.moedaB,
    listaMoedas: store.conversorState.listaMoedas,
    service: store.conversorState.service
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getLista,
    setMoedaA,
    setMoedaB,
    setAConverter,
    trocarMoedas,
    convert
},
    dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conversor)