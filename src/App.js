import React from 'react';
import Modal from 'Modal';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Routes from 'Routes';
import store from 'store';

const App = () => (
    <Provider store={store}>
        <HashRouter>
            <Routes />
            <Modal />
        </HashRouter>
    </Provider>
);

export default App;
