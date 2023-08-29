import { IToken } from '../../../models/IToken';

export interface IState {
	authInfo: IToken;
	loadingGetTokenInfo: boolean;
	loadingAddToken: boolean;
	errorMessage: string;
}
