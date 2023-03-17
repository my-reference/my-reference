import { atom } from 'recoil';

export const categorySelect = atom({
	key: 'category',
	default: '',
});

export const postAddModalSelect = atom({
	key: 'postAddModal',
	default: false,
});
