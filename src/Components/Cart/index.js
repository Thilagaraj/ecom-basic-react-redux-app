import React from 'react';
import {Row, Col,Button} from 'reactstrap';
import {connect} from 'react-redux';
import {RemoveFromCart} from '../../Actions/Actions'; 
const Cart=(props)=> { 
	const {cartProducts} = props;
	const {removeFromCart} = props;
    return (
	<div className="cartContainer">
	<Row className="cartHeader" style={{'marginBottom':'10px'}}>
		<Col lg="2"><strong>Image</strong></Col>
		<Col lg="6"><strong>Title</strong></Col>
		<Col lg="2"><strong>Quantity</strong></Col>
		<Col lg="2"><strong>Action</strong></Col>
	 </Row>	
	 {cartProducts.map(product=>
			 <Row key={product.id} style={{'marginBottom':'10px'}}>
				<Col lg="2">
					<img style={{'width':'100%'}} className="img img-responsive" src={product.picture} alt={product.title}/>
				</Col>
				<Col lg="6">{product.title}</Col>
				<Col lg="2">1</Col>
				<Col lg="2">
					<Button onClick={()=>removeFromCart(product.id)} className="btn btn-danger btn-sm">Remove</Button>
				</Col>
			 </Row>	
				
		)		
	 }
	 </div>
	);	
}
const mapStateToProps=state=>({
	cartProducts:state.cart
})
const mapDispatchToProps=(dispatch)=>({
	removeFromCart:(productid)=>{dispatch(RemoveFromCart(productid))}
})
export default connect(mapStateToProps,mapDispatchToProps)(Cart);