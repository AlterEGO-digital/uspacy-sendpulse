import { IAddressBook } from '../../../models/IAddressBook';
import { IAddressbookForEntity } from '../../../models/IAddressbookForEntity';

export interface IState {
	addressBooks: IAddressBook[];
	addressBooksForEntity: IAddressbookForEntity;
	loadingAddressBooks: boolean;
	loadingAddressBooksForEntity: boolean;
	loadingUpdateAddressBooksForEntity: boolean;
	errorMessage: string;
}
