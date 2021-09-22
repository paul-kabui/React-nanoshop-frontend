
function ProductItem(props){
    console.log(props)
    function cartHandler(){
        if(typeof(Storage) !== 'undefined'){
            let item = {
                "name" : props.productName,
                'id' : props.id,
                'price' : props.price,
                'quantity' : props.quantity
               
            }
            localStorage.setItem('items', JSON.stringify(item))
        }else{
            alert("Your browser is not compatible with this cart functionality")
        }
    }
    return(
        <li className="col-md-3">
            <div className="card">
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
                        <button className="btn btn-sm btn-outline-primary" onClick={cartHandler}>Add to cart</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProductItem