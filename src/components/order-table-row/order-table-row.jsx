import React from 'react';

import './order-table-row.scss';

const OrderTableRow = ({number, title, count, total, id, actions}) => {
    const {increaseBookCount, removeBookFromCart, decreaseBookCount} = actions;

    return (
        <tr>
            <th scope="row">{number}</th>
            <td>{title}</td>
            <td>{count}</td>
            <td>{total.toFixed(2)}$</td>
            <td>
                <button type="button"
                        onClick={() => increaseBookCount(id)}
                        className="btn btn-outline-success">
                    <i className="bi bi-plus"/>
                </button>
                <button type="button"
                        onClick={() => decreaseBookCount(id)}
                        className="btn btn-outline-warning mx-1">
                    <i className="bi bi-dash"/>
                </button>
                <button type="button"
                        onClick={() => removeBookFromCart(id)}
                        className="btn btn-outline-danger">
                    <i className="bi bi-trash"/>
                </button>
            </td>
        </tr>
    );
};

export default OrderTableRow;