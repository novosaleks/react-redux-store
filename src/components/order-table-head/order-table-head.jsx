import React from 'react';

import './order-table-head.scss';

const OrderTableHead = () => {
    return (
        <thead className='order-table-head'>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
    );
};

export default OrderTableHead;