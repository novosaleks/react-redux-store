import React from 'react';

const BookItem = ({title, author, price, addedBookToCart, id}) => {
    return (
        <div className='book-item'>
            <h3 className="book-title">{title}</h3>
            <div className="book-author">{author}</div>
            <div className="book-price">{price.toFixed(2)}$</div>
            <button type="button"
                    className="btn btn-primary"
                    onClick={() => addedBookToCart(id)}>
                Add to cart
            </button>

        </div>
    );
};

export default BookItem;