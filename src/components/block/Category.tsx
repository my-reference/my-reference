/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import CategoryBtn from '../atoms/CategoryBtn';
import { categorySelect } from '../../services/atom';

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

const CategoryAddBtnText = styled.p`
	transition: all 200ms ease;
	font-size: 16px;
	font-weight: 500;
	padding: 0 20px;
`;

const CategoryAddForm = styled.div`
	margin-top: 20px;
	width: 232px;
	height: 46px;
	background-color: #fff;
	border-radius: 12px;
	transition: all 200ms ease;

	box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
	display: none;
	opacity: 0;
`;

const CategoryAddFormInner = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	> input {
		width: 165px;
		outline: none;
		border: none;
		font-family: 'Pretendard';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		color: #18191b;
		margin-left: 24px;
	}
	> input::placeholder {
		color: #aeb1bf;
	}
`;

const CloseBtn = styled.div`
	margin-right: 10px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

const CheckBtn = styled.div`
	transition: all 200ms ease;
	cursor: pointer;
	display: flex;
	align-items: center;
	margin-right: 10px;
	margin-left: 10px;
	display: none;
	opacity: 0;
`;

type CategoryType = {
	favorites: Array<string>;
	categories: Array<string>;
};

function Category({ favorites, categories }: CategoryType) {
	const setCategory = useSetRecoilState(categorySelect);
	const [newCategory, setNewCategory] = useState('');

	const changeCategory = (categoryName: string) => {
		setCategory(categoryName);
	};

	const changeCategoryText = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewCategory(e.target.value);
	};

	useEffect(() => {
		const checkBtn = document.getElementById('check-btn');
		const categoryInput = document.getElementById('category-input');
		if (checkBtn && categoryInput) {
			if (newCategory.length >= 2) {
				checkBtn.style.display = 'block';
				categoryInput.style.width = '134px';
				setTimeout(() => {
					checkBtn.style.opacity = '1';
				}, 101);
			} else {
				checkBtn.style.opacity = '0';
				setTimeout(() => {
					checkBtn.style.display = 'none';
					categoryInput.style.width = '165px';
				}, 101);
			}
		}
	}, [newCategory]);

	const showCategoryAddForm = () => {
		const categoryAddBtn = document.getElementById('category-add-btn');
		const categoryAddForm = document.getElementById('category-add-form');
		if (categoryAddForm && categoryAddBtn) {
			categoryAddForm.style.display = 'block';
			categoryAddBtn.style.opacity = '0';
			setTimeout(() => {
				categoryAddBtn.style.display = 'none';
			}, 51);
			setTimeout(() => {
				categoryAddForm.style.opacity = '1';
			}, 101);
		}
	};

	const closeCategoryForm = () => {
		const categoryAddBtn = document.getElementById('category-add-btn');
		const categoryAddForm = document.getElementById('category-add-form');
		if (categoryAddForm && categoryAddBtn) {
			categoryAddForm.style.opacity = '0';
			setTimeout(() => {
				categoryAddBtn.style.display = 'block';
				categoryAddForm.style.display = 'none';
			}, 101);
			setTimeout(() => {
				categoryAddBtn.style.opacity = '1';
			}, 201);
		}
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
						<CategoryList>
							<CategoryAddBtnWrap id="category-add-btn" onClick={showCategoryAddForm}>
								<CategoryAddBtnBlock>
									<CategoryAddBtnText>+ 카테고리 추가하기</CategoryAddBtnText>
								</CategoryAddBtnBlock>
							</CategoryAddBtnWrap>

							<CategoryAddForm id="category-add-form">
								<CategoryAddFormInner>
									<input
										type="text"
										id="category-input"
										onChange={(e) => changeCategoryText(e)}
										placeholder="카테고리를 입력하세요."
									/>
									<CheckBtn id="check-btn">
										<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_175_543)">
												<path
													d="M7.49999 13.475L4.02499 9.99999L2.84166 11.175L7.49999 15.8333L17.5 5.83333L16.325 4.65833L7.49999 13.475Z"
													fill="#B1B1B1"
												/>
											</g>
											<defs>
												<clipPath id="clip0_175_543">
													<rect width="20" height="20" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</CheckBtn>
									<CloseBtn onClick={closeCategoryForm}>
										<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_170_517)">
												<path
													d="M15.8333 5.34166L14.6583 4.16666L9.99999 8.82499L5.34166 4.16666L4.16666 5.34166L8.82499 9.99999L4.16666 14.6583L5.34166 15.8333L9.99999 11.175L14.6583 15.8333L15.8333 14.6583L11.175 9.99999L15.8333 5.34166Z"
													fill="#B1B1B1"
												/>
											</g>
											<defs>
												<clipPath id="clip0_170_517">
													<rect width="20" height="20" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</CloseBtn>
								</CategoryAddFormInner>
							</CategoryAddForm>
						</CategoryList>
					</CategoryListWrap>
				</CategoryBlock>
			</CategoryInner>
		</CategoryWrapper>
	);
}
export default Category;
