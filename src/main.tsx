import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import AppRoutes from './router/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    </React.StrictMode>
);
