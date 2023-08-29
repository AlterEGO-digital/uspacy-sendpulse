import Box from '@mui/material/Box';
import React from 'react';

import { IProps } from './types';

const App: React.FC<IProps> = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				color: (theme) => theme.palette.primary.main,
			}}
		>
			Main
		</Box>
	);
};

export default App;
