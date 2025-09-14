import { useMemo } from "react";


export const useFilterProduct = (currentCategoria, rolls) => {
    const filteredRolls = useMemo(() => {
        if (currentCategoria) {
            // Сравнение такое потому что в BD значения в виде строк
            return [...rolls.filter(elem => elem.categoria == currentCategoria)]
        } else {
            return rolls
        }
    }, [currentCategoria, rolls])

    return filteredRolls;
}



const ProductCard = ({ product, showActions = true }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const favoriteItems = useSelector(state => state.favorites.items);

    const isInCart = cartItems.includes(product.id);
    const isInFavorites = favoriteItems.includes(product.id);
    const isAvailable = product.available;



    const handleAddToCart = () => {
        if (isAvailable && !isInCart) {
            dispatch(addToCart(product.id));
        }
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product.id));
    };

    const handleAddToFavorites = () => {
        if (!isInFavorites) {
            dispatch(addToFavorites(product.id));
        }
    };

    const handleRemoveFromFavorites = () => {
        dispatch(removeFromFavorites(product.id));
    };


    return (
        <div className="product-card">
            <div className="product-card__image-container">
                <img
                    src={product.preview_picture || placeholderImage}
                    alt={product.name}
                    className="product-card__image"
                    onError={handleImageError}
                />

                {/* Лейблы товара */}
                {product.labels && (
                    <div className="product-card__labels">
                        {product.labels.new && (
                            <span className="product-card__label product-card__label--new">
                                {product.labels.new}
                            </span>
                        )}
                        {product.labels.discount && (
                            <span className="product-card__label product-card__label--discount">
                                {product.labels.discount}
                            </span>
                        )}
                    </div>
                )}
            </div>

            <div className="product-card__content">
                <h3 className="product-card__title">{product.name}</h3>

                <div className="product-card__price">
                    {product.price_discount ? (
                        <>
                            <span className="product-card__price-discount">
                                {formatPrice(product.price_discount)} ₽
                            </span>
                            <span className="product-card__price-original">
                                {formatPrice(product.price)} ₽
                            </span>
                        </>
                    ) : (
                        <span className="product-card__price-current">
                            {formatPrice(product.price)} ₽
                        </span>
                    )}
                </div>


                {/* Кнопки действий */}
                {showActions && (
                    <div className="product-card__actions">
                        {/* Кнопка корзины */}
                        {!isAvailable ? (
                            <button
                                className="product-card__btn product-card__btn--unavailable"
                                disabled
                            >
                                Отсутствует
                            </button>
                        ) : isInCart ? (
                            <button
                                className="product-card__btn product-card__btn--in-cart"
                                disabled
                            >
                                В корзине
                            </button>
                        ) : (
                            <button
                                className="product-card__btn product-card__btn--cart"
                                onClick={handleAddToCart}
                            >
                                В корзину
                            </button>
                        )}

                        {/* Кнопка избранного */}
                        {isInFavorites ? (
                            <button
                                className="product-card__btn product-card__btn--in-favorites"
                                disabled
                            >
                                В избранном
                            </button>
                        ) : (
                            <button
                                className="product-card__btn product-card__btn--favorites"
                                onClick={handleAddToFavorites}
                            >
                                В избранное
                            </button>
                        )}
                    </div>
                )}

                {/* Кнопки удаления (для страниц корзины и избранного) */}
                {!showActions && (
                    <div className="product-card__remove-actions">
                        {isInCart && (
                            <button
                                className="product-card__btn product-card__btn--remove"
                                onClick={handleRemoveFromCart}
                            >
                                Удалить из корзины
                            </button>
                        )}
                        {isInFavorites && (
                            <button
                                className="product-card__btn product-card__btn--remove"
                                onClick={handleRemoveFromFavorites}
                            >
                                Удалить из избранного
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;