import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './app-header.scss';

const AppHeader = ({count, total}) => {
    return (
        <header className="app__header">
            <div className='container'>
                <div className="d-flex justify-content-between">
                    <h1 className="app__header-logo">
                        <Link to='/'>ReStore</Link>
                    </h1>
                    <Link to='/cart' className="app__header-basket d-flex align-items-center">
                        <i className="bi bi-cart3 align-self-start"/>
                        <span className='app__header-descr'>{count} items ({total}$)</span>
                    </Link>
                </div>
                <hr/>
            </div>
        </header>
    );
};

const mapStateToProps = ({cart: {total, cartList}}) => {
    return {
        total,
        count: cartList.reduce((acc, item) => acc + item.count, 0),
    }
}

export default connect(mapStateToProps)(AppHeader);