import React from 'react';
import Title from "../../Title";
import style from './Delivery.module.css'
import {ReactComponent as Card} from './../../../image/icon/credit.svg'
import {ReactComponent as DeliveryIcon} from './../../../image/icon/delivery.svg'
import {ReactComponent as Time} from './../../../image/icon/time.svg'
import {ReactComponent as Ecology} from './../../../image/icon/ecology.svg'


const Delivery = () => {
    return (
        <div className={'container'}>
            <Title>Доставка </Title>
            <div className={style.delivery}>
                <div className={style.delivery_icons + ' '+  style.icons}>
                    <div className={style.icons_body}>
                        <div className={style.icons_icon}><DeliveryIcon className={style.delivery_icon}/></div>
                        <div className={style.icons_text}>Бесплатная доставка от 750 рублей</div>
                    </div>
                    <div className={style.icons_body}>
                        <div className={style.icons_icon}><Time className={style.delivery_icon}/></div>
                        <div className={style.icons_text}>Время доставки от 60 минут</div>
                    </div>
                    <div className={style.icons_body}>
                        <div className={style.icons_icon}><Card className={style.delivery_icon}/></div>
                        <div className={style.icons_text}>Наличный и безналичный расчет курьеру</div>
                    </div>
                    <div className={style.icons_body}>
                        <div className={style.icons_icon}><Ecology className={style.delivery_icon}/></div>
                        <div className={style.icons_text}>Готовим из свежих ингредиентов</div>
                    </div>
                </div>
                <div className={style.delivery_subtitle}>Условия доставки</div>
                <ul className={style.delivery_list}>
                    <li className={style.delivery_item}>Бесплатная доставка от 500 руб. Стоимость услуги доставки при заказе менее 750 руб. - 100 руб.</li>
                    <li className={style.delivery_item}>Время доставки 60-90 минут.</li>
                    <li className={style.delivery_item}>Наличный и безналичный расчёт курьеру при получении заказа.</li>
                    <li className={style.delivery_item}>Зона доставки в черте города- осуществляем доставку в п.Караваево и д.Каримово (остальные зоны доставки можно уточнить по телефону).</li>
                    <li className={style.delivery_item}>Возможен предзаказ на наиболее удобное для Вас время.</li>
                    <li className={style.delivery_item}>Самовывоз заказа( время ожидания от 10 минут) или сообщите в какое время Вас ожидать и заказ будет готов.</li>
                    <li className={style.delivery_item}>Заказы НЕ принимаются в социальных сетях (вконтакте,Instagram), ответы на интересующие вопросы вы можете получить у администраторов группы.</li>
                    <li className={style.delivery_item}>Прием заказов ежедневно:<br/>
                        ТРЦ «Авокадо» с 10:00 до 22:00<br/>
                        ТЦ «Паново» с 10:00 до 21:00<br/>
                        (приём заказов на доставку заканчивается за 30 минут до закрытия ТТ,в это время доступен только самовывоз).</li>
                </ul>
            </div>
        </div>
    );
};

export default Delivery;