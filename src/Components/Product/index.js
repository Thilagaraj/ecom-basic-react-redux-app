import React from 'react';
import {connect} from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {AddToCart} from '../../Actions/Actions';
class Product extends React.Component { 
	constructor(props){
		super(props);
		this.handleCartClick=this.handleCartClick.bind(this);
	}
	
	handleCartClick(event,product){
		//this.props.dispatch({type:'ADD_TO_CART',payload:product});	
		this.props.addToCart(product);
	}
	
	render(){
		let product=this.props.details;
		return (
			 <div>
			  <Card>
				<CardImg top width="100%" src={product.picture} alt="Card image cap" />
				<CardBody>
				  <CardTitle><Link to={`/details/${product.id}`}>{product.title}</Link></CardTitle>
				  <CardSubtitle>{product.category}</CardSubtitle>
				  <CardText>{product.description.slice(0,100)}</CardText>
				  <Button onClick={(e)=>this.handleCartClick(e,product)}>Add to cart</Button>
				</CardBody>
			  </Card>
		</div>
		);
	}
	
}
const mapDispatchToProps=(dispatch)=>{
	return {
		addToCart:(product)=>{dispatch(AddToCart(product))}
	}
}
export default connect(null,mapDispatchToProps)(Product);