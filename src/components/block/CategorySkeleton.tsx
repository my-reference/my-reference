/* eslint-disable react/no-array-index-key */
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';
// import CategoryBtn from '../atoms/CategoryBtn';

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
	margin-bottom: 5px;
`;

const CategoryAddBtnWrap = styled.div`
	transition: all 200ms ease;
	display: block;
	opacity: 1;
`;

const CategoryAddBtnBlock = styled.div`
	margin-top: 20px;
	width: 232px;
	height: 46px;
	background-color: rgba(0, 0, 0, 0);
	border-radius: 12px;
	transition: all 200ms ease;
	display: flex;
	align-items: center;

	cursor: pointer;
	color: #7a7c85;
	&:hover {
		background-color: #f3f3f3;
		color: #18191b;
		> p {
			margin-left: 3px;
		}
	}
`;

// const CategoryAddBtnText = styled.p`
// 	transition: all 200ms ease;
// 	font-size: 16px;
// 	font-weight: 500;
// 	padding: 0 20px;
// `;

// const CategoryAddForm = styled.div`
// 	margin-top: 20px;
// 	width: 232px;
// 	height: 46px;
// 	background-color: #fff;
// 	border-radius: 12px;
// 	transition: all 200ms ease;

// 	box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
// 	display: none;
// 	opacity: 0;
// `;

// const CategoryAddFormInner = styled.div`
// 	height: 100%;
// 	display: flex;
// 	align-items: center;
// 	flex-direction: row;
// 	justify-content: space-between;
// 	> input {
// 		width: 165px;
// 		outline: none;
// 		border: none;
// 		font-family: 'Pretendard';
// 		font-style: normal;
// 		font-weight: 500;
// 		font-size: 16px;
// 		line-height: 19px;
// 		color: #18191b;
// 		margin-left: 24px;
// 	}
// 	> input::placeholder {
// 		color: #aeb1bf;
// 	}
// `;

// const CloseBtn = styled.div`
// 	margin-right: 10px;
// 	display: flex;
// 	align-items: center;
// 	cursor: pointer;
// `;

// const CheckBtn = styled.div`
// 	transition: all 200ms ease;
// 	cursor: pointer;
// 	display: flex;
// 	align-items: center;
// 	margin-right: 10px;
// 	margin-left: 10px;
// 	display: none;
// 	opacity: 0;
// `;

function Category() {
	return (
		<CategoryWrapper>
			<CategoryInner>
				<CategoryBlock>
					<CategoryTitle>📌 즐겨찾기</CategoryTitle>
					<CategoryListWrap>
						<CategoryList>
							<Skeleton height={46} borderRadius={12} />
							<Skeleton height={46} borderRadius={12} />
							<Skeleton height={46} borderRadius={12} />
						</CategoryList>
					</CategoryListWrap>
				</CategoryBlock>
				<CategoryBlock>
					<CategoryTitle>📂 카테고리</CategoryTitle>
					<CategoryListWrap>
						<CategoryList>
							<Skeleton height={46} borderRadius={12} />
							<Skeleton height={46} borderRadius={12} />
							<Skeleton height={46} borderRadius={12} />
						</CategoryList>
						<CategoryList>
							<CategoryAddBtnWrap id="category-add-btn">
								<CategoryAddBtnBlock>
									<Skeleton height={46} width={232} borderRadius={12} />
								</CategoryAddBtnBlock>
							</CategoryAddBtnWrap>
						</CategoryList>
					</CategoryListWrap>
				</CategoryBlock>
			</CategoryInner>
		</CategoryWrapper>
	);
}
export default Category;
