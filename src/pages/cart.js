import {Link} from 'react-router-dom'
import {useContext} from 'react'
import LocalCartContext from '../store/cart-ctx'
import CartList from '../components/storeComp/cartList'

function Cart(props){
    const cartCtx = useContext(LocalCartContext)
    const content = cartCtx.cartItems

    if(content.length !== 0){
        return(
            <div className='container-md' style={{'marginTop':'6rem'}}>
                <CartList items={cartCtx.cartItems}/>
            </div>
        )  
    }else{
        return(
            <div className='text-center' style={{'marginTop':'6rem'}}>
                <h1 style={{'color': 'orange'}}>The cart is empty</h1>
                <Link to='/products'>
                    <button className="mt-4 btn btn-sm btn-outline-dark">continue shopping</button>
                </Link>
                <Link to='/my Order'>
                    <p className='mt-4'>Track your order</p>
                </Link>
            </div>
        )  
    }    
}

export default Cart