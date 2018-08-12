import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './Reducers/Reducer';
import { BrowserRouter } from 'react-router-dom'

const store=createStore(reducer);
ReactDOM.render(
	<Provider store={store}>  
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
, document.getElementById('root'));
registerServiceWorker();   
