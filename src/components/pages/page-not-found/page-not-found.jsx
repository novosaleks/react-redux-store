import React, {useState} from 'react';

import './page-not-found.scss';

import {Redirect} from 'react-router-dom';

const PageNotFound = () => {
    const [isRedirected, redirect] = useState();

    return isRedirected ? <Redirect to='/'/> : <PageNotFoundContent redirect={redirect}/>;
};

const PageNotFoundContent = ({redirect}) => {
    return (
        <div className='page-not-found'>
            <div className="page-not-found page-not-found_descr">
                <span>Ooops...</span><br/>
                Something went wrong. We couldn't find this page<br/>
                Probably this page was relocated or you've input the wrong address
            </div>
            <button onClick={() => redirect(true)}
                    type="button" className="mt-2 btn btn-secondary">Home page
            </button>
        </div>
    );
};

export default PageNotFound;