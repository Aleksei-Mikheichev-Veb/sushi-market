import React from 'react';
import Title from "../../../Title";
import ProductsAll from "../ProductsAll/ProductsAll";
import {wok} from './../../../../assets/BD/Wok/Wok'

const Woks = () => {

    return (
        <div className={'container'}>
            <Title>Wok</Title>
            <ProductsAll products={wok}/>
        </div>
    );
};

export default Woks;