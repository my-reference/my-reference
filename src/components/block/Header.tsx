import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.div`
	background-color: #1a1b1e;
	width: 100%;
	height: 45px;
`;

const HeaderInner = styled.div`
	padding: 0 30px;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

const HeaderRight = styled.div`
	height: 100%;
`;

const Logo = styled.img`
	height: 100%;
`;

const HeaderLeft = styled.div`
	height: 100%;
`;

function Header() {
	return (
		<HeaderWrap>
			<HeaderInner>
				<HeaderRight>
					<Logo
						src="https://s3-alpha-sig.figma.com/img/1ac0/78f7/6da7663c04b7f927bc22ae67d7a4aa1b?Expires=1676851200&Signature=mKj5zO4hcz7V4UhuonlRKOC41WQgRxswtVmSQP4cQAIGv2I7rzuzT3OOkEjtfVAjLr9f9lZd1ZaCPTl310HjtNI5WaUJ-hNre-vOfK7AKY~fWLIiG6WUJmBk5dbRHf9x7BQcoAvgDPOtO8uED2LbQBehRiTZiOiREn9OtlLFNQcdazfl-~RgrlrU3lXj1StsXAruZA0laOFclFULeQ8qBw-Oo2WnYkSLB091RKwa3YrruYjjb2X1NjUNS0U9yk7W~uw4MHHB50vyk99WrTMmxJwUzMx1hxJLhmu4QbIt0GQfmGWtj1nTQQWjqjkDy5Xg8UjdNFH44gOtMnGBOYETLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						alt="logo"
					/>
				</HeaderRight>
				<HeaderLeft>유저이미지들어갈예정</HeaderLeft>
			</HeaderInner>
		</HeaderWrap>
	);
}

export default Header;
