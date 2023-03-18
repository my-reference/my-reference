import React, { useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ILoginData, IRegisterData } from '../../abstracts/type';
import customAxios from '../../utils/customAxios';

const LoginPage = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
`;

const LeftBackground = styled.div`
	width: 50%;
	height: calc(100vh - 56px);
	background-size: cover;
	background-image: url('${process.env.PUBLIC_URL}/GradientBackground2.png');
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
`;

const LeftLogo = styled.div`
	width: 385px;
	border-bottom: 2px solid #fff;
	display: flex;
	flex-direction: row;
	padding-bottom: 16.97px;
`;

const LeftBackgroundText = styled.div`
	> h1 {
		font-family: 'Pretendard';
		font-style: normal;
		font-weight: 800;
		font-size: 40px;
		line-height: 140%;
		color: #fffcfc;
	}
	margin-top: 26px;
`;

const LeftBlock = styled.div`
	display: flex;
	flex-direction: column;
`;

const LogoText = styled.h1`
	color: #f3f3f3;
	margin-left: 10px;
	font-size: 16px;
`;

const Logo = styled.img`
	height: 23.05px;
	width: 23.05px;
`;

const LoginBlock = styled.div`
	width: 100vw;
	height: calc(100vh - 56px);
	display: flex;
	flex-direction: row;
	overflow: hidden;
	position: absolute;
	background-color: #fff;
	left: 50%;
	transition: all 0.4s ease-out;
	z-index: 99;
`;

const LoginComp = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const RegisterComp = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const LoginTitle = styled.h1`
	background-image: url('${process.env.PUBLIC_URL}/GradientBackground2.png');
	background-size: 100%;
	background-position: 0 50%;
	background-repeat: no-repeat;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 800;
	font-size: 32px;
	line-height: 38px;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const SNSLoginForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 240px;
	height: 52px;
	flex-direction: row;
	margin: 36px 0 34px 0;
`;

const SNSLoginBtn = styled.div`
	border-radius: 50%;
	background: #ffffff;
	border: 1px solid #d9d9d9;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
	width: 52px;
	height: 52px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	&:not(:nth-of-type(3)) {
		margin-right: 42px;
	}
	&:first-of-type {
		background-color: #fff;
		border: 1px solid #d9d9d9;
	}
	&:nth-of-type(2) {
		background-color: #fddc3f;
	}
	&:nth-of-type(3) {
		background-color: #06bd34;
	}
`;

const UseEmailAccountText = styled.p`
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	color: #d9d9d9;
`;

const Form = styled.div`
	margin: 36px 0;
`;

const InputUserInfo = styled.div`
	width: 300px;
	height: 50px;
	background: #f7f7f7;
	border-radius: 6px;
	display: flex;
	flex-direction: row;
	align-items: center;
	&:not(:last-of-type) {
		margin-bottom: 23px;
	}
`;

const Input = styled.input`
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 19px;
	border: none;
	outline: none;
	background-color: transparent;
	&::placeholder {
		color: #cccccc;
	}
`;

const InputIcon = styled.div`
	margin: 0 10px;
`;

const RememberPassword = styled.p`
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	text-decoration-line: underline;
	color: #d9d9d9;
	cursor: pointer;
	margin-bottom: 36px;
`;

const SubmitButton = styled.button`
	width: 200px;
	height: 50px;
	filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));
	background: #6bc29e;
	border-radius: 6px;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	color: #ffffff;
	border: none;
	margin: 0 0 31px 0;
	cursor: pointer;
`;

const GoToOtherForm = styled.p`
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #cccccc;
	display: flex;
	align-items: center;
	flex-direction: row;
	cursor: pointer;
