import { Rule } from 'antd/es/form';

export interface IModalCard {
	content: IRequestElement;
	isActive?: boolean;
	onChangeActiveOnClick?: () => void;
}

///Modal auth...

export interface IModalsAuthentically {
	isActive?: boolean;
}

export interface IContentFromType {
	type?: TTypeSliceModal;
	withAuthorization: React.ReactElement | string;
	withoutAuthorization: React.ReactElement | string;
}

export interface IModalFormAuthValues {
	email: string;
	password: string;
}

export interface IAuthProps {
	visibleText: string;
	name: string;
	type: 'text' | 'password';
	rules?: Rule[] | undefined;
}

export interface IModalFormRegValues {
	email: string;
	password: string;
	username: string;
}

export interface IRegProps {
	visibleText: string;
	name: string;
	type: 'text' | 'password';
	rules?: Rule[] | undefined;
}

// ///Modal Card

export interface IModalNews {
	content: IRequestNews;
	isActive: boolean;
	onExit: () => void;
}
