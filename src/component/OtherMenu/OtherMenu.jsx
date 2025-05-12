import React from 'react';
import style from './OtherMenu.module.css';
import {NavLink} from "react-router-dom";
import {ReactComponent as Basket} from "./../../image/icon/basket.svg";
import {ReactComponent as Search} from "./../../image/icon/lupa.svg";
import {useSelector} from "react-redux";


const OtherMenu = () => {
    const basket = useSelector(state => state.basket);
    return (
        <div className={style.otherMenu}>
            <div className={style.otherMenu_iconBox}>
                <NavLink to={'/search'}>
                    <Search/>
                </NavLink>
            </div>
            <div className={style.otherMenu_iconBox}>
                <NavLink to={'/basket'}>
                    <Basket/>
                </NavLink>
                {basket.productInBasket.length > 0 && <div className={style.otherMenu_countProducts}>{basket.countProductsInBasket}</div>}
            </div>
        </div>
    );
};

export default OtherMenu;