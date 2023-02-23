import React from 'react';
import styled from 'styled-components';
import mockMainData from '../../data/mockMainData';
import Category from '../block/Category';
import Posts from '../block/Posts';

const MainPageStyle = styled.div`
	display: flex;
	padding: 60px 20px;

	@media only screen and (max-width: 1680px) {
		justify-content: center;
	}
`;

const mockData = mockMainData;

function Main() {
	return (
		<MainPageStyle>
			<Category favorites={mockData.favoritesCategories} categories={mockData.categories} />
			<div>
				<Posts posts={mockData.posts} />
			</div>
		</MainPageStyle>
	);
}

export default Main;
