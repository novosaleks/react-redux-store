import React from 'react';
import {Link} from 'react-router-dom';

import './app-header.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <div className='container'>
                <div className="d-flex justify-content-between">
                    <h1 className="app__header-logo">
                        <Link to='/'>ReStore</Link>
                    </h1>
                    <Link to='/cart' className="app__header-basket d-flex align-items-center">
                        <i className="bi bi-cart3 align-self-start"/>
                        <span className='app__header-descr'>5 items (200$)</span>
                    </Link>
                </div>
                <hr/>
            </div>
        </header>
    );
};

export default AppHeader;