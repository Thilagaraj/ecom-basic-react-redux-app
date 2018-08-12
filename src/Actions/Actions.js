const AddToCart=(product)=>{
	return {
		type:'ADD_TO_CART',
		payload:product
	}
}
const RemoveFromCart=(productid)=>{ 
	return {
		type:'REMOVE_FROM_CART',
		payload:productid
	}
}
export {AddToCart,RemoveFromCart} 