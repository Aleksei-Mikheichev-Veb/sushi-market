import React from 'react';
import Title from "../../../Title";
import CategoriesProduct from "../СategoriesProduct/CategoriesProduct";
import ProductsAll from "../ProductsAll/ProductsAll";
import {hotDishes} from "../../../../assets/BD/HotDishes/hotDishes";

const HotDishes = () => {
    return (
        <div className={'container'}>
            <Title>Горячие блюда</Title>
            <ProductsAll products={hotDishes}/>
        </div>
    );
};

export default HotDishes;