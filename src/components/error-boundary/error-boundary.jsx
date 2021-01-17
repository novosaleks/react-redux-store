import React, {Component} from 'react';
import ErrorNotification from '../error-notification/error-notification';

export default class ErrorBoundary extends Component {
    state = {
        failed: false,
    };

    componentDidCatch() {
        this.setState({
            failed: true,
        });
    }

    render() {
        const {failed} = this.state;

        return failed ? <ErrorNotification/> : this.props.children;
    }
}