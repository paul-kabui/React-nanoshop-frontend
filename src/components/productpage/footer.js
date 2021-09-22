import './product.css'
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <div className="text-end mt-2">
            <Link to="/cart"><button className="btn btn-goCart">Go to cart</button></Link><br/>
            <Link to='/products'><button className="btn btn-dark mt-1">Back to top</button></Link>
        </div>
    )
}

export default Footer