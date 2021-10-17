import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Signup from './pages/Signup/Signup';
import AuthProvider from './contexts/AuthProvider';
import Login from './pages/Login/Login/Login';
import AllFoods from './pages/AllFoods/AllFoods';
import Cart from './pages/Cart/Cart';
import PrivateRoute from '../src/pages/Login/PrivateRoute/PrivateRoute';

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
						<PrivateRoute exact path="/cart">
							<Cart />
						</PrivateRoute>
						<PrivateRoute path="/allfoods">
							<AllFoods />
						</PrivateRoute>

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
