import React from 'react';
import Posts from './Posts';

export default {
	title: 'Posts',
	component: Posts,
};

const posts = [
	{
		postCategory: '웹 개발',
		postAddDate: '2023.01.27',
		postLink: 'https://api.surfit.io/v1/channel/logo/KyNP3/1x',
	},
];

export function Default() {
	return <Posts posts={posts} />;
}
