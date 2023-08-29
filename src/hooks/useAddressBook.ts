import { RootState } from '../store';
import {
	addAddressBookForEntity as addAddressBookForEntityAction,
	getAddressBookEntities as getAddressBookEntitiesAction,
	getAddressBooks as getAddressBooksAction,
} from '../store/reducers/addressBook/action';
import { clearAddressBooksInfo as clearAddressBooksInfoReducer } from '../store/reducers/addressBook/index';
import { useAppDispatch, useAppSelector } from './redux';

type AddressBookType = RootState['addressBook'];

export interface IUseAddressBook {
	getAddressBooks(): void;
	getAddressBookEntities(): void;
	addAddressBookForEntity(data: { leads?: number; contacts?: number; companies?: number }): void;
	clearAddressBooksInfo(): void;
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

	return {
		clearAddressBooksInfo,
		getAddressBooks,
		getAddressBookEntities,
		addAddressBookForEntity,
	};
};

export const useAddressBookData = (): AddressBookType => {
	const { addressBook } = useAppSelector((state) => state);

	return {
		...addressBook,
	};
};
