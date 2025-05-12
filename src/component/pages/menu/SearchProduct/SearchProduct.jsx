import React, {useEffect, useState} from 'react';
import './SearchProduct.css'
import Title from "../../../Title";
import MyInput from "../../../UI/MyInput/MyInput";
import ProductsAll from "../ProductsAll/ProductsAll";
import {useSearchProduct} from "../../../../myHook/useSearchProduct";
import {allProducts} from "../../../../assets/BD/All/AllProducts";

const SearchProduct = () => {
    const [productAll, setProductAll] = useState( allProducts);
    // Значение инпута
    const [value, setValue] = useState('')
    // Массив из товаров подходящих под поиск
    const searchedProducts = useSearchProduct(value, productAll)
    debugger;
    return (
        <div className={'container searchProduct'}>
            <Title>Поиск по меню</Title>
            <div className="searchProduct_search">
                <div className="searchProduct_input">
                    <MyInput placeholder={'Что будем искать?'} onChange={e => setValue(e.target.value)}/>
                </div>
            </div>
            <div className="searchedProduct">
                {(searchedProducts.length > 0) ? <ProductsAll products={searchedProducts}/> : <div className={'enterSearch'}>Введите запрос</div>}
            </div>
        </div>
    );
};

export default SearchProduct;