import { Button, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';

import { useAddressBookData } from '../../hooks/useAddressBook';
import DropDownMenu from '../DropDownMenu';
import Loader from '../Loader';

interface IProps {
	entityName: 'leads' | 'contacts' | 'companies';
	addressBookId: number;
	onChangeAddressBookId(id: number): void;
}
const EntitySelect: React.FC<IProps> = ({ entityName, addressBookId, onChangeAddressBookId }) => {
	const theme = useTheme();
	const [anchorUnit, setAnchorUnit] = useState<null | HTMLElement>(null);
	const { addressBooks, loadingAddressBooks, loadingAddressBooksForEntity } = useAddressBookData();
	const [currentAddressBookId, setCurrentAddressId] = useState(addressBookId);
	const address = useMemo(
		() => [{ id: 0, name: 'Не обрано' }, ...addressBooks]?.find((it) => it?.id === currentAddressBookId),
		[addressBooks, currentAddressBookId],
	);
	const loading = useMemo(() => loadingAddressBooks || loadingAddressBooksForEntity, [loadingAddressBooks, loadingAddressBooksForEntity]);
	const openUnit = Boolean(anchorUnit);

	useEffect(() => {
		setCurrentAddressId(addressBookId);
	}, [addressBookId]);

	const handleAnchorClick = (event: React.MouseEvent<HTMLSpanElement>, func: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => {
		func(event.currentTarget);
	};

	const handleDropDownClose = (event: React.MouseEvent<HTMLDivElement>, func: Dispatch<SetStateAction<null | HTMLElement>>) => {
		func(null);
	};

	const getTitle = (name: string) => {
		switch (name) {
			case 'leads':
				return 'Лід';
			case 'contacts':
				return 'Контакт';
			case 'companies':
				return 'Компанія';
			default:
				return '';
		}
	};

	const handleUnitChange = (id: number) => {
		setCurrentAddressId(id);
		onChangeAddressBookId(id);
	};

	const makeInactive = () => {
		setCurrentAddressId(0);
		onChangeAddressBookId(0);
	};

	return (
		<Box
			sx={{
				background: theme.palette.grey[600],
				color: theme.palette.background.paper,
				padding: '7px 15px',
				borderRadius: '6px',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Typography
				sx={{
					width: '100px',
				}}
			>
				{getTitle(entityName)}
			</Typography>
			{loading ? (
				<Loader size={25} />
			) : (
				<>
					<Typography
						sx={{
							fontSize: '16px',
							color: openUnit ? theme.palette.primary.main : theme.palette.text.disabled,
							letterSpacing: '0.15px',
							cursor: 'pointer',
							'&:hover': {
								color: theme.palette.primary.main,
							},
						}}
						onClick={(e) => handleAnchorClick(e, setAnchorUnit)}
					>
						{address?.name}
					</Typography>
					<DropDownMenu
						id={currentAddressBookId}
						options={Array.from(new Set([{ id: 0, name: 'Не обрано' }, ...addressBooks?.map((it) => ({ id: it.id, name: it.name }))]))}
						anchorEl={anchorUnit}
						handleClose={(e) => handleDropDownClose(e, setAnchorUnit)}
						handleChange={handleUnitChange}
						open={openUnit}
					/>
				</>
			)}
			<Button
				disabled={loading || !currentAddressBookId}
				sx={{
					textTransform: 'initial',
					fontSize: '14px',
				}}
				onClick={makeInactive}
			>
				Скасувати
			</Button>
		</Box>
	);
};

export default EntitySelect;
