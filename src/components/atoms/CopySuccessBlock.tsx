import React from 'react';
import styled from 'styled-components';

const BubbleBox = styled.div`
	display: none;
	opacity: 0;
	position: absolute;
	width: 262px;
	height: 54px;
	background: #f7f7f7;
	border-radius: 12px;
	filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));
	left: 50%;
	transform: translateX(-50%);
	top: 40px;
	&:before {
		border-top: 0px solid transparent;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 15px solid #f7f7f7;
		content: '';
		position: absolute;
		top: -15px;
		left: 121px;
	}
`;

const BubbleInner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CopySuccessText = styled.p`
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #b1b1b1;
`;

export default function CopySuccessBlock() {
	return (
		<BubbleBox id="copyBlock">
			<BubbleInner>
				<CopySuccessText>게시글의 주소가 클립보드에 복사되었어요.</CopySuccessText>
			</BubbleInner>
		</BubbleBox>
	);
}
