import type { IAddressbookForEntity } from '../models/IAddressbookForEntity';
import type { RootState } from '../store';
import {
	addAddressBookForEntity as addAddressBookForEntityAction,
	getAddressBookEntities as getAddressBookEntitiesAction,
	getAddressBooks as getAddressBooksAction,
	getDealsStatus as getDealsStatusAction,
	getExportStatus as getExportStatusAction,
	handleDealsStatus as handleDealsStatusAction,
	handleExportStatus as handleExportStatusAction,
	syncAddressBookEntities as syncAddressBookEntitiesAction,
} from '../store/reducers/addressBook/action';
import { clearAddressBooksInfo as clearAddressBooksInfoReducer } from '../store/reducers/addressBook/index';
import { useAppDispatch, useAppSelector } from './redux';

type AddressBookType = RootState['addressBook'];

export interface IUseAddressBook {
	getAddressBooks(): void;
	getAddressBookEntities(): void;
	addAddressBookForEntity(data: { leads?: number; contacts?: number; companies?: number }): Promise<IAddressbookForEntity>;
	clearAddressBooksInfo(): void;
	syncAddressBookEntities(): void;
	getDealsStatus(): void;
	getExportStatus(): void;
	handleDealsStatus(status: boolean): Promise<string>;
	handleExportStatus(status: boolean): Promise<string>;
}

export const useAddressBook = (): IUseAddressBook => {
	const dispatch = useAppDispatch();

	const getAddressBookEntities = () => {
		dispatch(getAddressBookEntitiesAction());
	};

	const getAddressBooks = () => {
		dispatch(getAddressBooksAction());
	};

	const addAddressBookForEntity = (data: { leads?: number; contacts?: number; companies?: number }) => {
		return dispatch(addAddressBookForEntityAction(data)).unwrap();
	};

	const clearAddressBooksInfo = () => {
		dispatch(clearAddressBooksInfoReducer());
	};

	const getDealsStatus = () => {
		dispatch(getDealsStatusAction());
	};
	const getExportStatus = () => {
		dispatch(getExportStatusAction());
	};
	const handleDealsStatus = (status: boolean) => {
		return dispatch(handleDealsStatusAction(status)).unwrap();
	};
	const handleExportStatus = (status: boolean) => {
		return dispatch(handleExportStatusAction(status)).unwrap();
	};
	const syncAddressBookEntities = () => {
		return dispatch(syncAddressBookEntitiesAction());
	};

	return {
		clearAddressBooksInfo,
		getAddressBooks,
		getAddressBookEntities,
		addAddressBookForEntity,
		getDealsStatus,
		getExportStatus,
		handleDealsStatus,
		handleExportStatus,
		syncAddressBookEntities,
	};
};

export const useAddressBookData = (): AddressBookType => {
	const { addressBook } = useAppSelector((state) => state);

	return {
		...addressBook,
	};
};
