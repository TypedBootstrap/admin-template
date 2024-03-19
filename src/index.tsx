import React from 'react';
import ReactDOM from 'react-dom/client';
import '@typedbootstrap/admin-styles/dist/css/styles.css';
import App from 'App';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { AuthProvider } from 'contexts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <ReduxProvider store={store}>
                    <App />
                </ReduxProvider>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
