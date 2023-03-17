import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import mockMainData from '../../data/mockMainData';
import Category from '../block/Category';
import Posts from '../block/Posts';
import PostAddModal from '../block/PostAddModal';
import { postAddModalSelect } from '../../services/atom';

const MainPageStyle = styled.main`
	display: flex;
	padding: 60px 20px;
	justify-content: center;
	transition: all 500ms ease;
`;

const mockData = mockMainData;

function Main() {
	const postAddModal = useRecoilValue(postAddModalSelect);
	return (
		<>
			<MainPageStyle>
				<Category favorites={mockData.favoritesCategories} categories={mockData.categories} />
				<div>
					<Posts posts={mockData.posts} />
				</div>
			</MainPageStyle>
			{postAddModal && <PostAddModal />}
		</>
	);
}

export default Main;
