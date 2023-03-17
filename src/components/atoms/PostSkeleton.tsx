/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const PostWrapper = styled.div`
	display: flex;
	flex-direction: column;
	transition: all 0.22s ease;
	border-radius: 12px;
	cursor: pointer;
	@media only screen and (min-width: 727px) {
		width: 320px;
	}
`;

const PostLink = styled.a`
	text-decoration: none;
`;

const PostImgWrapper = styled.div`
	height: 200px;
	border-radius: 12px;
	overflow: hidden;
	transition: all 0.22s ease;
	border: 0.1px solid #ececec;
`;

const PostInfo = styled.div`
	display: flex;
	width: auto;
	justify-content: flex-end;
	align-items: center;
	margin: 10px 0 10px 10px;
`;

const PostTitleInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const PostSource = styled.div`
	width: 35px;
	height: 35px;
	border-radius: 12px;
	overflow: hidden;
`;

function Post() {
	return (
		<PostWrapper>
			<PostLink>
				<PostImgWrapper className="post-img">
					<Skeleton height={200} borderRadius={12} />
				</PostImgWrapper>
				<PostInfo>
					<Skeleton height={13} width={100} />
				</PostInfo>
				<PostTitleInfo>
					<PostSource>
						<Skeleton height={35} width={35} borderRadius={12} />
					</PostSource>
					<Skeleton height={20} width={200} />
				</PostTitleInfo>
			</PostLink>
		</PostWrapper>
	);
}

export default Post;
