export interface IAddressbookForEntity {
	status?: boolean;
	message?: string;
	entities: {
		leads?: number;
		contacts?: number;
		companies?: number;
	};
}
