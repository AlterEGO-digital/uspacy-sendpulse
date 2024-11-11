import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import { useTranslation } from 'react-i18next';

import type { IProps } from './types';

const ExportEntitiesAlertDialog: React.FC<IProps> = ({ onClose }) => {
	const { t } = useTranslation();

	return (
		<Dialog open onClose={onClose}>
			<DialogTitle id="export-entities-dialog-title" color="error.main">
				{t('exportEntitiesAlertDialog.title')}
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="export-entities-dialog-description">{t('exportEntitiesAlertDialog.description')}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>{t('gotIt')}</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ExportEntitiesAlertDialog;
