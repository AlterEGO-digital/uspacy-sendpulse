import { SnackbarProvider } from 'notistack';
import React from 'react';
import { createRoot } from 'react-dom/client';

// import { Provider as ProviderStore } from 'react-redux';
// import App from './components/App';
import Settings from './components/Settings';
// import { setupStore } from './store';

// const store = setupStore();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<SnackbarProvider autoHideDuration={1000}>
		<Settings />
	</SnackbarProvider>,
);
