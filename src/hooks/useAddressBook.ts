import { RootState } from '../store';
import {
	addAddressBookForEntity as addAddressBookForEntityAction,
	getAddressBookEntities as getAddressBookEntitiesAction,
	getAddressBooks as getAddressBooksAction,
	getDealsStatus as getDealsStatusAction,
	handleDealsStatus as handleDealsStatusAction,
} from '../store/reducers/addressBook/action';
import { clearAddressBooksInfo as clearAddressBooksInfoReducer } from '../store/reducers/addressBook/index';
import { useAppDispatch, useAppSelector } from './redux';

type AddressBookType = RootState['addressBook'];

export interface IUseAddressBook {
	getAddressBooks(): void;
	getAddressBookEntities(): void;
	addAddressBookForEntity(data: { leads?: number; contacts?: number; companies?: number }): void;
	clearAddressBooksInfo(): void;
	getDealsStatus(): void;
	handleDealsStatus(status: boolean): void;
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
		dispatch(addAddressBookForEntityAction(data));
	};

	const clearAddressBooksInfo = () => {
		dispatch(clearAddressBooksInfoReducer());
	};

	const getDealsStatus = () => {
		dispatch(getDealsStatusAction());
	};
	const handleDealsStatus = (status: boolean) => {
		dispatch(handleDealsStatusAction(status));
	};

	return {
		clearAddressBooksInfo,
		getAddressBooks,
		getAddressBookEntities,
		addAddressBookForEntity,
		getDealsStatus,
		handleDealsStatus,
	};
};

export const useAddressBookData = (): AddressBookType => {
	const { addressBook } = useAppSelector((state) => state);

	return {
		...addressBook,
	};
};
