import Box from '@mui/material/Box';
import React, { useEffect } from 'react';

import { useAuth, useAuthData } from '../../hooks/useAuth';
import AddressBooks from '../AddressBooks';
import Auth from '../Auth';
import Loader from '../Loader';
const SettingsWrapper: React.FC = () => {
	const { getTokenInfo } = useAuth();
	const { loadingGetTokenInfo, authInfo } = useAuthData();

	useEffect(() => {
		getTokenInfo();
	}, []);

	if (loadingGetTokenInfo)
		return (
			<Box
				sx={{
					height: '500px',
				}}
			>
				<Loader size={100} />
			</Box>
		);
	if (authInfo?.has_token) return <AddressBooks />;
	return <Auth />;
};

export default SettingsWrapper;
