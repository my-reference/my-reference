import React from 'react';
import styled from 'styled-components';
import MainTitle from '../atoms/MainTitle';
import Post, { PostPropsType } from '../atoms/Post';

const PostsWrapper = styled.div`
	display: grid;
	transition: all 0.22s ease;
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
`;

const PostAtom = styled.div``;

type PostsPropsType = {
	categoryName: string;
	posts: Array<PostPropsType>;
};

function Posts({ categoryName, posts }: PostsPropsType) {
	return (
		<PostsWrapper>
			<PostCategoryName>
				<MainTitle title={categoryName} />
			</PostCategoryName>
			<PostsLayout>
				{posts.map((post) => (
					<PostAtom>
						<Post
							postImg={post.postImg}
							postCategory={post.postCategory}
							postAddDate={post.postAddDate}
							postSource={post.postSource}
							postTitle={post.postTitle}
						/>
					</PostAtom>
				))}
			</PostsLayout>
		</PostsWrapper>
	);
}

export default Posts;
