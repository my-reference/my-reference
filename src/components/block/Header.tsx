import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrap = styled.header`
	background-color: #1a1b1e;
	width: 100%;
	height: 56px;
	transition: all 500ms ease;
`;

const HeaderInner = styled.div`
	padding: 0 30px;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const HeaderLeft = styled.div`
	height: 100%;
`;

const LogoLink = styled(Link)`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
`;

const Logo = styled.img`
	height: 40%;
`;

const LogoText = styled.h1`
	color: #f3f3f3;
	margin-left: 10px;
	font-size: 16px;
`;

const HeaderRight = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	> div {
		font-family: 'Pretendard';
		font-weight: 600;
		font-size: 15px;
		color: #fff;
		> p {
			cursor: pointer;
		}
	}
`;

function Header() {
	return (
		<HeaderWrap>
			<HeaderInner>
				<HeaderLeft>
					<LogoLink to="/">
						<Logo src={`${process.env.PUBLIC_URL}/logo512.png`} alt="logo" />
						<LogoText>my-reference</LogoText>
					</LogoLink>
				</HeaderLeft>
				<HeaderRight>
					<div>
						<p>로그인</p>
					</div>
				</HeaderRight>
			</HeaderInner>
		</HeaderWrap>
	);
}

export default Header;
