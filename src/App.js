import {Route, Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './pages/home'
import Product from './pages/product';
import OrderPage from './pages/order';
import Contact from './pages/contact';
import About from './pages/about';
import Cart from './pages/cart';
import NavBar from './components/navbar/navBar';


function App(){
	console.log(document.cookie)
  	return (
  	  <div>
			<NavBar/>
			<Switch>
				<Route path="/" exact>
					<Home/>
				</Route>
				<Route path="/contact us">
					<Contact/>
				</Route>
				<Route path="/products">
					<Product/>
				</Route>
				<Route path="/my order">
					<OrderPage/>
				</Route>
				<Route path="/Services">
					<About/>
				</Route>
				<Route path="/cart">
					<Cart/>
				</Route>
			</Switch>
  	  </div>
  	);
}

export default App;
