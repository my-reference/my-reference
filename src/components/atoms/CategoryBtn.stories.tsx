import React from 'react';
import CategoryBtn from './CategoryBtn';

export default {
	title: 'CategoryBtn',
	component: CategoryBtn,
};

const CATEGORY_TEXT = '웹 개발';

export function Default() {
	return <CategoryBtn categoryName={CATEGORY_TEXT} />;
}
