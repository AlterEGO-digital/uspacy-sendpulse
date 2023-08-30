import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAddressBook } from '../../../models/IAddressBook';
import { IAddressbookForEntity } from '../../../models/IAddressbookForEntity';
import { addAddressBookForEntity, getAddressBookEntities, getAddressBooks } from './action';
import { IState } from './types';

const initialState = {
	addressBooks: [],
	addressBooksForEntity: {
		entities: {},
	},
	errorMessage: '',
	loadingAddressBooks: true,
	loadingAddressBooksForEntity: true,
	loadingUpdateAddressBooksForEntity: false,
} as IState;

const addressBookReducer = createSlice({
	name: 'addressBook',
	initialState,
	reducers: {
		clearAddressBooksInfo: (state) => {
			state.addressBooks = initialState.addressBooks;
			state.addressBooksForEntity = initialState.addressBooksForEntity;
		},
	},
	extraReducers: {
		[getAddressBooks.fulfilled.type]: (state, action: PayloadAction<IAddressBook[]>) => {
			state.loadingAddressBooks = false;
			state.errorMessage = '';
			state.addressBooks = action.payload;
		},
		[getAddressBooks.pending.type]: (state) => {
			state.loadingAddressBooks = true;
			state.errorMessage = '';
		},
		[getAddressBooks.rejected.type]: (state, action: PayloadAction<string>) => {
			state.loadingAddressBooks = false;
			state.errorMessage = action.payload;
		},
		[getAddressBookEntities.fulfilled.type]: (state, action: PayloadAction<IAddressbookForEntity>) => {
			state.loadingAddressBooksForEntity = false;
			state.errorMessage = '';
			state.addressBooksForEntity = action.payload;
		},
		[getAddressBookEntities.pending.type]: (state) => {
			state.loadingAddressBooksForEntity = true;
			state.errorMessage = '';
		},
		[getAddressBookEntities.rejected.type]: (state, action: PayloadAction<string>) => {
			state.loadingAddressBooksForEntity = false;
			state.errorMessage = action.payload;
		},
		[addAddressBookForEntity.fulfilled.type]: (state, action: PayloadAction<IAddressbookForEntity>) => {
			state.loadingUpdateAddressBooksForEntity = false;
			state.errorMessage = '';
			state.addressBooksForEntity = action.payload;
		},
		[addAddressBookForEntity.pending.type]: (state) => {
			state.loadingUpdateAddressBooksForEntity = true;
			state.errorMessage = '';
		},
		[addAddressBookForEntity.rejected.type]: (state, action: PayloadAction<string>) => {
			state.loadingUpdateAddressBooksForEntity = false;
			state.errorMessage = action.payload;
		},
	},
});

export const { clearAddressBooksInfo } = addressBookReducer.actions;
export default addressBookReducer.reducer;
