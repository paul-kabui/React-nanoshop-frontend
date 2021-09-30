import {useContext} from 'react'
import LocalCartContext from '../../store/cart-ctx'

function CartItem(props){
	const cartCtx = useContext(LocalCartContext)

	function removeItemHandler(){
		cartCtx.removeFromCart(props.id)
	}

    return(
        <tr>
          	<th scope="row">{props.name}</th>
          	<td>{props.id}</td>
          	<td>{props.price}</td>
          	<td><button className='btn btn-sm btn-outline-danger' onClick={removeItemHandler}>Remove</button></td>
        </tr>
    )
}

export default CartItem