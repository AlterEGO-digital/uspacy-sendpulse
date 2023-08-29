import { RootState } from '../store';
import { addToken as addTokenAction, getTokenInfo as getTokenInfoAction } from '../store/reducers/auth/action';
import { clearAuthInfo as clearAuthInfoReducer } from '../store/reducers/auth/index';
import { useAppDispatch, useAppSelector } from './redux';

type AuthType = RootState['auth'];

export interface IUseApps {
	getTokenInfo(): void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	addToken(clientId: string, clientSecret: string): Promise<any>;
	clearAuthInfo(): void;
}

export const useAuth = (): IUseApps => {
	const dispatch = useAppDispatch();

	const getTokenInfo = () => {
		dispatch(getTokenInfoAction());
	};

	const addToken = (clientId: string, clientSecret: string) => {
		return dispatch(addTokenAction({ client_id: clientId, client_secret: clientSecret }));
	};

	const clearAuthInfo = () => {
		dispatch(clearAuthInfoReducer());
	};

	return {
		clearAuthInfo,
		getTokenInfo,
		addToken,
	};
};

export const useAuthData = (): AuthType => {
	const { auth } = useAppSelector((state) => state);

	return {
		...auth,
	};
};
