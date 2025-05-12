
import style from './Home.css';
import React, {useRef, useState} from 'react';


import Subtitle from "../../Subtitle";
import {NavLink} from "react-router-dom";
import {Swiper, SwiperSlide,} from 'swiper/react';
import { Navigation, Pagination,  Autoplay } from 'swiper/modules';
import {PopularNow} from "../../../assets/BD/PopularNow/PopularNow";
import ProductCard from "../menu/ProductCard/ProductCard";
import ButtonsSlider from "../../UI/Slider/ButtonsSlider";
import goodPlaceImage from './../../../image/common/everyoneLikesIt.webp';
import {ReactComponent as Time} from "../../../image/icon/time.svg";
import {ReactComponent as Card} from "../../../image/icon/credit.svg";
import {ReactComponent as Percents} from "./../../../image/icon/percents.svg"
import Slider from "../../UI/Slider/Slider";
const Home = () => {
    // Слайдер
    const [_, setInit] = useState();
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className={'home'}>
            <div className="container">
                <div className={'home_menu menu_home'}>
                    <Subtitle>Наше меню</Subtitle>
                    <div className={'menu_box'}>
                        <NavLink to={'/sets'} className={'menu_item'}>
                            <div className={'menu_title'}>Сеты</div>
                            <div className={'menu_bg menu_bg_1'}></div>
                        </NavLink>
                        <NavLink to={'/rolls'} className={'menu_item'}>
                            <div className={'menu_title'}>Роллы</div>
                            <div className={'menu_bg menu_bg_2'}></div>
                        </NavLink>
                        <NavLink to={'/desserts'} className={'menu_item'}>
                            <div className={'menu_title'}>Десерты</div>
                            <div className={'menu_bg menu_bg_3'}></div>
                        </NavLink>
                        <NavLink to={'/sushi'} className={'menu_item'}>
                            <div className={'menu_title'}>Суши</div>
                            <div className={'menu_bg menu_bg_4'}></div>
                        </NavLink>
                        <NavLink to={'/wok'} className={'menu_item'}>
                            <div className={'menu_title'}>Wok</div>
                            <div className={'menu_bg menu_bg_5'}></div>
                        </NavLink>
                        <NavLink to={'/hotDishes'} className={'menu_item'}>
                            <div className={'menu_title'}>Горячие блюда</div>
                            <div className={'menu_bg menu_bg_6'}></div>
                        </NavLink>
                        <NavLink to={'/pizza'} className={'menu_item'}>
                            <div className={'menu_title'}>Пицца</div>
                            <div className={'menu_bg menu_bg_7'}></div>
                        </NavLink>
                        <NavLink to={'/salads'} className={'menu_item'}>
                            <div className={'menu_title'}>Салаты</div>
                            <div className={'menu_bg menu_bg_8'}></div>
                        </NavLink>
                        <NavLink to={'/drinks'} className={'menu_item'}>
                            <div className={'menu_title'}>Напитки</div>
                            <div className={'menu_bg menu_bg_9'}></div>
                        </NavLink>
                    </div>
                </div>
                <hr/>
                <div className={'home_often'}>
                    <Subtitle>Часто заказывают</Subtitle>
                    <div className={'sliderContainer'}>
                        <Swiper
                            className={'home_often_slider'}
                            // Расстояние между слайдами
                            spaceBetween={20}
                            // // Количество отображаемых слайдов
                            slidesPerView={1}
                            // // Бесконечный слайдер
                            loop={true}
                            // // Автопролистывание
                            // autoplay={{
                            //     delay: 3000,
                            //     // Запустится ли дальше после остановки от наведения
                            //     disableOnInteraction: false,
                            // }}
                            // // Работают по принципу min-width, т.е. все до 768 будет 1 слайд, после 2.
                            breakpoints={{
                                550:{
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                990: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1400: {
                                    slidesPerView: 4,
                                },
                            }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            // //Создаем свои стрелки ШАГ 3. Перерендерим компоненту чтобы заработали ref для своих кнопок
                            onInit={() => setInit(true)}
                            // //Navigation чтобы работали стрелки\\\НУЖНО добавить в modules
                            modules={[Navigation, Autoplay]}
                        >
                            {PopularNow.map((slide, index) => {
                                return <SwiperSlide key={index} >
                                    {/*<div className="slideBoxProductCard">*/}
                                    <ProductCard product={slide} />
                                    {/*</div>*/}
                                </SwiperSlide>
                            })}
                        </Swiper>
                        <ButtonsSlider nextRef={nextRef} prevRef={prevRef}/>
                    </div>
                </div>
                <div className={'home_goodPlace'}>
                    <Subtitle>
                        Суши и роллы, которые нравятся <span> всем</span>
                    </Subtitle>
                    <div className="home_goodPlace_row">
                        <div className="home_goodPlace_body">
                            <div className="home_goodPlace_text">Хотите насладиться вкусом любимых блюд азиатской и паназиатской кухни или попробовать новые для вас суши, wok, салаты или супы? Просто поужинать самому или в компании с любимым человеком, не тратя времени на приготовление еды? Либо накормить десяток-другой человек во время корпоратива или празднования дня рождения?</div>
                            <div className="home_goodPlace_text">Воспользуйтесь услугами службы доставки «СушиYes». У нас вы можете заказать доставку блюд японской кухни на дом и в офис. Сделав заказ на сайте, вы сможете недорого и вкусно покушать без дополнительных хлопот.</div>
                            <div className="home_goodPlace_icons icons_home">
                                <div className="icons_home_item">
                                    <div className="icons_home_iconBox">
                                        <Time className={'icons_home_icon'}/>
                                    </div>
                                    <div className="icons_home_text">БЫСТРАЯ ДОСТАВКА
                                        ОТ 60 МИНУТ</div>
                                </div>
                                <div className="icons_home_item">
                                    <div className="icons_home_iconBox">
                                        <Card className={'icons_home_icon'}/>
                                    </div>
                                    <div className="icons_home_text">ОПЛАТА ЛЮБЫМ
                                        УДОБНЫМ СПОСОБОМ</div>
                                </div>
                                <div className="icons_home_item">
                                    <div className="icons_home_iconBox">
                                        <Percents className={'icons_home_icon'}/>
                                    </div>
                                    <div className="icons_home_text">ЕЖЕДНЕВНЫЕ АКЦИИ,
                                        СКИДКИ </div>
                                </div>
                            </div>
                        </div>
                        <div className="home_goodPlace_image">
                            <img src={goodPlaceImage} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;