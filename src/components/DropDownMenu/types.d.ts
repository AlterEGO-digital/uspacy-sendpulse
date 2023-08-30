export interface IProps {
	id: number;
	anchorEl: null | HTMLElement;
	open: boolean;
	handleClose(event): void;
	handleChange(id: number): void;
	options: { name: string; id: number }[];
}
