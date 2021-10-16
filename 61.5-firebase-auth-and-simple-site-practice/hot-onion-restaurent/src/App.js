import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Signup from './pages/Signup/Signup';
import AuthProvider from './contexts/AuthProvider';
import Login from './pages/Login/Login/Login';

function App() {
	return (
		<div>
			<AuthProvider>
				<Router>
					<Header />

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>

						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
