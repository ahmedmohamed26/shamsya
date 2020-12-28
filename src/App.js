import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Question from './pages/question/question';
import Header from './shared/header/header';
import Container from '@material-ui/core/Container';

function App() {
	return (
		<Router>
			<Header />
			<Container>
				{/* <Redirect to='/home' /> */}
				<Route path='/home' component={Home} />
				<Route path='/question' component={Question} />
			</Container>
		</Router>
	);
}

export default App;
