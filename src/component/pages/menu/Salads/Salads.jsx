import React from 'react';
import Title from "../../../Title";
import ProductsAll from "../ProductsAll/ProductsAll";
import {salads} from "../../../../assets/BD/Salads/Salads";

const Salads = () => {
    return (
        <div className={'container'}>
            <Title>Салаты </Title>
            <ProductsAll products={salads}/>
        </div>
    );
};

export default Salads;