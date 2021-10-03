import {useContext, useState} from 'react'
import LocalCartContext from '../../store/cart-ctx'

function CartItem(props){
	const cartCtx = useContext(LocalCartContext)
	var [quantity, setQuantity] = useState(props.userQuantity)
	let calculatedPrice = parseInt(props.intialPrice) * parseInt(quantity)
	
	function removeItemHandler(){
		cartCtx.removeFromCart(props.id)
	}
	function incrQuantityHandler(){
		var numberOfItems = quantity + 1
		if(numberOfItems <= props.noOfItems){
			setQuantity(numberOfItems)
		}
		cartCtx.updateCart(props.id,calculatedPrice,quantity)
	}
	function decreQuantityHandler(){
		let numberOfItems = quantity - 1
		if(numberOfItems > 0){
			setQuantity(numberOfItems)
		}
		cartCtx.updateCart(props.id,calculatedPrice,quantity)
	}
		
    return(
        <tr>
          	<th scope="row">{props.name}</th>
          	<td className='d-flex'>
				<button className='btn btn-outline-danger' onClick={decreQuantityHandler}>-</button>
			  	<span className='px-2'>  {props.userQuantity}</span>
				<button className='btn btn-outline-dark' onClick={incrQuantityHandler}>+</button>
			  </td>
          	<td>{props.updatedPrice !== 0 ? props.updatedPrice : props.intialPrice }</td>
          	<td><button className='btn btn-sm btn-outline-danger' onClick={removeItemHandler}>Remove</button></td>
        </tr>
    )
}

export default CartItem