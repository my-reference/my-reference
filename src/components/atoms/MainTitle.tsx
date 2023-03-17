import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { categoryDeleteModalSelect } from '../../services/atom';
import { showModal } from '../../utils/modalHandler';

const MainTitleWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const MainText = styled.h1`
	font-size: 40px;
	font-weight: 600;
	color: #18191b;
	margin: 0;
`;

const MainIcons = styled.div`
	display: flex;
	align-items: center;
	margin-left: 33.5px;
`;

const MainIcon = styled.div`
	margin-right: 10px;
	cursor: pointer;

	.edit:hover {
		path {
			fill: #3956ff;
		}
	}

	.delete:hover {
		path {
			fill: #ff2d2d;
		}
	}
`;

const IconSvg = styled.svg`
	transition: all 0.22s ease;
	&:hover {
		margin-top: -2px;
		//transform: translateY(-2px);
	}

	path {
		fill: #b1b1b1;
	}
`;

type ICategoryObj = {
	categoryName: string;
	categoryId: number;
};

type MainTitlePropsType = {
	category: ICategoryObj;
};

function MainTitle({ category }: MainTitlePropsType) {
	const setCategoryDeleteModal = useSetRecoilState(categoryDeleteModalSelect);

	return (
		<MainTitleWrapper>
			<MainText>{category.categoryName}</MainText>
			<MainIcons>
				<MainIcon>
					<IconSvg
						className="edit"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clipPath="url(#clip0_7_781)">
							<path
								d="M2.5 14.375V17.5H5.625L14.8417 8.28333L11.7167 5.15833L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z"
								fill="black"
							/>
						</g>
						<defs>
							<clipPath id="clip0_7_781">
								<rect width="20" height="20" fill="white" />
							</clipPath>
						</defs>
					</IconSvg>
				</MainIcon>
				<MainIcon>
					<IconSvg
						className="delete"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						onClick={() => showModal(setCategoryDeleteModal, 'category-delete')}
					>
						<g clipPath="url(#clip0_7_784)">
							<path
								d="M4.99999 15.8333C4.99999 16.75 5.74999 17.5 6.66666 17.5H13.3333C14.25 17.5 15 16.75 15 15.8333V5.83333H4.99999V15.8333ZM15.8333 3.33333H12.9167L12.0833 2.5H7.91666L7.08332 3.33333H4.16666V5H15.8333V3.33333Z"
								fill="black"
							/>
						</g>
						<defs>
							<clipPath id="clip0_7_784">
								<rect width="20" height="20" fill="white" />
							</clipPath>
						</defs>
					</IconSvg>
				</MainIcon>
			</MainIcons>
		</MainTitleWrapper>
	);
}

export default MainTitle;
