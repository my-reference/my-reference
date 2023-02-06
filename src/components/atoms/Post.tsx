import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
	display: flex;
	flex-direction: column;
	transition: all 0.22s ease;
	border-radius: 12px;
	cursor: pointer;

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
	height: 160px;
	border-radius: 12px;
	overflow: hidden;
	transition: all 0.22s ease;
`;

const PostImg = styled.img`
	object-fit: cover;
	object-position: center;
	width: 100%;
	height: 100%;
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

const PostTitleInfo = styled.div`
	display: flex;
	align-items: flex-start;
	align-items: center;
`;

const PostSource = styled.div`
	width: 35px;
	height: 35px;
	border-radius: 12px;
	overflow: hidden;
`;

const PostSourceImg = styled.img`
	object-fit: cover;
	object-position: center;
	width: 100%;
	height: 100%;
`;

const PostTitle = styled.h3`
	font-size: 16px;
	font-weight: 500;
	line-height: 130%;
	color: #18191b;
	word-break: keep-all;
	overflow: hidden;
	margin: 0 0 -5px 11.5px;
	width: calc(100% - 46.5px);
`;

const PostManageIcons = styled.div`
	transition: all 0.22s ease;
	opacity: 0;
	display: flex;
	justify-content: flex-end;
`;

const PostMangeIcon = styled.div`
	margin-left: 10px;
`;

export type PostPropsType = {
	postImg: string;
	postCategory: string;
	postAddDate: string;
	postSource: string;
	postTitle: string;
};

function Post({ postImg, postCategory, postAddDate, postSource, postTitle }: PostPropsType) {
	return (
		<PostWrapper>
			<PostImgWrapper className="post-img">
				<PostImg src={postImg} alt={postTitle} />
			</PostImgWrapper>
			<PostInfo>
				<PostInfoAtom>{postCategory}</PostInfoAtom>
				<PostInfoAtom>{postAddDate}</PostInfoAtom>
			</PostInfo>
			<PostTitleInfo>
				<PostSource>
					<PostSourceImg src={postSource} alt="" />
				</PostSource>
				<PostTitle>{postTitle}</PostTitle>
			</PostTitleInfo>
			<PostManageIcons className="post-icons">
				<PostMangeIcon>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_11_839)">
							<path
								d="M9.99999 17.7917L8.79166 16.6917C4.49999 12.8 1.66666 10.2333 1.66666 7.08333C1.66666 4.51667 3.68332 2.5 6.24999 2.5C7.69999 2.5 9.09166 3.175 9.99999 4.24167C10.9083 3.175 12.3 2.5 13.75 2.5C16.3167 2.5 18.3333 4.51667 18.3333 7.08333C18.3333 10.2333 15.5 12.8 11.2083 16.7L9.99999 17.7917Z"
								fill="#B1B1B1"
							/>
						</g>
						<defs>
							<clipPath id="clip0_11_839">
								<rect width="20" height="20" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</PostMangeIcon>
				<PostMangeIcon>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_11_842)">
							<path
								d="M5.00001 8.33333C4.08334 8.33333 3.33334 9.08333 3.33334 9.99999C3.33334 10.9167 4.08334 11.6667 5.00001 11.6667C5.91668 11.6667 6.66668 10.9167 6.66668 9.99999C6.66668 9.08333 5.91668 8.33333 5.00001 8.33333ZM15 8.33333C14.0833 8.33333 13.3333 9.08333 13.3333 9.99999C13.3333 10.9167 14.0833 11.6667 15 11.6667C15.9167 11.6667 16.6667 10.9167 16.6667 9.99999C16.6667 9.08333 15.9167 8.33333 15 8.33333ZM10 8.33333C9.08334 8.33333 8.33334 9.08333 8.33334 9.99999C8.33334 10.9167 9.08334 11.6667 10 11.6667C10.9167 11.6667 11.6667 10.9167 11.6667 9.99999C11.6667 9.08333 10.9167 8.33333 10 8.33333Z"
								fill="#B1B1B1"
							/>
						</g>
						<defs>
							<clipPath id="clip0_11_842">
								<rect width="20" height="20" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</PostMangeIcon>
			</PostManageIcons>
		</PostWrapper>
	);
}

export default Post;
