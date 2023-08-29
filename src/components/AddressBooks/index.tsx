import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';

import { useAddressBook, useAddressBookData } from '../../hooks/useAddressBook';
import { useAuth } from '../../hooks/useAuth';
import EntitySelect from '../EntitySelect';

const AddressBooks = () => {
	const { addressBooksForEntity, addressBooks } = useAddressBookData();
	const { getAddressBooks, getAddressBookEntities, addAddressBookForEntity } = useAddressBook();
	const { addToken } = useAuth();
	const ENTITIES = ['leads', 'contacts', 'companies'];
	const [currentAddressBooksForEntity, setCurrentAddressBooksForEntity] = useState(addressBooksForEntity?.entities);
	const [isDiff, setIsDiff] = useState(false);

	useEffect(() => {
		setCurrentAddressBooksForEntity(addressBooksForEntity?.entities);
	}, [addressBooksForEntity?.entities]);

	useEffect(() => {
		!addressBooks.length && getAddressBooks();
		!Object.keys(addressBooksForEntity?.entities).length && getAddressBookEntities();
	}, []);

	useEffect(() => {
		setIsDiff(
			addressBooksForEntity?.entities.leads !== currentAddressBooksForEntity.leads ||
				addressBooksForEntity?.entities.contacts !== currentAddressBooksForEntity.contacts ||
				addressBooksForEntity?.entities.companies !== currentAddressBooksForEntity.companies,
		);
	}, [addressBooksForEntity?.entities, currentAddressBooksForEntity]);

	const changeCurrentAddressBooksForEntity = (field: 'leads' | 'contacts' | 'companies') => (id: number) => {
		setCurrentAddressBooksForEntity((prev) => ({ ...prev, [field]: id }));
	};

	const saveChange = () => {
		addAddressBookForEntity(
			Object.entries(currentAddressBooksForEntity)
				.filter(([, val]) => val !== 0)
				.reduce((acc, [key, id]) => {
					return { ...acc, [key]: id };
				}, {}),
		);
	};

	const cancelChange = () => {
		setCurrentAddressBooksForEntity(addressBooksForEntity?.entities);
	};

	const logout = () => {
		addToken('0', '0');
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '15px',
			}}
		>
			{ENTITIES?.map((it) => (
				<EntitySelect
					key={it}
					entityName={it as 'leads' | 'contacts' | 'companies'}
					addressBookId={currentAddressBooksForEntity[it] || 0}
					onChangeAddressBookId={changeCurrentAddressBooksForEntity(it as 'leads' | 'contacts' | 'companies')}
				/>
			))}

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				{isDiff && (
					<>
						<Button
							sx={{
								textTransform: 'initial',
								marginLeft: '5px',
							}}
							onClick={saveChange}
						>
							Зберегти
						</Button>
						<Button
							sx={{
								textTransform: 'initial',
							}}
							onClick={cancelChange}
						>
							Скасувати
						</Button>
					</>
				)}
				<Button
					sx={{
						marginLeft: 'auto',
						textTransform: 'initial',
						marginRight: '15px',
					}}
					onClick={logout}
				>
					Вийти
				</Button>
			</Box>
		</Box>
	);
};

export default AddressBooks;
