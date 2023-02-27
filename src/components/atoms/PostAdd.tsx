/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { postAddModalSelect } from '../../services/atom';

const PostWrapper = styled.div`
	display: flex;
	flex-direction: column;
	transition: all 0.22s ease;
	border-radius: 12px;
	cursor: pointer;
	@media only screen and (min-width: 727px) {
		width: 320px;
	}

	&:hover {
		.post-img {
			box-shadow: 0px 14px 24px hsl(218deg 53% 10% / 12%);
			transform: translateY(-5px);
		}
		.post-icons {
			opacity: 1;
		}
	}
`;

const PostImgWrapper = styled.div`
	height: 200px;
	border-radius: 12px;
	overflow: hidden;
	transition: all 0.22s ease;
`;

const PostInfo = styled.div`
	display: flex;
	width: auto;
	justify-content: flex-end;
`;

const PostInfoAtom = styled.p`
	font-size: 11px;
	font-weight: 400;
	color: #424242;
	margin: 10px 0 10px 10px;
`;

function PostAdd() {
	const setPostAddModal = useSetRecoilState(postAddModalSelect);
	const showModal = () => {
		setPostAddModal(true);
		document.body.classList.add('fix-scroll');
		document.querySelector('header')?.classList.add('is-blur');
		document.querySelector('main')?.classList.add('is-blur');
		setTimeout(() => {
			document.querySelector('#post-add-modal')?.classList.add('translateZero');
			document.querySelector('#post-add-modal-inner')?.classList.add('translateZero');
		}, 10);
	};

	return (
		<PostWrapper onClick={showModal}>
			<PostImgWrapper className="post-img">
				<svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="320" height="200" rx="12" fill="#F3F3F3" />
					<path
						d="M152.812 124.625H166.562V101H190.312V87.125H166.562V63.5H152.812V87.125H129.187V101H152.812V124.625Z"
						fill="#D9D9D9"
					/>
				</svg>
			</PostImgWrapper>
			<PostInfo>
				<PostInfoAtom>포스트 추가하기</PostInfoAtom>
			</PostInfo>
		</PostWrapper>
	);
}

export default PostAdd;
