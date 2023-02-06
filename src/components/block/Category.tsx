import React from 'react';
import styled from 'styled-components';
import CategoryBtn from '../atoms/CategoryBtn';

const CategoryWrapper = styled.div``;

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
	return (
		<CategoryWrapper>
			<CategoryInner>
				<CategoryBlock>
					<CategoryTitle>📌 즐겨찾기</CategoryTitle>
					<CategoryListWrap>
						{favorites.map((favoritesCategoryName) => (
							<CategoryList>
								<CategoryBtn categoryName={favoritesCategoryName} />
							</CategoryList>
						))}
					</CategoryListWrap>
				</CategoryBlock>
				<CategoryBlock>
					<CategoryTitle>📂 카테고리</CategoryTitle>
					<CategoryListWrap>
						{categories.map((categoryName) => (
							<CategoryList>
								<CategoryBtn categoryName={categoryName} />
							</CategoryList>
						))}
					</CategoryListWrap>
				</CategoryBlock>
			</CategoryInner>
		</CategoryWrapper>
	);
}
export default Category;
