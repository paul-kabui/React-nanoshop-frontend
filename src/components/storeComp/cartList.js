import CartItem from "./cartItem";

function CartList(props){
    return <div className="p-sm-2">
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
                    props.items.map((data) => <CartItem key={data.id} id={data.id} name={data.name} price={data.price} />)
                }
          	</tbody>
        </table>
    </div>
}

export default CartList