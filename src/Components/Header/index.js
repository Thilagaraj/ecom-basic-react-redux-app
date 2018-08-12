import React from 'react';
import {Row, Col} from 'reactstrap';
import Cartbutton from '../Cartbutton';
import './Header.css';
const Header=()=> {  
    return (
     <Row>
		<Col lg="6">
			<img className="logo" src={'/images/logo.png'} alt="logo"/>
		</Col>
		<Col lg="6"><Cartbutton/></Col>
	 </Row>
    );
}

export default Header;