import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/block/Header';
// lazy -> 필요할 때만 임포트 해주어 렌더링 속도 증가
const Login = lazy(() => import('./components/pages/Login'));
const Main = lazy(() => import('./components/pages/Main'));

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/*" element={<Main />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
