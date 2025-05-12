import React from 'react';
import Title from "../../Title";
import style from './AboutUs.module.css'
import roll from './../../../image/common/about.webp'
import Pickup from "../../Quiz/Pickup";

const AboutUs = () => {
    return (
        <div className={'container'}>
            <Title>О нас</Title>
            <div className={style.aboutUs}>
                <div className={style.text}>
                    <div className={style.text_item}>Служба доставки «Суши yes» сохраняет все традиционные правила японской кухни, использует классические карты производства, качественное сырье и квалифицированный персонал.</div>
                    <div className={style.text_item}>Ежедневно наша команда от всей души работает для своих дорогих клиентов, администраторы обеспечивают высокий сервис, повара стараются над приготовлением наших больших и вкуснейших роллов, курьеры радуют вас быстрой и аккуратной доставкой.</div>
                    <div className={style.text_item}>Все это позволяет достичь нам высокого уровня качества продукции, а 2 филиала позволяют избежать высоких издержек.</div>
                    <div className={style.text_item}>«Суши yes» - это всегда большие, свежие, экологически чистые и здоровые блюда японской кухни!</div>
                    <div className={style.text_item}>Готовим суши и роллы для Вас с 2018 года!</div>
                </div>
                <div className={style.aboutUs_image}>
                    <img src={roll} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;