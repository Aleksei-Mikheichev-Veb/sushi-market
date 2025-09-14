import React from 'react';
import HeaderCommon from "./HeaderCommon/HeaderCommon";
import style from './Headers.module.css'
const Headers = () => {
    return (
        <header className={style.container}>
            <HeaderCommon />
        </header>
    );
};
export default Headers;
// ctrl + tab сдвиг влево
// Shift + Alt + F выровнять код
// Alt + ↑ / ↓ — перемещение строки с курсором вверх или вниз
// Ctrl + L — выделяет всю строку.
// Shift + Alt + ↓ / ↑ — дублирование строки с курсором вниз
// Shift + Del — удалить строку целиком
// Ctrl + D — выделяет слово, на котором находится курсор. Следующее нажатие на D (удерживая Ctrl) выделить следующее по порядку вниз идентичное значение. Вот пишете вы функцию, и вам нужно выделить ближайшие значения ‘name’. Легко! Выделить все вхождения слова можно вот так — Ctrl + F2. 
