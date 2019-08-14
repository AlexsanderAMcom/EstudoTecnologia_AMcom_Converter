import React, { Component } from 'react';
import { connect } from 'react-redux';

 class SelectMoedas extends Component {

    render() {

        let className = this.props.className;

        return (
            <select className={`form-control ${className}`} value={this.props.value} onChange={this.props.onChange}>
                <option value="">Escolha uma moeda</option>
                {                    
                    this.props.listaMoedas.getLista().map(moeda => {
                        return <option key={moeda.id} value={moeda.id}>{`${moeda.id} - ${moeda.currencyName}`}</option>
                    })
                }
            </select>
        );
    }
}

const mapStateToProps = store => ({
    listaMoedas: store.conversorState.listaMoedas
});

export default connect(mapStateToProps)(SelectMoedas)