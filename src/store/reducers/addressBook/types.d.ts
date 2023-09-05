import { IAddressBook } from '../../../models/IAddressBook';
import { IAddressbookForEntity } from '../../../models/IAddressbookForEntity';
import { IDealsStatus } from '../../../models/IDealsStatus';

export interface IState {
	addressBooks: IAddressBook[];
	addressBooksForEntity: IAddressbookForEntity;
	dealsStatus: IDealsStatus;
	loadingAddressBooks: boolean;
	loadingAddressBooksForEntity: boolean;
	loadingUpdateAddressBooksForEntity: boolean;
	loadingDealStatus: boolean;
	errorMessage: string;
}
