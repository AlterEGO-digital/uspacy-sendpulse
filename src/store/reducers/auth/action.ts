import { createAsyncThunk } from '@reduxjs/toolkit';

import { SENDPULSE_API } from '../../../const';
import { getToken } from '../../../helpers/db';

export const getTokenInfo = createAsyncThunk('apps/getTokenInfo', async (_, thunkAPI) => {
	try {
		const token = await getToken();
		return await fetch(`${SENDPULSE_API}/tokens/getTokenInfo`, {
			headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
		}).then(async (res) => {
			return await res.json();
		});
	} catch (e) {
		return thunkAPI.rejectWithValue('Failure');
	}
});

export const addToken = createAsyncThunk('apps/addToken', async (data: { client_id: string; client_secret: string }, thunkAPI) => {
	try {
		const token = await getToken();
		return await fetch(`${SENDPULSE_API}/tokens/addToken`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
		}).then(async (res) => {
			return await res.json();
		});
	} catch (e) {
		return thunkAPI.rejectWithValue('Failure');
	}
});
