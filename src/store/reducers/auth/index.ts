import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IToken } from '../../../models/IToken';
import { addToken, getTokenInfo } from './action';
import { IState } from './types';

const initialState = {
	authInfo: {
		client_id: '',
		client_secret: '',
		status: false,
		message: '',
		has_token: false,
	},
	errorMessage: '',
	loadingGetTokenInfo: true,
	loadingAddToken: false,
} as IState;

const authReducer = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearAuthInfo: (state) => {
			state.authInfo = initialState.authInfo;
		},
	},
	extraReducers: {
		[getTokenInfo.fulfilled.type]: (state, action: PayloadAction<IToken>) => {
			state.loadingGetTokenInfo = false;
			state.errorMessage = '';
			state.authInfo = action.payload;
		},
		[getTokenInfo.pending.type]: (state) => {
			state.loadingGetTokenInfo = true;
			state.errorMessage = '';
		},
		[getTokenInfo.rejected.type]: (state, action: PayloadAction<string>) => {
			state.loadingGetTokenInfo = false;
			state.errorMessage = action.payload;
		},
		[addToken.fulfilled.type]: (state, action: PayloadAction<IToken>) => {
			state.loadingAddToken = false;
			state.errorMessage = '';
			state.authInfo = action.payload;
		},
		[addToken.pending.type]: (state) => {
			state.loadingAddToken = true;
			state.errorMessage = '';
		},
		[addToken.rejected.type]: (state, action: PayloadAction<string>) => {
			state.loadingAddToken = false;
			state.errorMessage = action.payload;
		},
	},
});

export const { clearAuthInfo } = authReducer.actions;
export default authReducer.reducer;
