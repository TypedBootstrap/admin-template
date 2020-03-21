import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from 'Routes';
import store from 'store';

/**
 * App
 */
const App = () => (
    <div className="App">
        <Provider store={store}>
            <HashRouter>
                <Routes />
            </HashRouter>
        </Provider>
    </div>
);

export default App;
