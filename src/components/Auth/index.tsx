import LoadingButton from '@mui/lab/LoadingButton';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import MuiCard, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';

import { useAuth, useAuthData } from '../../hooks/useAuth';
import { useErrorNotification } from '../../hooks/useErrorNotification';

interface State {
	clientId: string;
	clientSecret: string;
}

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
	[theme.breakpoints.up('sm')]: { width: '28rem' },
}));
const StringInput = styled(TextField)<CardProps>(() => ({
	width: '100%',
	letterSpacing: '0.15px',
	'& .MuiOutlinedInput-notchedOutline': {
		border: '1px solid rgba(58, 53, 65, 0.23)',
	},
	'& .MuiFormHelperText-root.Mui-error': {
		position: 'absolute',
		bottom: '-20px',
		fontSize: '12px',
	},
	marginTop: '20px',
}));
const Auth: React.FC = () => {
	const theme = useTheme();
	const { addToken } = useAuth();
	const { loadingAddToken, authInfo } = useAuthData();
	const { errorNotification } = useErrorNotification();
	const [isIncorrectData, setIsIncorrectData] = useState(false);

	const [values, setValues] = useState<State>({
		clientId: '',
		clientSecret: '',
	});

	useEffect(() => {
		if (authInfo.has_token) {
			setValues({
				clientId: authInfo.client_id,
				clientSecret: authInfo.client_secret,
			});
		}
	}, [authInfo]);

	const DEFAULT_ERROR_FIELD = {
		clientId: false,
		clientSecret: false,
	};
	const [errorValidation, setErrorValidation] = useState(DEFAULT_ERROR_FIELD);
	const FIELDS = ['clientId', 'clientSecret'];

	const isValidation = useMemo(() => Object.values(errorValidation).some((it) => it), [errorValidation]);

	const handleError = (key: 'clientId' | 'clientSecret') => (val: boolean) => {
		setErrorValidation((prevState) => ({ ...prevState, [key]: val }));
	};

	const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value });
		handleError(prop)(!event.target.value.trim());
	};

	const onFocus = (key: 'clientId' | 'clientSecret') => {
		setIsIncorrectData(false);
		handleError(key)(false);
	};
	const onBlur = (e, key: 'clientId' | 'clientSecret') => {
		handleError(key)(!e.target.value.trim());
	};

	const auth = () => {
		setIsIncorrectData(false);
		const checkValidationField = Object.entries(values)
			.filter(([key]) => FIELDS.includes(key))
			.some(([, val]) => {
				return !val.trim().length;
			});
		if (isValidation || checkValidationField) {
			setErrorValidation(
				// @ts-ignore
				Object.entries(values)
					.filter(([key]) => FIELDS.includes(key))
					.reduce((acc, [key, value]) => {
						return { ...acc, [key]: !value.trim().length };
					}, {}),
			);
			const checkStringFieldValidation = Object.entries(values)
				.filter(([key]) => FIELDS.includes(key))
				.some(([, val]) => {
					return !val.trim().length;
				});
			if (checkStringFieldValidation) {
				errorNotification('Незаповнені необхідні поля');
			}
			return;
		}
		addToken(values.clientId, values.clientSecret).then((res) => {
			setIsIncorrectData(!res.payload.has_token);
		});
	};

	const onKeyDown = (e) => {
		e.stopPropagation();
		if (e.key === 'Enter') {
			auth();
		}
	};

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: theme.spacing(5),
			}}
		>
			<Card sx={{ zIndex: 1 }}>
				<CardContent sx={{ p: (t) => `${t.spacing(12, 9, 7)} !important`, position: 'relative' }}>
					<Box sx={{ mb: '10px' }}>
						<Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5 }}>
							Sendpulse
						</Typography>
						<Typography variant="body2">
							Скопіюйте, будь ласка, client id та client secret в особистому кабінеті Sendpulse та авторизуйтесь в системі
						</Typography>
					</Box>
					<form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
						<StringInput
							autoFocus
							fullWidth
							label="ID"
							error={errorValidation.clientId}
							helperText={errorValidation.clientId && 'Введіть client ID'}
							onKeyDown={onKeyDown}
							onFocus={() => onFocus('clientId')}
							onBlur={(e) => onBlur(e, 'clientId')}
							name="clientId"
							value={values.clientId}
							onChange={handleChange('clientId')}
							type="text"
						/>
						<StringInput
							fullWidth
							error={errorValidation.clientSecret}
							helperText={errorValidation.clientSecret && 'Введіть client secret'}
							name="clientSecret"
							label="Secret"
							value={values.clientSecret}
							onKeyDown={onKeyDown}
							onFocus={() => onFocus('clientSecret')}
							onBlur={(e) => onBlur(e, 'clientSecret')}
							id="clientSecret"
							onChange={handleChange('clientSecret')}
							type="text"
						/>
						<LoadingButton
							fullWidth
							loading={loadingAddToken}
							onClick={auth}
							size="large"
							type="submit"
							variant="contained"
							sx={{ mt: '20px', background: theme.palette.primary.main }}
						>
							Login
						</LoadingButton>
					</form>
					{!loadingAddToken && !authInfo.has_token && isIncorrectData && (
						<Typography
							sx={{
								fontSize: '12px',
								color: theme.palette.error.main,
								position: 'absolute',
								bottom: '11px',
							}}
						>
							Ви ввели неправильні авторизаційні дані! <br />
							Будь ласка, перевірте та повторіть спробу
						</Typography>
					)}
				</CardContent>
			</Card>
		</Box>
	);
};

export default Auth;
