import React from 'react';
import styled from 'styled-components';

const CategoryBtnBlock = styled.div`
	width: 232px;
	height: 46px;
	background-color: rgba(0, 0, 0, 0);
	color: #7a7c85;
	border-radius: 12px;
	transition: all 150ms ease;
	display: flex;
	align-items: center;
	cursor: pointer;

	&:hover {
		background-color: #f3f3f3;
		color: #18191b;
	}
`;

const CategoryBtnText = styled.p`
	font-size: 16px;
	font-weight: 500;
	padding: 0 20px;
`;

type CategoryBtnType = {
	categoryName: string;
};

function CategoryBtn({ categoryName }: CategoryBtnType) {
	return (
		<CategoryBtnBlock>
			<CategoryBtnText>{categoryName}</CategoryBtnText>
		</CategoryBtnBlock>
	);
}

export default CategoryBtn;
