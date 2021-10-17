import './order.css'
import {Link} from 'react-router-dom'

function DisplayOrder(props){
    var count = 0
    return(
        <div className='order-display'>
            <div className="col-md-4 ms-auto me-auto border p-4">
                <h1 className='track fw-bold'>my order</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col"> </th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.order.orderedProducts.map((data) =>{
                                count += 1
                                return(
                                    <tr key={count}>
                                        <th scope="row">{count}</th>
                                        <td>{data.Name}</td>
                                        <td>:</td>
                                        <td>{data.quantity}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className='row'>
                    <div className="col-md-6 border-bottom bg-light">
                        <p>Totals: <span className='track'>{props.order.totals}</span></p>
                    </div>
                    <div className='col-md-6 border-bottom'>
                        <p>Status: <span className='text-primary'>{props.order.orderStatus}</span></p>
                    </div>
                </div>
                <div className='btn-group pt-3'>
                    <Link to='/contact us'>
                        <button className='btn btn-sm btn-outline-danger'>If issue send us an email</button>
                    </Link>
                    <button className='btn btn-sm btn-outline-dark' onClick={props.onCancel}>Back</button>
                   
                </div>
            </div>

        </div>
    )
}

export default DisplayOrder