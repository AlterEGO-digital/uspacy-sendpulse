import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import React from 'react';

import { IProps } from './types';

const DropDownMenu: React.FC<IProps> = ({ id, anchorEl, open, handleClose, handleChange, options }) => {
	const onClick = (event, item) => {
		handleChange(item.id);
		handleClose(event);
	};

	return (
		<Menu
			anchorEl={anchorEl}
			open={open}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			sx={{
				'& .MuiPaper-root': {
					width: 'unset',
				},
			}}
		>
			{options.map((item) => (
				<MenuItem
					onClick={(e) => onClick(e, item)}
					key={item.id}
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 2,
						...(id === item.id && { color: (theme) => theme.palette.primary.main }),
					}}
				>
					<Typography>{item.name}</Typography>
				</MenuItem>
			))}
		</Menu>
	);
};

export default DropDownMenu;
