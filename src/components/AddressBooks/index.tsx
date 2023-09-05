import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

import { isStage } from '../../const';
import { useAddressBook, useAddressBookData } from '../../hooks/useAddressBook';
import { useAuth } from '../../hooks/useAuth';
import EntitySelect from '../EntitySelect';

const AddressBooks = () => {
	const { addressBooksForEntity, addressBooks, dealsStatus } = useAddressBookData();
	const { getAddressBooks, getAddressBookEntities, addAddressBookForEntity, clearAddressBooksInfo, getDealsStatus, handleDealsStatus } =
		useAddressBook();
	const { addToken } = useAuth();
	const ENTITIES = ['leads', 'contacts', 'companies'];
	const [currentAddressBooksForEntity, setCurrentAddressBooksForEntity] = useState(addressBooksForEntity?.entities);
	const [isDiff, setIsDiff] = useState(false);
	const [isDealEnable, setIsDealEnable] = useState(['enabled', 'success'].includes(dealsStatus?.message));

	useEffect(() => {
		setIsDealEnable(['enabled', 'success'].includes(dealsStatus?.message));
	}, [dealsStatus?.message]);
	useEffect(() => {
		setCurrentAddressBooksForEntity(addressBooksForEntity?.entities);
	}, [addressBooksForEntity?.entities]);

	useEffect(() => {
		!addressBooks?.length && getAddressBooks();
		!Object.keys(addressBooksForEntity?.entities)?.length && getAddressBookEntities();
		getDealsStatus();
	}, []);

	useEffect(() => {
		setIsDiff(
			addressBooksForEntity?.entities.leads !== currentAddressBooksForEntity?.leads ||
				addressBooksForEntity?.entities.contacts !== currentAddressBooksForEntity?.contacts ||
				addressBooksForEntity?.entities.companies !== currentAddressBooksForEntity?.companies,
		);
	}, [addressBooksForEntity?.entities, currentAddressBooksForEntity]);

	const changeDealStatus = (event) => {
		handleDealsStatus(event.target.checked);
		setIsDealEnable(event.target.checked);
	};
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
		addToken('0', '0').then(clearAddressBooksInfo);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '15px',
				padding: '10px 30px',
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
				<FormControlLabel
					sx={{
						fontSize: '14px',
						marginLeft: '5px',
					}}
					control={<Checkbox checked={isDealEnable} onChange={changeDealStatus} />}
					label={
						<Typography
							component="span"
							sx={{
								color: (theme) => theme.palette.text.primary,
								fontSize: '14px',
							}}
						>
							створювати Угоду після створення Контакту в Адресній книзі Sendpulse
						</Typography>
					}
				/>
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
			</Box>
		</Box>
	);
};

export default AddressBooks;
