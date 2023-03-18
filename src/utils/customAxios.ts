import axios from 'axios';

const customAxios = axios.create({
	baseURL: 'http://localhost:8080',
});

customAxios.interceptors.request.use(
	(config) => {
		const accessToken = localStorage.getItem('accessToken');

		if (accessToken) {
			// eslint-disable-next-line no-param-reassign
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

customAxios.interceptors.response.use(
	(res) => res,
	async (error) => {
		const {
			config,
			response: { status },
		} = error;

		// 인증 에러 발생시
		if (status === 401 || status === 500) {
			const originalRequest = config;
			const refreshToken = localStorage.getItem('refreshToken');

			const { data } = await axios.post(`/v1/token/refresh`, {
				refresh_token: refreshToken,
			});
			const { access_token: newAccessToken, refresh_token: newRefreshToken } = data;

			if (newAccessToken) {
				localStorage.setItem('accessToken', newAccessToken);
				localStorage.setItem('refreshToken', newRefreshToken);
			} else {
				// eslint-disable-next-line no-alert
				alert('로그인 시간이 만료되었습니다.');
				window.location.replace('/login');
			}

			originalRequest.headers.authorization = `Bearer ${newAccessToken}`;

			return axios(originalRequest);
		}

		return Promise.reject(error);
	}
);

export default customAxios;
