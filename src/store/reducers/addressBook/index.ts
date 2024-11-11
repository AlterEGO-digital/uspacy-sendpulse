import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAddressBook } from '../../../models/IAddressBook';
import { IAddressbookForEntity } from '../../../models/IAddressbookForEntity';
import { IDealsStatus } from '../../../models/IDealsStatus';
import { IExportStatus } from '../../../models/IExportStatus';
import {
	addAddressBookForEntity,
	getAddressBookEntities,
	getAddressBooks,
	getDealsStatus,
	getExportStatus,
	handleDealsStatus,
	handleExportStatus,
} from './action';
import { IState } from './types';

const initialState = {
	addressBooks: [],
	addressBooksForEntity: {
		entities: {},
	},
	dealsStatus: {
		status: false,
		message: '',
	},
	exportStatus: {
		status: false,
		message: '',
	},
	errorMessage: '',
	loadingAddressBooks: true,
	loadingAddressBooksForEntity: true,
	loadingUpdateAddressBooksForEntity: false,
	loadingDealStatus: true,
	loadingExportStatus: true,
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
			state.addressBooks = !!action.payload.length ? action.payload : [];
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
			state.addressBooksForEntity = { entities: { leads: 0 } };
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
		[getDealsStatus.fulfilled.type]: (state, action: PayloadAction<IDealsStatus>) => {
			state.loadingDealStatus = false;
			state.errorMessage = '';
			state.dealsStatus = action.payload;
		},
		[getDealsStatus.pending.type]: (state) => {
			state.loadingDealStatus = true;
			state.errorMessage = '';
		},
		[getDealsStatus.rejected.type]: (state, action: PayloadAction<string>) => {
			state.loadingDealStatus = false;
			state.errorMessage = action.payload;
		},
		[handleDealsStatus.fulfilled.type]: (state, action: PayloadAction<IDealsStatus>) => {
			state.errorMessage = '';
			state.dealsStatus = action.payload;
		},
		[handleDealsStatus.pending.type]: (state) => {
			state.errorMessage = '';
		},
		[handleDealsStatus.rejected.type]: (state, action: PayloadAction<string>) => {
			state.errorMessage = action.payload;
		},
		[getExportStatus.fulfilled.type]: (state, action: PayloadAction<IDealsStatus>) => {
			state.loadingExportStatus = false;
			state.errorMessage = '';
			state.exportStatus = action.payload;
		},
		[getExportStatus.pending.type]: (state) => {
			state.loadingExportStatus = true;
			state.errorMessage = '';
		},
		[getExportStatus.rejected.type]: (state, action: PayloadAction<string>) => {
			state.loadingExportStatus = false;
			state.errorMessage = action.payload;
		},
		[handleExportStatus.fulfilled.type]: (state, action: PayloadAction<IExportStatus>) => {
			state.errorMessage = '';
			state.exportStatus = action.payload;
		},
		[handleExportStatus.pending.type]: (state) => {
			state.errorMessage = '';
		},
		[handleExportStatus.rejected.type]: (state, action: PayloadAction<string>) => {
			state.errorMessage = action.payload;
		},
	},
});

export const { clearAddressBooksInfo } = addressBookReducer.actions;
export default addressBookReducer.reducer;
