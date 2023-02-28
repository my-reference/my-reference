import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { postAddModalSelect } from '../../services/atom';

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
	width: 320px;
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
	> div {
		display: flex;
		align-items: center;
	}
	> input {
		padding: 0;
		width: 220px;
		margin-left: 6px;
		background-color: #f3f3f3;
		outline: none;
		border: none;

		font-family: 'Pretendard';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;

		color: #1a1b1e;
	}
	> input::placeholder {
		font-family: 'Pretendard';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;

		color: #aeb1bf;
	}
`;

const AddButton = styled.button`
	width: 80px;
	height: 30px;
	background: #1bc47d;
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

export default function PostAddModal() {
	const setPostAddModal = useSetRecoilState(postAddModalSelect);
	const closeModal = () => {
		document.body.classList.remove('fix-scroll');
		document.querySelector('header')?.classList.remove('is-blur');
		document.querySelector('main')?.classList.remove('is-blur');

		document.querySelector('#post-add-modal')?.classList.remove('translateZero');
		document.querySelector('#post-add-modal-inner')?.classList.remove('translateZero');

		setTimeout(() => {
			setPostAddModal(false);
		}, 500);
	};
	return (
		<BackgroundModal id="post-add-modal">
			<ModalWrapper id="post-add-modal-inner">
				<CloseBtn onClick={closeModal}>
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
					<div>
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_177_697)">
								<path
									d="M4.875 15C4.875 12.8625 6.6125 11.125 8.75 11.125H13.75V8.75H8.75C5.3 8.75 2.5 11.55 2.5 15C2.5 18.45 5.3 21.25 8.75 21.25H13.75V18.875H8.75C6.6125 18.875 4.875 17.1375 4.875 15ZM10 16.25H20V13.75H10V16.25ZM21.25 8.75H16.25V11.125H21.25C23.3875 11.125 25.125 12.8625 25.125 15C25.125 17.1375 23.3875 18.875 21.25 18.875H16.25V21.25H21.25C24.7 21.25 27.5 18.45 27.5 15C27.5 11.55 24.7 8.75 21.25 8.75Z"
									fill="#AEB1BF"
								/>
							</g>
							<defs>
								<clipPath id="clip0_177_697">
									<rect width="30" height="30" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<input type="text" placeholder="링크를 입력해주세요." />
				</InputWrapper>
				<AddButton type="button">추가하기</AddButton>
			</ModalWrapper>
		</BackgroundModal>
	);
}
