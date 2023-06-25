/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Notification from 'react-notify-toast';
import AppRoutes from './router/index.tsx';
import FullPageSpinner from './pages/FullPageSpinner.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Notification options={{ zIndex: 2000, top: 10 }} />
		<Provider store={store}>
			<AppRoutes />
			<FullPageSpinner />
		</Provider>
	</React.StrictMode>
);
