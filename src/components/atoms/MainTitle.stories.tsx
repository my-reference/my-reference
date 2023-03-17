import React from 'react';
import MainTitle from './MainTitle';

export default {
	title: 'MainTitle',
	component: MainTitle,
};

const MAIN_TITLE = '웹 개발';

export function Default() {
	return <MainTitle title={MAIN_TITLE} />;
}
