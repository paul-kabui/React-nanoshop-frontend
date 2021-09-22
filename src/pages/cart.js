import CartDisplay from "../components/store/cartDispaly"
import {Link} from 'react-router-dom'

function Cart(){
    
    var cartItems = localStorage.getItem('items')
    var items = JSON.parse(cartItems)
    console.log(cartItems)
    if(cartItems === null){
        return(
            <div className="text-center" style={{"marginTop":"5rem"}}>
                <h1 className="text-center fw-bold" style={{'color':'orange'}}>No item selected</h1>
                <Link to="/products">
                    <button className="btn btn-sm btn-outline-dark">Go back to products</button>
                </Link>
            </div>
        )
    }else{
        return(
            <div style={{"marginTop":"5rem"}}>
                <div className="container-md">
                    <Link to="/products">
                        <button className="btn btn-sm btn-outline-dark">Continue Shopping</button>
                    </Link>
                    <CartDisplay name={items.name} quantity={items.quantity} price={items.price}/>
                    <button className="btn btn-sm btn-outline-primary">Checkout</button>
                </div>
            </div>
        )
    }    
}

export default Cart