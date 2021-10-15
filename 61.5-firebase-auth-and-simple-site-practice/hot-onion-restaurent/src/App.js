import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Signup from './pages/Signup/Signup';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route>
						<Home />
					</Route>
					<Route path="signup">
						<Signup />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
