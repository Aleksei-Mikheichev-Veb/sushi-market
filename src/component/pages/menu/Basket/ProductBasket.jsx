import React from 'react';
import style from './ProductBasket.module.css'
import MyButton from "../../../UI/MyButton/MyButton";
import {IoClose} from "react-icons/io5";
import {HiOutlineMinus, HiOutlinePlus} from "react-icons/hi";
import {ReactComponent as Rubl} from './../../../../image/icon/rubl.svg'
import {textTransform} from "../../../../utils/utils";
import {useDispatch,} from "react-redux";
import {
    addProductAC,
    deleteAC,
    remoteAC,
    setCountProductInBasket,
    setTotalPriceAC
} from "../../../../Redux/baskerReducer";

const ProductBasket = ({product}) => {
    const dispatch = useDispatch()

    const addProduct = (product) => {
        dispatch(addProductAC(product))
        dispatch(setTotalPriceAC())
        dispatch(setCountProductInBasket())
    }
    const removeProduct = (product) => {
        dispatch(remoteAC(product))
        dispatch(setTotalPriceAC())
        dispatch(setCountProductInBasket())
    }
    const deleteProduct = (product) => {
        dispatch(deleteAC(product))
        dispatch(setTotalPriceAC())
        dispatch(setCountProductInBasket())
    }

    const title = textTransform(product.title);
    return (
        <div className={style.productBasket}>
            <div className={style.productBasket_image}>
                <img src={product.img} className={style.productBasket_img}/>
            </div>
            <div className={style.productBasket_body}>
                <div className={style.productBasket_title}>{title}</div>
                <div className={style.productBasket_productControl}>
                    <div className={style.productBasket_countControl}>
                        <MyButton mode={'buttonCircle'} onClick={() => removeProduct(product)}>
                            <HiOutlineMinus/>
                        </MyButton>
                        <div>{product.count}</div>
                        <MyButton mode={'buttonCircle'} onClick={() => addProduct(product)}>
                            <HiOutlinePlus/>
                        </MyButton>
                    </div>
                    <div className={style.productBasket_price}>
                        {product.price * product.count} <Rubl className={style.rubl}/>
                    </div>
                    <MyButton onClick={() => {deleteProduct(product)}} mode={'buttonCircle buttonCircleClose'}>
                        <IoClose/>
                    </MyButton>
                </div>
            </div>

        </div>
    );
};

export default ProductBasket;