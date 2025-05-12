import React from 'react';
import {NavLink} from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";
import {ReactComponent as Search} from "./../../../image/icon/lupa.svg";
import {ReactComponent as Basket} from "./../../../image/icon/basket.svg";
import {useDispatch, useSelector} from "react-redux";
import './HeaderMenu.css'

const HeaderMenu = () => {
    // const [countProductsInBasket, setCountProductsInBasket] = useState()
    const basket = useSelector(state => state.basket)
    const dispatch = useDispatch()

    return (
        <div className={'containerBottom'}>
            <nav>
                <ul className={'menu'}>
                    <li><NavLink className={'menu-link'} to={'/rolls'}>Роллы</NavLink></li>
                    <li><NavLink className={'menu-link'} to={'/sushi'}>Суши</NavLink></li>
                    <li><NavLink className={'menu-link'} to={'/desserts'}>Десерты</NavLink></li>
                    <li><NavLink className={'menu-link'} to={'/sets'}>Сеты</NavLink></li>
                    <li><NavLink className={'menu-link'} to={'/pizza'}>Пицца</NavLink></li>
                    <li><NavLink className={'menu-link'} to={'/wok'}>Wok</NavLink></li>
                    <li><NavLink className={'menu-link'} to={'/drinks'}>Напитки</NavLink></li>
                    <li><NavLink className={'menu-link'} to={'/salads'}>Салаты</NavLink></li>
                    <li><NavLink className={'menu-link'} to={'/hotDishes'}>Горячие блюда</NavLink></li>
                </ul>
            </nav>
            <div className={'options-btns'}>
                <NavLink to={'/search'}>
                    <MyButton mode={'white'}><Search className={'searchIcon'}/><p>поиск</p></MyButton>
                </NavLink>
                <NavLink to={'/basket'} className={'buttonBusket'}>
                    <MyButton mode={'basket'}>
                        <Basket className={'basketIcon'}/>
                        {basket.productInBasket.length > 0 && <div className={'totalPrice'}>
                            {basket.totalPrice}
                        </div>}
                        {basket.productInBasket.length > 0 &&
                            <div className={'countProducts'}>{basket.countProductsInBasket}</div>}
                    </MyButton>
                </NavLink>
            </div>
        </div>
    );
};

export default HeaderMenu;