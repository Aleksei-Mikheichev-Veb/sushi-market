import {imageSalads} from "./imageSalads";


const cezar = [
    {
        value: 'chicken' ,name:'Цезарь с курицей', selectName: 'С курицей', price: 295, id:4
    },
    {
        value: 'salmon' ,name:'Цезарь с лососем', selectName: 'С лососем', price: 350, id:5
    },
    {
        value: 'krevetka' ,name:'Цезарь с креветкой', selectName: 'С креветкой', price: 365, id:6
    }
]

export const salads = [
    {
        id:1,
        img: imageSalads.saladKaramel,
        title: 'Салат с карамелизированной креветкой',
        structure: 'микс салата, обжаренные креветки помидоры черри, редис ,фирменный соус',
        price: '340',
        weight: '220',
    },{
        id:2,
        img: imageSalads.saladKaramel,
        title: 'Салат с карамелизированной курицей ',
        structure: 'микс салата, обжаренной курицей помидоры черри, редис ,фирменный соус',
        price: '295',
        weight: '220',
    },{
        id:3,
        count:1,
        img: imageSalads.prianiiTunecjpg,
        title: 'Салат пряный тунец',
        structure: 'тунец, микс салата, помидоры черри, кунжут,маслины, имбирь, фирменный соус',
        price: '325',
        weight: '220',
    },{
        // id:4,
        img: imageSalads.cezar,
        title: 'Цезарь',
        structure: 'Салат Айсберг, помидоры черри, сыр, сухарики, соус цезарь',
        price: '295',
        weight: '220',
        currentVariant:{
            name:'Цезарь с курицей', price:'295', id:4
        },
        variants: {
            changeablePrice:true,
            inicialOption: 'Цезарь с',
            options: cezar,
        }
    },
    {
        id:7,
        img: imageSalads.sarada,
        title: 'САРАДА',
        structure: 'САЛАТ АЙСБЕРГ,ОГУРЕЦ,УГОРЬ,ПЕРЕЦ БОЛГАРСКИЙ,СОУС ФИРМЕННЫЙ,КУНЖУТ.',
        price: '385',
        weight: '220',
    },{
        id:8,
        img: imageSalads.chukaKrevetka,
        title: 'ЧУКА-КРЕВЕТКА САЛАТ',
        structure: 'МАРИНОВАННЫЕ ВОДОРОСЛИ,ТАКУАН,РЕДИС/ЯБЛОКО,КРЕВЕТКА,СОУС САЛАТНЫЙ ФИРМЕННЫЙ.\n',
        price: '340',
        weight: '170',
    },{
        id:9,
        img: imageSalads.chuka,
        title: 'ЧУККА САЛАТ',
        structure: 'МАРИНОВАННЫЕ ВОДОРОСЛИ,ЛИСТ САЛАТА,КУНЖУТ,ОРЕХОВЫЙ СОУС,ПАПРИКА,ЛИМОН.',
        price: '195',
        weight: '175',
    },
]