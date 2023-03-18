import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/block/Header';
import Login from './components/pages/Login';
import Main from './components/pages/Main';

// const Login = lazy(() => import('./components/pages/Login'));
// const Main = lazy(() => import('./components/pages/Main'));

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
