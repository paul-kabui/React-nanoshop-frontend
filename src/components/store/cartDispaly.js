

function CartDisplay(props){
    return(
        <div className="container-md">
            <div className="row">
                <div className="col-md-3">
                    <h4>Product Name</h4>
                </div>
                <div className="col-md-3">
                    <h4>Quantity</h4>
                </div>
                <div className="col-md-3">
                    <h4>Price</h4>
                </div>
                <div className="col-md-3">
                    <h4>Action</h4>
                </div>  
            </div>
           <div className="row border p-3 rounded">
                <div>
                    <div className="col-md-3">
                        <span>{props.name}</span>
                    </div>
                    <div className="col-md-3">
                        <span>{props.quantity}</span>
                    </div>
                    <div className="col-md-3">
                        <span>Kshs: {props.price}</span>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-sm btn-outline-danger">Remove</button>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default CartDisplay