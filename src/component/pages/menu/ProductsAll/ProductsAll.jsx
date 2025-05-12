import React, {useEffect, useMemo, useState} from 'react';
import style from './ProductsAll.module.css'
import ProductCard from "../ProductCard/ProductCard";

const ProductsAll = ({products}) => {

    return (
        <div className={style.productAll}>
            {products.map( product => {
                return <ProductCard key={product.id ? product.id : product.currentVariant } product={product}/>
            })}
        </div>

    );
};

export default ProductsAll;