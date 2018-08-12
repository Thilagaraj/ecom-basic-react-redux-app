import React, {Component}from 'react';
import {Row, Col} from 'reactstrap';
import Product from '../Product';
import axios from 'axios';
//import './Footer.css';
class Products extends  Component{  
	constructor(props){
		super(props)
		this.state={'products':[]};
	}
	
	componentWillMount(){
		axios.get('/mock/products.json').then(response=>{ 
			this.setState({'products':response.data});
		});
		
	}
	
	render(){
		return (
		 <Row>
		 {this.state.products.map(product=>
				<Col lg="3" key={product.id}>
					<Product details={product}/>
				</Col>
			)
		 }			
		 </Row>
		)
	}
}

export default Products;