import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { unwrapPromise } from '../../helpers/common';
import { useAddressBook, useAddressBookData } from '../../hooks/useAddressBook';
import { useAuth } from '../../hooks/useAuth';
import { useErrorNotification } from '../../hooks/useErrorNotification';
import EntitySelect from '../EntitySelect';

const ExportEntitiesAlertDialog = lazy(() => import('../ExportEntitiesAlertDialog'));

const ENTITIES = ['leads', 'contacts', 'companies'];
const SUCCESS_STATUES = ['enabled', 'success'];

const hasSuccessStatus = (status: string) => SUCCESS_STATUES.includes(status);

const AddressBooks = () => {
	const { t } = useTranslation();
	const { errorNotification } = useErrorNotification();
	const { addressBooksForEntity, addressBooks, dealsStatus, exportStatus } = useAddressBookData();
	const {
		getAddressBooks,
		getAddressBookEntities,
		addAddressBookForEntity,
		syncAddressBookEntities,
		clearAddressBooksInfo,
		getDealsStatus,
		getExportStatus,
		handleDealsStatus,
		handleExportStatus,
	} = useAddressBook();
	const { addToken } = useAuth();

	const [currentAddressBooksForEntity, setCurrentAddressBooksForEntity] = useState(addressBooksForEntity?.entities);
	const [isDiff, setIsDiff] = useState(false);
	const [isExportForbidden, setIsExportForbidden] = useState(false);
	const [isDealEnable, setIsDealEnable] = useState(['enabled', 'success'].includes(dealsStatus?.message));
	const [isExportEnable, setIsExportEnable] = useState(['enabled', 'success'].includes(exportStatus?.message));
	const isCheckboxTouched = useRef(false);

	useEffect(() => {
		setIsDealEnable(['enabled', 'success'].includes(dealsStatus?.message));
	}, [dealsStatus]);

	useEffect(() => {
		setIsExportEnable(['enabled', 'success'].includes(exportStatus?.message));
	}, [exportStatus]);

	useEffect(() => {
		setCurrentAddressBooksForEntity(addressBooksForEntity?.entities);
	}, [addressBooksForEntity?.entities]);

	useEffect(() => {
		!addressBooks?.length && getAddressBooks();
		!Object.keys(addressBooksForEntity?.entities)?.length && getAddressBookEntities();
		getDealsStatus();
		getExportStatus();
	}, []);

	useEffect(() => {
		setIsDiff(
			addressBooksForEntity?.entities?.leads !== currentAddressBooksForEntity?.leads ||
				addressBooksForEntity?.entities?.contacts !== currentAddressBooksForEntity?.contacts ||
				addressBooksForEntity?.entities?.companies !== currentAddressBooksForEntity?.companies,
		);
	}, [addressBooksForEntity?.entities, currentAddressBooksForEntity]);

	const makeCheckboxTouched = () => {
		if (!isCheckboxTouched.current) {
			isCheckboxTouched.current = true;
			setIsDiff(true);
		}
	};

	const changeDealStatus = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const newDealsStatus = event.target.checked;
		const prevDealsStatus = isDealEnable;

		setIsDealEnable(newDealsStatus);

		const [status, error] = await unwrapPromise(handleDealsStatus(newDealsStatus));

		if (error) {
			errorNotification(t(`errors.changeDealsSetting.${error}`));
			return setIsDealEnable(prevDealsStatus);
		}

		setIsDealEnable(hasSuccessStatus(status));
	};
	const changeExportStatus = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const newExportStatus = event.target.checked;
		const prevExportStatus = isExportEnable;

		setIsExportEnable(newExportStatus);
		makeCheckboxTouched();

		const [status, error] = await unwrapPromise(handleExportStatus(newExportStatus));

		if (error) {
			errorNotification(t(`errors.changeExportSetting.${error}`));
			return setIsExportEnable(prevExportStatus);
		}

		setIsExportEnable(hasSuccessStatus(status));
	};

	const changeCurrentAddressBooksForEntity = (field: 'leads' | 'contacts' | 'companies') => (id: number) => {
		setCurrentAddressBooksForEntity((prev) => ({ ...prev, [field]: id }));
	};

	const saveChange = async () => {
		const payload = Object.entries(currentAddressBooksForEntity)
			.filter(([, val]) => val !== 0)
			.reduce((acc, [key, id]) => {
				return { ...acc, [key]: id };
			}, {});

		const isAnySelectFilled = Object.keys(payload).length > 0;

		if (!isAnySelectFilled && isExportEnable) {
			return setIsExportForbidden(true);
		}

		setIsDiff(false);

		const [response, error] = await unwrapPromise(addAddressBookForEntity(payload));

		if (error) {
			return errorNotification(t(`errors.addAddressBookForEntity.${error}`));
		}

		if (response.status) {
			syncAddressBookEntities();
		}

		isCheckboxTouched.current = false;
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
				<Box>
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
								{t('createAgreement')}
							</Typography>
						}
					/>
					<FormControlLabel
						sx={{
							fontSize: '14px',
							marginLeft: '5px',
						}}
						control={<Checkbox checked={isExportEnable} onChange={changeExportStatus} />}
						label={
							<Typography
								component="span"
								sx={{
									color: (theme) => theme.palette.text.primary,
									fontSize: '14px',
								}}
							>
								{t('exportEntities')}
							</Typography>
						}
					/>
				</Box>
				<Button
					sx={{
						marginLeft: 'auto',
						textTransform: 'initial',
						marginRight: '15px',
						alignSelf: 'flex-end',
					}}
					onClick={logout}
				>
					{t('goOut')}
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
							{t('save')}
						</Button>
						<Button
							sx={{
								textTransform: 'initial',
							}}
							onClick={cancelChange}
						>
							{t('cancel')}
						</Button>
					</>
				)}
			</Box>

			{isExportForbidden && (
				<Suspense>
					<ExportEntitiesAlertDialog onClose={() => setIsExportForbidden(false)} />
				</Suspense>
			)}
		</Box>
	);
};

export default AddressBooks;
