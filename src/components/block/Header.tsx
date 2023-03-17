import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

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

const LogoLink = styled.div`
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

const LoginStatus = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	> p {
		color: #fff;
		font-family: 'Pretendard';
		font-weight: 600;
		font-size: 17px;
		&:first-of-type {
			margin-right: 4px;
		}
	}
	> a {
		text-decoration: none;
		color: #fff;
		font-family: 'Pretendard';
		font-weight: 600;
		font-size: 17px;
		transition: all 0.2s ease;
		&:hover {
			color: #3fa9fa;
		}
	}
`;

const LogoutBtn = styled.button`
	cursor: pointer;
	margin-left: 4px;
	background: none;
	text-decoration: none;
	color: #fff;
	font-family: 'Pretendard';
	font-weight: 600;
	font-size: 17px;
	border: none;
`;

const LoginBtn = styled(Link)`
	color: #fff;
	font-family: 'Pretendard';
	font-weight: 600;
	font-size: 17px;
	text-decoration: none;
`;

function Header() {
	const navigate = useNavigate();

	const logout = () => {
		localStorage.clear();
		navigate('/login');
	};

	return (
		<HeaderWrap>
			<HeaderInner>
				<HeaderLeft>
					<LogoLink>
						<Logo src={`${process.env.PUBLIC_URL}/logo512.png`} alt="logo" />
						<LogoText>my-reference</LogoText>
					</LogoLink>
				</HeaderLeft>
				<HeaderRight>
					<div>
						{localStorage.getItem('userData') ? (
							<LoginStatus>
								<p>안녕하세요, </p>
								<Link to="/me">{JSON.parse(localStorage.getItem('userData')!).userNickname}</Link>
								<p>님!</p>

								<LogoutBtn type="button" onClick={logout}>
									로그아웃
								</LogoutBtn>
							</LoginStatus>
						) : (
							<LoginBtn to="/login">로그인</LoginBtn>
						)}
					</div>
				</HeaderRight>
			</HeaderInner>
		</HeaderWrap>
	);
}

export default Header;
