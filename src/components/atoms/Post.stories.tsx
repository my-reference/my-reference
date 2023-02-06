import React from 'react';
import Post from './Post';

export default {
	title: 'Post',
	component: Post,
};

const POST_IMG = 'https://content.surfit.io/thumbs/image/KEkJ5/00l4z/157184310863d0d1c8a4e16.png/cover-center-1x.webp';
const POST_CATEGORY = '웹 개발';
const POST_ADD_DATE = '2023.01.26';
const POST_SOURCE = 'https://api.surfit.io/v1/channel/logo/KEkJ5/1x';
const POST_TITLE = '똑똑하게 브라우저 Polyfill 관리하기';

export function Default() {
	return (
		<Post
			postImg={POST_IMG}
			postCategory={POST_CATEGORY}
			postAddDate={POST_ADD_DATE}
			postSource={POST_SOURCE}
			postTitle={POST_TITLE}
		/>
	);
}
