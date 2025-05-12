import {imageSalads} from "../Salads/imageSalads";
import {imageWok} from "../Wok/imageWok";
import {imagesSets} from "../Sets/imagesSets";
import {imagesSushi} from "../Sushi/imagesSushi";
import {images} from "../Rolls/imagesRolls";
import {imagesHotDishes} from "../HotDishes/imageHotDishes";
import {imageDesserts} from "../Desserts/ImageDesserts";
import {imagePizza} from "../Pizza/imagePizza";


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


export const allProducts = [
    {
        id:1,
        img: imageSalads.saladKaramel,
        title: 'Салат с карамелизированной креветкой',
        structure: 'микс салата, обжаренные креветки помидоры черри, редис ,фирменный соус',
        price: '340',
        weight: '220',
    },
    {
        id:2,
        img: imageSalads.saladKaramel,
        title: 'Салат с карамелизированной курицей ',
        structure: 'микс салата, обжаренной курицей помидоры черри, редис ,фирменный соус',
        price: '295',
        weight: '220',
    },
    {
        id:3,
        count:1,
        img: imageSalads.prianiiTunecjpg,
        title: 'Салат пряный тунец',
        structure: 'тунец, микс салата, помидоры черри, кунжут,маслины, имбирь, фирменный соус',
        price: '325',
        weight: '220',
    },
    {
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
    },
    {
        id:8,
        img: imageSalads.chukaKrevetka,
        title: 'ЧУКА-КРЕВЕТКА САЛАТ',
        structure: 'МАРИНОВАННЫЕ ВОДОРОСЛИ,ТАКУАН,РЕДИС/ЯБЛОКО,КРЕВЕТКА,СОУС САЛАТНЫЙ ФИРМЕННЫЙ.\n',
        price: '340',
        weight: '170',
    },
    {
        id:9,
        img: imageSalads.chuka,
        title: 'ЧУККА САЛАТ',
        structure: 'МАРИНОВАННЫЕ ВОДОРОСЛИ,ЛИСТ САЛАТА,КУНЖУТ,ОРЕХОВЫЙ СОУС,ПАПРИКА,ЛИМОН.',
        price: '195',
        weight: '175',
    },
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    {
        id: 31,
        img: imagesSets.setGadjet,
        title: 'Сет Гаджет',
        structure: 'Ролл Йоко (белый соус), Ролл Киото (спайси соус), Ролл Мариока, Ролл Цыпа',
        price: '925',
        count: '32',
        weight: '1020',
    },
    {
        id: 32,
        img: imagesSets.origami,
        title: 'ОРИГАМИ',
        structure: 'РОЛЛЫ: ФИЛАДЕЛЬФИЯ КЛАССИК,ФИЛА ХОТ,ТАТАМИ,САЛАТ ЧУККА.',
        price: '825',
        count: '25',
        weight: '865',
    },
    {
        id:33 ,
        img: imagesSets.sushiHaus,
        title: 'СУШИ ХАУС',
        structure: 'ГУД 1/2, ГРИН 1/2, КАЛИФОРНИЯ КЛАССИК 1/2, КАЛИФОРНИЯ С ЛОСОСЕМ 1/2, МАРИОКА 1, АСО 1.',
        price: '925',
        count: '32',
        weight: '950',
    },
    {
        id: 34,
        img: imagesSets.setNaRadost,
        title: 'СЕТ НА РАДОСТЬ',
        structure: 'ЧИЗ ЛОСОСЬ 1, КАЛИФОРНИЯ С ЛОСОСЕМ 1, КАЛИФОРНИЯ КЛАССИК 1, МИСАТО 1',
        price: '1050',
        count: '32',
        weight: '865',
    },
    {
        id:35 ,
        img: imagesSets.setNaZavist,
        title: 'СЕТ НА ЗАВИСТЬ',
        structure: 'РЕД 1/2, КАЛИФОРНИЯ КЛАССИК 1/2, ИНЬ-ЯНЬ 1, СПАЙСИ ЛОСОСЬ 1, ЛОСОСЬ 1',
        price: '925',
        count: '26',
        weight: '870',
    },
    {
        id: 36,
        img: imagesSets.naDvoih,
        title: 'НА ДВОИХ',
        structure: 'РОЛЛЫ: КАЛИФОРНИЯ КЛАССИК 1, ГРИН 1/2, ГУД 1/2, ЛОСОСЬ 1, СУШИ: УГОРЬ 1, ОКУНЬ 1, ЛОСОСЬ 1.',
        price: '775',
        count: '25',
        weight: '620',
    },
    {
        id: 37,
        img: imagesSets.prazdnichnii,
        title: 'ПРАЗДНИЧНЫЙ',
        structure: 'РОЛЛЫ: ОКИНАВА-1, ГРИН-1, БАЛТИМОР-1, ТОРИ КУНСЕЙ-1, ФРЕШ-1, ГУД-1, ФИЛАДЕЛЬФИЯ КЛАССИК-1, СЛИВОЧНЫЙ-1, КАЛИФОРНИЯ С ЛОСОСЕМ-1',
        price: '2240',
        count: '72',
        weight: '1935',
    },
    {
        id:38 ,
        img: imagesSets.semeinii,
        title: 'СЕМЕЙНЫЙ',
        structure: 'РОЛЛЫ: ЧИЗ ЛОСОСЬ 1, КАЛИФОРНИЯ КЛАССИК 1, ГРИН 1/2, ЭПЛ 1, ОГУРЕЦ 1, ЛОСОСЬ 1, КРАБ 1, ОКУНЬ 1, ГУД 1/2. СУШИ: УГОРЬ 1, ОКУНЬ 1, ЛОСОСЬ 1, КРЕВЕТКА 1.',
        price: '1495',
        count: '60',
        weight: '1438',
    },
    {
        id: 41,
        img: imagesSushi.spaisiTunec,
        title: 'СПАЙСИ ТУНЕЦ',
        structure: 'РИС, НОРИ,ТУНЕЦ, СОУС СПАЙСИ',
        price: '85',
        count: '1',
        weight: '35',
    },
    {
        id:42 ,
        img: imagesSushi.spaisiMidii,
        title: 'СПАЙСИ МИДИИ',
        structure: 'РИС, НОРИ, МИДИИ, СОУС СПАЙСИ.',
        price: '70',
        count: '1',
        weight: '35',
    },
    {
        id:43 ,
        img: imagesSushi.tunec,
        title: 'ТУНЕЦ',
        structure: 'РИС, ТУНЕЦ.',
        price: '80',
        count: '1',
        weight: '32',
    },
    {
        id: 44,
        img: imagesSushi.spaisiGrebeshok,
        title: 'СПАЙСИ ГРЕБЕШОК',
        structure: 'РИС, ГРЕБЕШОК, СПАЙСИ СОУС.',
        price: '85',
        count: '1',
        weight: '35',
    },
    {
        id:45 ,
        img: imagesSushi.spaisiIzumiTai,
        title: 'СПАЙСИ ИЗУМИ ТАЙ',
        structure: 'РИС, НОРИ,ИЗУМИ ТАЙ, СПАЙСИ СОУС.',
        price: '70',
        count: '1',
        weight: '35',
    },
    {
        id:46 ,
        img: imagesSushi.spaisiUgor,
        title: 'СПАЙСИ УГОРЬ',
        structure: 'РИС, УГОРЬ, СПАЙСИ СОУС.',
        price: '95',
        count: '1',
        weight: '35',
    },
    {
        id: 47,
        img: imagesSushi.spaisiLosos,
        title: 'СПАЙСИ ЛОСОСЬ',
        structure: 'РИС,ЛОСОСЬ, СПАЙСИ СОУС.',
        price: '85',
        count: '1',
        weight: '35',
    },
    {
        id: 48,
        img: imagesSushi.spaiseKrab,
        title: 'СПАЙСИ КРАБ',
        structure: 'РИС, НОРИ,МЯСО КРАБА (ИМИТАЦИЯ), СПАЙСИ СОУС.',
        price: '70',
        count: '1',
        weight: '35',
    },
    {
        id: 51,
        img: imagesHotDishes.kungPao,
        title: 'КУНГ-ПАО ЧИККЕН',
        structure: 'ФИЛЕ КУРИНОЕ,ЦУКИНИ,СЕЛЬДЕРЕЙ,МОРКОВЬ,ПАПРИКА,АРАХИС,СОУС СЛАДКИЙ ФИРМЕННЫЙ.\n',
        price: '350',
        weight: '240',
    },
    {
        id: 52,
        img: imagesHotDishes.EbiTempura,
        title: 'ЭБИ ТЕМПУРА',
        structure: 'КРЕВЕТКА ТИГРОВАЯ,ЛИСТ САЛАТА,СОУС СЛАДКИЙ ФИРМЕННЫЙ.',
        price: '395',
        weight: '150',
    },
    {
        id: 53,
        img: imagesHotDishes.Midii,
        title: 'МИДИИ',
        structure: 'МИДИИ КИВИ,СОУС ФИРМЕННЫЙ,КУНЖУТ.',
        price: '395',
        count: '',
    },
    {
        id: 54,
        img: imagesHotDishes.ikaFurai,
        title: 'ИКА ФФУРАЙ',
        structure: 'КОЛЬЦА КАЛЬМАРА,ЛИСТ САЛАТА,СОУС СЛАДКИЙ ФИРМЕННЫЙ.',
        price: '275',
        weight: '150',
    },
    {
        id: 61,
        img: imageDesserts.Mishel,
        title: 'МИШЕЛЬ',
        structure: 'ЯПОНСКОЕ ТЕСТО,ПАСТА ШОКОЛАДНАЯ,КЛУБНИКА КОНСЕРВ.,ТОППИНГ ШОКОЛАДНЫЙ,КРЕКЕР.',
        price: '205',
        count: '6',
        weight: '190',
    }
    ,
    {
        id: 62,
        img: imageDesserts.citron,
        title: 'ЦИТРОН',
        structure: 'ЯПОНСКОЕ ТЕСТО,СЫР СЛИВОЧНЫЙ,КЛУБНИКА,КИВИ,ТОППИНГ КЛУБНИЧНЫЙ.',
        price: '205',
        count: '6',
        weight: '190',
    }
    ,
    {
        id: 63,
        img: imageDesserts.tropicana,
        title: 'ТРОПИКАНА',
        structure: 'ЯПОНСКОЕ ТЕСТО,СЛИВОЧНЫЙ СЫР,ЯБЛОКО,БАНАН,КИВИ,МЁД,САХАРНАЯ ПУДРА.',
        price: '205',
        count: '6',
        weight: '190',
    }
    ,
    {
        id: 64,
        img: imageDesserts.hipHop,
        title: 'ХИП ХОП',
        structure: 'ЯПОНСКОЕ ТЕСТО,СЛИВОЧНЫЙ СЫР,БАНАН,АНАНАС КОНСЕРВИРОВАННЫЙ ,АПЕЛЬСИН,ТОПИНГ ШОКОЛАДНЫЙ,КОКОСОВАЯ СТРУЖКА.\n',
        price: '205',
        count: '6',
        weight: '190',
    },
    {
        id: 71,
        img: imagePizza.florencia,
        title: 'ФЛОРЕНЦИЯ',
        structure: 'МОЦАРЕЛЛА, ПЕРЕЦ БОЛГАРСКИЙ,ГОВЯДИНА ПИКАНТНАЯ,БЕКОН,ТОМАТЫ,СОУС.',
        price: '460',
        weight: '600',
    },
    {
        id: 72,
        img: imagePizza.sicilia,
        title: 'СИЦИЛИЯ',
        structure: 'МОЦАРЕЛЛА, ПЕРЕЦ БОЛГАРСКИЙ,ПАРМЕЗАН,ФИЛЕ КУРИНОЕ,ТОМАТЫ,СОУС.',
        price: '485',
        weight: '600',
    },
    {
        id: 73,
        img: imagePizza.peperoni,
        title: 'ПЕППЕРОНИ',
        structure: 'МОЦАРЕЛЛА, ПЕППЕРОНИ,СОУС.',
        price: '440',
        weight: '600',
    },
    {
        id: 74,
        img: imagePizza.parma,
        title: 'ПАРМА',
        structure: 'МОЦАРЕЛЛА, ПЕРЕЦ БОЛГАРСКИЙ,ФИЛЕ КУРИНОЕ,БЕКОН,ТОМАТЫ,СОУС.',
        price: '460',
        weight: '600',
    },
    {
        id:91 ,
        categoria: '1',
        img: images.bigFish,
        title: 'Биг Фиш',
        structure: 'РИС,НОРИ,СЫР СЛИВОЧНЫЙ,ТАКУАН,САЛАТ АЙСБЕРГ,ТУНЕЦ,ФИРМЕНЫЙ',
        price: '325',
        countRolls: '8',
        weight: '320',
        kCal: '220'
    },
    {
        id:92 ,
        categoria: '1',
        img: images.maguro,
        title: 'Магуро',
        structure: 'РИС,НОРИ,ОГУРЕЦ,СЫР СЛИВОЧНЫЙ, ТУНЕЦ,МАСАГО,СОУС УНАГИ',
        price: '275',
        countRolls: '8',
        weight: '270',
        kCal: '220'
    },
    {
        id:93 ,
        categoria: '1',
        img: images.filadelfiaClassic,
        title: 'Филадельфия классик',
        structure: 'НОРИ, РИС, ЛОСОСЬ, ОГУРЕЦ.',
        price: '335',
        countRolls: '8',
        weight: '215',
        kCal: '263'
    },
    {
        id: 94,
        categoria: '1',
        img: images.rollTaho,
        title: 'Ролл Тахо',
        structure: 'РИС,НОРИ,СЫР СЛИВОЧНЫЙ,ЛОСОСЬ,ОГУРЕЦ,ХЛОПЬЯ НОРИ ',
        price: '280',
        countRolls: '8',
        weight: '200',
        kCal: '180'
    },
    {
        id:95 ,
        categoria: '1',
        img: images.rollTaho,
        title: 'Веган',
        structure: 'лук фри, салат Айсберг, перец болгарский, томат, огурец, нори, рис',
        price: '210',
        countRolls: '8',
        weight: '200',
        kCal: '145'
    },
    {
        id: 96,
        categoria: '1',
        img: images.rollTaho,
        title: 'ЧЁРНАЯ МАМБА',
        structure: 'Рис,нори, сыр сливочный, огурец,томаго,чернило каракатицы',
        price: '260',
        countRolls: '8',
        weight: '240',
        kCal: '170'
    },
    {
        id: 97,
        categoria: '1',
        img: images.rollTaho,
        title: 'БЛЭК САЛЬМОН',
        structure: 'Рис,нори,чернило каракатицы,лосось, сыр сливочный, огурец ,майонез,масаго',
        price: '335',
        countRolls: '8',
        weight: '215',
        kCal: '155'
    },
    {
        id: 98,
        categoria: '1',
        img: images.rollTaho,
        title: 'ФЛАМИНГО',
        structure: 'Идеальное сочетание краба(имитация), огурца, сливочного сыра,майонеза и свекольного сока, с добавлением чёрного кунжута',
        price: '275',
        countRolls: '8',
        weight: '230',
        kCal: '160'
    },
    {
        id:99 ,
        categoria: '2',
        img: images.sumoSan,
        title: 'СУМО-САН',
        structure: 'РИС,НОРИ,ОГУРЕЦ,ЛОСОСЬ,НЕЖНЕЙШИЙ СЫР,КРЕВЕТКА,БЕЛЫЙ СОУС.',
        price: '395',
        countRolls: '8',
        weight: '300',
        kCal: '369'
    },
    {
        id: 910,
        categoria: '2',
        img: images.mrCrabs,
        title: 'MR.КРАБС',
        structure: 'РИС,НОРИ,ОГУРЕЦ,МАСАГО,КРАБ(ИМИТАЦИЯ),АВОКАДО.',
        price: '290',
        countRolls: '8',
        weight: '250',
        kCal: '260'
    },
    {
        id: 911,
        categoria: '2',
        img: images.american,
        title: 'АМЕРИКАНСКИЙ',
        structure: 'РИС,НОРИ,ОГУРЕЦ,НЕЖНЕЙШИЙ СЫР,МАСАГО,ЛОСОСЬ,УГОРЬ.',
        price: '410',
        countRolls: '8',
        weight: '265',
        kCal: '367'
    },
    {
        id: 912,
        categoria: '2',
        img: images.kokoVShineli,
        title: 'КОКО В ШИНЕЛИ',
        structure: 'РИС,НОРИ,НЕЖНЕЙШИЙ СЫР,КУРИЦА КОПЧЕНАЯ,ЛИСТ САЛАТА,ПОМИДОР.',
        price: '280',
        countRolls: '8',
        weight: '255',
        kCal: '325'
    },
    {
        id: 913,
        categoria: '2',
        img: images.tibet,
        title: 'ТИБЕТ',
        structure: 'РИС,НОРИ,АВОКАДО,СЫР СЛИВОЧНЫЙ,ТОМАГО,УГОРЬ.',
        price: '390',
        countRolls: '8',
        weight: '260',
        kCal: '372'
    },
    {
        id: 914,
        categoria: '2',
        img: images.furai,
        title: 'ФУРАЙ',
        structure: 'РИС,НОРИ,ОГУРЕЦ,ЛОСОСЬ,КРЕВЕТКА,УГОРЬ,СОУС УНАГИ,КУНЖУТ.',
        price: '420',
        countRolls: '8',
        weight: '250',
        kCal: '360'
    },
    {
        id:915 ,
        categoria: '2',
        img: images.filaHot,
        title: 'ФИЛА-ХОТ',
        structure: 'РИС,НОРИ,ОГУРЕЦ,НЕЖНЕЙШИЙ СЫР,ЛОСОСЬ.',
        price: '325',
        countRolls: '8',
        weight: '250',
        kCal: '385'
    },
    {
        id:916 ,
        categoria: '2',
        img: images.shimpRoll,
        title: 'ШРИМП РОЛЛ',
        structure: 'РИС,НОРИ,ОГУРЕЦ,ЛИСТ САЛАТА,ПАПРИКА,КРЕВЕТКА,СПАЙСИ СОУС.',
        price: '340',
        countRolls: '8',
        weight: '255',
        kCal: '287'
    },
    {
        id: 917,
        categoria: '3',
        img: images.fudzi,
        title: 'ФУДЗИ',
        structure: 'РИС,НОРИ,СЛИВОЧНЫЙ СЫР, ТАКУАН,ЛОСОСЬ ГРИЛЬ,СОУС МАНГО',
        price: '340',
        countRolls: '8',
        weight: '230',
        kCal: '275'
    },
    {
        id: 918,
        categoria: '3',
        img: images.rollDonBekon,
        title: 'РОЛЛ ДОН БЕКОН',
        structure: 'РИС,НОРИ,БЕКОН,СЫР СЛИВОЧНЫЙ,БЛИН ТОМАГО,САЛАТ АЙСБЕРГ,СОУС БЕЛЫЙ',
        price: '290',
        countRolls: '8',
        weight: '260',
        kCal: '320'
    },
    {
        id: 919,
        categoria: '3',
        img: images.hodaiko,
        title: 'ХОКАЙДО',
        structure: 'РИС,НОРИ,ТУНЕЦ,ОГУРЕЦ, ФИРМЕНЫЙ СОУС,СОУС СПАЙСИ,БЕЛЫЙ СОУС',
        price: '275',
        countRolls: '8',
        weight: '230',
        kCal: '295'
    },
    {
        id: 920,
        categoria: '3',
        img: images.vulkan,
        title: 'ВУЛКАН',
        structure: 'РИС,НОРИ,БЛИН ТОМАГО,ЛОСОСЬ,ОГУРЕЦ,ЛУК ЗЕЛЕНЫЙ,СОУС СПАЙСИ,СОУС СВИТ ЧИЛИ',
        price: '275',
        countRolls: '8',
        weight: '275',
        kCal: '320'
    },
    {
        id:921 ,
        categoria: '4',
        img: images.spaisiTunec,
        title: 'СПАЙСИ ТУНЕЦ',
        structure: 'РИС,НОРИ,ТУНЕЦ,ЛИСТ САЛАТА,СОУС СПАСИ.',
        price: '175',
        countRolls: '6',
        weight: '115',
        kCal: '120'
    },
    {
        id:922 ,
        categoria: '4',
        img: images.cheez,
        title: 'СЫРНЫЙ',
        structure: 'РИС, НОРИ,СЫР СЛИВОЧНЫЙ.',
        price: '140',
        countRolls: '6',
        weight: '130',
        kCal: '145'
    },
    {
        id: 923,
        categoria: '4',
        img: images.spaisiMidii,
        title: 'СПАЙСИ МИДИИ',
        structure: 'РИС,НОРИ,МИДИИ,ЛИСТ САЛАТА,СОУС СПАЙСИ.',
        price: '160',
        countRolls: '6',
        weight: '115',
        kCal: '125'
    },
    {
        id: 924,
        categoria: '4',
        img: images.slivochniiTunec,
        title: 'СЛИВОЧНЫЙ ТУНЕЦ',
        structure: 'РИС, НОРИ, ТУНЕЦ, СЫР СЛИВОЧНЫЙ.',
        price: '185',
        countRolls: '6',
        weight: '130',
        kCal: '110'
    },
]