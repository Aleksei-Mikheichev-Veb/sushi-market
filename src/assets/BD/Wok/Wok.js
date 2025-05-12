import {imageWok} from "./imageWok";


const nodles = [
    {param:'nodles', value: 'iaichnai', selectName: 'Яичная'},
    {param:'nodles', value: 'grechnevai', selectName: 'Гречневая'},
    {param:'nodles', value: 'risovaia', selectName: 'Рисовая'},
    {param:'nodles', value: 'pshenichnaia', selectName: 'Пшеничная'}
];
const sauce = [
    {param:'sauce', value: 'sladkii', selectName: 'Сладкий'},
    {param:'sauce', value: 'ostroSladkii', selectName: 'Остро-сладкий'},
    {param:'sauce', value: 'kisloSladkii', selectName: 'Кисло-сладкий'},
    {param:'sauce', value: 'kisloOstrii', selectName: 'Кисло-острый'},
    {param:'sauce', value: 'perechnoUstrichnii', selectName: 'Перечно-устричный'},
    {param:'sauce', value: 'slivochnii', selectName: 'Сливочный'}
];

export const wok = [
    {
        id:21 ,
        img: imageWok.withChicken,
        type:'wok',
        title: 'WOK С КУРИЦЕЙ',
        test:'chicken',
        price: '290',
        params: {
            nodles:'',
            sauce:''
        },
        variants: {
            inicialOption: 'Выберите лапшу',
            options: nodles,
        },
        variantsTwo: {
            inicialOption: 'Выберите соус',
            options: sauce
        }
    }, {
    id:22 ,
        img: imageWok.withBeef,
        type:'wok',
        title: 'WOK С ГОВЯДИНОЙ',
        test:'beef',
        price: '315',
        params: {
            nodles:'',
            sauce:''
        },
        variants: {
            inicialOption: 'Выберите лапшу',
            options: nodles,
        },
        variantsTwo: {
            inicialOption: 'Выберите соус',
            options: sauce
        }
    }, {
    id:23 ,
        img: imageWok.withSalmon,
        type:'wok',
        title: 'WOK С ЛОСОСЕМ',
        test:'salmon',
        price: '295',
        params: {
            nodles:'',
            sauce:''
        },
        variants: {
            inicialOption: 'Выберите лапшу',
            options: nodles,
        },
        variantsTwo: {
            inicialOption: 'Выберите соус',
            options: sauce
        }
    }, {
    id:24 ,
        img: imageWok.withSeaFood,
        type:'wok',
        title: 'WOK С МОРЕПРОДУКТАМИ',
        test:'seafood',
        price: '315',
        params: {
            nodles:'',
            sauce:''
        },
        variants: {
            inicialOption: 'Выберите лапшу',
            options: nodles,
        },
        variantsTwo: {
            inicialOption: 'Выберите соус',
            options: sauce
        }
    }, {
    id: 25,
        img: imageWok.withVegetables,
        type:'wok',
        title: 'WOK С ОВОЩАМИ',
        test:'vegetables',
        price: '245',
        params: {
            nodles:'',
            sauce:''
        },
        variants: {
            inicialOption: 'Выберите лапшу',
            options: nodles,
        },
        variantsTwo: {
            inicialOption: 'Выберите соус',
            options: sauce
        }
    },
    {
        id:26 ,
        img: imageWok.withPig,
        type:'wok',
        title: 'WOK СО СВИНИНОЙ',
        test:'pig',
        price: '295',
        params: {
            nodles:'',
            sauce:''
        },
        variants: {
            inicialOption: 'Выберите лапшу',
            options: nodles,
        },
        variantsTwo: {
            inicialOption: 'Выберите соус',
            options: sauce
        }
    },
]