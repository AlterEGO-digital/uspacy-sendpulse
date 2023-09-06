import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as ProviderStore } from 'react-redux';

import UserSettingsContextProvider from '../../context/UserSettings';
import i18n from '../../i18n';
import { setupStore } from '../../store';
import SettingsWrapper from '../SettingsWrapper';
import { IProps } from './types';
const store = setupStore();
const Settings: React.FC<IProps> = ({ userSettings }) => {
	useEffect(() => {
		i18n.changeLanguage(userSettings?.lang);
	}, [userSettings?.lang]);

	return (
		<React.Suspense>
			<I18nextProvider i18n={i18n}>
				<UserSettingsContextProvider userSettings={userSettings}>
					<ProviderStore store={store}>
						<SettingsWrapper />
					</ProviderStore>
				</UserSettingsContextProvider>
			</I18nextProvider>
		</React.Suspense>
	);
};

export default Settings;
