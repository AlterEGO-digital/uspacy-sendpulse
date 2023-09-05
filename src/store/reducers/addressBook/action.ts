import { createAsyncThunk } from '@reduxjs/toolkit';

import { SENDPULSE_API } from '../../../const';
import { getToken } from '../../../helpers/db';

export const getAddressBooks = createAsyncThunk('addressBook/getAddressBooks', async (_, thunkAPI) => {
	try {
		const token = await getToken();
		return await fetch(`${SENDPULSE_API}/addressbooks/getAddressbooks`, {
			headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
		}).then(async (res) => {
			return await res.json();
		});
	} catch (e) {
		return thunkAPI.rejectWithValue('Failure');
	}
});

export const getAddressBookEntities = createAsyncThunk('addressBook/getAddressBookEntities', async (_, thunkAPI) => {
	try {
		const token = await getToken();
		return await fetch(`${SENDPULSE_API}/addressbooks/getAddressbookEntities`, {
			headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
		}).then(async (res) => {
			return await res.json();
		});
	} catch (e) {
		return thunkAPI.rejectWithValue('Failure');
	}
});

export const addAddressBookForEntity = createAsyncThunk(
	'addressBook/addAddressBookForEntity',
	async (data: { leads?: number; contacts?: number; companies?: number }, thunkAPI) => {
		try {
			const token = await getToken();
			return await fetch(`${SENDPULSE_API}/addressbooks/addAddressbookForEntity`, {
				method: 'POST',
				body: JSON.stringify({ entities: data }),
				headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			}).then(async (res) => {
				return await res.json();
			});
		} catch (e) {
			return thunkAPI.rejectWithValue('Failure');
		}
	},
);

export const getDealsStatus = createAsyncThunk('addressBook/getDealsStatus', async (_, thunkAPI) => {
	try {
		const token = await getToken();
		return await fetch(`${SENDPULSE_API}/deals/settingStatus`, {
			headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
		}).then(async (res) => {
			return await res.json();
		});
	} catch (e) {
		return thunkAPI.rejectWithValue('Failure');
	}
});

export const handleDealsStatus = createAsyncThunk('addressBook/handleDealsStatus', async (turnOn: boolean, thunkAPI) => {
	try {
		const token = await getToken();
		return await fetch(`${SENDPULSE_API}/deals/${turnOn ? 'enable' : 'disable'}`, {
			method: 'POST',
			headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
		}).then(async (res) => {
			return await res.json();
		});
	} catch (e) {
		return thunkAPI.rejectWithValue('Failure');
	}
});
