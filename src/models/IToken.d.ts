export interface IToken {
	status: boolean;
	message: string;
	client_id?: string;
	client_secret?: string;
	has_token: boolean;
}
