import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route>
						<Home />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
