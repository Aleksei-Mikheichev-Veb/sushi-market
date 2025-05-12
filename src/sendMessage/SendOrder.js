import axios from "axios";


const SendOrder = (state, lastStep) => {
    const TOKEN = '6175699716:AAHGpXqlb_Oh9eQV8PEk0yUAnL353dcam1s';
    const CHAT_ID = '-1001722642975';
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

    const products = state.basket.productInBasket.map(product => {

        if(product.params){
            product.params = `Лапша: ${product.params.nodles}, соус: ${product.params.sauce}`;
            if(product.count > 1){
                return `${product.title} ${product.count} шт. ${product?.params}\n`
            }else{
                return `${product.title} ${product?.params}\n`
            }
        }else{
            if(product.count > 1){
                return `${product.title} ${product.count} шт. \n`
            }else{
                return `${product.title}\n`
            }
        }
    }).join('');

    const wayOfDelivery = `<b>Получить заказ:</b> ${state.quiz.quiz[0]}\n`;
    let address;
    if(state.quiz.quiz[0] === 'Доставка'){
        let addReductionAddress = Object.values(state.quiz.quiz[1]);
        addReductionAddress[1] = 'д.' +  addReductionAddress[1];
        if (addReductionAddress[2]){
            addReductionAddress[2] = 'кв.' +  addReductionAddress[2];
        }
        address = `<b>Адрес:</b> ${addReductionAddress.join(' ')}`;
    }else{
        address = `<b>Адрес:</b> ${state.quiz.quiz[1]}`;
    }
    const name = `<b>Имя заказчика:</b> ${lastStep.name}\n`;
    const howQuickly = `${state.quiz.quiz[2]}\n`;
    const phone = `<b>Телефон:</b> ${lastStep.phone}\n` ;

    let message = `<strong>Заказ с сайта</strong>\n\n`;
    message += `${products}\n\n`;
    message += wayOfDelivery;
    message += `${address}\n`;
    message += howQuickly;
    message += name;
    message += phone;


    return axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode:'html',
        text: message
    }).then(response => {
        return response
    })
}

export default SendOrder;

