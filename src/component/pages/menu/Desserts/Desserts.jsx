import React from 'react';
import Title from "../../../Title";
import ProductsAll from "../ProductsAll/ProductsAll";
import {deserts} from "../../../../assets/BD/Desserts/Deserts";

const Desserts = () => {
    return (
        <div className={'container'}>
            <Title>Десерты</Title>
            <ProductsAll products={deserts}/>
        </div>
    );
};

export default Desserts;