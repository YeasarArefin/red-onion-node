import './App.css';
import Foods from './components/Foods';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Choseus from './components/Choseus';
import Footer from './components/Footer';
import Order from './components/Order';
import Checkout from './components/Checkout';
import AuthProvider from './context/AuthProvider';
import OrderProvider from './context/OrderProvider';
import PrivateRoute from './components/PrivateRoute';
import AddService from './components/AddService';
import ManageMeals from './components/ManageMeals';

function App() {

	return (

		<>
			<Router>

				<AuthProvider>

					<OrderProvider>

						<Nav />

						<Switch>

							<Route exact path="/">
								<Home />
								<Foods />
								<Choseus />
								<Footer />
							</Route>

							<Route exact path="/login">
								<Login />
							</Route>

							<Route exact path="/order/:id">
								<Order />
							</Route>

							<PrivateRoute exact path="/checkout">
								<Checkout />
							</PrivateRoute>

							<Route exact path="/addmeals">
								<AddService />
							</Route>

							<Route exact path="/manage">
								<ManageMeals />
							</Route>

							<Route exact path="*">
								<NotFound />
							</Route>

						</Switch>

					</OrderProvider>

				</AuthProvider>

			</Router>
		</>
	);
}

export default App;
