import { combineReducers, configureStore } from '@reduxjs/toolkit';

import addressBook from './reducers/addressBook/index';
import auth from './reducers/auth/index';

const rootReducer = combineReducers({
	auth,
	addressBook,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
