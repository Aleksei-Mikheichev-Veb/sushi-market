import React, {useState} from 'react';
import Title from "../../../Title";
import style from './Basket.module.css'
import ProductBasket from "./ProductBasket";
import {ReactComponent as Rubl} from './../../../../image/icon/rubl.svg'
import { useSelector} from "react-redux";
import MyButton from "../../../UI/MyButton/MyButton";
import Quiz from "../../../Quiz/Quiz";

const Basket = () => {
    const basket = useSelector(state => state.basket);
    const [quizActive, setQuizActive] = useState(false)

    return (
        <div className={'container'}>
            <Title>Корзина</Title>
            <div className={style.basketContent}>
                {basket.productInBasket.length > 0 ? <div className={style.subtitle}>Ваш заказ</div> : <div className={style.subtitle}>Ваша корзина пуста</div>}
                {basket.productInBasket.map((product, index) => (
                    <ProductBasket key={index} product={product}/>
                ))}
                {basket.productInBasket.length > 0 && <div className={style.totalSum}>Итого:   <div>{basket.totalPrice}</div><Rubl/> </div>}
                {basket.productInBasket.length > 0 && <MyButton onClick={() => setQuizActive(true)}  mode={'buttonWithBorder'}>Продолжить</MyButton>}
            </div>
            {quizActive && <Quiz setQuizActive={setQuizActive} />}

        </div>
    );
};

export default Basket;