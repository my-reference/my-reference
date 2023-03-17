import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import mockMainData from '../../data/mockMainData';
import Category from '../block/Category';
import Posts from '../block/Posts';
import PostAddModal from '../block/PostAddModal';
import { categorySelect, postAddModalSelect, categoryDeleteModalSelect } from '../../services/atom';
import CategoryDeleteModal from '../block/CategoryDeleteModal';

const MainPageStyle = styled.main`
	display: flex;
	padding: 60px 20px;
	justify-content: center;
	transition: all 500ms ease;
`;

const mockData = mockMainData;

function Main() {
	const postAddModal = useRecoilValue(postAddModalSelect);
	const categoryDeleteModal = useRecoilValue(categoryDeleteModalSelect);
	const navigate = useNavigate();
	const setCategory = useSetRecoilState(categorySelect);

	useEffect(() => {
		const firstCategoryName = { categoryName: mockData.favoritesCategories[0] || '', categoryId: 0 };
		setCategory(firstCategoryName);
		navigate(`/${firstCategoryName.categoryName}`);
	}, []);

	return (
		<>
			<MainPageStyle>
				<Category />
				<div>
					<Posts posts={mockData.posts} />
				</div>
			</MainPageStyle>
			{postAddModal && <PostAddModal />}
			{categoryDeleteModal && <CategoryDeleteModal />}
		</>
	);
}

export default Main;
