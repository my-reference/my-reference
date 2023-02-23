/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import CategoryBtn from '../atoms/CategoryBtn';
import categorySelect from '../../services/atom';

const CategoryWrapper = styled.div`
	margin: 0;
	@media only screen and (max-width: 1020px) {
		display: none;
	}
`;

const CategoryInner = styled.div`
	padding: 0 30px;
`;

const CategoryBlock = styled.div`
	margin-bottom: 25px;
`;

const CategoryTitle = styled.h3`
	font-size: 18px;
	font-weight: 600;
	color: #18191b;
`;

const CategoryListWrap = styled.ul`
	margin: 0;
	padding: 0;
`;

const CategoryList = styled.li`
	list-style: none;
`;

type CategoryType = {
	favorites: Array<string>;
	categories: Array<string>;
};

function Category({ favorites, categories }: CategoryType) {
	const setCategory = useSetRecoilState(categorySelect);

	const changeCategory = (categoryName: string) => {
		setCategory(categoryName);
	};

	return (
		<CategoryWrapper>
			<CategoryInner>
				<CategoryBlock>
					<CategoryTitle>📌 즐겨찾기</CategoryTitle>
					<CategoryListWrap>
						{favorites.map((favoritesCategoryName, index) => (
							<CategoryList key={index}>
								<CategoryBtn
									categoryName={favoritesCategoryName}
									onClick={() => changeCategory(favoritesCategoryName)}
								/>
							</CategoryList>
						))}
					</CategoryListWrap>
				</CategoryBlock>
				<CategoryBlock>
					<CategoryTitle>📂 카테고리</CategoryTitle>
					<CategoryListWrap>
						{categories.map((categoryName, index) => (
							<CategoryList key={index}>
								<CategoryBtn categoryName={categoryName} onClick={() => changeCategory(categoryName)} />
							</CategoryList>
						))}
					</CategoryListWrap>
				</CategoryBlock>
			</CategoryInner>
		</CategoryWrapper>
	);
}
export default Category;
