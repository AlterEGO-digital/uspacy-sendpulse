import { IAddressBook } from '../../../models/IAddressBook';
import { IAddressbookForEntity } from '../../../models/IAddressbookForEntity';
import { IDealsStatus } from '../../../models/IDealsStatus';
import { IExportStatus } from '../../../models/IExportStatus';

export interface IState {
	addressBooks: IAddressBook[];
	addressBooksForEntity: IAddressbookForEntity;
	dealsStatus: IDealsStatus;
	exportStatus: IExportStatus;
	loadingAddressBooks: boolean;
	loadingAddressBooksForEntity: boolean;
	loadingUpdateAddressBooksForEntity: boolean;
	loadingDealStatus: boolean;
	loadingExportStatus: boolean;
	errorMessage: string;
}
