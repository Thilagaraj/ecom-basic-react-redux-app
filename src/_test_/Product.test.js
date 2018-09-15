import React from 'react';
import { shallow } from 'enzyme';
import Product from '../Components/Product';

test("component just rendering",()=>{
	const wrapper=shallow(<product/>);
	expect(wrapper).toMatchSnapshot();	
});
test("component rendering with product props",()=>{
	const detls={
    "id": "5b6eb27314c4ed27570b601e",
    "isActive": true,
    "price": "$2,752.35",
    "picture": "http://placehold.it/250x250",
    "title": "Enid Vazquez",
    "category": "apple",
    "description": "dolor eiusmod sint duis culpa non aute enim enim Lorem eu nisi non aliquip exercitation reprehenderit laboris ipsum qui enim nisi elit ullamco qui aliqua veniam adipisicing dolor labore excepteur enim aliqua veniam ipsum id enim do ex nisi proident",
    "tags": [
      "minim",
      "laboris",
      "ipsum",
      "non",
      "dolore",
      "ipsum",
      "duis"
    ]
};
	const wrapper=shallow(<product details={detls}/>);
	expect(wrapper).toMatchSnapshot();	
});