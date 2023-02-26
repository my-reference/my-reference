import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import MainTitle from '../atoms/MainTitle';
import Post from '../atoms/Post';
import categorySelect from '../../services/atom';
import PostAdd from '../atoms/PostAdd';

const PostsWrapper = styled.div`
	display: grid;
	transition: all 0.22s ease;
	@media only screen and (min-width: 1680px) {
		width: 1376px;
	}
`;

const PostCategoryName = styled.div`
	margin-bottom: 29px;
`;

const PostsLayout = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	transition: all 0.22s ease;
	column-gap: 32px;
	row-gap: 40px;

	@media only screen and (max-width: 1680px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media only screen and (max-width: 1370px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media only screen and (max-width: 1020px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media only screen and (max-width: 727px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const PostAtom = styled.div`
	> div {
		animation: 0.1s ease-in-out loadEffect1;
	}

	@keyframes loadEffect1 {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

type PostsPropsType = {
	posts: Array<{ postCategory: string; postAddDate: string; postLink: string }>;
};

function Posts({ posts }: PostsPropsType) {
	const categoryName = useRecoilValue(categorySelect);

	const postsElement = document.getElementsByClassName('posts')[0] as HTMLElement;
	if (postsElement) {
		postsElement.ondragenter = (e) => {
			e.preventDefault();
			postsElement.style.backgroundColor = '#3e7bff';
		};

		postsElement.ondragleave = (e) => {
			e.preventDefault();
			postsElement.style.backgroundColor = '';
		};

		postsElement.ondragend = (e) => {
			e.preventDefault();
			postsElement.style.backgroundColor = '';
		};

		postsElement.ondrop = (e) => {
			e.preventDefault();
			const data = e.dataTransfer;

			console.log(data);
		};
	}

	return (
		<PostsWrapper className="posts">
			<PostCategoryName>
				<MainTitle title={categoryName} />
			</PostCategoryName>
			<PostsLayout>
				{posts
					.filter((post) => post.postCategory === categoryName)
					.map((post, index) => (
						// eslint-disable-next-line react/no-array-index-key
						<PostAtom key={index}>
							<Post postCategory={post.postCategory} postAddDate={post.postAddDate} postLink={post.postLink} />
						</PostAtom>
					))}
				<PostAtom>
					<PostAdd />
				</PostAtom>
			</PostsLayout>
		</PostsWrapper>
	);
}

export default Posts;
