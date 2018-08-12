import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';   
class Cartbutton extends React.Component { 	
	render(){		
		return (
			<div>
				<div className="text-right">
					<Link to={'/cart'}><i className="material-icons">shopping_cart</i>{this.props.cart.length}</Link>
				</div>		  
			</div>
		);
	}
	
}
const mapStateToProps=state=>({
	cart:state.cart
})
export default connect(mapStateToProps)(Cartbutton);