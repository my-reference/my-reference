import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const CategoryBtnBlock = styled(NavLink)`
	width: 232px;
	height: 46px;
	background-color: rgba(0, 0, 0, 0);
	color: #7a7c85;
	border-radius: 12px;
	transition: all 200ms ease;
	display: flex;
	align-items: center;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		background-color: #f3f3f3;
		color: #18191b;
		> p {
			margin-left: 3px;
		}
	}

	&.active {
		background-color: #f3f3f3;
		color: #18191b;
	}
`;

const CategoryBtnText = styled.p`
	transition: all 200ms ease;
	font-size: 16px;
	font-weight: 500;
	padding: 0 20px;
`;

type CategoryBtnType = {
	categoryName: string;
	onClick: React.MouseEventHandler<HTMLElement>;
};

function CategoryBtn({ categoryName, onClick }: CategoryBtnType) {
	return (
		<CategoryBtnBlock to={categoryName} onClick={onClick} className={({ isActive }) => (isActive ? 'active' : 'link')}>
			<CategoryBtnText>{categoryName}</CategoryBtnText>
		</CategoryBtnBlock>
	);
}

export default CategoryBtn;
