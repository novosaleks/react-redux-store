import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import './book-store.scss';

import BookItem from '../../book-item';
import Spinner from '../../spinner';
import ErrorNotification from '../../error-notification';
import {setContextApi} from '../../hoc';

import {fetchBooks, addedBookToCart} from '../../../actions';



const BookStore = ({books, storeAPI, loading, fetchBooks, error, addedBookToCart}) => {
    const bookItems = books.map(item => {
        item.addedBookToCart = addedBookToCart;

        return (
            <div key={item.id} className='col-md-6 col-12 mt-4'>
                <BookItem
                    {...item}/>
            </div>
        );
    });

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks, storeAPI]);

    return (
        <section className="book__store">
            <div className='container'>
                <div className="row">
                    {loading ? <Spinner/> :
                        error ? <ErrorNotification/> :
                            bookItems}
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = ({bookList: {books, loading, error}}) => {
    return {
        books,
        loading,
        error,
    };
};

const mapDispatchToProps = (dispatch, {storeAPI}) => {
    return {
        fetchBooks: fetchBooks(dispatch, storeAPI),
        addedBookToCart: id => dispatch(addedBookToCart(id)),
    };

};

export default setContextApi()(connect(mapStateToProps, mapDispatchToProps)(BookStore));