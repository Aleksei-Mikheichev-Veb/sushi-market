import React, {useState} from 'react';
import MyButton from "../../../UI/MyButton/MyButton";
import style from './CategoriesProduct.module.css'

const CategoriesProduct = ({currentCategoria, setCurrentCategoria}) => {
    const categories = [
        {categoria : 'Все Роллы'},
        {categoria : 'Фирменные'},
        {categoria : 'Горячие'},
        {categoria : 'Запеченые'},
        {categoria : 'Классические'},

    ]
    return (
        <div className={style.categoriesWrapper}>
            {categories.map((categoria, i) => {
                return <MyButton
                            onClick={ () => {
                                setCurrentCategoria(i)
                            }}
                            key={categoria.categoria}
                            mode={currentCategoria === i ? 'buttonTransparentActive' : 'buttonTransparent'}>
                                {categoria.categoria}
                        </MyButton>
            })}
        </div>
    );
};

export default CategoriesProduct;