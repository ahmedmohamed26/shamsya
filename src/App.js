import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/home';
import Question from './pages/question/question';
import Header from './shared/header/header';

function App() {
	return (
		<Router>
			<Header />
				<Redirect to='/home' />
				<Route path='/home' component={Home} />
				<Route path='/question' component={Question} />
		</Router>
	);
}

export default App;
