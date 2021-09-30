// import { useHistory } from 'react-router'
import {Link} from 'react-router-dom'
import {useContext, useState} from 'react'
import LocalCartContext from '../store/cart-ctx'
import CartList from '../components/storeComp/cartList'
import CheckOutHandler from '../components/storeComp/checkOut'

function Cart(){
    const cartCtx = useContext(LocalCartContext)
    const content = cartCtx.cartItems
    const [checkout, setCheckOut] = useState(false)

    var totals = 0
    var productsIds = []
    for(let data in content){
        var price = parseInt(content[data].price)
        var ids = content[data].id
        productsIds.push(ids)
        totals += price
    }

    function checkOutHandler(){
        setCheckOut(true)
        console.log('totals',totals)
    }
    console.log('totals',totals)
    if(checkout){
        return(
            <CheckOutHandler total={totals} ids={productsIds}/>
        )
    }


    if(content.length !== 0){
        return(
            <div className='container-md' style={{'marginTop':'6rem'}}>
                <Link to='/products'>
                    <button className='btn btn-sm btn-outline-dark'>continue Shopping</button>
                </Link>
                <CartList items={cartCtx.cartItems}/>
                <div className='row'>
                    <div className="col-md-6">
                        <div className="border col-md-5 d-flex">
                            <h4 className='p-1 fw-bold'>Totals: {totals}</h4>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <button className='btn btn-goCart' onClick={checkOutHandler}>check out</button>
                    </div>
                </div>
            </div>
        )  
    }else{
        return(
            <div className='text-center' style={{'marginTop':'6rem'}}>
                <h1 style={{'color': 'orange'}}>No item selected</h1>
                <Link to='/products'>
                    <button className="mt-4 btn btn-sm btn-outline-dark">continue shopping</button>
                </Link><br/>
                <Link to='/my Order'>
                    <i className='mt-4'>To track your order go to orders page</i>
                </Link>
            </div>
        )  
    }    
}

export default Cart