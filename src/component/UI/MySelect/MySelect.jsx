import React, {useEffect, useState} from 'react';
import style from './MySelect.module.css'

const MySelect = ({options, initialOption,  setValue,setCurrentProduct, currentProduct}) => {
    // Показывает что селект активен
    const [selectActive, setSelectActive] = useState(false);
    // Выбранный селект.
    const [currentSelect, setCurrentSelect] = useState(initialOption);

    const addParams = (option) => {
        // Выбираем параметр продукта в заисимости от того какой продукт.
        if(currentProduct.currentVariant){
            setCurrentProduct(
                {...currentProduct,
                    currentVariant: option,
                    id:option.id,
                    price: option.price,
                    title: option.name
                }
            )
        }else if (option.param == 'nodles'){
            setCurrentProduct(
                {...currentProduct,
                    params: {...currentProduct.params, nodles: option.selectName}}
            )
        }else if (option.param == 'sauce'){
            setCurrentProduct(
                {...currentProduct,
                    params: {...currentProduct.params, sauce: option.selectName}}
            )
        }
        // Устнавлием значение селект и закрываем его
        setCurrentSelect(option.selectName);
        setSelectActive(false)
    }

    return (
        <div className={selectActive ? style.select_box + ' ' + style.active : style.select_box} >
            {/*Появляется на весь экран кроме контейнера с options когда его родитель активен, чтобы по клику по нему закрыть селект.*/}
            <div onClick={() => setSelectActive(!selectActive)} className={style.field}></div>
            <div className={selectActive ? style.options_container + ' ' + style.active : style.options_container }>
                {options.map((option, index) => {
                    return <div className={style.option} key={index} onClick={() => {
                        // Устнавлием значение селект и закрываем его
                        addParams(option)
                    }}>
                        <label >
                            {option.selectName}
                            <input type="radio" className={style.radio} name={initialOption} />
                        </label>
                    </div>
                })}
            </div>
            {/*Выбранный селект. Снизу он для корректной работы стрелки при активации селекта*/}
            <div onClick={() => setSelectActive(!selectActive)} className={style.selected}>
                {currentSelect}
            </div>
        </div>
    );
};

export default MySelect;