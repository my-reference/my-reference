import React from 'react';
import Category from './Category';

export default {
	title: 'Category',
	component: Category,
};

// const favoritesCategories = ['웹 개발', 'Git'];
// const categories = ['Java', '빅데이터', '머신러닝'];

export function Default() {
	return <Category />;
}
