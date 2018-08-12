const initialState={
	cart:[]	
}
const reducer=(state=initialState,action)=>{
	switch(action.type){
		case 'ADD_TO_CART': 
			return {...state,cart:[...state.cart,action.payload]};
		case 'REMOVE_FROM_CART': 		
			let newStateCart=state.cart.filter(obj=>(obj.id!==action.payload));			
			return {...state,cart:newStateCart};
		default:
			return state;
	}
	
	
}
export default reducer;