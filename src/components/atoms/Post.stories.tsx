import React from 'react';
import Post from './Post';

export default {
	title: 'Post',
	component: Post,
};

const POST_CATEGORY = '웹 개발';
const POST_ADD_DATE = '2023.01.26';
const POST_LINK = 'https://api.surfit.io/v1/channel/logo/KEkJ5/1x';

export function Default() {
	return <Post postCategory={POST_CATEGORY} postAddDate={POST_ADD_DATE} postLink={POST_LINK} />;
}
