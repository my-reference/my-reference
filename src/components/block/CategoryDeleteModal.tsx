import React from 'react';
import styled from 'styled-components';
import { useMutation, useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categorySelect, categoryDeleteModalSelect } from '../../services/atom';
import customAxios from '../../utils/customAxios';
import { closeModal } from '../../utils/modalHandler';

const BackgroundModal = styled.div`
	position: fixed;
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: all 500ms ease;
`;

const ModalWrapper = styled.div`
	width: 420px;
	height: 100px;
	background-color: #f3f3f3;
	border-radius: 12px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));
	transition: all 500ms ease;
	transform: translateY(20px);
	opacity: 0;
`;

const CloseBtn = styled.div`
	position: absolute;
	right: 10px;
	top: 10px;
	cursor: pointer;
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin: 11px 15px 0 15px;
	width: calc(100% - 30px);
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #1a1b1e;
`;

const AddButton = styled.button`
	width: 80px;
	height: 30px;
	background: #ff2d2d;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
	border-radius: 6px;
	border: none;
	outline: none;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	margin-bottom: 12px;
	cursor: pointer;
	transition: all 200ms ease;

	&:hover {
		transform: translateY(2px);
	}
`;

export default function CategoryDeleteModal() {
	const category = useRecoilValue(categorySelect);
	const setCategoryDeleteModal = useSetRecoilState(categoryDeleteModalSelect);

	const { refetch } = useQuery('categories', async () => {
		// eslint-disable-next-line @typescript-eslint/no-shadow
		const categories = await customAxios.get('/v1/category/list', {
			withCredentials: true,
			headers: {
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		return categories.data;
	});

	const DeleteCategoryQuery = useMutation(async (categoryId: number) => {
		await customAxios.post(
			'/v1/category/delete',
			{
				categoryId,
			},
			{
				withCredentials: true,
				headers: {
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		await refetch();
	});
	return (
		<BackgroundModal id="category-delete-modal">
			<ModalWrapper id="category-delete-modal-inner">
				<CloseBtn onClick={() => closeModal(setCategoryDeleteModal, 'category-delete')}>
					<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_177_700)">
							<path
								d="M20.5834 6.94417L19.0559 5.41667L13.0001 11.4725L6.94425 5.41667L5.41675 6.94417L11.4726 13L5.41675 19.0558L6.94425 20.5833L13.0001 14.5275L19.0559 20.5833L20.5834 19.0558L14.5276 13L20.5834 6.94417Z"
								fill="#B1B1B1"
							/>
						</g>
						<defs>
							<clipPath id="clip0_177_700">
								<rect width="26" height="26" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</CloseBtn>
				<InputWrapper>
					<p>&quot;{category.categoryName}&quot; 카테고리를 정말 삭제하실거에요? </p>
				</InputWrapper>
				<AddButton type="button" onClick={() => DeleteCategoryQuery.mutate(category.categoryId)}>
					삭제하기
				</AddButton>
			</ModalWrapper>
		</BackgroundModal>
	);
}
