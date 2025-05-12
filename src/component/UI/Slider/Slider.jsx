import React, {useState} from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.css'
const Slider = ({slides, countSlides, initSlider, prevRef, nextRef}) => {

    const [_, setInit] = useState();
    // debugger;
    return (
        <div className={'sliderContainer'}>
            <Swiper
                // centeredSlides={true}
                slidesPerView={1}
                // autoHeight={true}
                centeredSlides={true}
                // Расстояние между слайдами
                spaceBetween={20}
                // Количество отображаемых слайдов
                // slidesPerView={3}
                // Бесконечный слайдер,ЧТОБЫ РАБОТАЛ НУЖНО ИСХОДНЫХ СЛАЙДОВ БЫЛО В 2 РАЗА БОЛЬШЕ, ЧЕМ ТЕ КОТОРЫЕ ОТОБРАЖАЮТСЯ
                // Т.Е. Если показывает 4 слайда, значит их должно быть не меньше 8
                loop={true}
                // Автопролистывание
                autoplay={{
                    delay: 2500,
                    // Запустится ли дальше после остановки
                    disableOnInteraction: false,
                    // Остановка при наведении
                    pauseOnMouseEnter: true,
                }}
                // Работают по принципу min-width, т.е. все до 768 будет 1 слайд, после 2.

                breakpoints={{
                    550:{
                        slidesPerView: countSlides.break550,
                    },
                    768: {
                        slidesPerView: countSlides.break768,
                    },
                    990: {
                        slidesPerView: countSlides.break991,
                    },
                    1200: {
                        slidesPerView: countSlides.break1201,
                    },
                }}
                // Чтобы появились стрелки
                // navigation={true}
                // Создаем свои стрелки ШАГ 3
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                // Прогрессбар\\\НУЖНО добавить в modules
                // pagination={{
                //     // Чтобы можно было переключаться по буллитам.
                //     clickable:'true',
                //     // Можно установить пагинацию. по умолчанию это буллиты.
                //     // type: "progressbar",
                //     // Пагинация типа 1/6
                //     // type: "fraction",
                // }}
                //Создаем свои стрелки ШАГ 3. Перерендерим компоненту чтобы заработали ref для своих кнопок
                onInit={() => initSlider(true)}
                // Скролл \\\НУЖНО добавить в modules
                // scrollbar={{ draggable: true }}
                //Navigation чтобы работали стрелки\\\НУЖНО добавить в modules
                modules={[Pagination, Navigation, Autoplay]}
            >
                {slides.map((slide, index) => {
                    return <SwiperSlide key={index} >
                        {slide}
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
};

export default Slider;