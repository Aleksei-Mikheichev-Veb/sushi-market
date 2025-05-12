import React, {useState} from 'react';
import Title from "../../../Title";
import '../../../../App.css'
import ProductsAll from "../ProductsAll/ProductsAll";
import CategoriesProduct from "../СategoriesProduct/CategoriesProduct";
import {rolls} from "../../../../assets/BD/Rolls/Rolls";
import {useFilterProduct} from "../../../../myHook/filterProduct";

const Rolls = () => {
    const [currentCategoria, setCurrentCategoria] = useState(0);
    const [rollsAll, setRolls] = useState( rolls)

    const filteredRolls = useFilterProduct(currentCategoria, rollsAll);
    return (
        <div className={'container'}>
            <Title>Роллы</Title>
            <CategoriesProduct currentCategoria={currentCategoria} setCurrentCategoria={setCurrentCategoria}/>
            <ProductsAll products={filteredRolls}/>
        </div>
    );
};

export default Rolls;