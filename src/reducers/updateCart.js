const getItemIndex = (cartList, payload) => {
    return cartList.findIndex(item => item.id === payload);
};

const changeCount = (cartList, payload, quantity) => {
    const idx = getItemIndex(cartList, payload),
        bookCopy = JSON.parse(JSON.stringify(cartList[idx]));

    bookCopy.total += quantity * bookCopy.price;
    bookCopy.count += quantity;

    if (bookCopy.count <= 0) {
        return [
            ...cartList.slice(0, idx),
            ...cartList.slice(idx + 1)
        ];
    }

    return [
        ...cartList.slice(0, idx),
        bookCopy,
        ...cartList.slice(idx + 1)
    ];
};

const updateCart = (state, action) => {

    switch (action.type) {
        case 'ADDED_BOOK_TO_CART':
            const book = state.bookList.books.find(item => item.id === action.payload),
                copyCartList = JSON.parse(JSON.stringify(state.cart.cartList));
            let isNewBook = true;

            copyCartList.forEach(item => {
                if (item.id === action.payload) {
                    item.count += 1;
                    item.total += book.price;
                    isNewBook = false;
                }
            });

            if (!isNewBook) {
                return {
                    ...state.cart,
                    cartList: copyCartList
                };
            }

            const newItem = {
                id: book.id,
                title: book.title,
                count: 1,
                total: book.price,
                price: book.price,
            };

            return {
                ...state.cart,
                cartList: [
                    ...state.cart.cartList,
                    newItem
                ],
            };

        case 'REMOVE_BOOK_FROM_CART': {
            const idx = getItemIndex(state.cart.cartList, action.payload),
                cartList = changeCount(state.cart.cartList, action.payload, -state.cart.cartList[idx].count);

            return {
                ...state.cart,
                cartList,
            };
        }

        case 'INCREASE_BOOK_COUNT': {
            const cartList = changeCount(state.cart.cartList, action.payload, 1);

            return {
                ...state.cart,
                cartList
            };
        }

        case 'DECREASE_BOOK_COUNT': {
            const cartList = changeCount(state.cart.cartList, action.payload, -1);

            return {
                ...state.cart,
                cartList,
            };
        }
        default:
            return state.cart;
    }
};

export default updateCart;