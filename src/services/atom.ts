import { atom } from 'recoil';

const categorySelect = atom({
	key: 'category',
	default: '',
});

export default categorySelect;
