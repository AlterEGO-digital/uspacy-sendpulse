import React from 'react';
import { Provider as ProviderStore } from 'react-redux';

import UserSettingsContextProvider from '../../context/UserSettings';
import { setupStore } from '../../store';
import SettingsWrapper from '../SettingsWrapper';
import { IProps } from './types';
const store = setupStore();
const Settings: React.FC<IProps> = ({ userSettings }) => {
	return (
		<React.Suspense>
			<UserSettingsContextProvider userSettings={userSettings}>
				<ProviderStore store={store}>
					<SettingsWrapper />
				</ProviderStore>
			</UserSettingsContextProvider>
		</React.Suspense>
	);
};

export default Settings;
