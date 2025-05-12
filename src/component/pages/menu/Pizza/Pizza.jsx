import React from 'react';
import Title from "../../../Title";
import ProductsAll from "../ProductsAll/ProductsAll";
import {pizza} from "../../../../assets/BD/Pizza/Pizza";

const Pizza = () => {
    return (
        <div className={'container'}>
            <Title>Пицца</Title>
            <ProductsAll products={pizza}/>
        </div>
    );
};

export default Pizza;