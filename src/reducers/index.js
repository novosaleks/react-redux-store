import updateBookList from './updateBookList';
import updateCart from './updateCart';
import initialState from './initialState'

const reducer = (state = initialState, action) => {
    return {
        bookList: updateBookList(state, action),
        cart: updateCart(state, action)
    };
};

export default reducer;