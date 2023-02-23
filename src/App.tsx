import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/block/Header';
import Main from './components/pages/Main';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/*" element={<Main />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
