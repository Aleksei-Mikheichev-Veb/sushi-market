const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOTE_PRODUCT = 'REMOTE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
const SET_COUNT_PRODUCT_IN_BASKET = 'SET_COUNT_PRODUCT_IN_BASKET';
const CLEAR_BASKET = 'CLEAR_BASKET';



const initialState = {
    productInBasket: [],
    countProductsInBasket: 0,
    totalPrice: 0
}

const basketReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_PRODUCT: {
            const productExist = state.productInBasket.find(product => product.id === action.product.id);
            // debugger;
            if(productExist){
                return {
                    ...state,
                    productInBasket: state.productInBasket.map(product => {
                        if (product.id === action.product.id) {
                            // debugger;
                            return {...productExist, count: productExist.count + 1}
                        } else {
                            return product
                        }
                    }),
                }
            } else {
                // debugger;
                return {
                    ...state,
                    productInBasket: [...state.productInBasket, {...action.product, count: 1}]
                }
            }

        }
        case REMOTE_PRODUCT: {

            const productExist = state.productInBasket.find(prod => prod.id  === action.product.id);
            if(productExist.count === 1){
                return {
                    ...state,
                    productInBasket: state.productInBasket.filter(prod => prod.id  !== action.product.id)
                }
            }
            else {
                return {
                    ...state,
                    productInBasket: state.productInBasket.map(prod => {
                        if(prod.id === action.product.id){
                            return {...productExist, count: productExist.count - 1}
                        } else {
                            return prod
                        }
                    })
                }
            }
        }
        case DELETE_PRODUCT: {
            return {
                ...state,
                productInBasket:[ ...state.productInBasket.filter(el => el.id !== action.product.id)]
            }
        }
        case SET_TOTAL_PRICE: {
            const totalSum = state.productInBasket.reduce((price, item) => price + item.count * item.price, 0)

            return {
                ...state,
                totalPrice: totalSum
            }
        }
        case SET_COUNT_PRODUCT_IN_BASKET: {
            const totalCountProduct = state.productInBasket.reduce((count, item) => count + item.count, 0);

            return {
                ...state,
                countProductsInBasket: totalCountProduct
            }
        }

        case CLEAR_BASKET:{
            // debugger
            return {
                ...state,
                productInBasket: []
            }
        }
        default: return state;
    }
}



export const addProductAC = (product) => ({type: ADD_PRODUCT, product});
export const remoteAC = (product) => ({type: REMOTE_PRODUCT, product});
export const deleteAC = (product) => ({type: DELETE_PRODUCT, product});
export const setTotalPriceAC = () => ({type: SET_TOTAL_PRICE})
export const setCountProductInBasket = () => ({type: SET_COUNT_PRODUCT_IN_BASKET});
export const clearBasket = () => ({ type: CLEAR_BASKET});


export default basketReducer;