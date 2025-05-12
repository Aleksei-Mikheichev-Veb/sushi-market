import React, {useEffect} from 'react';
import {ReactComponent as Smile} from "./../../image/icon/smile.svg";
import style from './Quiz.module.css';
import {useDispatch} from "react-redux";
import {clearQuiz, setStep} from "../../Redux/quizReducer";
import {clearBasket} from "../../Redux/baskerReducer";

const ThankYou = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(setStep(0))
            dispatch(clearBasket())
            dispatch(clearQuiz())
        }
    }, []);

    return (
        <div className={style.thankYou}>
            <div className={style.thankYou_iconBox}><Smile className={style.thankYou_icon}/></div>
            <div className={style.thanYou_title}>СПАСИБО</div>
            <div className={style.thankYou_text}>Ваш заказ успешно оформлен. Мы свяжемся c Вами в ближайшее время.</div>
        </div>
    );
};

export default ThankYou;