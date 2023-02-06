import React from 'react';
import Posts from './Posts';

export default {
	title: 'Posts',
	component: Posts,
};

const CATEGORY_NAME = '웹 개발';
const posts = [
	{
		postImg: 'https://content.surfit.io/thumbs/image/KyNP3/YAoGV/30661409863d1d16c1eeb5.png/cover-center-1x.webp',
		postCategory: '웹 개발',
		postAddDate: '2023.01.27',
		postSource: 'https://api.surfit.io/v1/channel/logo/KyNP3/1x',
		postTitle: 'SWC 이용해서 React + Webpack 세팅해보기',
	},
	{
		postImg: 'https://content.surfit.io/thumbs/image/KEkJ5/00l4z/157184310863d0d1c8a4e16.png/cover-center-1x.webp',
		postCategory: '웹 개발',
		postAddDate: '2023.01.26',
		postSource: 'https://api.surfit.io/v1/channel/logo/KEkJ5/1x',
		postTitle: '똑똑하게 브라우저 Polyfill 관리하기',
	},
	{
		postImg: 'https://api.surfit.io/v1/category/content-cover/develop/web-dev/1x',
		postCategory: '웹 개발',
		postAddDate: '2023.01.25',
		postSource: 'https://api.surfit.io/v1/channel/logo/3OzdK/1x',
		postTitle: 'Scroll Snap API를 통해 이미지 캐러셀 완성하기',
	},
	{
		postImg: 'https://content.surfit.io/thumbs/image/KRA7w/RvnXJ/82524674263c54a86a53b3.jpg/cover-center-1x.webp',
		postCategory: '웹 개발',
		postAddDate: '2023.01.18',
		postSource: 'https://api.surfit.io/v1/channel/logo/KRA7w/1x',
		postTitle: '검색엔진 가이드를 금융쇼핑 서비스에 SEO로 활용하기',
	},
	{
		postImg: 'https://content.surfit.io/thumbs/image/wnl13/mxr4P/28390304363b78ede0d712.png/cover-center-1x.webp',
		postCategory: '웹 개발',
		postAddDate: '2023.01.10',
		postSource: 'https://api.surfit.io/v1/channel/logo/wnl13/1x',
		postTitle: 'Flutter 패키지로 공통 모듈 리팩토링하기',
	},
	{
		postImg: 'https://content.surfit.io/thumbs/image/KyNP3/YAoGV/30661409863d1d16c1eeb5.png/cover-center-1x.webp',
		postCategory: '웹 개발',
		postAddDate: '2023.01.27',
		postSource: 'https://api.surfit.io/v1/channel/logo/KyNP3/1x',
		postTitle: 'SWC 이용해서 React + Webpack 세팅해보기',
	},
	{
		postImg: 'https://content.surfit.io/thumbs/image/KEkJ5/00l4z/157184310863d0d1c8a4e16.png/cover-center-1x.webp',
		postCategory: '웹 개발',
		postAddDate: '2023.01.26',
		postSource: 'https://api.surfit.io/v1/channel/logo/KEkJ5/1x',
		postTitle: '똑똑하게 브라우저 Polyfill 관리하기',
	},
	{
		postImg: 'https://api.surfit.io/v1/category/content-cover/develop/web-dev/1x',
		postCategory: '웹 개발',
		postAddDate: '2023.01.25',
		postSource: 'https://api.surfit.io/v1/channel/logo/3OzdK/1x',
		postTitle: 'Scroll Snap API를 통해 이미지 캐러셀 완성하기',
	},
	{
		postImg: 'https://content.surfit.io/thumbs/image/KRA7w/RvnXJ/82524674263c54a86a53b3.jpg/cover-center-1x.webp',
		postCategory: '웹 개발',
		postAddDate: '2023.01.18',
		postSource: 'https://api.surfit.io/v1/channel/logo/KRA7w/1x',
		postTitle: '검색엔진 가이드를 금융쇼핑 서비스에 SEO로 활용하기',
	},
	{
		postImg: 'https://content.surfit.io/thumbs/image/wnl13/mxr4P/28390304363b78ede0d712.png/cover-center-1x.webp',
		postCategory: '웹 개발',
		postAddDate: '2023.01.10',
		postSource: 'https://api.surfit.io/v1/channel/logo/wnl13/1x',
		postTitle: 'Flutter 패키지로 공통 모듈 리팩토링하기',
	},
];

export function Default() {
	return <Posts categoryName={CATEGORY_NAME} posts={posts} />;
}
