import {Link} from 'react-router-dom'
import CartItem from "./cartItem";
import CheckOutHandler from './checkout';
import {useState} from 'react'

function CartList(props){
    const recievedData = props.items
    const [checkout, setCheckout] = useState(false)
    
    const priceList = []
    for(var item in recievedData){
        let updatedPrice = recievedData[item].calculatedPrice
        let intialPrice = parseInt(recievedData[item].intialPrice)
        if(updatedPrice !== 0){
            priceList.push(updatedPrice)
        }
        else{
            priceList.push(intialPrice)
        }
    }

    var totalPrice = 0
    priceList.map(data => {
        return totalPrice += data
    })

    function CheckOutHandlerfunc(){
        setCheckout(true)
    }

    if(checkout){
        return <CheckOutHandler totalPrice={totalPrice}/>
    }

    return <div className="">
        <table className="table table-striped">
          	<thead>
          		<tr>
          		  	<th scope="col">Name</th>
          		  	<th scope="col">items</th>
          		  	<th scope="col">Price</th>
          		  	<th scope="col">Action</th>
          		</tr>
          	</thead>
          	<tbody>
                {
                    recievedData.map((data) =><CartItem 
					key={data.id}
					id={data.id}
					name={data.name}
					intialPrice={data.intialPrice}
                    updatedPrice = {data.calculatedPrice}
                    userQuantity = {data.userQuanitity}
					noOfItems={data.totalItemsAvailable}
					/>
					)
					
                }
          	</tbody>
        </table>
		<div className='row'>
                    <div className="col-md-6">
                        <div className="border col-md-5 d-flex">
                            <h5 className='p-1 fw-bold'>Totals : <span style={{'color':'orange'}}>(Kshs){totalPrice}</span></h5>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3 d-flex">
                        <button className='btn btn-sm btn-outline-success' onClick={CheckOutHandlerfunc}>check out</button>
                        <Link to='/products'>
                            <button className='btn btn-sm btn-outline-dark'>continue Shopping</button>
                        </Link>
                    </div>
                </div>
    </div>
}

export default CartList