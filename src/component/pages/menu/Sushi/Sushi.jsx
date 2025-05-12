import React from 'react';
import Title from "../../../Title";
import ProductsAll from "../ProductsAll/ProductsAll";
import {sushi} from './../../../../assets/BD/Sushi/Sushi'

const Sushi = () => {
    return (
        <div className={'container'}>
            <Title>Суши</Title>
            <ProductsAll products={sushi}/>
        </div>
    );
};

export default Sushi;