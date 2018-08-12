import React, { Component } from 'react';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';
import Productdetails from './Components/Productdetails';
import Cart from './Components/Cart';
import { Switch,Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
     <Container>
		<Header/>
		<Switch>
		  <Route exact path={'/'} component={Products}/>		 
		  <Route path={'/details/:productid'} component={Productdetails}/>
		  <Route path={'/cart'} component={Cart}/>
		</Switch>		
		<Footer/>
	 </Container>
    );
  }
}

export default App;
