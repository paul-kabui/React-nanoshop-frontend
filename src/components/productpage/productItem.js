import { useContext } from 'react'
import LocalCartContext from '../../store/cart-ctx'

function ProductItem(props){
    const cartCtx = useContext(LocalCartContext)
    const isCartItem = cartCtx.isCartItem(props.productId)
    function cartHandler(){
        if(isCartItem){
            return(
                <div className="alert alert-primary alert-dismissible fade show" role="alert">
                    A simple primary alert with Give it a click if you like.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )
        }else{
            cartCtx.addToCart({
                id : props.productId,
                name : props.productName,
                price : props.price
            })
        }
    }
    
    return(
        <li className="col-md-3">
            <div className="card shadow">
                <div>
                    <img src={props.image} className="img-fluid" alt={props.productName}/>
                </div>
                <hr/>
                <div className="card-body">
                    <div>
                        <h4 className="text-info text-capitalize">{props.productName}</h4>
                        <p>Kshs: <span style={{"color":"orange"}} className="fw-bold">{props.price}</span></p>        
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary">Details</button>
                        {
                        isCartItem ? <button className="btn btn-sm btn-success"onClick={cartHandler}>
                            Added to cart
                        </button> : <button className="btn btn-sm btn-outline-primary"onClick={cartHandler}>
                            Add to cart
                        </button>
                        }
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProductItem