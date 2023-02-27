/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import Cheerio from 'cheerio';
import axios from 'axios';
import PostSkeleton from './PostSkeleton';

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

const PostLink = styled.a`
	text-decoration: none;
`;

const PostImgWrapper = styled.div`
	height: 200px;
	border-radius: 12px;
	overflow: hidden;
	transition: all 0.22s ease;
	border: 0.1px solid #ececec;
	background-color: #fff;
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
	font-weight: 600;
	line-height: 130%;
	color: #18191b;
	word-break: keep-all;
	overflow: hidden;
	margin: 0 0 -5px 11.5px;
	width: calc(100% - 46.5px);

	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2; /* 라인수 */
	-webkit-box-orient: vertical;
	word-wrap: break-word;
`;

const PostManageIcons = styled.div`
	transition: all 0.22s ease;
	opacity: 0;
	display: flex;
	justify-content: flex-end;
	margin-top: 10px;
`;

const PostMangeIcon = styled.div`
	margin-left: 10px;
	transition: all 0.22s ease;
	&:hover {
		margin-top: -2px;
		.heart,
		.delete {
			path {
				fill: #ff2d2d;
			}
		}
		.copy {
			path {
				fill: #18191b;
				stroke: #18191b;
			}
		}
	}
`;

export type PostPropsType = {
	postCategory: string;
	postAddDate: string;
	postLink: string;
};

function Post({ postCategory, postAddDate, postLink }: PostPropsType) {
	const [postTitle, setPostTitle] = useState('');
	const [postSource, setPostSource] = useState('');
	const [postImg, setPostImg] = useState('');

	const [loading, setLoading] = useState(true);

	const getLdJsonObject = ($: any, index = 0): any => {
		const scriptEles = $('script[type ="application/ld+json"]')?.toArray();
		if (!scriptEles?.length) {
			return {};
		}

		return JSON.parse(scriptEles[index].firstChild.data);
	};

	const getHtml = async () => {
		try {
			return await axios.get(`http://192.168.64.2:8080/${postLink}`, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'X-Requested-With': '*',
				},
				maxRedirects: 0,
			});
		} catch (err) {
			return console.error(err);
		}
	};

	const selectData = () =>
		getHtml().then((html: any) => {
			const $ = Cheerio.load(html.data);
			const favicon = postLink.split('/');
			favicon.pop();

			setPostTitle($('title').text() || $('meta[name="title"]').attr('content') || '');

			if ($('meta[property="article:pc_service_home"]').attr('content') === 'https://www.tistory.com') {
				setPostSource(`${favicon.join('/')}/favicon.ico`);
			} else {
				setPostSource(
					$('meta[name="icon"]').attr('content') ||
						`https://www.google.com/s2/favicons?domain=${postLink}&sz=128` ||
						getLdJsonObject(Cheerio.load(html.data))?.publisher.logo.url ||
						''
				);
			}

			setPostImg($('meta[property="og:image"]').attr('content') || postSource || $('img').attr('src') || '');
			setLoading(false);
		});

	useEffect(() => {
		setLoading(true);
		selectData();
	}, []);
	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{loading ? (
				<PostSkeleton />
			) : (
				<PostWrapper>
					<PostLink href={postLink} target="_blank">
						<PostImgWrapper className="post-img">
							{postImg !== '' ? (
								<PostImg src={postImg} alt={postTitle} />
							) : (
								<svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="320" height="200" rx="12" fill="#3E8DFC" />
									<path
										d="M172.214 77.1193H147.786C145.099 77.1193 142.925 79.3582 142.925 82.0947L142.901 121.898L160 114.435L177.099 121.898V82.0947C177.099 79.3582 174.901 77.1193 172.214 77.1193Z"
										fill="white"
									/>
								</svg>
							)}
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
					</PostLink>

					<PostManageIcons className="post-icons">
						<PostMangeIcon>
							<svg
								className="heart"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
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
							<svg
								className="copy"
								width="21"
								height="20"
								viewBox="0 0 21 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0_11_842)">
									<path
										d="M4.73653 2.90316H4.23653V3.40316V12.7253H3.83337V3.40316C3.83337 2.90756 4.24094 2.5 4.73653 2.5H12.6555V2.90316H4.73653ZM15.2602 16.5316H15.7602V16.0316V6.20947V5.70947H15.2602H7.54285H7.04285V6.20947V16.0316V16.5316H7.54285H15.2602ZM7.54285 5.30632H15.2602C15.7558 5.30632 16.1634 5.71388 16.1634 6.20947V16.0316C16.1634 16.5272 15.7558 16.9347 15.2602 16.9347H7.54285C7.04725 16.9347 6.63969 16.5272 6.63969 16.0316V6.20947C6.63969 5.71388 7.04725 5.30632 7.54285 5.30632Z"
										fill="#B1B1B1"
										stroke="#B1B1B1"
									/>
								</g>
								<defs>
									<clipPath id="clip0_11_842">
										<rect width="20" height="20" fill="white" transform="translate(0.333374)" />
									</clipPath>
								</defs>
							</svg>
						</PostMangeIcon>
						<PostMangeIcon>
							<svg
								className="delete"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0_170_377)">
									<path
										d="M3.95 16.2C3.95 17.245 4.805 18.1 5.85 18.1H13.45C14.495 18.1 15.35 17.245 15.35 16.2V4.8H3.95V16.2ZM16.3 1.95H12.975L12.025 1H7.275L6.325 1.95H3V3.85H16.3V1.95Z"
										fill="#B1B1B1"
									/>
								</g>
								<defs>
									<clipPath id="clip0_170_377">
										<rect width="20" height="20" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</PostMangeIcon>
					</PostManageIcons>
				</PostWrapper>
			)}
		</>
	);
}

export default Post;
