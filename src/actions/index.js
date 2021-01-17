const booksLoaded = books => ({
    type: 'FETCH_BOOKS_SUCCESS',
    payload: books,
});

const booksLoading = () => ({
    type: 'FETCH_BOOKS_REQUEST'
});

const booksError = payload => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload,
    };
};

const fetchBooks = (dispatch, storeAPI) => () => {
    dispatch(booksLoading());
    storeAPI.getData()
        .then(data => dispatch(booksLoaded(data)))
        .catch(err => dispatch(booksError(err)));
};

const addedBookToCart = bookID => {
    return {
        type: 'ADDED_BOOK_TO_CART',
        payload: bookID,
    }
}

const removeBookFromCart = bookID => {
    return {
        type: 'REMOVE_BOOK_FROM_CART',
        payload: bookID,
    }
}

const increaseBookCount = bookID => {
    return {
        type: 'INCREASE_BOOK_COUNT',
        payload: bookID,
    }
}

const decreaseBookCount = bookID => {
    return {
        type: 'DECREASE_BOOK_COUNT',
        payload: bookID,
    }
}

export {
    fetchBooks,
    addedBookToCart,
    removeBookFromCart,
    increaseBookCount,
    decreaseBookCount,
};