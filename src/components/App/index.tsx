import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import UserSettingsContextProvider from '../../context/UserSettings';
import i18n from '../../i18n';
import { IProps } from './types';

const App: React.FC<IProps> = ({ userSettings }) => {
	useEffect(() => {
		i18n.changeLanguage(userSettings?.lang);
	}, [userSettings?.lang]);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				color: (theme) => theme.palette.primary.main,
			}}
		>
			<I18nextProvider i18n={i18n}>
				<UserSettingsContextProvider userSettings={userSettings}>Main</UserSettingsContextProvider>
			</I18nextProvider>
		</Box>
	);
};

export default App;
