import React from 'react';
import style from './Footer.module.css';
import {NavLink} from "react-router-dom";
import {ReactComponent as IconI} from './../../image/icon/iconI.svg';

const Footer = () => {
    return (
        <footer className={'container'}>
            <div className={style.footer}>
                <hr/>
                <div className={style.footer_top}>
                    <div className={style.footer_navigate}>
                        <div className={style.navigate_withMin}>
                            <nav className={style.footer_menu}>
                                <ul className={style.footer_list}>
                                    <li className={style.footer_item}><NavLink className={style.footer_link}
                                                                               to={'/rolls'}>Роллы</NavLink></li>
                                    <li className={style.footer_item}><NavLink className={style.footer_link}
                                                                               to={'/sushi'}>Суши</NavLink></li>
                                    <li className={style.footer_item}><NavLink className={style.footer_link}
                                                                               to={'/desserts'}>Десерты</NavLink></li>
                                    <li className={style.footer_item}><NavLink className={style.footer_link}
                                                                               to={'/sets'}>Сеты</NavLink></li>
                                    <li className={style.footer_item}><NavLink className={style.footer_link}
                                                                               to={'/pizza'}>Пицца</NavLink></li>
                                    <li className={style.footer_item}><NavLink className={style.footer_link}
                                                                               to={'/wok'}>Wok</NavLink></li>
                                    <li className={style.footer_item}><NavLink className={style.footer_link}
                                                                               to={'/drinks'}>Напитки</NavLink></li>
                                    <li className={style.footer_item}><NavLink className={style.footer_link}
                                                                               to={'/salads'}>Салаты</NavLink></li>
                                    <li className={style.footer_item}><NavLink className={style.footer_link}
                                                                               to={'/hotDishes'}>Горячие блюда</NavLink>
                                    </li>
                                    <li className={style.footer_item + ' ' + style.footer_item__promotion}><NavLink
                                        to={'/promotion'} className={style.footer_link}>Акции</NavLink></li>
                                    <li className={style.footer_item + ' ' + style.footer_item__promotion}><NavLink
                                        to={'/delivery'} className={style.footer_link}>Доставка и оплата</NavLink></li>
                                    <li className={style.footer_item + ' ' + style.footer_item__promotion}><NavLink
                                        to={'/contacts'} className={style.footer_link}>Контакты</NavLink></li>
                                    <li className={style.footer_item + ' ' + style.footer_item__promotion}><NavLink
                                        to={'/aboutUs'} className={style.footer_link}>О нас</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <nav className={style.footer_menu__promotion}>
                            <ul className={style.footer_list__promotion}>
                                <li className={style.footer_item}><NavLink to={'/promotion'}
                                                                           className={style.footer_link}>Акции</NavLink>
                                </li>
                                <li className={style.footer_item}><NavLink to={'/delivery'}
                                                                           className={style.footer_link}>Доставка и
                                    оплата</NavLink></li>
                                <li className={style.footer_item}><NavLink to={'/contacts'}
                                                                           className={style.footer_link}>Контакты</NavLink>
                                </li>
                                <li className={style.footer_item}><NavLink to={'/aboutUs'}
                                                                           className={style.footer_link}>О нас</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={style.footer_right}>
                        <div className={style.footer_subtitle}>ПУНКТЫ САМОВЫВОЗА</div>
                        <div className={style.footer_body}>
                            <div className={style.footer_address}>
                                г. Кострома м/р-н 3-ий Давыдовский д.32 ТЦ "Авокадо"
                            </div>
                            <a href="tel:+79051519191" className={style.footer_phone}>+7-905-151-91-91</a>
                        </div>
                        <div className={style.footer_body}>
                            <div className={style.footer_address}>
                                г. Кострома м/р-н Паново д.15 ТЦ "Паново"
                            </div>
                            <a href="tel:+74942501101" className={style.footer_phone}>+7(4942) 501-101</a>
                        </div>
                        <div className={style.footer_time}>
                            <IconI className={style.icon}/>
                            <p>Самовывоз через 10 мин.</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={style.footer_bottom}>
                    <div className={style.footer_bootom__text}>2022 © Суши Yes — доставка суши, роллов и wok в Костроме</div>
                    <div className={style.footer_bootom__text}>Разработка сайта: <a href="https://vk.com/id12102674">ITMIX</a></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;