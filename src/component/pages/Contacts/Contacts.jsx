import React from 'react';
import Title from "../../Title";
import style from './Contacts.module.css'
import {ReactComponent as Vkontakte} from './../../../image/icon/vk.svg'
import {ReactComponent as Instagram} from './../../../image/icon/instagram.svg'
import {Map, Placemark} from "@pbe/react-yandex-maps";


const Contacts = () => {
    return (
        <div className={'container'}>
            <Title>Контакты</Title>
            <div className={style.contacts_row}>
                <div className={style.contacts_box}>
                    <div className={style.contacts_text}>У нас есть 2 точки самовывоза — ваш заказ готовится на ближайшей к вашему адресу, чтобы максимально сократить время доставки.</div>
                    <div className={style.contacts_text}>Если у Вас есть вопросы по заказу — позвоните на ближайшую к Вам точку. Если сомневаетесь, по какому номеру звонить — звоните на первый, там со всем помогут :)</div>
                </div>
                <div className={style.timetable}>
                    <div className={style.subtitle}>РЕЖИМ РАБОТЫ</div>
                    <div className={style.timetable_item}>ТРЦ «Авокадо» с 10:00 до 22:00</div>
                    <div className={style.timetable_item}>ТЦ «Паново» с 10:00 до 21:00</div>
                    <div className={style.socials}>
                        <a href="https://vk.com/sushiyes44"><Vkontakte className={style.socialIcon}/></a>
                        <a href="https://instagram.com/sushi.yes?igshid=YmMyMTA2M2Y="><Instagram className={style.socialIcon}/></a>
                    </div>
                </div>

            </div>
            <div className={style.contacts_card}>
                <div className={style.contacts_body}>
                    <div className={style.subtitle + ' ' + style.subtitle_map}>ПУНКТ САМОВЫВОЗА В ДАВЫДОВСКОМ</div>
                    <div className={style.contacts_address}>г.Кострома м/р-н 3-ий Давыдовский д.32 ТЦ "Авокадо"</div>
                    <div className={style.contacts_phone}><a href="tel:+79051519191">+7-905-151-91-91</a></div>
                </div>
                <div className={style.contacts_map}>
                    <Map defaultState={{ center: [57.741170, 41.004823], zoom: 15 }} className={style.map}>
                        <Placemark defaultGeometry={[57.741170, 41.004823]} />
                    </Map>
                </div>
            </div>
            <div className={style.contacts_card}>
                <div className={style.contacts_body}>
                    <div className={style.subtitle + ' ' + style.subtitle_map}>ПУНКТ САМОВЫВОЗА В ПАНОВО</div>
                    <div className={style.contacts_address}>г.Кострома м/р-н Паново д.15 ТЦ "Паново"</div>
                    <div className={style.contacts_phone}><a href="tel:+74942-501101">+7(4942) 501-101</a></div>
                </div>
                <div className={style.contacts_map}>
                    <Map defaultState={{ center: [57.736203, 40.908649], zoom: 15 }} className={style.map}>
                        <Placemark defaultGeometry={[57.736203, 40.908649]} />
                    </Map>
                </div>
            </div>
        </div>
    );
};

export default Contacts;