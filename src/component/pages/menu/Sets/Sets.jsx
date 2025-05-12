import React from 'react';
import Title from "../../../Title";
import ProductsAll from "../ProductsAll/ProductsAll";
import {sets} from './../../../../assets/BD/Sets/Sets';

const Sets = () => {
    return (
        <div className={'container'}>
            <Title>Сеты</Title>
            <ProductsAll products={sets}/>
        </div>
    );
};

export default Sets;