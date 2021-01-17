import React, {useContext} from 'react';
import Context from '../api-context';

const setContextApi = () => (Component) => {

    return props => {
        const storeAPI = useContext(Context);

        return <Component {...props} storeAPI={storeAPI}/>;
    };
};

export default setContextApi;