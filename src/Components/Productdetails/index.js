import React, {Component}from 'react';
import {Row, Col} from 'reactstrap';
import axios from 'axios';
class Productdetails extends  Component{  
	constructor(props){
		super(props)
		this.state={'product':{}};
	}
	
	componentWillMount(){
		axios.get('/mock/product.json').then(response=>{ 
			this.setState({'product':response.data});
		});
		
	}
	
	render(){
		return (
		 <Row>		 
			<Col lg="3">
				<img src={this.state.product.picture} alt={this.state.product.title} />
			</Col>		
			<Col lg="9">
				<p>{this.props.match.params.productid}{this.state.product.description}</p>
			</Col>
		 </Row>
		)
	}
}

export default Productdetails;