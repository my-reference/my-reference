import React from 'react';
import styled from 'styled-components';
import mockMainData from '../../data/mockMainData';
import Category from '../block/Category';
import Posts from '../block/Posts';

const MainPageStyle = styled.div`
	display: flex;
	padding: 60px 20px;
`;

const mockData = mockMainData;

function Main() {
	return (
		<MainPageStyle>
			<div>
				<Category favorites={mockData.favoritesCategories} categories={mockData.categories} />
			</div>
			<div>
				<Posts categoryName={mockData.CATEGORY_NAME} posts={mockData.posts} />
			</div>
		</MainPageStyle>
	);
}

export default Main;
