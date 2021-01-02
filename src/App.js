import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './shared/header/header';
import Loading from './components/loading/loading';
import Container from '@material-ui/core/Container';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/home/home'));
const Question = lazy(() => import('./pages/question/question'));

function App() {
	return (
		<Router>
			<Header />

			<Suspense fallback={<Loading />}>
				<Container>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/question' component={Question} />
					</Switch>
				</Container>
			</Suspense>
		</Router>
	);
}

export default App;
