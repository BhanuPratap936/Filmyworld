import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store';
import './index.css';
import ToggleColorModeProvider from './utils/ToggleColorMode';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<ToggleColorModeProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ToggleColorModeProvider>
	</Provider>
);
