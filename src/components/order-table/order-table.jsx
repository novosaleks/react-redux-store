import React from 'react';
import OrderTableHead from '../order-table-head';
import OrderTableRow from '../order-table-row';
import {connect} from 'react-redux';

import {decreaseBookCount, increaseBookCount, removeBookFromCart} from '../../actions';

import './order-table.scss';

const OrderTable = ({cartList, total, removeBookFromCart, increaseBookCount, decreaseBookCount}) => {
    const actions = {
        removeBookFromCart,
        increaseBookCount,
        decreaseBookCount
    };

    const createRows = (item, i) => {
        return <OrderTableRow
            number={i + 1}
            key={item.id}
            actions={actions}
            {...item}
        />;
    };
    return (
        <div className='order-table table-responsive'>
            <table className="table">
                <OrderTableHead/>
                <tbody>
                {cartList.map(createRows)}
                </tbody>
            </table>
            <div className="order-table__total d-flex justify-content-end">Total: {total}$</div>
        </div>
    );
};

const mapStateToProps = ({cart: {cartList, total}}) => ({
    cartList,
    total,
});

const mapDispatchToProps = {
    removeBookFromCart,
    increaseBookCount,
    decreaseBookCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);