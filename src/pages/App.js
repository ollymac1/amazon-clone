import React from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import SubHeader from '../components/SubHeader';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<SubHeader />
				<Switch>
					<Route path='/checkout'>
						<Checkout />
					</Route>

					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
