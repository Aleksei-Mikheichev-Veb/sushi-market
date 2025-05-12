import React, {useState} from 'react';
import style from './HeaderCommon.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../../image/logo.jpg'
import {ReactComponent as Phone} from '../../../image/icon/phone.svg'
import {ReactComponent as Vkontakte} from "../../../image/icon/vk.svg";
import {ReactComponent as Instagram} from "../../../image/icon/instagram.svg";

const HeaderCommon = () => {
    const [burgerActive, setBurgerActive] = useState(false);
    return (
        <div className={style.container}>
            <div className={style.headerLeft}>
                <div>
                    <NavLink to={'/home'} className={style.logoBox}>
                        <img src={logo} alt="Логотип" className={style.logo}/>
                    </NavLink>
                </div>
                <div className={style.addressBox}>
                    <div className={style.addresses}>
                        <div className={style.address}><span className={style.bold}>ТРЦ "Авокадо"</span>: с 10-00 до
                            22-00
                        </div>
                        <div className={style.address}><span className={style.bold}>ТЦ "Паново"</span>: с 10-00 до 22-00
                        </div>
                    </div>
                    <div className={style.phoneBox}>
                        <div className={style.phoneIconBox}>
                            <Phone className={style.phoneIcon}/>
                        </div>
                        <div className={style.phoneLinks}>
                            <div><a href='tel:+79051519191' className={style.phoneLink}>+7-905-151-91-91</a></div>
                            <div><a href='tel:+7(4942)501101)' className={style.phoneLink}>+7 (4942) 501-101</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={style.headerCommon_nav}>
                <ul>
                    <NavLink to={'/promotion'} className={style.link}>Акции</NavLink>
                    <NavLink to={'/delivery'} className={style.link}>Доставка и оплата</NavLink>
                    <NavLink to={'/contacts'} className={style.link}>Контакты</NavLink>
                    <NavLink to={'/aboutUs'} className={style.link}>О нас</NavLink>
                    {/*<NavLink to={'/login'} className={style.link}>Вход</NavLink>*/}
                </ul>
                <div className={style.socials}>
                    <a href="https://vk.com/sushiyes44"><Vkontakte className={style.socialIcon}/></a>
                    <a href="https://instagram.com/sushi.yes?igshid=YmMyMTA2M2Y="><Instagram className={style.socialIcon}/></a>
                </div>
            </nav>
            <div className={burgerActive ? style.burger_btn + ' ' + style.active : style.burger_btn} onClick={() => setBurgerActive(!burgerActive)}>
                <span></span>
            </div>
            <div className={burgerActive ? style.navMobile + ' ' + style.active : style.navMobile}>
                <div className={style.navMobileBox}>
                    <div className={style.navMobile_title}>МЕНЮ СУШИ YES</div>
                    <nav>
                        <ul className={style.navMobile_list}>
                            <li className={style.navMobile_item}>
                                <NavLink className={style.navMobile_link} to={'/rolls'} onClick={() => setBurgerActive(false)} >Роллы</NavLink>
                            </li>
                            <li className={style.navMobile_item}>
                                <NavLink className={style.navMobile_link} onClick={() => setBurgerActive(false)} to={'/sushi'}>Суши</NavLink>
                            </li>
                            <li className={style.navMobile_item}>
                                <NavLink className={style.navMobile_link} onClick={() => setBurgerActive(false)} to={'/desserts'}>Десерты</NavLink>
                            </li>
                            <li className={style.navMobile_item}>
                                <NavLink className={style.navMobile_link} onClick={() => setBurgerActive(false)} to={'/sets'}>Сеты</NavLink>
                            </li>
                            <li className={style.navMobile_item}>
                                <NavLink className={style.navMobile_link} onClick={() => setBurgerActive(false)} to={'/pizza'}>Пицца</NavLink>
                            </li>
                            <li className={style.navMobile_item}>
                                <NavLink className={style.navMobile_link} onClick={() => setBurgerActive(false)} to={'/wok'}>Wok</NavLink>
                            </li>
                            <li className={style.navMobile_item}>
                                <NavLink className={style.navMobile_link} onClick={() => setBurgerActive(false)} to={'/drinks'}>Напитки</NavLink>
                            </li>
                            <li className={style.navMobile_item}>
                                <NavLink className={style.navMobile_link} onClick={() => setBurgerActive(false)} to={'/salads'}>Салаты</NavLink>
                            </li>
                            <li className={style.navMobile_item}>
                                <NavLink className={style.navMobile_link} onClick={() => setBurgerActive(false)} to={'/hotDishes'}>Горячие блюда</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={style.navMobileBox}>
                    <div className={style.navMobile_title}>СЛУЖБА ДОСТАВКИ</div>
                    <nav>
                        <ul className={style.navMobile_list}>
                            <li className={style.navMobile_item}>
                                <NavLink to={'/promotion'} onClick={() => setBurgerActive(false)} className={style.navMobile_link} >Акции</NavLink>
                            </li>
                            <li className={style.navMobile_item}>
                                <NavLink to={'/delivery'} onClick={() => setBurgerActive(false)} className={style.navMobile_link} >Доставка и оплата</NavLink>
                            </li>
                            <li className={style.navMobile_item}>
                                <NavLink to={'/contacts'} onClick={() => setBurgerActive(false)} className={style.navMobile_link} >Контакты</NavLink>
                            </li>
                            <li className={style.navMobile_item}>
                                <NavLink to={'/aboutUs'} onClick={() => setBurgerActive(false)} className={style.navMobile_link} >О нас</NavLink>
                            </li>
                            <li className={style.navMobile_item}>
                                <NavLink to={'/login'} onClick={() => setBurgerActive(false)} className={style.navMobile_link} >Вход</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default HeaderCommon;