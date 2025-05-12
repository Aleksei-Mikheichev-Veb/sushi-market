import React, {useContext, useMemo, useState} from 'react';
import style from './ProductCard.module.css'
import MyButton from "../../../UI/MyButton/MyButton";
import {ReactComponent as Rubl} from "./../../../../image/icon/rubl.svg";
import {ReactComponent as Basket} from "./../../../../image/icon/basket.svg";
import {ReactComponent as Plus} from "./../../../../image/icon/plus.svg";
import MySelect from "../../../UI/MySelect/MySelect";
import {textTransform} from "../../../../utils/utils";
import {useDispatch, useSelector} from "react-redux";
import {addProductAC, setCountProductInBasket, setTotalPriceAC} from "../../../../Redux/baskerReducer";


const ProductCard = ({product}) => {
    const dispatch = useDispatch()

    const [currentProduct, setCurrentProduct] = useState(product)
    const [buttonClicked, setButtonClicked] = useState(false)

    const addProduct = (currentProduct) => {
        if(currentProduct.currentVariant){
            currentProduct.title = currentProduct.currentVariant.name;
            currentProduct.id = currentProduct.currentVariant.id;
            debugger
            dispatch(addProductAC(currentProduct ))
        }else{
            dispatch(addProductAC(currentProduct ))
        }

        dispatch(setTotalPriceAC())
        dispatch(setCountProductInBasket())
    }

    let transformStructure;
    if (product.structure) {
        transformStructure = textTransform(product.structure)
    }
    const transformTitle = textTransform(product.title)

    return (
        <div className={ style.productCard_column }>
            <div className={style.productCard}>
                <div className={style.imageBox}><img className={style.productImg} src={product.img} alt=""/></div>
                <div className={style.description_title}>{transformTitle}</div>
                <div className={style.description_structure}>{transformStructure}</div>
                <div className={style.selects}>
                    {product.variants && <MySelect
                        options={product.variants.options}
                        initialOption={product.variants.inicialOption}
                        setCurrentProduct={setCurrentProduct}
                        currentProduct={currentProduct}
                    />}
                    {product.variantsTwo && <MySelect
                        options={product.variantsTwo.options}
                        initialOption={product.variantsTwo.inicialOption}
                        setCurrentProduct={setCurrentProduct}
                        currentProduct={currentProduct}
                    />}
                </div>
                <div className={style.description_params}>
                    {product.countRolls && <div className={style.description_count}>{product.countRolls} шт.</div>}
                    {product.weight && <div className={style.description_weight}>{product.weight} г.</div>}
                    {product.kCal && <div className={style.description_kCal}>{product.kCal} кКал</div>}
                </div>
                <div className={style.description_description}>
                    <div className={style.description_price}>
                        {/*Проверяем есть ли currentVariant(он есть только у продуктовс селектами.),если да то ценуберем оттуда,*/}
                        {/*если нет то цену из продукта*/}
                        {currentProduct.currentVariant ? currentProduct.currentVariant.price : currentProduct.price}
                        <Rubl className={style.rublIcon}/>
                    </div>
                    <MyButton mode={'buttonBig'}
                              onClick={() => {
                                  addProduct(currentProduct)
                                  setButtonClicked(true)
                              }}>
                        {/*Если кликнуто то покажем "ЕЩЕ", если нет то меняющиеся иконки */}
                        {buttonClicked
                            ? <div className={'buttonClicked'}>ЕЩЕ</div>
                            : <div>
                                <Basket className={'basketIcon'}/>
                                <Plus className={'plusIcon'}/>
                            </div>}
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;