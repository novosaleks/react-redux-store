import React from 'react';

import './order.scss';
import OrderTable from '../../order-table';


const Order = () => {
    return (
        <section className="order mt-3">
            <div className='container'>
                <h2>Your Order</h2>
                <OrderTable/>
            </div>
        </section>
    );
};

export default Order;