`;

export default function Login() {
	const loginBlock = useRef<HTMLDivElement>(null);
	const goToLogin = () => {
		if (loginBlock.current) {
			loginBlock.current.style.left = '50%';
		}
	};
	const goToRegister = () => {
		if (loginBlock.current) {
			loginBlock.current.style.left = '0';
		}
	};
	const [loginData, setLoginData] = useState<ILoginData>({
		userEmail: '',
		userPassword: '',
	});

	const [registerData, setRegisterData] = useState<IRegisterData>({
		userEmail: '',
		userNickname: '',
		userPassword: '',
	});

	const navigate = useNavigate();

	const login = useMutation(
		(loginInputData: ILoginData) =>
			customAxios.post('/v1/login', loginInputData, {
				withCredentials: true,
			}),
		{
			onSuccess: (res) => {
				const userData = { userNickname: res.data.userNickname, userEmail: res.data.userEmail };

				localStorage.setItem('accessToken', res.data.access_token);
				localStorage.setItem('refreshToken', res.data.refresh_token);
				localStorage.setItem('userData', JSON.stringify(userData));

				navigate('/');
			},
			onError: () => {
				// eslint-disable-next-line no-alert
				alert('login error');
			},
		}
	);

	const register = useMutation(
		(signUpData: IRegisterData) =>
			customAxios.post('/v1/signup', signUpData, {
				withCredentials: true,
			}),
		{
			onSuccess: () => {
				// eslint-disable-next-line no-alert
				alert('회원가입이 성공적으로 수행되었습니다.');
				goToLogin();
			},
			onError: () => {
				// eslint-disable-next-line no-alert
				alert('login error');
			},
		}
	);

	return (
		<LoginPage>
			<LeftBackground>
				<LeftBlock>
					<LeftLogo>
						<Logo src={`${process.env.PUBLIC_URL}/logo512.png`} alt="logo" />
						<LogoText>my-reference</LogoText>
					</LeftLogo>
					<LeftBackgroundText>
						<h1>전에 참고했던 그 사이트,</h1>
						<h1>이제 까먹지 마세요!</h1>
						<h1>마이레퍼런스와 함께.</h1>
					</LeftBackgroundText>
				</LeftBlock>
			</LeftBackground>
			<LoginBlock ref={loginBlock}>
				<LoginComp>
					<LoginTitle>마이레퍼런스 로그인</LoginTitle>
					<SNSLoginForm>
						<SNSLoginBtn>
							<img src={`${process.env.PUBLIC_URL}Google.png`} alt="" />
						</SNSLoginBtn>
						<SNSLoginBtn>
							<img src={`${process.env.PUBLIC_URL}Kakao.png`} alt="" />
						</SNSLoginBtn>
						<SNSLoginBtn>
							<img src={`${process.env.PUBLIC_URL}Naver.png`} alt="" />
						</SNSLoginBtn>
					</SNSLoginForm>
					<UseEmailAccountText>또는, 이메일 계정을 사용하고 싶다면</UseEmailAccountText>
					<Form>
						<InputUserInfo>
							<InputIcon>
								<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_195_1156)">
										<path
											d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM25 10L15 16.25L5 10V7.5L15 13.75L25 7.5V10Z"
											fill="#CCCCCC"
										/>
									</g>
									<defs>
										<clipPath id="clip0_195_1156">
											<rect width="30" height="30" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</InputIcon>
							<Input
								type="email"
								name=""
								id=""
								placeholder="Email"
								onChange={(e) => setLoginData({ ...loginData, userEmail: e.target.value })}
							/>
						</InputUserInfo>
						<InputUserInfo>
							<InputIcon>
								<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_195_1132)">
										<path
											d="M22.5 10H21.25V7.5C21.25 4.05 18.45 1.25 15 1.25C11.55 1.25 8.75 4.05 8.75 7.5V10H7.5C6.125 10 5 11.125 5 12.5V25C5 26.375 6.125 27.5 7.5 27.5H22.5C23.875 27.5 25 26.375 25 25V12.5C25 11.125 23.875 10 22.5 10ZM15 21.25C13.625 21.25 12.5 20.125 12.5 18.75C12.5 17.375 13.625 16.25 15 16.25C16.375 16.25 17.5 17.375 17.5 18.75C17.5 20.125 16.375 21.25 15 21.25ZM18.875 10H11.125V7.5C11.125 5.3625 12.8625 3.625 15 3.625C17.1375 3.625 18.875 5.3625 18.875 7.5V10Z"
											fill="#CCCCCC"
										/>
									</g>
									<defs>
										<clipPath id="clip0_195_1132">
											<rect width="30" height="30" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</InputIcon>
							<Input
								type="password"
								placeholder="Password"
								onChange={(e) => setLoginData({ ...loginData, userPassword: e.target.value })}
							/>
						</InputUserInfo>
					</Form>
					<RememberPassword>비밀번호가 기억나지 않아요.</RememberPassword>
					<SubmitButton type="button" onClick={() => login.mutate(loginData)}>
						LOGIN
					</SubmitButton>
					<GoToOtherForm onClick={goToRegister}>
						회원가입 하러 가기{' '}
						<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_200_1162)">
								<path
									d="M10.8332 6.5L9.30566 8.0275L14.2673 13L9.30566 17.9725L10.8332 19.5L17.3332 13L10.8332 6.5Z"
									fill="#CCCCCC"
								/>
							</g>
							<defs>
								<clipPath id="clip0_200_1162">
									<rect width="26" height="26" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</GoToOtherForm>
				</LoginComp>
				<RegisterComp>
					<LoginTitle>마이레퍼런스 회원가입</LoginTitle>
					<Form>
						<InputUserInfo>
							<InputIcon>
								<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_195_1156)">
										<path
											d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM25 10L15 16.25L5 10V7.5L15 13.75L25 7.5V10Z"
											fill="#CCCCCC"
										/>
									</g>
									<defs>
										<clipPath id="clip0_195_1156">
											<rect width="30" height="30" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</InputIcon>
							<Input
								type="email"
								name=""
								id=""
								placeholder="Email"
								onChange={(e) => setRegisterData({ ...registerData, userEmail: e.target.value })}
							/>
						</InputUserInfo>
						<InputUserInfo>
							<InputIcon>
								<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_195_1151)">
										<path
											d="M3.75 6.25V23.75C3.75 25.125 4.8625 26.25 6.25 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V6.25C26.25 4.875 25.125 3.75 23.75 3.75H6.25C4.8625 3.75 3.75 4.875 3.75 6.25ZM18.75 11.25C18.75 13.325 17.075 15 15 15C12.925 15 11.25 13.325 11.25 11.25C11.25 9.175 12.925 7.5 15 7.5C17.075 7.5 18.75 9.175 18.75 11.25ZM7.5 21.25C7.5 18.75 12.5 17.375 15 17.375C17.5 17.375 22.5 18.75 22.5 21.25V22.5H7.5V21.25Z"
											fill="#CCCCCC"
										/>
									</g>
									<defs>
										<clipPath id="clip0_195_1151">
											<rect width="30" height="30" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</InputIcon>
							<Input
								type="text"
								name=""
								id=""
								placeholder="Nickname"
								onChange={(e) => setRegisterData({ ...registerData, userNickname: e.target.value })}
							/>
						</InputUserInfo>
						<InputUserInfo>
							<InputIcon>
								<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_195_1132)">
										<path
											d="M22.5 10H21.25V7.5C21.25 4.05 18.45 1.25 15 1.25C11.55 1.25 8.75 4.05 8.75 7.5V10H7.5C6.125 10 5 11.125 5 12.5V25C5 26.375 6.125 27.5 7.5 27.5H22.5C23.875 27.5 25 26.375 25 25V12.5C25 11.125 23.875 10 22.5 10ZM15 21.25C13.625 21.25 12.5 20.125 12.5 18.75C12.5 17.375 13.625 16.25 15 16.25C16.375 16.25 17.5 17.375 17.5 18.75C17.5 20.125 16.375 21.25 15 21.25ZM18.875 10H11.125V7.5C11.125 5.3625 12.8625 3.625 15 3.625C17.1375 3.625 18.875 5.3625 18.875 7.5V10Z"
											fill="#CCCCCC"
										/>
									</g>
									<defs>
										<clipPath id="clip0_195_1132">
											<rect width="30" height="30" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</InputIcon>
							<Input
								type="password"
								name=""
								id=""
								placeholder="Password"
								onChange={(e) => setRegisterData({ ...registerData, userPassword: e.target.value })}
							/>
						</InputUserInfo>
					</Form>
					<SubmitButton type="button" onClick={() => register.mutate(registerData)}>
						REGISTER
					</SubmitButton>
					<GoToOtherForm onClick={goToLogin}>
						<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_200_1166)">
								<path
									d="M16.694 8.0275L15.1665 6.5L8.6665 13L15.1665 19.5L16.694 17.9725L11.7323 13L16.694 8.0275Z"
									fill="#CCCCCC"
								/>
							</g>
							<defs>
								<clipPath id="clip0_200_1166">
									<rect width="26" height="26" fill="white" />
								</clipPath>
							</defs>
						</svg>{' '}
						로그인 하러 가기
					</GoToOtherForm>
				</RegisterComp>
			</LoginBlock>
		</LoginPage>
	);
}
