import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CategoryBtn from './CategoryBtn';

export default {
	title: 'CategoryBtn',
	component: CategoryBtn,
};

const CATEGORY_TEXT = '웹 개발';

export function Default() {
	return (
		<BrowserRouter>
			<CategoryBtn categoryName={CATEGORY_TEXT} onClick={() => {}} />
		</BrowserRouter>
	);
}
