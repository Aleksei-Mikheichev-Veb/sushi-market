import React from 'react';
import Title from "../../Title";
import style from './Promotion.module.css'
import birthday from './../../../image/promotions/birthday.webp'
import dostavka from './../../../image/promotions/dostavka.webp'


const Promotion = () => {
    return (
        <div className={'container'}>
            <Title>Акции</Title>
            <div className={style.promotion}>
                <div className={style.promotion_image}>
                    <img src={birthday} className={style.promotion_img}/>
                </div>
                <h2 className={style.promotion_title}>ОТМЕЧАЕТЕ ДЕНЬ РОЖДЕНИЯ?</h2>
                <div className={style.promotion_text}>
                    МЫ С ВАМИ! Дарим вам скидку 15% два дня ДО, в день и два дня ПОСЛЕ!
                </div>
                <div className={style.promotion_text}>
                    *скидка не распространяется на сеты и напитки.
                </div>
                <div className={style.promotion_text}>
                    *при получении заказа необходимо показать паспорт.
                </div>
                <div className={style.promotion_text}>
                    *cкидки и акции не суммируются.
                </div>

            </div>

            <div className={style.promotion}>
                <div className={style.promotion_image}>
                    <img src={dostavka} className={style.promotion_img}/>
                </div>
                <h2 className={style.promotion_title}>Бесплатная доставка при заказе от 750 рублей</h2>
                <div className={style.promotion_text}></div>
            </div>
        </div>
    );
};

export default Promotion;