import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from 'Routes';
import Modal from 'Modal';
import store from 'store';

/**
 * App
 */
const App = () => (
    <Provider store={store}>
        <HashRouter>
            <Routes />
            <Modal />
        </HashRouter>
    </Provider>
);

export default App;
