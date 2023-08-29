import { useSnackbar } from 'notistack';

export const useErrorNotification = () => {
	const { enqueueSnackbar } = useSnackbar();
	const errorNotification = (message?: string) => {
		enqueueSnackbar(message ? message : 'Помилка виконання запиту', {
			variant: 'error',
			anchorOrigin: {
				vertical: 'top',
				horizontal: 'right',
			},
		});
	};

	return { errorNotification };
};
