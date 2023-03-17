import { atom } from 'recoil';

export const categorySelect = atom({
	key: 'category',
	default: {
		categoryId: 0,
		categoryName: '',
	},
});

export const postAddModalSelect = atom({
	key: 'postAddModal',
	default: false,
});

export const categoryDeleteModalSelect = atom({
	key: 'categoryDeleteModal',
	default: false,
});
